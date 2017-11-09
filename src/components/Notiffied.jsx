import React from 'react';
import '../../css/css/style.css';

class Notiffied extends React.Component {
    render() {
        return (
                <section className={"notiffied"}>
                    <div className="content">
                        <aside>
                            <h2>Get Notified Of Any Updates</h2>
                            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.</p>
                            <input type="text" placeholder={"Email Adress"}/><a href="#">Notiffy</a>
                        </aside>
                        <div className="video">
                            <div />
                        </div>
                    </div>
                </section>

        )
    }
}
export default Notiffied;