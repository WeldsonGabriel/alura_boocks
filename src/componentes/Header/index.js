import IconesHeader from '../Icones/index';
import Logo from '../Logo/index'
import OpcoesHeader from '../OpcoesHeader/index';
import styled from 'styled-components'

const HeaderContainer = styled.header` 
    background-color: #FFF;
    display: flex;
    justify-content: center;
`
function Header(){    
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
        
    )
}

export default Header