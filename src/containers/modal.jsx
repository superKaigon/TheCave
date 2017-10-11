import React, { Component } from 'react'
import {
    unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
    unmountComponentAtNode
} from 'react-dom';

class Modal extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div')
        this.modalTarget.className = 'modal'
        document.body.appendChild(this.modalTarget)
        this._render();
    }

    componentWillUpdate() {
        this._render();
    }

    componentWillUnmount() {
        unmountComponentAtNode(this.modalTaget)
        document.body.removeChild(this.modalTagert)
    }

    _render() {
        renderSubtreeIntoContainer(
            this,
            (
                <div>
                    {this.props.children}
                </div>
            ),
            this.modalTarget,
        );
    }

    render() {
        return <noscript />
    }
}

export default Modal