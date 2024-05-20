import './globals.css';

// Importa o tipo ReactNode do React para uso tipado de filho
import { ReactNode } from 'react';
import Cabecalho from '@/components/Header/Cabecalho';
import Rodape from '@/components/Footer/Rodape';
import CookiePopup from './cookies/CookiePopup'

interface RootLayoutProps{
    // Define a estrutura dos filhos do layout como `ReactNode`
     children:ReactNode
}

export const metadata={
    //DEFININDO TITULO DA PAGINA
    title: 'BlindCo',
    // DEFINIR A DESCRIÇÃO DA PAGINA
    description:'Projeto de um filtro para daltonicos',
}

export default function RootLayout({children}:RootLayoutProps){
    return(
        <html lang="pt-BR">
            <body className='flex flex-col min-h-screen'>
            {// Inclui o componente Header no topo do layout
            }
            <Cabecalho title={''}/>
            <main>
              
                {children}

            </main>
            <CookiePopup/>
            <Rodape/>

            </body>

        </html>
    )
}