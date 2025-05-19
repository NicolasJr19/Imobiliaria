import React, { Fragment } from 'react'
import { Container, ContainerForm, Form, Label} from './styles'
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Fragment>
        <Container>
            <h2>Acesse sua conta</h2>
            <p>Entre com seu e-mail e senha!</p>
            <ContainerForm>
                <Form action="">
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Informe seu e-mail"/>
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Informe sua senha"/>
                    <Button>Fazer Login</Button>
                </Form>
            </ContainerForm>
        </Container>
    </Fragment>
  )
}

export default Login;