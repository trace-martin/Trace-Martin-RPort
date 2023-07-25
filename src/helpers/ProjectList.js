import { Store } from '@mui/icons-material';
import HireHound from '../assets/HireHound.PNG'
import ImperialDB from '../assets/ImperialDB.jpg'
import Pawesome from '../assets/Pawesome.PNG';
import DailyPlanner from '../assets/dailyPlanner.PNG';
import store from '../assets/store.png';
import Cloud from '../assets/cloud.jpg'


export const projectList = [
    {
        name: 'HireHound Job Board',
        image: HireHound,
        skills: ' JavaScript, Node.js, HTML, CSS, Bootstrap, Handlebars.js, MySQL, Chart.js',
        // gitLink: https://github.com/trace-martin/HireHound-Job-Board
        // deployed link: https://hire-hound.herokuapp.com/
        description: 'On the hunt for a job? Hire Hound has you covered. Not only does the web application provide a thorough search engine, it allows the user to create its own profile to save job listings (including job description, company name, date posted and URL link).'
    },
    {
        name: 'Imperial Employee DB',
        image: ImperialDB,
        skills: ' JavaScript, Node.js, inquirer, MySQL, dotenv, console.table',
        // Link:https://github.com/trace-martin/Imperial-Employee-DB
        description: 'This application was designed to view departments, roles, and employee information for those that work for the Empire through the employee_db. By manipulating the data within the DB you are able to create (add), and update information as needed. Delete functionality will be implemented in the future.'

    },
    {
        name: 'Pawesome Fact Finder',
        image: Pawesome,
        skills: ' JavaScript, Node.js',
        // git link: https://github.com/JasonDeLine/pawesome-fact-finder
        // deployed link: https://jasondeline.github.io/pawesome-fact-finder/
        description: 'This website was developed for pet owners to gather random fun and interesting facts pertaining to dogs or cats.'
    },
    {
        name: 'Daily Planner',
        image: DailyPlanner,
        skills: ' JavaScript, Node.js',
        // link: https://github.com/trace-martin/daily-planner-CHw.5.
        description: 'This is a simply work day scheduler. Users are able to write and delete task for each time slot throughout the day.'
    },
    {
        name: 'Retail Back End build',
        image: store,
        skills: ' JavaScript, Node.js, MySQL, Express, Sequelize, dotenv, Insomnia',
        // gitlink: https://github.com/trace-martin/Retail-Back-End
        description: 'This is a backend database and app for an E-Commerce site. This project was built using a few frameworks/libraries/testing suite:'
    },
    {
        name: 'Social me up Mongo',
        image: Cloud,
        skills: ' JavaScript, Node.js, MongoDB, Express, Insomnia',
        // link: https://github.com/trace-martin/social-me-up-mongo
        description: 'This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.'
    }
]