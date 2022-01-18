import React from 'react'

const progressBar = (props) => {
    const { skills } = props;

    return (
        <li key={skills.name} className='itemProgress'>
            <span>{skills.name}</span>
            <span className={'progress progress'+skills.exp}></span>
        </li>
    )
}

export default progressBar
