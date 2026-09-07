import { useState } from "react";

import { Link } from "react-router-dom";

import Brand from "./Brand";

const navLinks = [
    { href: "/#tratamentos", label: "Tratamentos" },
    { href: "/#experiencia", label: "Experiência" },
    { href: "/#equipe", label: "Equipe" },
    { href: "/#contato", label: "Contato" },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="site-header">
            <div className="shell header-inner">
                <Link
                    to="/"
                    aria-label="Ir para a página inicial"
                    onClick={closeMenu}
                >
                    <Brand />
                </Link>

                <nav className="desktop-nav" aria-label="Navegação principal">
                    {navLinks.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="header-actions">
                    <Link className="link-admin" to="/admin">
                        Painel demo
                    </Link>

                    <Link
                        className="button button-small button-primary"
                        to="/agendar"
                    >
                        Agendar avaliação
                    </Link>

                    <button
                        className="menu-toggle"
                        type="button"
                        aria-label={
                            isMenuOpen ? "Fechar menu" : "Abrir menu"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                        onClick={() =>
                            setIsMenuOpen((currentValue) => !currentValue)
                        }
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </button>
                </div>
            </div>

            <nav
                className="mobile-nav"
                id="mobile-nav"
                aria-label="Navegação mobile"
                hidden={!isMenuOpen}
            >
                {navLinks.map((link) => (
                    <a
                        href={link.href}
                        key={link.href}
                        onClick={closeMenu}
                    >
                        {link.label}
                    </a>
                ))}

                <Link
                    to="/admin"
                    onClick={closeMenu}
                >
                    Painel demo
                </Link>
            </nav>
        </header>
    );
}

export default Header;
