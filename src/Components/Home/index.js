
import './index.css'



const Home = () =>{
    return(
        <div className='home-bg'>
            <div className='home-content'>
            <h1 className='heading1'>Hello, I am</h1>
            <h1 className='heading2'>Jogi Ashok</h1>
            <h1 className='heading3'>I'm a <span>Full stack developer</span></h1>
            <p className='para'>Buliding Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality</p>
            <div className='icons'>
                <a href="https://www.linkedin.com/in/ashok-jogi" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in linkedin-icon"></i></a>
                <a href="https://github.com/JogiAshok87" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-github github-icon'></i></a>
                <i className='fas fa-envelope github-icon'></i>
            </div>
            <a href="/Ashok_Resume.pdf" download="Ashok_Resume.pdf">
            <button class="btn">Download Resume <i className="fa-solid fa-download"></i></button>
            </a>
            
            </div>
            <div>
                <img src="https://res.cloudinary.com/dhtdkkae1/image/upload/v1711304197/WhatsApp_Image_2024-03-24_at_23.43.28_0affdac4_g2dr5f.jpg" alt="profile-img" className='profile-img'/>
            </div>
        </div>

    )
}

export default Home