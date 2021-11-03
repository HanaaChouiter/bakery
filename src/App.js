import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';

class App extends Component {
  constructor(){
    super()

    this.state = {
      activeTab: "add",
      items: []
    }

    this.handleButtonClick= this.handleButtonClick.bind(this)
  }

  handleButtonClick(str){
    console.log("para",str)
    this.setState({ activeTab: str})
  }


  render() {
    return (
      <div>
        <Button 
        text="add" 
        type="button" 
        handleClick={this.handleButtonClick} 
        isSelected={this.state.activeTab === "Add"}
        />

        <Button 
        text="list" 
        type="button" 
        handleClick={this.handleButtonClick}
        isSelected={this.state.activeTab === "Add"}
        />

        <Button 
        text="pay" 
        type="button"
        handleClick={this.handleButtonClick}
        isSelected={this.state.activeTab === "Add"}
        />
      </div>
    );
  }
}

export default App;
