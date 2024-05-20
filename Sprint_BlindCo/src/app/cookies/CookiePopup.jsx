"use client";
import React, { useState, useEffect } from 'react';
import './CookiePopup.css';
import BlindCO_img from '../assets/BlindCo.svg';
import Image from 'next/image';
import Link from 'next/link';

const CookiePopup = () => {
    const [show, setShow] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        // Verifica se o usuário já aceitou os cookies
        const acceptedCookies = localStorage.getItem('acceptedCookies');
        if (!acceptedCookies) {
            setShow(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('acceptedCookies', 'true');
        setShow(false);
    };

    const declineCookies = () => {
        setShow(false);
    };

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="cookie-popup">
            <p>Nosso site utiliza cookies para oferecer a melhor experiência. Ao continuar, você concorda com nossa <em>Política de Privacidade</em> e o uso de cookies. 
Saiba mais na pagina de <Link href="/acessibilidade"><u>acessibilidade.</u></Link></p>
            
            <button className='buttonAcessibilidade' onMouseEnter={toggleInfo} onMouseLeave={toggleInfo}>
                <Image src={BlindCO_img} className='w-20 pt-5' alt="BlindCO Image"/>
                {showInfo && (
                    <div className="info-box">
                        {/* Conteúdo da caixa de informações */}
                        <h3 className="text-lg font-bold"><u><b>Acessibilidade</b></u></h3>
                        <p>Este site foi projetado considerando pessoas daltônicas, 
                            com cores e contrastes selecionados para melhorar 
                            sua experiência de usuário.
                            Clique aqui e mude para o modo acessível</p>
                    </div>
                )}
            </button>
            
            <button className="accept-cookies" onClick={acceptCookies}><u>Aceitar</u></button>
            <button className="decline-cookies" onClick={declineCookies}>Recusar</button>
        </div>
    );
};

export default CookiePopup;
