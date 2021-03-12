import styles from './Navbar.css'

function Navbar() {
    return (
        <div>
            <div className="main-nav ">
                <ul className="nav vh-100 d-flex justify-content-center">
                    <li className="listbar"><a className="linkbar" href="#about"><code className="code">1.</code> About</a></li>
                    <li className="listbar"><a className="linkbar" href="#projectss"><code className="code">2.</code> Works</a></li>
                    <li className="listbar"><a className="linkbar" href="#contact"><code className="code">3.</code> Contact</a></li>
                </ul>
            </div>
            <div class="demo bottomright">
            <i class="fas fa-cloud"></i>
                <a href="https://github.com/kikibanner" className="linkbar" target="_blank">Github</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a href="https://linkedin.com/in/rifki-fadillah-akbar-053595128/" className="linkbar" target="_blank">Linkedin</a>
            </div>
        </div>
    )
}

export default Navbar
