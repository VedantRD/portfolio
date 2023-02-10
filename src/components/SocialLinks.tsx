import variables from '../styles/export_variables.module.scss';

const SocialLinks = () => {
    return (
        <div className="social-icons-container">
            <div className='social-icons-div'>
                <i className="bi bi-github mb-2 social-icon" style={{ color: variables.pageTextColor }}></i>
                <i className="bi bi-instagram mb-2 social-icon" style={{ color: variables.pageTextColor }}></i>
                <i className="bi bi-linkedin mb-2 social-icon" style={{ color: variables.pageTextColor }}></i>
            </div>
            <div className="my-vr"></div>
        </div>
    )
}

export default SocialLinks