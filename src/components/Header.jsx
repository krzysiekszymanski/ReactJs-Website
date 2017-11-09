import React from 'react';
import styles from '../../css/css/style.css';



class Header extends React.Component {
    render() {
        return (
            <header className={styles, "header"}>
                <div className={"container"}>
                    <div className="box">
                        <h1>Notify</h1>
                        <p>A great new free psd theme to showcase <br /> your new aplication</p>
                        <div className={"social"}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>


        )
    }
}
export default Header;
