import './css/common.css';

function Header(){
    return (
        <header>
            <a className = 'header-elements' style={{paddingLeft: '20vw'}} href='/'>Home</a>
            <a className = 'header-elements' href='/game'>Game</a>
            <a className = 'header-elements' style={{paddingRight: '20vw'}} href='/links'>Links</a>
        </header>
    );
}

export { Header };