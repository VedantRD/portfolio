import myInfo from '../assets/myInfo.json'
import variables from '../styles/export_variables.module.scss';

const Contact = () => {
    return (
        <div className='page-container'>
            <div className='w-100 justify-content-between d-flex flex-column' style={{ minHeight: 'inherit' }}>
                {/* upper content */}
                <div>
                    <h1 className='header-1 text-center'>Reach Me At</h1>
                    <div className='w-100 d-flex justify-content-center mb-5 mt-3'>
                        <div className='my-hr'></div>
                    </div>
                    <p className='text text-center mb-5 mt-3'>
                        Feel free to contact me by any of the following and I will get back to you as soon as possible.
                    </p>
                    <h1 className="header-2 text-center mt-auto mb-5" style={{ fontSize: 35 }}>
                        <i className="bi bi-github px-2" style={{ color: variables.pageTextColor }}></i>
                        <i className="bi bi-instagram px-2" style={{ color: variables.pageTextColor }}></i>
                        <i className="bi bi-linkedin px-2" style={{ color: variables.pageTextColor }}></i>
                    </h1>
                    {/* {myInfo &&
                        <>
                            <div>
                                <h1 className='header-3'>Email:</h1>
                                <p className='text'>{myInfo.contact.email}</p>
                            </div>
                            <div>
                                <h1 className='header-3'>Phone:</h1>
                                <p className='text'>{myInfo.contact.phone}</p>
                            </div>
                        </>
                    } */}
                </div>
                {/* footer content */}
                <div>
                    {/* <h1 className='header-3 text-center'>You can connect with me at</h1> */}

                    <p className='text text-center'>Made with <i className='bi bi-heart-fill px-2 text-danger'></i> by Vedant</p>
                </div>
            </div>
        </div>
    )
}

export default Contact