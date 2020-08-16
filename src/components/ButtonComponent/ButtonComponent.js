import React from 'react';
import {Button} from './styles'

const ButtonComponent = props => {

    return (
        <Button onClick={() => {
            if (props.getFilterYear) {
                props.getFilterYear(props.children);
            }

            if (props.isLaunchedSuccessfully) {
                props.isLaunchedSuccessfully(props.children);
            }
        }}>{props.children}</Button>
    );
};

export default ButtonComponent;