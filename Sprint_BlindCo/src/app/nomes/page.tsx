import React from 'react';
import './Nome.css'; 
import imagemArt from './assets/IMG_6847.png';
import imagemEdu from './assets/EDU.jpeg';
import imagemJhoe from './assets/JHOE.jpeg';
import linkedin from './assets/OIP.jpeg';
import Image from 'next/image';

const Members = () => {
    const members = [
        { name: 'Artur Fiorindo', rm: 'rm553481', image: imagemArt, linkedIn: 'https://www.linkedin.com/in/artur-fiorindo-0404b2288' },
        { name: 'Eduardo Função', rm: 'rm553362', image: imagemEdu, linkedIn: 'https://www.linkedin.com/in/eduardo-felipe-nunes-fun%C3%A7%C3%A3o-7871921b5/' },
        { name: 'Jhoe Hashimoto', rm: 'rm553831', image: imagemJhoe, linkedIn: 'https://www.linkedin.com/in/jhoe-hashimoto-8a4829299/' },
    ];

    return (
        <div className="container">
            {members.map((member, index) => (
                <div key={index} className="member">
                    <Image src={member.image} alt={member.name} className="member-image" />
                    <p>{member.name}</p>
                    <p>{member.rm}</p>
                    <a href={member.linkedIn} target="_blank">
                        <Image src={linkedin} alt="LinkedIn" className="linkedin-image" />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Members;

