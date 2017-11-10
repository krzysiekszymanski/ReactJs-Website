import React, { Component } from 'react';
import $ from 'jquery';
import Header from './components/Header.jsx';
import Notiffied from './components/Notiffied.jsx';
import Features from './components/Features.jsx';
import Testemonials from './components/Testemonials.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            webData: {}
        }
    }

    getWebData(){
      $.ajax({
          url:"https://krzysiekszymanski.github.io/ReactJs-Website/webData.json",
          dataType:'json',
          cache: false,
          success: function(data){
              this.setState({webData: data});
          }.bind(this),
          error: function (xhr, status, err) {
              console.log(err);
              alert(err);
          }

      });
    }
    componentDidMount(){
        this.getWebData();
    }
    render() {
        return (
            <div>
                <Header data ={this.state.webData.header}/>
                <Features data ={this.state.webData.features}/>
                <Notiffied data ={this.state.webData.article}/>
                <Testemonials data ={this.state.webData.testimonials}/>
                <Footer data ={this.state.webData.footer}/>
            </ div>
        )
    }
}

export default App;