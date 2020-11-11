import React, { useState } from 'react'

export const SelectData = ({entitys = [], setEntitys, form}) => {

  const handleSelect = (evt) => {
    const { value } = evt.target
    if(value !== '' && setEntitys){
      setEntitys(value)

    } else if(form){
      localStorage.setItem('values', value)
    }
  }

  return (
    <>
      <div>
        <div className="form-group">
          <label>Entidades</label>

          <select onChange={handleSelect} className="form-control">
          <option 
            value="" 
            selected 
            disabled
            hidden>
            Seleccionar

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
