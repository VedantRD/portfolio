import myInfo from '../assets/myInfo.json'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import variables from '../styles/export_variables.module.scss';

const Experience = () => {

    const myBoxShadow = "0 3px 0 " + variables.primaryColor.toString();

    return (
        <div className='page-container'>
            <div className='w-100'>
                <>
                    <h1 className='header-1 text-center'>Work Experience</h1>
                    <div className='w-100 d-flex justify-content-center mb-5 mt-3'>
                        <div className='my-hr'></div>
                    </div>
                    <p className='text text-center mb-5 mt-3'>
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </p>
                    {myInfo && myInfo.experience &&
                        <VerticalTimeline>
                            {myInfo.experience.map((company, ind) => {
                                return (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ backgroundColor: variables.pageBackgroundColorDark, color: variables.pageTextColor, boxShadow: myBoxShadow }}
                                        contentArrowStyle={{ borderRight: '7px solid', borderRightColor: variables.pageBackgroundColorDark }}
                                        date={company.year}
                                        // lineColor="blue"
                                        iconStyle={{ background: variables.pageBackgroundColor }}
                                        key={ind}
                                    // icon={<WorkIcon />}
                                    >
                                        <h3 className="vertical-timeline-element-title mb-2">{company.company_name}</h3>
                                        <h6 className="vertical-timeline-element-subtitle mb-3">{company.designation}</h6>
                                        <ul>
                                            {company.description_list.map((item, index) => {
                                                return (
                                                    <li className='text' key={index}>{item}</li>
                                                )
                                            })}
                                        </ul>
                                    </VerticalTimelineElement>
                                )
                            })}
                        </VerticalTimeline>
                    }
                </>
            </div>
        </div>
    )
}

export default Experience