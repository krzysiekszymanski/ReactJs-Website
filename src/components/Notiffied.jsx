import React from 'react';
import styles from '../../css/css/style.css';

class Notiffied extends React.Component {
    render() {
        return (
                <section className={styles, "notiffied"}>
                    <div className="container">
                        <aside>
                            <h2>Get Notified Of Any Updates</h2>
                            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.</p>
                            <input type="text" placeholder={"Email Adress"}/><a href="#">Notiffy</a>
                        </aside>
                        <div className="video">

                        </div>
                    </div>
                </section>

        )
    }
}
export default Notiffied;