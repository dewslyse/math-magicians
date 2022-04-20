/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
    render() {
        const { className, id, text } = this.props;

        return (
            <button type="button" className={className} id={id}>
                {text}
            </button>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Button;
