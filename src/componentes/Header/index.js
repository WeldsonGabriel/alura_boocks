import './estilo.css'
import IconesHeader from '../Icones/index';
import Logo from '../Logo/index'
import OpcoesHeader from '../OpcoesHeader/index';

function Header(){    
    return(
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
        
    )
}

export default Header