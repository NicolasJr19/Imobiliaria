import React, { Fragment } from 'react'
import { Container, ContainerForm, Form, Label} from './styles'
import Input from "../../components/Input";
import Button from "../../components/Button";

const Cadastro = () => {
  return (
    <Fragment>
        <Container>
            <h2>Crie sua conta</h2>
            <p>Cadastre-se para acessar a plataforma!</p>
            <ContainerForm>
                <Form action="">
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Informe seu nome"/>
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Informe seu e-mail"/>
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Informe sua senha"/>
                    <Input type="password" placeholder="Confirme sua senha"/>
                    <Button>Cadastrar</Button>
                </Form>
            </ContainerForm>
        </Container>
    </Fragment>
  )
}

export default Cadastro;