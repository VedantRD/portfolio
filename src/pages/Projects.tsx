import { Card, Col, Row } from 'react-bootstrap'
import myInfo from '../assets/myInfo.json'

const Projects = () => {
    return (
        <div className='page-container-dark'>
            <div className='w-100'>
                <h1 className='header-1 text-center'>Projects</h1>
                <div className='w-100 d-flex justify-content-center mb-5 mt-3'>
                    <div className='my-hr'></div>
                </div>
                {myInfo &&
                    <Row>
                        {myInfo.projects.map(project => {
                            return (
                                <Col className='mb-3' sm={12} md={6} lg={6} xl={4}>
                                    <Card className='project-card h-100'>
                                        <Card.Body className='d-flex flex-column pb-0'>
                                            <div className='mb-3 d-flex justify-content-between align-items-center'>
                                                <i className='bi bi-folder project-icon text-primary'></i>
                                                <div>
                                                    {/* <i className="bi-github project-link-icon"></i> */}
                                                    <a className='project-link-a' href={project.link} target="_blank">
                                                        <i className="bi-box-arrow-up-right project-link-icon ms-3"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <h1 className='header-2 mb-3'>{project.name}</h1>
                                            <div className='mb-3'>
                                                {project.description_list.map(desc => {
                                                    return (
                                                        <p className='text'>
                                                            {desc}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                            <div className='mt-auto d-flex flex-wrap'>
                                                {project.technologies.map(item => {
                                                    return (
                                                        <span className='me-3 mb-3' style={{ opacity: 0.5 }}>
                                                            {item}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}

                    </Row>
                }
            </div>
        </div>
    )
}

export default Projects