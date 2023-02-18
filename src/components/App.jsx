import React from "react";
import {AppStyle} from './App.styled';
import {Header} from './Header/Header';
import {ModalWindow} from './ModalWindow/ModalWindow';


class App extends React.Component  {

state = {
  showModal:false,
}

toggleModal = () =>{
  this.setState(({showModal})=>({showModal:!showModal}))
}

  render(){
const {showModal} = this.state;
    return (
      <AppStyle>
        <Header/>
        {showModal && <ModalWindow onClose={this.toggleModal}>

          </ModalWindow>}
      
      </AppStyle>
    );
  }
 
};


export {App}