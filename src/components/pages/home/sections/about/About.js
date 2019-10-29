import React from 'react';
import Section from '../../../Section';
import SendEmail from './SendEmail';
import { Row, Col } from 'reactstrap';

export default function About(props) {
    const aboutContent =

        (<React.Fragment>
            <Row>
                <Col xs="6" className="about-col-6" id="text-about">
                    <p> Hi! My name is Sveta and this is my story.</p>
                    <p>
                        I love web development and want to do it for a job. How did I get there? It all started as a hobby. Doing various online courses and code katas I eventually realised that I would like to do it full time. So, I started looking at job openings and see what gaps did I have in my knowledge. Luckily, having more than 5 years of experience as a QA Engineer I have quite a lot of experience with the software development life cycle, agile practices and working in a team. Therefore I focused on my web development skills and now I am feeling much more confident working with HTML, JavaScript, CSS, Bootstrap, React, Git, Nodejs and even MongoDB. Thanks to my previous job, I deeply understand what quality and customer focus means. In retrospective, I think I chose that job because I like solving puzzles, getting to the bottom of the bug and understanding its root cause. What I didn't know is that programming puzzles are much more fun to solve. To be fair, I never thought that I would enjoy web development so much and if someone told me that, I would probably say "me? yeah, right...". But here I am now, one step from starting my successful career in web development.
                    </p>
                    <p> One the social side, I like travelling and socks with funny patterns.</p>
                </Col>
                <Col xs="6" className="about-col-6" id="send-message-about">
                    <Row>
                        <Col xs="12">
                            <h3>Send me a message</h3>
                            <p>If you have any questions I would be glad to answer!</p>
                            <SendEmail />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>);

    return (
        <Section sectionId="about" name="About me" content={aboutContent} />
    );
}