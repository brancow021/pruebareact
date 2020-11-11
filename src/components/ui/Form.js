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
  const [error, seterror] = useState(false)

  useEffect(() => {
    if(history.location.update){
      setregister(false)
      console.log(history.location)
      const { id_unico, detalle } = history.location.data

      formik.values.llave = id_unico
      formik.values.detalle = detalle
      formik.values.entidad = history.location.Entity
      console.log(formik.values.entidad)

    } else {
      setregister(true)
      formik.resetForm()
    }
  }, [history])

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
				.min(2,'Por favor seleccione una entidad')
				.required('La entidad en necesaria'),

			llave: Yup.string()
				.min(1,'Ingrese una llave valida')
				.required('La llave es obligatoria'),

      detalle: Yup.string()
        .min(1,'Ingrese un detalle')
        .required('El detalle es necesario'),

			
		}),
		onSubmit: data => (
      data.entidad === '' ? seterror(true)  : seterror(false),
      
      UseRegister(data, register ? false : true).then(({data}) => {
        if(data.status === 200){
          swal(register ? 'Registro Exitoso' : 'Actualizacion exitosa', ":)", "success");
          history.push('/')

          formik.resetForm()

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
            <SelectData entidad={formik.values.entidad} formik={formik} entitys={entitys} />
            {formik.errors.entidad
							? <div class="alert alert-danger" role="alert">
                {formik.errors.entidad}
              </div>

							: null
						}
          </div>

          <div className="form-group">
            <label>Llave</label>
            <input
              id="llave"
              value={formik.values.llave}
              type="text"
              placeholder="Ingresa la llave"
              class="form-control"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {formik.touched.llave && formik.errors.llave
							? <div class="alert alert-danger" role="alert">
                {formik.errors.llave}
              </div>
							: null
						}
          </div>

          <div className="form-group">
            <label>Detalle</label>
            <input
              id="detalle"
              value={formik.values.detalle}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Ingresa los detalles"
              class="form-control"
              onChange={formik.handleChange}
            />

            {formik.touched.detalle && formik.errors.detalle
							? <div class="alert alert-danger" role="alert">
                {formik.errors.detalle}
              </div>
							: null
						}
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
