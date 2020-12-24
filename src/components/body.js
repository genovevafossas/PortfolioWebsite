import React from 'react';
import '../styles/components.scss';
// import screenshot from '../assets/website-screenshot.png';

export default function Body() {
    return(
        <div className="container py-3">
            <div className="tile is-ancestor">
                <div className="tile is-8 is-vertical">
                    <div className="tile is-vertical is-parent">
                        <div className="tile is-child box has-background-white-ter">
                            <p className="title">About me</p>
                            <p>
                                I’m a senior Burnett Honors Scholar at the University of Central Florida studying computer science.
                                My primary interests include software security, programming languages, and program analysis. Outside
                                of class, I participate in undergraduate research with <a href="https://paulgazzillo.com/">Dr. Paul Gazzillo</a> on
                                a project involving compilers for security. I also have experience as a front end developer through my two
                                summer internships with the Service Quotas team at Amazon Web Services. The best way to contact me is
                                through my email, as I check that far more often than any of my social media accounts.
                            </p>
                            <br/>
                            <p>
                                In my down time I love to illustrate, tinker with software, and read. I also started learning how
                                to rock climb and hope to continue when the pandemic settles down. I recently built my first desktop
                                computer and have been honing my JavaScript skills.
                            </p>
                        </div>
                        <div className="tile is-child box has-background-white-ter">
                            <p className="title">Experience</p>
                            <span className="headline-large">Undergraduate Research Assistant - </span>
                            <span className="sub-headline-large">University of Central Florida (October 2019 - Present)</span>
                            <ul>
                                <li>
                                    Implemented modifications to LLVM’s register allocator to support a side-channel free architecture.
                                    Tasks included adding an instruction to LLVM, modifying the register allocator’s
                                    source code, and modifying source to source transformation programs to perform custom transformations.
                                </li>
                            </ul>
                            <span className="headline-large">Software Development Intern - </span>
                            <span className="sub-headline-large">Amazon Web Services (May 2020 - August 2020)</span>
                            <ul>
                                <li>
                                    Developed an AWS Service Quotas widget for integration into other AWS Consoles. The final
                                    JavaScript widget provided a more convenient experience for current Service Quotas customers
                                    by displaying the values of each customer’s quotas.
                                </li>
                            </ul>
                            <span className="headline-large">AFE Software Development Intern - </span>
                            <span className="sub-headline-large">Amazon Web Services (May 2019 - August 2019)</span>
                            <ul>
                                <li>
                                    Built a baseline for an internal console that aimed to make on-boarding to and management
                                    of information on AWS Service Quotas easier for new and existing AWS services. The console lists
                                    services on-boarded, their quotas, and details about the listed quotas.
                                </li>
                            </ul>
                        </div>
                        <div className="tile is-child box has-background-white-ter">
                            <p className="title">Recent Project(s)</p>
                            <p className="headline-large">OpenJML</p>
                            <p>
                                I currently work with four other classmates on adding string verification to <a href="https://www.openjml.org/">OpenJML</a>. OpenJML is a tool that helps Java
                                developers to formally verify Java code, making the process of developing secure code easier. Our work mostly focuses on
                                adding support for SMTLIB strings into OpenJML. This project is part of my group's senior design curriculum.
                            </p>
                            <br/>
                            <p className="headline-large">EK400</p>
                            <p>
                                I recently created a successor to my first discord bot <a href="https://github.com/genovevafossas/GlitchBot">GlitchBot</a>.
                                This new bot, called <a href="https://github.com/genovevafossas/EK400">EK400</a>,
                                includes “days since” boards that display how many days have passed since a user-provided date.
                                These boards are implemented as objects in an enmap, and both multi-member server-wide boards and 
                                personal DM boards are supported. In the future, I plan to add self-serve role management,
                                random image commands, and some bot responses for phrases that aren’t directed toward the bot.
                                Instructions on how to use the bot in your own server are provided in the <a href="https://github.com/genovevafossas/EK400/blob/master/README.md">README</a>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child box has-background-white-ter">
                        <p className="title">Education</p>
                        <p className="headline-small"> Bachelor of Science, Computer Science</p>
                        <p>
                            University of Central Florida, 2017-2021
                            <ul>
                                <li>Burnett Honors Scholar</li>
                                <li>Member of ACM-W, Hack@UCF</li>
                            </ul>
                        </p>
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
                        <p className="title"> Courses (Spring 2021)</p>
                        <ul>
                            <li>Biology 2</li>
                            <li>Senior Design 2</li>
                            <li>Graduate Operating Systems Design Principles</li>
                            <li>Statistical Methods 1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
