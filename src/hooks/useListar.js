import { useEffect, useState } from 'react'
import { clienteAxios } from '../components/axios/axiosConfig'

export const useListar = () => {
  const [data, setdata] = useState([])
  const [error, setError] = useState('')
  const [entitys, setEntitys] = useState('CANALES_RADICADO_PQR')

  useEffect(() => {
    const getData = async() => {
      try {
        const resultData = await clienteAxios.get(`/entidadconfig/listar?entidad=${entitys}`)
        console.log(resultData)
        setdata(resultData.data)

      } catch (error) {
        setError(error)
      }
    }
    getData()
  }, [entitys])

    return {
      data,
      error,
      setEntitys
    }
}

