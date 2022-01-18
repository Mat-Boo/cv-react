import React, { useState } from 'react'

const PortfolioCard = (props) => {
    const { project } = props;

    let [showDetails, setShowDetails] = useState(false);
    const displayDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li key={project.id} className='cardProject'>           
            <ul className='languagesIcon'>
                {project.languagesIcon.map((languageIcon) => {
                    return (
                        <li key={languageIcon}>
                            <img src={languageIcon} alt='languageIcon' className='languageIcon'/>     
                        </li>
                    )
                })}
            </ul>
            <h4 onClick={displayDetails}>{project.name}</h4>
            <img src={project.image} alt={'project'+project.id}  onClick={displayDetails} className='projectPicture'/>
            <span onClick={displayDetails}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </span>
                { 
                    showDetails && (
                        <div className='details'>
                            <div className='lineUp'>
                                <h4 className='detailTitle'>{project.name}</h4>
                                <a href={project.source} target="_blank" rel="noreferrer" className='source'>Code Source</a>
                            </div>
                            <p className='description'>{project.description}</p>
                            <a className='backPage' onClick={displayDetails}>Retourner sur la page</a>
                        </div>
                    )
                }
        </li>
    )
}

export default PortfolioCard
