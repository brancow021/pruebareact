import React, { useState, useEffect } from 'react'

export const SelectData = ({entitys = [], setEntitys, formik, entidad = 'Seleccionar'}) => {
  const [value, setvalue] = useState(entidad)


  const handleSelect = (evt) => {
    const { value } = evt.target
    if(value !== '' && setEntitys){
      setEntitys(value)

    } else if(formik){
      setvalue(formik.values.entidad = value)
    }
  }

  return (
    <>
      <div>
        <div className="form-group">
          <label>Entidades</label>

          <select onLoad={() => console.log('Cargando')} onChange={handleSelect} className="form-control">
          <option 
            value={entidad}
            hidden>
            {entidad === '' ? 'Seleccionar' : entidad}

          </option>
            {entitys.map((item) => (
              <option
                key={item} 
                value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>
      </div>
    </>    
  )
}
