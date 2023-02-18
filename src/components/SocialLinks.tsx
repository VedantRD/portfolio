import variables from '../styles/export_variables.module.scss';
import myInfo from '../assets/myInfo.json'

const SocialLinks = () => {
    return (
        <div className="social-icons-container">
            <div className='social-icons-div'>
                <a className='social-icon-a mb-2' href={myInfo.contact.github} target="_blank">
                    <i className="bi bi-github social-icon" style={{ color: variables.pageTextColor }}></i>
                </a>
                <a className='social-icon-a mb-2' href={myInfo.contact.instagram} target="_blank">
                    <i className="bi bi-instagram social-icon" style={{ color: variables.pageTextColor }}></i>
                </a>
                <a className='social-icon-a mb-2' href={myInfo.contact.linkedin} target="_blank">
                    <i className="bi bi-linkedin social-icon" style={{ color: variables.pageTextColor }}></i>
                </a>
            </div>
            <div className="my-vr"></div>
        </div>
    )
}

export default SocialLinks