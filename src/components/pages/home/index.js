import React, { useState, useEffect } from 'react'
import { useGetEntity } from '../../../hooks/useGetEntity'
import { useListar } from '../../../hooks/useListar'
import { SelectData } from '../../ui/SelectData'
import { TableList } from '../../ui/TableList'

export const Home = () => {
  const { data, error, setEntitys } = useListar()
  const { entitys } = useGetEntity();
  const [ListData, setListData] = useState([])

  useEffect(() => {
    const getData = () => {
      setListData(data.data)
  }
    getData()
  }, [data])

  return (
    <>
      <div className="container-fluid">
        <SelectData
          entitys={entitys}
          setEntitys={setEntitys}
        />

        <TableList 
          data={ListData}
        />
      </div>
    </>
  )
}
