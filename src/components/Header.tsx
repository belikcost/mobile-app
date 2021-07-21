import bar from '../images/bars.svg';

const Header = () => {

    return (
        <header className="header">
            <img className="header_bar" src={bar} alt="Иконка"/>
        </header>
    );
}

export default Header;