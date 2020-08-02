import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonEnhanced from '../buttonEnhanced/buttonEnhanced.jsx';

export default class Confirmation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirming: false,
            isCanceling: false
        };

        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    onConfirmClick() {
        this.setState({isConfirming: true});

        this.props.onDone(true);

        this.setState({isConfirming: false});
    }

    onCancelClick() {
        this.setState({isCanceling: true});

        this.props.onDone(false);

        this.setState({isCanceling: false});
    }

    render() {
        return (
            <div id="confirmationContainer">
                <p>{this.props.text}</p>
                <br/>
                <ButtonEnhanced buttonOptions={{id: "btnConfirm",
                                                isAction: this.state.isConfirming,
                                                regularText: this.props.confirmButtonText,
                                                actionText: this.props.confirmButtonActionText,
                                                className: "btn btn-success btn-block btn-sm",
                                                type: "button",
                                                onClick: this.onConfirmClick}}
                />
                <br/>
                <ButtonEnhanced buttonOptions={{id: "btnCancel",
                                                isAction: this.state.isCanceling,
                                                regularText: this.props.cancelButtonText,
                                                actionText: this.props.cancelButtonActionText,
                                                className: "btn btn-danger btn-block btn-sm",
                                                type: "button",
                                                onClick: this.onCancelClick}}
                />
            </div>
        );
    }
}

Confirmation.propTypes = {
    title: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    confirmButtonText: PropTypes.string,
    confirmButtonActionText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    cancelButtonActionText: PropTypes.string,

    onDone: PropTypes.func
};
