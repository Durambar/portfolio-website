// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Michael's Portfolio
                </Link>
            </div>
            {/* <a href="" className="cta-btn">What should this do?</a> */}
            {/* <Link href="/" className="cta-btn">Internal Button</Link>
            <Link href="/" className="cta-btn">There's automatic spacing!</Link>
            <Link href="/" className="cta-btn">How many can I fit?</Link>
            <Link href="/" className="cta-btn">Not this many</Link> */}
        </div>
    )
}

export default Navbar;