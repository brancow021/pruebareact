import React,{ memo } from 'react'
import { useHistory } from 'react-router-dom'

export const TableList = memo(({ data = [] }) => {

  const history = useHistory()

  const handleUpdate = (item) => {
    history.push('/register', item)
  }

  return (
    <>
      <div className="table-responsive-sm">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id unico</th>
              <th scope="col">Detalle</th>
              <th scope="col">Actualizar</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td 
                  className="
                    text-capitalize 
                    aligh-items-center">
                  {item.id_unico}
                </td>
                <td 
                  className="
                    text-capitalize 
                    aligh-items-center">
                    {item.detalle}
                </td>
                <td 
                  className="
                    text-capitalize 
                    aligh-items-center">

                  <button
                    onClick={() => handleUpdate(item)}
                    className="
                      btn btn-sm 
                      btn-outline-primary">
                      Actualizar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
})
