import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <span>Header</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Header;