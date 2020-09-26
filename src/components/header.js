import React from 'react';
import '../styles/components.scss';
import icon from '../assets/icon.jpg';
import { FaGithubSquare, FaEnvelopeSquare, FaLinkedin, FaTwitterSquare, FaFileDownload } from 'react-icons/fa'

export const author = {
    name: 'Genoveva Fossas',
    tagline: 'Undergraduate Research Assistant @ UCF',
    email: 'genofossas@gmail.com',
    socials: {
        twitter: 'gfossas',
        linkedin: 'gfossas',
        github: 'genovevafossas'
    }
}

export default function Header() {
    return (
        <section className="hero gradient-bg is-dark">
            <div className="hero-body">
                <div className="header">
                    <img className="icon" src={icon} alt="Genoveva"/>
                    <section className="section has-text-justified">
                        <div className="container">
                            <h1 className="title is-2">{author.name}</h1>
                            <h2 className="subtitle is-4">{author.tagline}</h2>
                        </div>
                        <div className="container pt-2">
                            <a 
                                className="icon-link"
                                href={`mailto:${author.email}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaEnvelopeSquare className="social-icon" size="2.75em"/>
                            </a>
                            <a 
                                className="icon-link" 
                                href={`https://github.com/${author.socials.github}`}
                                rel="noreferrer" 
                                target="_blank"
                            >
                                <FaGithubSquare className="social-icon" size="2.75em"/>
                            </a>
                            <a 
                                className="icon-link"
                                href={`https://linkedin.com/in/${author.socials.linkedin}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaLinkedin className="social-icon" size="2.75em"/>
                            </a>
                            <a 
                                className="icon-link"
                                href={`https://twitter.com/${author.socials.twitter}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaTwitterSquare className="social-icon" size="2.75em"/>
                            </a>
                            <a
                                className="icon-link"
                                href={`${document.location.host}/Resume.pdf`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <button className="button">
                                    <FaFileDownload style={{marginRight:7}} size="1.4em"/>
                                    <span className="button-text">Resume PDF</span>
                                </button>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}