import React from 'react';
import styles from '../../css/css/style.css';


class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <h2>a to jest nagłówek</h2>
                <p>to jest tekst</p>

            </header>


        )
    }
}
export default Header;