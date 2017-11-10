import React from 'react';
import '../../css/css/style.css';



class Header extends React.Component {
    render() {
        if(this.props.data) {
            var title = this.props.data.title;
            var description = this.props.data.description;
            var networks = this.props.data.social.map(function(network){
                return <li key={network.name} className={network.className}><a href={network.url}/></li>
            });
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
