import React from 'react'
import { clienteAxios } from '../components/axios/axiosConfig'


export const UseRegister = async(data, update=false) => {
  let URL = ''

  if(!update){
    URL = `/itemconfig/registrar`

    return await clienteAxios
    .post(URL, {
      entidad: data.entidad,
      llave: data.llave,
      detalle: data.detalle
    }
  )

  } else{
    URL = `/itemconfig/editar`

    return await clienteAxios
    .put(URL, {
      entidad: data.entidad,
      llave: data.llave,
      detalle: data.detalle
    }
  )
  }
}
