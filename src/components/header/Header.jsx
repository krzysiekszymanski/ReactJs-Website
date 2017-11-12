import React from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
        if(this.props.data) {
            var title = this.props.data.title;
            var description = this.props.data.description;
            var networks = this.props.data.social.map((network) => (
                 <li key={network.name} className={network.className}>
                     <a href={network.url}>
                        <i className={network.icon} />
                     </a>>
                 </li>
            ));
        }
        return (
            <header className={"header"}>
                <div className={"container"}>
                    <div className="box">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <ul className={"social"}>
                            {networks}
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;
