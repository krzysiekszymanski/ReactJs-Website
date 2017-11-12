import React from 'react';
import './notiffied.scss';

class Notiffied extends React.Component {
    render() {
        if(this.props.data) {
            var title = this.props.data.title;
            var text = this.props.data.text;

        }
        return (
                <section className={"notiffied"}>
                    <div className="content">
                        <aside>
                            <h2>{title}</h2>
                            <p>{text}</p>
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