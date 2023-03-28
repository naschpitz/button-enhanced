import React, { Component } from "react"
import PropTypes from "prop-types"
import Modal from "react-modal"
import _ from "lodash"

import Confirmation from "../confirmation/confirmation.jsx"

import "./buttonEnhanced.css"

const defaultStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxHeight: "85vh",
    width: "300px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  overlay: {
    zIndex: 10,
  },
}

export default class ButtonEnhanced extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.onDone = this.onDone.bind(this)

    this.state = {
      isOpen: false,
    }
  }

  onClick() {
    if (this.props.confirmationOptions) this.setState({ isOpen: true })

    const data = this.props.buttonOptions.data
    const onClick = this.props.buttonOptions.onClick

    if (onClick) onClick(data)
  }

  onDone(result) {
    if (this.props.confirmationOptions) this.setState({ isOpen: false })

    const data = this.props.buttonOptions.data
    const onDone = this.props.confirmationOptions.onDone

    if (onDone) onDone(result, data)
  }

  render() {
    let buttonOptions = _.clone(this.props.buttonOptions)

    const { isAction, actionText, regularText, ...buttonProperties } = buttonOptions

    buttonProperties.className += buttonOptions.isAction ? " disabled" : ""
    buttonProperties.className += buttonOptions.disabled ? " disabled" : ""

    buttonProperties.onClick = this.onClick

    let confirmationOptions = _.clone(this.props.confirmationOptions)

    if (confirmationOptions) confirmationOptions.onDone = this.onDone

    return (
      <React.Fragment>
        <button {...buttonProperties}>
          {isAction ? (
            <div>
              <div className="loaderSpinner loader-small" />
              {actionText}
            </div>
          ) : (
            <div>{regularText}</div>
          )}
          {this.props.children}
        </button>

        <Modal isOpen={this.state.isOpen} ariaHideApp={false} style={defaultStyle}>
          <Confirmation {...confirmationOptions} />
        </Modal>
      </React.Fragment>
    )
  }
}

ButtonEnhanced.propTypes = {
  confirmationOptions: PropTypes.object,
  buttonOptions: PropTypes.object,
}
