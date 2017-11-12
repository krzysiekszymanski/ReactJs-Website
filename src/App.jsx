import React, { Component } from 'react';
import $ from 'jquery';
import Header from './components/header/Header.jsx';
import Notiffied from './components/notiffied/Notiffied.jsx';
import Features from './components/features/Features.jsx';
import Testemonials from './components/testemonials/Testemonials.jsx';
import Footer from './components/footer/Footer.jsx';
import '../style/css/style.css';

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