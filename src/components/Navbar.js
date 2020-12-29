import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData'
import Bars from '../img/menu.svg'
import {FaBars} from 'react-icons/fa'
import DevoLogo from '../img/devo-logo.svg'

const Nav = styled.nav`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    justify-items: center;
    margin: 0 auto;
    height: 77.17px;
    z-index: 100;
    width: 100%;
    max-width: 1200px;
    padding-right: 24px;
    padding-left: 24px;

    
    

    /* height: 77.17px;
    display: flex;
    justify-content: space-between;
    //padding: 0 18.25rem;
    padding: 0;
    z-index: 100;
    position: static;
    width: 100%;
    background: #fff; */
`

const NavLink = css`
    color: #000;
    display: flex;
    align-items: center;
    padding: 0 1.0625rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
`

const Logo = styled.img`

`;

const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 45%);
        color: #000;
    }

`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 960px) {
        display: none;
    }
`

const NavMenuLinks = styled(Link)`
    ${NavLink}
    font-weight: normal;
    font-size: 18px;
    
    &:hover{
        border-bottom: 3px solid #03C1CF;
        transition: all 0.2s ease;
    }
`

const LogoWrapper = styled.div`
    display: flex;
    min-width: 301.6px;
    align-items: center;
    
    @media screen and (max-width: 640px) {
        min-width: 0;
    }
`

const NavWrapper = styled.div`
    background: #fff;
    width: 100%;
`

export const Navbar = ({ toggle }) => {
    return (
    <NavWrapper>
        <Nav>
            <LogoWrapper>
                <Logo src={DevoLogo} alt='logo'/>
            </LogoWrapper>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index} style={{fontWeight: item.weight}}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    </NavWrapper>
        
    )
}

export default Navbar;