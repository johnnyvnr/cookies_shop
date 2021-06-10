import React, {useState} from 'react'
import Navbar from '../Navbar/'
import {HeroContainer, HeroBtn, HeroP, HeroH1, HeroItems, HeroContent} from './HeroElements'
import Sidebar from '../Sidebar'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toogle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <HeroContainer>
                <Navbar toogle={toogle} />
                <Sidebar isOpen={isOpen} toogle = {toogle}/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>O melhor Cookie de todos.</HeroH1>
                        <HeroP>Pronto em 60 segundos</HeroP>
                        <HeroBtn>Faça seu pedido!</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </div>
    );
};

export default Hero
