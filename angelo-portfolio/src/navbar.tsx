import { FunctionalComponent } from "preact";

interface NavbarItemProps {
    pageName: string,
    sectionId: string
}

export const NavbarItem: FunctionalComponent<NavbarItemProps> = ({ pageName, sectionId }) => {
    return (
        <li className="navbar-item">
            <a href={sectionId}>{pageName}</a>
        </li>
    )
}


export function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-items-container">
                <NavbarItem pageName="About me" sectionId="about-me"/>
                <NavbarItem pageName="Projects" sectionId="projects"/>
                <NavbarItem pageName="Contact" sectionId="about-me"/>
            </div>
        </div>
    );
}