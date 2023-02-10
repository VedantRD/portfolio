import { Button } from 'react-bootstrap'
import myInfo from '../assets/myInfo.json'

const Home = () => {
    return (
        <div className='page-container d-flex align-items-center'>
            <div className='w-100'>
                <h5 className='header-3'>Hi, I am</h5>
                {myInfo &&
                    <>
                        <h1 className='main-title text-primary'>{myInfo.home.name}</h1>
                        <h5 className='header-2'>{myInfo.home.designation}</h5>
                        <p className='text'>{myInfo.home.intro}</p>
                        <Button className='text'>Resume</Button>
                    </>
                }
            </div>
        </div>
    )
}

export default Home