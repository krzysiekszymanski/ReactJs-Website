import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Notiffied from './components/Notiffied.jsx';
import Features from './components/Features.jsx';
import Testemonials from './components/Testemonials.jsx';
import Footer from './components/Footer.jsx';


class App extends Component {


    render() {
        return (
            <div>
                <Header />
                <Notiffied />
                <Features />
                <Testemonials />
                <Footer />
            </ div>

        )
    }
}

export default App;