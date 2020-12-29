import React from 'react'
import styled from 'styled-components'
import heroData from '../data/HeroData'
// import Cover from '../img/home_img/cover-img.png'
// import BG from '../img/home_img/bg-img.png'
import Group from '../img/home_img/Group.png'

const Hero = styled.div`
    position: relative;
    overflow: hidden;
`

const HeroContainer = styled.div`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    justify-items: center;
    margin: 0 auto;
    height: 73vh;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    padding-right: 24px;
    padding-left: 24px;

    @media screen and (max-width: 640px) {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        height: 100%;
        padding-right: 0;
        padding-left: 0;
}
`

const Left = styled.div`
    margin: 0 auto;
    h1{
        color: #03C1CF;
        font-size: 2.25rem;
        margin-bottom: 10px;
        /* @media screen and (max-width: 480px) {
            font-size: 2rem;
        } */
    }

    h2{
        margin-left: 12.3px;
        font-size: 1.5rem;
        width: 277px;
        /* @media screen and (max-width: 480px) {
            font-size: 1.25rem;
        } */
    }

    min-width: 301.6px;

    @media screen and (max-width: 768px) {
    margin: 0 auto;
    }

    @media screen and (max-width: 480px) {
    padding-top: 10rem;
    padding-left: 0.5rem;
    width: 100%;
    height: 87vh;
    }
    
`

const Right = styled.div`
    text-align: center;

    @media screen and (max-width: 768px) {
    /* padding: 5rem 0; */
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const About = () => {
    return (
        <Hero>
            <HeroContainer>
                <Left>
                    <h1>We:</h1>
                    {heroData.map((item, index) => (
                        <h2 key={index} style={{opacity: item.opacity}}>
                            {item.title}
                        </h2>
                    ))}
                </Left>
                <Right>
                    <Image src={Group} alt='group-img' /> 
                </Right>
            </HeroContainer>
        </Hero>
    )
}

export default About
