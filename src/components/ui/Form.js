import React, { memo, useEffect, useState } from 'react'
import { ButtonSubmit, ContainerForm, FormGroup } from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { SelectData } from './SelectData'
import { UseRegister } from '../../hooks/useRegister'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'



export const Form = memo(() => {
  const history = useHistory();
  const [register, setregister] = useState(true)
  const [entitys, setentitys] = useState([])


  useEffect(() => {
    if(history.location.update){
      setregister(false)

      const { id_unico, detalle } = history.location.data

      formik.values.llave = id_unico
      formik.values.detalle = detalle
    }
  }, [])

  useEffect(() => {
    setentitys(JSON.parse(localStorage.getItem('entitys')))
  }, [])


  const formik = useFormik({
    initialValues:{
      entidad: '',
      llave: '',
      detalle: '',
    },

    validationSchema: Yup.object({
			entidad: Yup.string()
				.min(1,'Por favor seleccione una entidad')
				.required('La entidad en necesaria'),

			llave: Yup.string()
				.min(1,'Ingrese una llave valida')
				.required('La llave es obligatoria'),

			detalle: Yup.string()
			
		}),
		onSubmit: data => (
      UseRegister(data, register ? false : true).then(({data}) => {
        if(data.status === 200){
          swal(register ? 'Registro Exitoso' : 'Actualizacion exitosa', ":)", "success");
          history.push('/')

        } else if(data.status === 505){
          swal('Ah ocurrido un error', 'Ingrese una llave valida' , "error");
        }
      })
      .catch(err => {
        console.log(err)
      })
		)
  })

  return (
    <>
      <ContainerForm>
        <h2>{register ? 'Registrar' : 'Actualizar'}</h2>
        <FormGroup onSubmit={formik.handleSubmit} className="form-lg">
          <div className="form-group">
            <SelectData formik={formik} entitys={entitys} />
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
              id="detalle"
              value={formik.values.detalle}
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
