import React from 'react';
import './CookieConcient.css';
import Image from 'next/image';
import BlindCo from '../assets/BlindCo.svg'
import Link from 'next/link';




const Page: React.FC = () => {
  return (
    <div className='body-acess'>
        <div>
            <h1 className="h1-Cookies"><u>Acessibilidade</u></h1>
        </div>
      <div className="containerCookies">
        <div className="cookies-item">
          <Image src={BlindCo} alt="Logo BlinCo" className='imgBlindCo' />

        </div>
        <div className="main-content-cookies">
        <div className="cookies-content">
            <p>Nosso site foi meticulosamente projetado, levando em consideração a acessibilidade para pessoas com daltonismo. 
              Reconhecemos a importância de garantir uma experiência inclusiva para todos os usuários, independentemente de sua capacidade visual. 
              Para isso, adotamos uma abordagem cuidadosa em relação ao uso de cores,
               garantindo que haja contraste adequado entre os elementos visuais e evitando depender exclusivamente das cores para transmitir informações cruciais.
              <br></br><br></br>
              Além disso, todas as imagens em nosso site são acompanhadas por texto descritivo, permitindo que usuários com daltonismo possam compreender o conteúdo visual por meio de descrições textuais. 
              Isso garante que nosso conteúdo seja acessível e compreensível para todos os públicos.
              <br></br><br></br>
              Nosso compromisso com a acessibilidade se estende além do design visual. 
              Reconhecemos a importância de fornecer suporte para os principais tipos de filtros para daltonismo. 
              Portanto, nosso site está equipado para lidar com os três principais tipos de daltonismo: protanopia, deuteranopia e tritanopia. 
              Isso significa que ajustamos nosso design e paleta de cores para garantir que as informações sejam claramente discerníveis, independentemente do tipo de daltonismo do usuário. 
              <br></br><br></br>
              <b><u>Você vai encontrar o botão de nossa solução ao lado do ícone de pesquisa, localizado no canto superior direito do seu dispositivo.</u></b>
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

