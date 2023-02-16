import img1 from "../assets/project-images/onion-man.png";
import img2 from "../assets/project-images/megame.png";
import img3 from "../assets/project-images/perfect-cup.png";
import img4 from "../assets/project-images/techTalk.png";
import img5 from "../assets/project-images/work-day-scheduler.png";
import img6 from "../assets/project-images/popular-bike-station-chicago.png";

export const projectData = [
    {
        id: 1,
        title: "Onion Man",
        description: "A MERN stack app where users share their simple onion recipes. It is connected to the MongoDB Atlas cloud database and is equipped with Google Identity Services for user's authentication.",
        repoURL: "https://github.com/MANDYTSANG007/onion-man",
        // imagePath: "https://github.com/MANDYTSANG007/mt-portfolio/blob/main/src/assets/project/onion-man.png",
        imagePath: img1,
        tools: ["MongodbAtlas", "Node.js", "React", "Mui", "Netlify", "Google Identity Service" ],
    },
    {
        id: 2,
        title: "MeGame",
        description: "Play and have fun with this interactive game with React. The game will start all over if an image is clicked more than once.",
        repoURL: "https://github.com/MANDYTSANG007/onion-man",
        // imagePath: "https://github.com/MANDYTSANG007/mt-portfolio/blob/main/src/assets/project/megame.png",
        imagePath: img2,
        tools: ["React", "Node.js", "Bootstrap" ],
    },
    {
        id: 3,
        title: "Perfect Cup - A Coffee App.",
        description: "A coffee shop application that promotes ingredient transparency. This app. provides an informative platform for coffee lovers to create their Perfect Cup.",
        repoURL: "https://github.com/MChambersIV/Perfect-Cup",
        // imagePath: "https://github.com/MANDYTSANG007/mt-portfolio/blob/main/src/assets/project/perfect-cup.png",
        imagePath: img3,
        tools: ["Express", "MySQL", "Sequelize" ],
    },
    {
        id: 4,
        title: "TechTalk - A Developer Tech Blog",
        description: "TechTalk is built using Model-View-Controller(MVC), a software architectual framework, and an Object-relational mapping(ORM) programming technique. Developers can publish their blog posts in this platform.",
        repoURL: "https://github.com/MANDYTSANG007/Developers-Tech-Blog",
        // imagePath: "https://github.com/MANDYTSANG007/mt-portfolio/blob/main/src/assets/project/techTalk.png",
        imagePath: img4,
        tools: ["Express", "Handlebars", "Heroku", "Sequelize" ],
    },
    {
        id: 5,
        title: "Work-Day-Scheduler",
        description: "A single-day planner that helps you organize your schedules better.",
        repoURL: "https://github.com/MANDYTSANG007/Work-Day-Scheduler",
        // imagePath: "https://github.com/MANDYTSANG007/mt-portfolio/blob/main/src/assets/project/work-day-scheduler.png",
        imagePath: img5,
        tools: ["Bootstrap", "jQuery", "Moment.js" ],
    },
    {
        id: 6,
        title: "Cyclistic Case Study",
        description: "A big data analytics case study for Cyclistic, a bike share company in Chicago.",
        repoURL: "https://github.com/MANDYTSANG007/cyclistic_case_study",
        // imagePath: "https://github.com/MANDYTSANG007/cyclistic_case_study/blob/main/image/popular-bike-station-chicago.png",
        imagePath: img6,
        tools: ["SQL", "R", "RStudio" ],
    },
]