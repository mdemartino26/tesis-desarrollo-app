import React from 'react'
import Input from '../../components/Input/Input'
import Fondo from '../../components/Fondo/Fondo'

export default function Expediente() {
  return (
    <div>
      <Fondo/>
        <h2>Expediente</h2>
        <Input redirectPath="/menu" />
    </div>
  )
}