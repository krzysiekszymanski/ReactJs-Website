import React from 'react';
//import './testemonials.scss';


class Testemonials extends React.Component {
    render() {
        if(this.props.data) {
            var author = this.props.data.author;
            var text = this.props.data.text;
            var networks = this.props.data.social.map((network)=>(
                 <li key={network.name}>
                     <a href={network.url}>
                         <i className={network.icon}></i>
                     </a>
                 </li>
            ));

        }
        return (
            <section className={"testemonials"}>
                <p>{text}</p>
                <span>{author}</span>
                <div className={"photo"} />
                <h2>Say Hi & Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <ul className="test_social">
                    {networks}
                </ul>
            </section>
        )
    }
}
export default Testemonials;