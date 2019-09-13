import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import './ButtonPanel.css';
import Button from "./Button";

class ButtonPanel extends Component {
	static propTypes = {
		clickHandler: PropTypes.func
	}

	handleClick = buttonName => {
		this.props.clickHandler(buttonName);
	}

	render(){
		return (
			<div className="component-button-panel">
				<div>
					<Button clickHandler = {this.handleClick} name='AC'/>
					<Button clickHandler = {this.handleClick} name='+/-'/>
					<Button clickHandler = {this.handleClick} name='%'/>
					<Button clickHandler = {this.handleClick} name='÷' orange/>
				</div>
				<div>
					<Button clickHandler = {this.handleClick} name='7'/>
					<Button clickHandler = {this.handleClick} name='8'/>
					<Button clickHandler = {this.handleClick} name='9'/>
					<Button clickHandler = {this.handleClick} name='x' orange/>
				</div>
				<div>
					<Button clickHandler = {this.handleClick} name='4'/>
					<Button clickHandler = {this.handleClick} name='5'/>
					<Button clickHandler = {this.handleClick} name='6'/>
					<Button clickHandler = {this.handleClick} name='-' orange/>
				</div>
				<div>
					<Button clickHandler = {this.handleClick} name='1'/>
					<Button clickHandler = {this.handleClick} name='2'/>
					<Button clickHandler = {this.handleClick} name='3'/>
					<Button clickHandler = {this.handleClick} name='+' orange/>
				</div>
				<div>
					<Button clickHandler = {this.handleClick} name='0' wide/>
					<Button clickHandler = {this.handleClick} name='.'/>
					<Button clickHandler = {this.handleClick} name='=' orange/>
				</div>
			</div>
		);
	}
}

export default ButtonPanel;
