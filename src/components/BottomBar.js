import React from 'react'
import styled from 'styled-components'
import BtmLogo from '../img/devo-logo-bottom.png'

const Bar = styled.nav`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    justify-items: center;
    margin: 0 auto;
    height: 125px;
    z-index: 100;
    width: 100%;
    max-width: 1200px;
    padding-right: 24px;
    padding-left: 24px;

    bottom: 0;
    left: 0;

    /* height: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    z-index: 100;
    position: static;
    width: 100%;
    background: #03C1CF;
    bottom: 0;
    left: 0; */
    @media screen and (max-width: 480px) {
        position: relative;
    }
`

const Logo = styled.img`

`

const P = styled.p`
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    /* padding-right: 18.25rem;

    @media screen and (max-width: 1148px) {
        padding-right: 9.125rem;
    }
    @media screen and (max-width: 480px) {
        padding-right: 4.5rem;
    } */
`;

const LogoWrapper = styled.div`
    display: flex;
    min-width: 301.6px;
    align-items: center;
    box-sizing: border-box;
    
    @media screen and (max-width: 640px) {
        min-width: 0;
    }
`

const BarWrapper = styled.div`
    width: 100%;
    background: #03C1CF; 
`

const PWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 401.28px;

    @media screen and (max-width: 960px) {
        min-width: 0;
    }
`

const BottomBar = () => {
    return (
    <BarWrapper>
        <Bar>
            <LogoWrapper>
                <Logo src={BtmLogo} alt='logo'/>
            </LogoWrapper>
            <PWrapper>  
                <P>2020</P>
            </PWrapper>
        </Bar>
    </BarWrapper>
    )
}

export default BottomBar
