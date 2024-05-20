// pages/logout.tsx
"use client";
// pages/logout.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LogoutPage: React.FC = () => {

  useEffect(() => {
    // Limpar os dados de autenticação (por exemplo, remover o nome de usuário da localStorage)
    localStorage.removeItem('username');

    // Redirecionar o usuário para a página inicial
    window.location.href = '/';
  }, []); // Adicione router como uma dependência do useEffect

  return null; // Esta página não renderiza nada
};

export default LogoutPage;
