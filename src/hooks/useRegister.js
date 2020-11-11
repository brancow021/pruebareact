import React from 'react'
import { date } from 'yup'
import { clienteAxios } from '../components/axios/axiosConfig'


export const UseRegister = async(data) => {
  return await clienteAxios
    .post('/itemconfig/registrar', {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },

      data: JSON.stringify({
        entidad: data.entidad,
        llave: data.llave,
        detalle: data.detalles
      }),
    },
    )
}
