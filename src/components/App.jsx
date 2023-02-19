import React from "react";
import {AppStyle} from './App.styled';
import { GalleryList } from "./GalleryList/GalleryList";
import {Header} from './Header/Header';


class App extends React.Component  {

  state = {
    inputValue:'',

  }
  

  handleSubmitForm = value => {
  this.setState({inputValue:value,})
}





  render(){
const {inputValue} = this.state;
    return (
      <AppStyle>
        <Header onSubmit={this.handleSubmitForm} />
        <GalleryList value={inputValue} />
        
      
      </AppStyle>
    );
  }
 
};


export {App}