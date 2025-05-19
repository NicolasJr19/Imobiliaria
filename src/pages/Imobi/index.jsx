import React, { Fragment } from "react";
import {
  Container,
  Left,
  Rigth,
  Thumb,
  Description,
  ProfileImg,
  Profile,
  ProfileDescription,
  ProfileContact,
  ProfileFormContact
} from "./styles";
import TopBanner from "../../components/TopBanner";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";
import Button from "../../components/Button";



const Imobi = () => {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img
              src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesetium
              temporibus earum doloribus quos a autem blanditis reiciendis, et
              atque fuga laborum at eos veniam totam eaque perferndis beatae cum
              odit!
            </p>
          </Description>
        </Left>
        <Rigth>
          <Profile>
            <ProfileImg>
              <img
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt=""
              />
            </ProfileImg>
            <ProfileDescription>
              <h3>Jorge Nicolas</h3>
              <p>Descrição do usuário</p>
            </ProfileDescription>
            <ProfileContact>
              <h3>Informações para contato</h3>
              <p>(31) 97070-7070</p>
              <p>jg@solutions.com</p>
            </ProfileContact>
            <ProfileFormContact>
              <h3>Contate o anunciante</h3>
              <form>
                <Input type="text" placeholder="Nome" name="" id=""/>
                <Input type="text" placeholder="E-mail" name="" id=""/>
                <TextArea placeholder="Mensagem" name="" id="" cols="30" rows="10"/>
                <Button>Enviar mensagem</Button>
              </form>
            </ProfileFormContact>
          </Profile>
        </Rigth>
      </Container>
    </Fragment>
  );
};

export default Imobi;
