import HireHound from '../assets/HireHound.png'
import ImperialDB from '../assets/ImperialDB.jpg'
import Pawesome from '../assets/Pawesome.png';
import DailyPlanner from '../assets/dailyPlanner.png';
import store from '../assets/store.png';
import Cloud from '../assets/cloud.jpg'


export const projectList = [
    {
        name: 'HireHound Job Board',
        image: HireHound,
        skills: ' JavaScript, Node.js, HTML, CSS, Bootstrap, Handlebars.js, MySQL, Chart.js',
        gitLink: 'https://github.com/trace-martin/HireHound-Job-Board',
        deployedLink: 'https://hire-hound.herokuapp.com/',
        description: 'On the hunt for a job? Hire Hound has you covered. Not only does the web application provide a thorough search engine, it allows the user to create its own profile to save job listings (including job description, company name, date posted and URL link).'
    },
    {
        name: 'Pawesome Fact Finder',
        image: Pawesome,
        skills: ' JavaScript, Node.js',
        gitLink: 'https://github.com/JasonDeLine/pawesome-fact-finder',
        deployedLink: 'https://jasondeline.github.io/pawesome-fact-finder/',
        description: 'This website was developed for pet owners to gather random fun and interesting facts pertaining to dogs or cats.'
    },
    {
        name: 'Daily Planner',
        image: DailyPlanner,
        skills: ' JavaScript, Node.js',
        gitLink: 'https://github.com/trace-martin/daily-planner-CHw.5.',
        deployedLink: 'https://trace-martin.github.io/daily-planner-CHw.5./',
        description: 'This is a simply work day scheduler. Users are able to write and delete task for each time slot throughout the day.'
    },
    {
        name: 'Imperial Employee DB',
        image: ImperialDB,
        skills: ' JavaScript, Node.js, inquirer, MySQL, dotenv, console.table',
        gitLink:'https://github.com/trace-martin/Imperial-Employee-DB',
        description: 'This application was designed to view departments, roles, and employee information for those that work for the Empire through the employee_db. By manipulating the data within the DB you are able to create (add), and update information as needed. Delete functionality will be implemented in the future.'

    },
    {
        name: 'Retail Back End build',
        image: store,
        skills: ' JavaScript, Node.js, MySQL, Express, Sequelize, dotenv, Insomnia',
        gitLink: 'https://github.com/trace-martin/Retail-Back-End',
        description: 'This is a backend database and app for an E-Commerce site. This project was built using a few frameworks/libraries/testing suite:'
    },
    {
        name: 'Social me up Mongo',
        image: Cloud,
        skills: ' JavaScript, Node.js, MongoDB, Express, Insomnia',
        gitLink: 'https://github.com/trace-martin/social-me-up-mongo',
        description: 'This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.'
    }
];

export function hasDeployedLink(project) {
    return project.deployedLink !== undefined && project.deployedLink !== null;
}