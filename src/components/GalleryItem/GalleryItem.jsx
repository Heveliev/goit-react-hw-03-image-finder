import { Item, Image } from "./GalleryItem.styled";
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import React from "react";


export class GalleryItem extends React.Component {
    state = {
        showModal: false,
    }
    

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }))
    }

    
    render() {
        const { img, user, urlBig } = this.props;
        const { showModal } = this.state;

        return (
            <Item >
                <Image onClick={this.toggleModal}  src={img} alt={`image${user}`} />
                {showModal && <ModalWindow onClose={this.toggleModal}><img src={urlBig} alt={user} /></ModalWindow>}
            </Item>
        )
    }
}
