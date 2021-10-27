const Header = (props) => {

    const getOtherTheme = () => props.theme === "light" ? "dark" : "light";

    const toggleTheme = () => {
        props.setTheme(getOtherTheme);
    }

    return (
        <div className="header">
            <h2 className="logo">devfinder</h2>
            <div
                className="theme-toggler"
                onClick={toggleTheme}
            >
                <span className="theme-name">{getOtherTheme().toUpperCase()}</span>
                <span className="theme-icon"></span>
            </div>
        </div>
    );
}

export default Header;