/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Container, Img, Itens, Description } from "./styles";

const Card = () => {
  return (
    <Container>
      <Img>
        <img
          src="https://images.unsplash.com/photo-1628592102751-ba83b0314276"
          alt=""
        />
      </Img>
      <Description>
        <h4>Apartamento</h4>
        <Itens>
          <span></span>
          <span>R$2.400,00 / mês</span>
        </Itens>
      </Description>
    </Container>
  );
};

export default Card;
