// components/Footer.jsx

const Footer = () => {
    return (
        <>
            <hr/>
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Michael's Portfolio
                </p>
                <div className="social_icons">
                    <a
                        href="https://twitter.com/Durambar"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/Durambar"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/mc-jackson"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;