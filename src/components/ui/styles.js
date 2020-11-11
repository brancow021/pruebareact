import styled from 'styled-components'


export const Nav = styled.nav`
  margin-bottom: 20px;
`

export const ContainerSearch = styled.div`
  display: flex;
  width: 40%;
  margin-top: 40px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-color: #eee
`

export const Button = styled.button`
  margin-left: 30px;
  padding: 0!important;
  height: 40px;
  width: 100px;
`

export const FormGroup = styled.form`
  width: 40%;
  height: 300px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const ButtonSubmit = styled.button`
  width: 100%
`