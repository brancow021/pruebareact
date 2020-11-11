import React, { memo, useEffect, useState } from 'react'
import { ButtonSubmit, ContainerForm, FormGroup } from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { SelectData } from './SelectData'
import { UseRegister } from '../../hooks/useRegister'

export const Form = memo(({register=true}) => {
  const [entitys, setentitys] = useState([])

  useEffect(() => {
    setentitys(JSON.parse(localStorage.getItem('entitys')))
  }, [])


  const formik = useFormik({
    initialValues:{
      entidad: '',
      llave: '',
      detalles: '',
    },

    validationSchema: Yup.object({
			entidad: Yup.string()
				.min(1,'Por favor seleccione una entidad')
				.required('La entidad en necesaria'),

			llave: Yup.number()
				.min(1,'Ingrese una llave valida')
				.required('La llave es obligatoria'),

			detalles: Yup.string()
			
		}),
		onSubmit: data => (
      data.entidad = localStorage.getItem('values'),
      console.log(data),
      UseRegister(data) .then(res => console.log(res.data))
		)
  })

  return (
    <>
      <ContainerForm>
        <h2>{register ? 'Registrar' : 'Actualizar'}</h2>
        <FormGroup onSubmit={formik.handleSubmit} className="form-lg">
          <div className="form-group">
            <SelectData form={true} entitys={entitys} />
          </div>

          <div className="form-group">
            <label>Llave</label>
            <input
              id="llave"
              value={formik.values.llave}
              type="text"
              placeholder="Ingresa la llave"
              class="form-control" 
              onChange={formik.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Detalle</label>
            <input
              id="detalles"
              value={formik.values.detalles}
              type="text"
              placeholder="Ingresa los detalles"
              class="form-control"
              onChange={formik.handleChange}
            />
          </div>

          <ButtonSubmit 
            type="submit"
            class="btn btn-primary">
            {register ? 'Registrar' : 'Actualizar'}
          </ButtonSubmit>
        </FormGroup>
      </ContainerForm>
    </>
  )
})
