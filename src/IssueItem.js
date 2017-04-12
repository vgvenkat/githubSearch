import React from 'react';

const IssueItem=(props) => {
    return (
        <li><a href={props.url}>
            {props.title}</a>
        </li>
    )
}

export default IssueItem;