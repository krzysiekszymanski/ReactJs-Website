import React from 'react';
import './features.scss';

class Features extends React.Component {
    render() {
        if(this.props.data) {
            var box = this.props.data.editable.map((box)=>(
                 <div key={box.id} className={box.className}>
                     <span/>
                     <h2>{box.title}</h2>
                     <p>{box.description}</p>
                 </div>
            ));
        }
        return (
            <section className={"container"}>
                <div className="features">
                    {box}
                </div>
            </section>
        )
    }
}
export default Features;