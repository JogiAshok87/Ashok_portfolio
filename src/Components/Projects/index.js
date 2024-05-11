import './index.css'

const Projects = () =>{
    return(
        <div className='projects-section'>
            <h2>Latest <span>Projects</span></h2>
            <div className='projects-container'>
                <div className='project-card'>
                    <img src="/projects/foodmunch.png" alt="food_munch_img"/>
                    <div className='project-layer'>
                        <h1>Food Munch</h1>
                        <p>A responsive website that lets you browse through a wide range of food items with ease</p>
                        <a href="https://xfoodmunch.ccbp.tech/" target="_blank" rel="noopener noreferrer"><i className='fa-solid fa-up-right-from-square arrow-icon'></i></a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="/projects/todo.png" alt="todo_app_img"/>
                    <div className='project-layer'>
                        <h1>Todos Application</h1>
                        <p>Todo application is similar to the goggle Keep.it helps users to organize the task</p>
                        <a href="https://ashoktodosapp1.ccbp.tech/" target="_blank" rel="noopener noreferrer"><i className='fa-solid fa-up-right-from-square arrow-icon'></i></a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="/projects/jobbyApp.png" alt="jobbyApp_img"/>
                    <div className='project-layer'>
                        <h1>Jobby App</h1>
                        <p>jobby App is similar to the Linkedin, where it helps to find the jobs.</p>
                        <a href="https://1jobbyapp.ccbp.tech/" target="_blank" rel="noopener noreferrer"><i className='fa-solid fa-up-right-from-square arrow-icon'></i></a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="/projects/wikipedia.png" alt="wikipedia_img"/>
                    <div className='project-layer'>
                        <h1>Wikipedia Search Application</h1>
                        <p>A Wikipedia search application allows users to easily access a vast repository of knowledge covering a wide range of topics</p>
                        <a href="https://ashokwikipedia1.ccbp.tech/" target="_blank" rel="noopener noreferrer"><i className='fa-solid fa-up-right-from-square arrow-icon'></i></a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="/projects/Ecommerce.png" alt="wikipedia_img"/>
                    <div className='project-layer'>
                        <h1>Ecommerce App</h1>
                        <p>An ecommerce application revolutionizes the way people shop by providing a convenient platform for purchasing goods and services online</p>
                        <a href="https://1EcommerceApp.ccbp.tech" target="_blank" rel="noopener noreferrer"><i className='fa-solid fa-up-right-from-square arrow-icon'></i></a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="/projects/IPL.png" alt="wikipedia_img"/>
                    <div className='project-layer'>
                        <h1>IPL Dashboard</h1>
                        <p>An IPL dashboard application offers cricket enthusiasts real-time updates, statistics, and insights during Indian Premier League matches</p>
                        <a href="https://1IPLDashboard.ccbp.tech" target="_blank" rel="noopener noreferrer"><i className='fa-solid fa-up-right-from-square arrow-icon'></i></a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="/projects/taskManager.png" alt="wikipedia_img"/>
                    <div className='project-layer'>
                        <h1>Task Manager Application</h1>
                        <p>TaskManager Application allows you to organize your tasks, set reminders, and prioritize your workload with ease</p>
                        <a href="https://taskmanagerapplication.vercel.app/" target="_blank" rel="noopener noreferrer"><i className='fa-solid fa-up-right-from-square arrow-icon'></i></a>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Projects