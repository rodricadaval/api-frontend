import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultPhoto from '../images/playerDefault.png';
import Image from 'react-bootstrap/Image';
import './PhotoPlayer.css'

class PhotoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    defaultPhotoPlayer(photo) {
        if (photo != null) {
            return 'data:image/jpeg;base64,' + photo;
        } else {
            return defaultPhoto;
        }
    }

    render() {

        return (
            <>
                <Button variant="light" onClick={this.handleShow}>
                    <Image className="photo" src={this.defaultPhotoPlayer(this.props.photo)} rounded></Image>
                </Button>

                <Modal size="sm" show={this.state.show} onHide={this.handleClose} aria-labelledby="example-modal-sizes-title-sm">
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Img variant="top" src={this.defaultPhotoPlayer(this.props.photo)} />
                        </Card>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

} export default PhotoPlayer;