import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

const EscanerQR = ({ onScanSuccess, onClose }) => {
  const html5QrCodeRef = useRef(null);
  const isScanningRef = useRef(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const qrCodeRegionId = "qr-reader";

    const iniciarEscaner = async () => {
      try {
        const qrElement = document.getElementById(qrCodeRegionId);
        if (qrElement) qrElement.innerHTML = "";

        html5QrCodeRef.current = new Html5Qrcode(qrCodeRegionId);

        await html5QrCodeRef.current.start(
          { facingMode: "environment" },
          config,
          (decodedText) => {
            if (isScanningRef.current) {
              isScanningRef.current = false;
              html5QrCodeRef.current
                .stop()
                .then(() => {
                  setMensaje(`Escaneo exitoso: ${decodedText}`);
                  onScanSuccess(decodedText);
                })
                .catch((err) => console.warn("Error al detener después de escanear:", err));
            }
          },
          (errorMessage) => {
            console.warn("Error escaneo:", errorMessage);
          }
        );

        isScanningRef.current = true;
      } catch (err) {
        console.error("Error iniciando escáner:", err);
      }
    };

    iniciarEscaner();

    return () => {
      const scanner = html5QrCodeRef.current;
      if (scanner && isScanningRef.current) {
        scanner
          .stop()
          .then(() => {
            isScanningRef.current = false;
            scanner.clear();
          })
          .catch((err) => {
            console.warn("No se pudo detener el escáner:", err);
            scanner.clear().catch((err) => console.error("Error limpiando escáner:", err));
          });
      }
    };
  }, [onScanSuccess]);

  return (
    <div className="escaner-popup">
      <button className="cerrar-btn" onClick={onClose}>Cerrar</button>
      <div id="qr-reader" style={{ width: "100%" }} />
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default EscanerQR;
