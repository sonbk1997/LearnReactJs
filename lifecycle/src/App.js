import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao",
      trangthai2:"khoitao2"
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount is running..')
  }

  componentDidMount() {
    console.log('componentDidMount is running..');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate is running..');
    return true;
  } 

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate is running..');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate is running..');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is running..');
  }
  

  capNhatState = () => {
    this.setState({
      trangthai:"trang thai duoc cap nhat"
    });
  }
  
  render() {
    console.log('Day la render da chay');
    console.log(this.state.trangthai);
    return (
      <div className="App">
        <Content ten={this.state.trangthai2}></Content>
        <button onClick={() => this.capNhatState()}>BTN</button>
      </div>
    );
  }
}

export default App;
