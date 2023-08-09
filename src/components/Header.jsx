import logo from "../assets/troll-face.png"

function Header() {
    return(
        <nav>
            <img src={logo} alt="logo" className="header--logo" />
            <h2 className="header--head">Meme Generator</h2>
            <span className="header--span">React Mini Project</span>
        </nav>
    )
}

export default Header