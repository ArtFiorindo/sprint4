"use client";
import React from 'react';
import './Prods.css'; 
import imgProd4 from '../assets/Tableau.svg'
import imgProd1 from '../assets/IA.svg'
import imgProd2 from '../assets/Market.svg'
import imgProd3 from '../assets/mulesoft.svg'
import Image from 'next/image';


const ProdLink = () => {
    return (
        <div className='body-prod'>
        <h1 className='h1-prod'><b>Customer 360</b></h1>
        <section id='produtos'>
        <h2>Não sabe qual o melhor produto<br/> para a sua empresa?</h2>
        <h3>Descubra os nossos melhores produtos!</h3>
        <p className='p_h1'>Clique em qualquer produto abaixo para saber mais sobre como<br/> ele pode ajudá-lo a atingir seus objetivos de negócios.<br/> <br/>Dica profissional: esses aplicativos incríveis ficam ainda melhores juntos.</p>
            <div className="container-prod">
                <div className="prod-link-container">
                    <div className="prod-item">
                        <a href="https://www.salesforce.com/br/products/einstein-ai-solutions/" target="_blank" rel="noopener noreferrer">
                            <Image src={imgProd1} alt="Descrição da Imagem 1" />
                        </a>
                        <p>IA</p>
                    </div>
                </div>
                <div className="prod-link-container">
                    <div className="prod-item">
                        <a href="https://www.salesforce.com/br/products/sales/" target="_blank" rel="noopener noreferrer">
                            <Image src={imgProd2} alt="Descrição da Imagem 2" />
                        </a>
                        <p>Vendas</p>
                    </div>
                </div>
                <div className="prod-link-container">
                    <div className="prod-item">
                        <a href="https://www.salesforce.com/br/products/data" target="_blank" rel="noopener noreferrer">
                            <Image src={imgProd3} alt="Descrição da Imagem 3" />
                        </a>
                        <p className='mule_text'>Mulesoft</p>
                    </div>
                </div>
                <div className="prod-link-container">
                    <div className="prod-item">
                        <a href="https://www.salesforce.com/br/products/analytics/overview/" target="_blank" rel="noopener noreferrer">
                            <Image src={imgProd4} alt="Descrição da Imagem 4" />
                        </a>
                        <p>Tableau</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default ProdLink;
