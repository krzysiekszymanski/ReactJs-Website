import React from 'react';
import '../../css/css/style.css';

class Footer extends React.Component {
    render() {
        if(this.props.data){
            var nav = this.props.data.nav.map(function(link){
                return <li>{link}</li>
            });
        }

        return (
            <footer>
                <ul>
                    {nav}
                </ul>
            </footer>


        )
    }
}
export default Footer;