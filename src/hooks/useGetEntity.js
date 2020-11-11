import React, { useEffect, useState } from 'react'
import { clienteAxios } from '../components/axios/axiosConfig'

export const useGetEntity = () => {
  const [entitys, setEntitys] = useState([])

  useEffect(() => {
    const getEntitys = async() => {
      await clienteAxios.get('/entidadconfig/listar')

      .then(({ data: { data } }) => {
        setEntitys(Object.keys(data))
        localStorage.setItem('entitys', JSON.stringify(Object.keys(data)))

      }).catch(err => console.log(err))
    }
    getEntitys()
  }, [])

  return {
    entitys
  }
}
