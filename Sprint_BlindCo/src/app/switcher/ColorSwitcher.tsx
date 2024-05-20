"use client";
import React, { useState } from 'react';
import './ColorSwitcher.css';
import BlindCo from '../assets/BlindCo.svg';
import Image from 'next/image';



interface ColorBlindnessType {
  type: 'Normal Theme' | 'Protanopia' | 'Deuteranopia' | 'Tritanopia';
  filter: string;
}

const colorBlindnessTypes: ColorBlindnessType[] = [
  { type: 'Normal Theme', filter: '' },
  { type: 'Protanopia', filter: 'grayscale(0.5) sepia(0.5)' },
  { type: 'Deuteranopia', filter: 'grayscale(0.3) contrast(1.2)' },
  { type: 'Tritanopia', filter: 'grayscale(0.7) hue-rotate(120deg)' },
];

const ColorSwitcher: React.FC = () => {
  const [colorBlindnessType, setColorBlindnessType] = useState<ColorBlindnessType>(colorBlindnessTypes[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleColorBlindnessChange = (type: ColorBlindnessType['type']) => {
    if (colorBlindnessType.type === type) {
      setColorBlindnessType(colorBlindnessTypes[0]);
      document.body.style.filter = '';
    } else {
      const selectedType = colorBlindnessTypes.find((t) => t.type === type);
      if (selectedType) {
        setColorBlindnessType(selectedType);
        document.body.style.filter = selectedType.filter;
      }
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="color-switcher">
      <button className={`color-blindness-button ${colorBlindnessType.filter ? 'active' : ''}`} onClick={toggleDropdown}>
        {colorBlindnessType.type}
        <Image src={BlindCo} alt='icon-BlindCo'/>
        
      </button>
      
      {isOpen && (
        <>
        <div className="overlay" onClick={() => setIsOpen(false)} />
            <ul className="dropdown">
                <button className="close-button" onClick={closeDropdown}>Fechar</button>
            <div className='dropdownText'>
              <h1 className='h1-drop'>BlindCo &reg;</h1>
              <p className='p-drop'>Esse é o BlindCo o projeto que ajuda você no seu cotidiano!<br/><br/>Escolha abaixo a opção que se encaixa na sua dificuldade.</p>
            </div>
            {colorBlindnessTypes.map((type) => (
              <li key={type.type}>
                <div className='optionButton'>
                  <button
                    className={`color-blindness-button ${colorBlindnessType.type === type.type ? 'active' : ''}`}
                    onClick={() => handleColorBlindnessChange(type.type)}
                  >
                    {type.type}
                  </button>
                  <div className="ios-switch">
                    <input
                      type="checkbox"
                      id={`switch-${type.type}`}
                      checked={colorBlindnessType.type === type.type}
                      onChange={() => handleColorBlindnessChange(type.type)}
                    />
                    <label htmlFor={`switch-${type.type}`} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ColorSwitcher;
