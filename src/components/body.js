import React from 'react';
import '../styles/components.scss';
import screenshot from '../assets/website-screenshot.png';

export default function Body() {
    return(
        <div className="container py-3">
            <div className="tile is-ancestor">
                <div className="tile is-8 is-vertical">
                    <div className="tile is-vertical is-parent">
                        <div className="tile is-child box has-background-white-ter">
                        <p className="title">About me</p>
                        <p>
                            A senior Burnett Honors College member and Grace Hopper Conference student scholarship recipient
                            pursuing a Bachelor’s in computer science at the University of Central Florida. Primary interests
                            include software security, programming languages, and program analysis. I normally work on side 
                            channel mitigation under <a href="https://paulgazzillo.com/">Dr. Paul Gazzillo</a> as an undergraduate
                            research assistant, but I am currently spending the summer as a remote intern at AWS on the AWS
                            Service Quotas team. I fully anticipate to return to research with Dr. Gazzillo in the upcoming fall.
                        </p>
                        </div>
                        <div className="tile is-child box has-background-white-ter">
                            <p className="title">Recent Project(s)</p>
                            <p>
                                Recently I undertook the project of rewriting my website in React with Gatsby and Bulma. You're
                                looking at the product of that right now, in fact. :) My last website was a static website generated
                                with Jekyll and a pre-made theme. This rewrite was a great learning experience,
                                and let me explore html and css more than I had previously. For reference, I included a screenshot of
                                my old website below. You can also see the source code of this website over on my GitHub.
                            </p>
                            <img className="centered-image" src={screenshot} alt="Screenshot of old website."/>
                        </div>
                        <div className="tile is-child box has-background-white-ter">
                            <p className="title">Experience</p>
                            <span className="headline-large">Sofware Development Intern - </span>
                            <span className="sub-headline-large">Amazon Web Services (May 2020 - Present)</span>
                            <ul>
                                <li>
                                    Working with the AWS Service Quotas team to make a widget that aims to bring the
                                    Service Quotas experience to other AWS Consoles.
                                </li>
                            </ul>
                            <span className="headline-large">Undergraduate Research Assistant - </span>
                            <span className="sub-headline-large">University of Central Florida (October 2019 - Present)</span>
                            <ul>
                                <li>
                                    Working on modifications to LLVM’s register allocator to support a side-channel free 
                                    architecture under Dr. Paul Gazzillo.
                                </li>
                            </ul>
                            <span className="headline-large">AFE Software Development Intern - </span>
                            <span className="sub-headline-large">Amazon Web Services (May 2019 - August 2019)</span>
                            <ul>
                                <li>
                                    Built a baseline for an internal console that aimed to make on-boarding to and management
                                    of information on AWS Service Quotas easier for new and existing AWS services.
                                </li>
                                <li>
                                    Console was built in JavaScript and React.js with an internal library of pre-styled React
                                    components and served in a serverless architecture.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child box has-background-white-ter">
                        <p className="title">Education</p>
                        <p className="headline-small"> Bachelor of Science, Computer Science</p>
                        <p>University of Central Florida, 2017-2021</p>
                    </div>
                    <div className="tile is-child box has-background-white-ter">
                        <p className="title">Skills</p>
                        <p>
                            Not included here is my familiarity with Linux and Git, as well as
                            some prior experience with Java's Swing framework.
                        </p>
                        <br/>
                        <span className="progress-text-left">C</span>
                        <span className="progress-text-right">Very Proficient</span>
                        <progress className="progress is-large" value="90" max="100">90%</progress>

                        <span className="progress-text-left">Java</span>
                        <span className="progress-text-right">Proficient</span>
                        <progress className="progress is-large" value="75" max="100">75%</progress>

                        <span className="progress-text-left">JavaScript</span>
                        <span className="progress-text-right">Familiar</span>
                        <progress className="progress is-large" value="60" max="100">60%</progress>

                        <span className="progress-text-left">React.js</span>
                        <span className="progress-text-right">Familiar</span>
                        <progress className="progress is-large" value="60" max="100">60%</progress>

                        <span className="progress-text-left">C++</span>
                        <span className="progress-text-right">Prior Experience</span>
                        <progress className="progress is-large" value="30" max="100">30%</progress>

                        <span className="progress-text-left">TypeScript</span>
                        <span className="progress-text-right">Prior Experience</span>
                        <progress className="progress is-large" value="25" max="100">25%</progress>
                        <br/>
                    </div>
                    <div className="tile is-child box has-background-white-ter">
                        <p className="title"> Courses (Fall 2020)</p>
                        <ul>
                            <li>Senior Design 1</li>
                            <li>Statistics 1</li>
                            <li>Digital Forensics</li>
                            <li>Physics 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
