"use client";
import React from 'react';
import './Sobre.css'; 
import img_main from '../assets/SobreImg.png'
import Image from 'next/image';

const Sobre = () => {
    return (
        <div className="main-content-sobre">
            <div className="sobre-content">
                <h1><b>Sobre a Empresa e nossa Propostas</b></h1>
                <h2>Nossa Missão</h2>
                <p>
                Desde que começamos a operar em um pequeno apartamento em São Francisco em 1999, acreditamos que fazer o bem como empresa significa fazer o bem ao mundo.<br></br><br></br> Por isso, comprometemos nosso tempo, equidade e produtos para melhorar a educação, a igualdade e o meio ambiente para todos.<br></br> Os principais valores da Salesforce: Confiança, Sucesso do Cliente, Inovação, Igualdade e Sustentabilidade.
                </p>
                <h2>Nossa proposta para uma maior acessibilidade</h2>
                <p>
                    Vamos utilizar de criação de diferentes perfis de acessibilidade para modificações do site, inicialmente somente serão implementados perfis para usuários daltônicos.Para o daltonismo por exemplo, a paleta de cores do site será modificada dependendo se o usuário é daltônico ou não. Boa estruturação do site, garantindo uma experiência flúida, atrave´s de constraste e palavras chave.<br></br><br></br>rmazenamento de informações do usuário em formulário de contato, incluindo dados relacionados à acessibilidade, garantindo que o atendente salesforce possa oferecer uma experiência mais personalizada para seu cliente.Chat para contato com o atendente da Salesforce ou interação com o chatbot.Campo de pesquisa para buscas em todo o site. Garantindo assim um site mais acessível.
                </p>
            </div>
            <div className="img_main">
                <Image src={img_main} alt="Imagem da Empresa" />
            </div>
        </div>
    );
};

export default Sobre;