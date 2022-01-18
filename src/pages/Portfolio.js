import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard'

const Portfolio = () => {
    const languages = ['JAVASCRIPT', 'CSS', 'REACT', 'PHP'];

    const projects = [
        {
            id: 1,
            name: 'ispsum.com',
            languages: ['JAVASCRIPT', 'CSS'],
            languagesIcon: ['./images/js.svg', './images/css.svg'],
            image: './images/project1.jpg',
            description: 'Ea nisi cupidatat sint dolore ad sint non proident incididunt culpa ut aliqua eiusmod anim. Mollit sint aliqua est laborum irure. Laborum Lorem est culpa duis commodo sint aute non reprehenderit ipsum elit duis ullamco. Quis et dolor dolore esse pariatur nostrud. Fugiat qui irure ex quis non veniam eiusmod elit nisi irure. Aute anim dolore laborum sunt.',
            source: 'https://github.com/'
        },
        {
            id: 2,
            name: 'lorem.fr',
            languages: ['JAVASCRIPT', 'REACT'],
            languagesIcon: ['./images/js.svg', './images/react.svg'],
            image: './images/project2.jpg',
            description: 'Ea nisi cupidatat sint dolore ad sint non proident incididunt culpa ut aliqua eiusmod anim. Mollit sint aliqua est laborum irure. Laborum Lorem est culpa duis commodo sint aute non reprehenderit ipsum elit duis ullamco. Quis et dolor dolore esse pariatur nostrud. Fugiat qui irure ex quis non veniam eiusmod elit nisi irure. Aute anim dolore laborum sunt.',
            source: 'https://github.com/'
        },
        {
            id: 3,
            name: 'dolorset.fr',
            languages: ['JAVASCRIPT', 'PHP', 'CSS'],
            languagesIcon: ['./images/js.svg', './images/php.svg', './images/css.svg'],
            image: './images/project3.jpg',
            description: 'Ea nisi cupidatat sint dolore ad sint non proident incididunt culpa ut aliqua eiusmod anim. Mollit sint aliqua est laborum irure. Laborum Lorem est culpa duis commodo sint aute non reprehenderit ipsum elit duis ullamco. Quis et dolor dolore esse pariatur nostrud. Fugiat qui irure ex quis non veniam eiusmod elit nisi irure. Aute anim dolore laborum sunt.',
            source: 'https://github.com/'
        },
        {
            id: 4,
            name: 'laboriosam.fr',
            languages: ['JAVASCRIPT', 'PHP', 'REACT'],
            languagesIcon: ['./images/js.svg', './images/php.svg', './images/react.svg'],
            image: './images/project4.jpg',
            description: 'Ea nisi cupidatat sint dolore ad sint non proident incididunt culpa ut aliqua eiusmod anim. Mollit sint aliqua est laborum irure. Laborum Lorem est culpa duis commodo sint aute non reprehenderit ipsum elit duis ullamco. Quis et dolor dolore esse pariatur nostrud. Fugiat qui irure ex quis non veniam eiusmod elit nisi irure. Aute anim dolore laborum sunt.',
            source: 'https://github.com/'
        },
        {
            id: 5,
            name: 'repudiante.com',
            languages: ['JAVASCRIPT', 'CSS'],
            languagesIcon: ['./images/js.svg', './images/css.svg'],
            image: './images/project5.jpg',
            description: 'Ea nisi cupidatat sint dolore ad sint non proident incididunt culpa ut aliqua eiusmod anim. Mollit sint aliqua est laborum irure. Laborum Lorem est culpa duis commodo sint aute non reprehenderit ipsum elit duis ullamco. Quis et dolor dolore esse pariatur nostrud. Fugiat qui irure ex quis non veniam eiusmod elit nisi irure. Aute anim dolore laborum sunt.',
            source: 'https://github.com/'
        },
        {
            id: 6,
            name: 'test.io',
            languages: ['JAVASCRIPT', 'REACT', 'CSS'],
            languagesIcon: ['./images/js.svg', './images/react.svg', './images/css.svg'],
            image: './images/project6.jpg',
            description: 'Ea nisi cupidatat sint dolore ad sint non proident incididunt culpa ut aliqua eiusmod anim. Mollit sint aliqua est laborum irure. Laborum Lorem est culpa duis commodo sint aute non reprehenderit ipsum elit duis ullamco. Quis et dolor dolore esse pariatur nostrud. Fugiat qui irure ex quis non veniam eiusmod elit nisi irure. Aute anim dolore laborum sunt.',
            source: 'https://github.com/'
        },
    ]

    const [selectedLanguage, setSelectedLanguage] = useState('JAVASCRIPT');

    return (
        <div className='portfolio'>
            <ul className='portfolioLanguages'>
               {languages.map((language) => {
                   return (
                       <li key={language} className='language'>
                            <input type='radio' id={language} name='languageSelect' value={language} checked={language === selectedLanguage} onChange={(event) => {setSelectedLanguage(event.target.value)}}/>
                            <label htmlFor={language}>{language}</label>
                        </li>
                   )
               })}
           </ul>
           <ul className='portfolioProjects'>
               {projects
                    .filter((project) => project.languages.includes(selectedLanguage))
                    .map((project) => {
                        return (
                            <PortfolioCard project={project} key={project.id}/>
                        )
                })}
           </ul>
        </div>
    )
}

export default Portfolio
