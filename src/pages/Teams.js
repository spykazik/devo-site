import React from 'react'
import styled from 'styled-components'
import { teamsData } from '../data/TeamsData'

const Hero = styled.div`
    *{
        display: flex-grid;
        h2{
        font-size: 18px;
    }
    }
    display: -ms-grid;
    display: grid;
    -ms-grid-rows: 0.1fr 2fr;
        grid-template-rows: 0.1fr 3fr;
    -webkit-box-align: center;
        -ms-flex-align: flex-end; 
            align-content: flex-end;
            align-items: space-between;
            align-self: flex-end;
            justify-content: center;
    /* justify-items: center; */
    margin: 0 auto;
    height: 100%;
    z-index: 1;
    width: 100%;
    max-width: 830px;
    padding-right: 24px;
    padding-left: 24px;

    @media screen and (max-width: 827px) {
        max-width: 520px;
        height: 100%;
        padding-right: 0;
        padding-left: 0;
    }

    @media screen and (max-width: 519px) {
        max-width: 256px;
        height: 100%;
        padding-right: 0;
        padding-left: 0;

    }
`

const HeroContainer = styled.div`
   margin-bottom: 81px;
`

const Block = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 34px;
    margin: 17.5px 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

`

const HeaderWrapper = styled.div`
    /* display: flex;
    justify-content: flex-start;
    width: 75%; */

    h2{
        font-size: 18px;
        margin-top: 96px;
        margin-bottom: 15px;
        color: #03C1CF;

    }
`

const BottomSection= styled.div`
    left: 21px;
    bottom: 21px;
    display: flex;
    justify-content: space-between;

    padding-left: 21px;
    padding-bottom: 21px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const H2 = styled.h2`
    margin-left: 110px;
    margin-top: 21px;

`

const Teams = () => {
    return (
        <Hero>
            <HeaderWrapper>
                <h2>Teams</h2>
            </HeaderWrapper>
            <HeroContainer>
                {teamsData.map((item, index) => (
                    <Block key={index} style={{backgroundColor: item.color}} >
                        <Content>
                            <H2 key={index} >
                            {item.project}
                            </H2>
                            <BottomSection>
                                <h2 key={index} >
                                {item.name}
                                </h2>
                                <h2 key={index} >
                                {item.members}
                                </h2>
                            </BottomSection>
                        </Content>
                    </Block>  
                ))}
            </HeroContainer>
        </Hero>
    )
}

export default Teams
