import React from 'react';

//styles
import './box.scss';

const Box = props => {

    const className = {
        box: `box`,
        color: props.color && 'box-color',
        fullheight: props.fullheight && 'box-fullheight',
    }

    return (
        <div className={Object.values(className).join(' ')}>
            {props.children}
        </div>
    )
}

export default Box;