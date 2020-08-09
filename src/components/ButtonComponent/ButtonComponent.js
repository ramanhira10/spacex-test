import React from 'react';
import './styles.css';

const ButtonComponent = props => {

    return (
        <button onClick={() => {
            if (props.getFilterYear) {
                props.getFilterYear(props.children);
            }

            if (props.isLaunchedSuccessfully) {
                props.isLaunchedSuccessfully(props.children);
            }
        }}>{props.children}</button>
    );
};

export default ButtonComponent;