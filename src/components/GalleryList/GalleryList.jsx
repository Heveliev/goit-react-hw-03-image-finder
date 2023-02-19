import React from "react";
import { List } from "./GalleryList.styled";
import { GalleryItem } from "components/GalleryItem/GalleryItem";
import { ColorRing } from 'react-loader-spinner';


// let pageNow = 1;

export class GalleryList extends React.Component{

    state = {
        image: null,
        error: null,
        status:'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        const prevValue = prevProps.value;
        const nextValue = this.props.value;
        if (prevValue !== nextValue) {
            this.setState({status: 'pending',image:[]})
            fetch(`https://pixabay.com/api/?key=33000305-b629afd170357acb9b33609ec&q=${nextValue}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12`)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    
                    return Promise.reject(new Error(`${nextValue} value is not found`))
                })
                .then(img =>this.setState({ image: img.hits, status: 'resolved' }))
                .catch(error=> this.setState({error,status:'rejected'}))
        }
    }
    render() {
        const { image, error, status } = this.state;
        console.log(image)
     
    if (status === 'idle') {
            return <List ><li><p>Enter a value in the input field</p></li></List>
        }
        if (status === 'pending') {
            return <List > <li><ColorRing
             visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/></li></List>
        }
        if (status === 'rejected') {
           return <List ><li><p>{ error.message}</p></li></List>
        }

        if (status === 'resolved') {
            return <List >{image.map(img => (<GalleryItem
                key={img.user}
                img={img.webformatURL}
                user={img.user}
                urlBig={img.largeImageURL} />))}</List>
        }}


    }


