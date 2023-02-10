import { Badge, Col, Row } from 'react-bootstrap'
import myInfo from '../assets/myInfo.json'

const About = () => {
    return (
        <div className='page-container-dark'>
            <div className='w-100'>
                <h1 className='header-1 text-center'>About Me</h1>
                <div className='w-100 d-flex justify-content-center mb-5 mt-3'>
                    <div className='my-hr'></div>
                </div>
                <p className='text text-center mb-5 mt-3'>
                    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </p>
                {myInfo &&
                    <Row className='gx-5'>
                        <Col className='mb-3 mb-md-0'>
                            <h1 className='header-2 mb-3 mb-md-5'>Get to know me!</h1>
                            <p className='text mb-3'>{myInfo.about.intro}</p>
                            <p className='text'>
                                I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                            </p>
                            <p className='text'>
                                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                            </p>
                            <p className='text'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                            </p>
                        </Col>
                        <Col>
                            <h1 className='header-2 mb-3 mb-md-5'>Skills</h1>
                            <div className='d-flex flex-wrap'>
                                {myInfo.about.skills.map((item, index) => {
                                    return (
                                        <Badge className='me-3 mb-3 p-2' bg='secondary' key={index}>
                                            <span className='header-3'>{item}</span>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                }
            </div>
        </div>
    )
}

export default About