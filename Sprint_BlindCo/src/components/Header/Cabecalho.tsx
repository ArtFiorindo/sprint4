"use client";
// ClearHeader.tsx

import React, { useState, useEffect } from 'react';
import './Cabecalho.css';
import searchIcon from './assets/search-icon.svg';
import salesIcon from './assets/salesforce-256.png';
import loginIcon from './assets/account_avatar_people_profile_user_icon_123297.svg';
import Image from 'next/image';
import Link from 'next/link';
import ColorSwitcher from '@/app/switcher/ColorSwitcher';

interface ClearHeaderProps {
    title: string;
}

const ClearHeader: React.FC<ClearHeaderProps> = ({ title }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Obter o nome de usuário da localStorage, se existir
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        // Limpar o nome de usuário da localStorage
        localStorage.removeItem('username');
    };

    return (
        <>
            <header className="clear-header">
                <Link href='/'><Image src={salesIcon} alt='Icone SalesForce' className='sales-icon' /></Link>
                
                <div className='link-list'>
                    <nav>
                        <ul>
                            <li><Link href='/produtos' className="nav-link"><b>Produtos</b></Link></li>
                            <li><Link href='/acessibilidade' className="nav-link"><b>Acessibilidade</b></Link></li>
                            <li><Link href='/sobre' className="nav-link"><b>Sobre</b></Link></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="header-content">
                    <div className='imgBlind'>
                        <ColorSwitcher />
                    </div>

                    <div className="search-login-section">
                        <button className="search-button" onClick={() => setShowSearch(!showSearch)}>
                            <Image src={searchIcon} alt="Ícone de pesquisa" />
                        </button>
                        {showSearch && <input type="text" placeholder="Pesquisar..." className="search-input" />}
                        <div className="login-container">
                            {/* Se o nome de usuário estiver presente, exibe a mensagem de boas-vindas e o botão de logoff */}
                            {username ? (
                                <>
                                    <span className='text-sm'>Bem-vindo, {username}!</span>
                                    <Link href="/logout">
                                        <button className="logout-button" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <button className="login-button">
                                    <Link href="/login">Login</Link>
                                    <Image src={loginIcon} alt="Ícone de login" className="login-icon" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <hr></hr>
        </>
    );
};

export default ClearHeader;
