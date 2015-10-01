import React, {Component, PropTypes} from 'react';
import {Glyph, Pill, Card, Modal, ModalFooter, ModalHeader, Button, ModalBody} from 'elemental';
import AppointmentForm from '../Modal/AppointmentForm';
import Appointment from '../Modal/Appointment';
// import glyphStyle from 'styles/Glyph.less';
import pillStyle from 'styles/Pill.less';
// import cardStyle from 'styles/Card.less';
import modalStyle from 'styles/Modal.less';
// import buttonStyle from 'styles/Button.less';


export default class FirstAvailableButton extends Component {
	state = {
		modalIsOpen: false
	}

	toggleModal(visible) {
		this.setState({
			modalIsOpen: visible
		});
	}

	render() {
		var Day = this.props.day;
		var Time = this.props.time;
		var Practitioner = this.props.practitioner;
		var PracticeAddress = "TODO: Autopopulate from practice card" //this.props.practice.address;

		var Time = this.props.firstAvailableDate;


		var headerTitleStyle = {color: "#FFFFFF",
								textAlign:"center",
								fontColor:"#009999",
								fontFamily: "Roboto, Arial, sans-serif",
								fontSize:"30"};

		var headerTextStyle = {color: "#FFFFFF",
								textAlign:"left",
								fontColor:"#009999",
								fontFamily: "Roboto, Arial, sans-serif",
								fontStyle: "bold",
								fontWeight: "200",
								fontSize:"20"};
		return (
			<div>
			<Modal style={modalStyle} isOpen={this.state.modalIsOpen} onCancel={this.toggleModal.bind(this, false)} backdropClosesModal>
				<ModalHeader showCloseButton onClose={this.toggleModal.bind(this, false)}>
				        <div style={{background:"#00ACC1", width:"100%", height:"200px", borderRadius:"5", overflow:"hidden"}}>
				        	<div style={{padding: "10px"}}>
				        		<p style={headerTitleStyle}>Book an appointment with Dr. TODO: Autopopulate</p>
				        		<p style={headerTextStyle}>Date: TODO: Autopopulate</p>
				        		<p style={headerTextStyle}>Time: TODO: Autopopulate</p>
				        		<p style={headerTextStyle}>Where: TODO: Autopopulate</p>
				        	</div>
				       	</div>
				</ModalHeader>
				<ModalBody><Appointment /></ModalBody>
			</Modal>
			<Pill style={pillStyle} size="lg" label={Time} type="success-inverted" onClick={this.toggleModal.bind(this, true)} />
			</div>
		);
	}
}

