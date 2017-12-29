import React from 'react';

const Title = props => {
    return (
        <div>
            <h1>{props.title} - <span>Current elements {props.number}</span></h1>
        </div>
    );
}
export default Title;