/* eslint-disable react/jsx-no-undef */
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Container, Copy, Item  } from "./styles";
import LogoImg from "../../assets/logo.png"
import { Fragment } from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <Fragment>
        <Container>
            <Item>
                <Link to="/"><img src={LogoImg} alt=""/></Link>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <nav>
                    <li><span><FaFacebook size={32}/></span></li>
                    <li><span><FaInstagram size={32}/></span></li>
                    <li><span><FaWhatsapp size={32}/></span></li>
                    <li><span><FaTwitter size={32}/></span></li>
                </nav>
            </Item>
            <Item>
                <h3>Nossos Serviços</h3>
                <ul>
                    <li><span>Comprar</span></li>
                    <li><span>Vender</span></li>
                    <li><span>Alugar</span></li>
                </ul>
            </Item>
            <Item>
                <h3>Nossos Serviços</h3>
                <ul>
                    <li><span>Comprar</span></li>
                    <li><span>Vender</span></li>
                    <li><span>Alugar</span></li>
                </ul>
            </Item>
            <Item>
                <h3>Nossos Serviços</h3>
                <ul>
                    <li><span>Comprar</span></li>
                    <li><span>Vender</span></li>
                    <li><span>Alugar</span></li>
                </ul>
            </Item>
        </Container>
        <Copy>
            <p>&copy;Copyright 2025 - JG Solutions - Todos os diretos reservados.</p>
            <ul>
                <li><span>Termos de Uso</span></li>
                <li><span>Politíca de Privacidade</span></li>
                <li><span>Politíca de Cookies</span></li>
            </ul>
        </Copy>
    </Fragment>
  )
}

export default Footer;