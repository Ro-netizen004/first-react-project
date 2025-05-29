import reactLogo from './images/react-logo.png' ;

export function Navbar(){
    return (
        <header>
            <img alt="React logo" src={reactLogo}/>
            <span className="logo">ReactFacts</span>
        </header>
    )
}