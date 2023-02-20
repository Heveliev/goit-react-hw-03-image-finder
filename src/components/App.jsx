import React from "react";
import {AppStyle} from './App.styled';
import { GalleryList } from "./GalleryList/GalleryList";
import { Header } from './Header/Header';
import { ColorRing } from 'react-loader-spinner';
import { ButtonLoadMore } from "./ButtomLoadMore/ButtomLoadMore";


class App extends React.Component  {


  state = {
    inputValue: '',
    image: [],
    error: null,
    status: 'idle',
    page:1,

  }



    componentDidUpdate(prevProps, prevState) {
        const prevValue = prevState.inputValue;
      const nextValue = this.state.inputValue;
      if (prevValue !== nextValue) {
        this.setState({status:'pending'})
        this.fetchImg();

                
        }
    }

  fetchImg = () => {
    const { inputValue, page } = this.state;
 fetch(`https://pixabay.com/api/?key=33000305-b629afd170357acb9b33609ec&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    
                    return Promise.reject(new Error(`${inputValue} value is not found`))
                }).then(img =>
        this.setState(prevState => ({
            image: [...prevState.image, ...img.hits],
            page: prevState.page + 1,
            
          
          })
      )
      )
      .catch(error => this.setState({ error, status: 'rejected' }))
      .finally(()=>this.setState({status: 'resolved',}))
    }

  handleSubmitForm = value => {
    this.setState({
      inputValue: value,
      page: 1,
      image: []
    })
}





  render(){
    const { error, status } = this.state;
    return (
      <AppStyle>
        <Header onSubmit={this.handleSubmitForm} />
        {status === 'idle' && (<div><p>Enter a value in the input field</p></div>)}
        {status === 'pending' && (<div><ColorRing
             visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} /></div>)}
        {status === 'rejected' && (<div><p>{error.message}</p></div>)}
        {status === 'resolved' && (<><GalleryList image={this.state.image} />
          <ButtonLoadMore title='Load more' onClick={this.fetchImg} />
        </>)}
      </AppStyle>
    );
  }
 
};


export {App}