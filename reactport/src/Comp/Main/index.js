import React from 'react';
import Work from '../projects';


const work  =   [

{
    id: 0,
    title: "run-buddy" ,
    languages: "HTML, Javascript, CSS" ,
    image:'images/Runbuddy.JPG' ,
    description: "A website that offers fitness training services.",
    github: "https://github.com/FrankShock/run-buddy" ,
    link: "https://lernantino.github.io/run-buddy/"
  },
  {
    id: 1,
    title:"Workdayplanner" ,
    languages:"HTML, Javascript, CSS" ,
    image: 'images/PlanSC1.jpg',
    description: "A useful app to plan your day. It allows you to save the information during the day." ,
    github: "https://github.com/FrankShock/Workdayplanner",
    link: "https://frankshock.github.io/Workdayplanner/"
  },
  {
    id: 2,
    title: "PokeParent" ,
    languages:"HTML, Javascript, CSS, Apis, " ,
    image: "images/pokeparentsc.JPG" ,
    description: "A Tamagotchi-like game with Pokémon characters that uses weather to change how you care for your pokemon." ,
    github: "https://github.com/hankhint/pokeparent",
    link: "https://hankhint.github.io/pokeparent/"
  },
  {
    id: 3,
    title: "Bestest Book Review Site Evers" ,
    languages: "JavaScript, LocalStorage, MySQL, NPM, HTML, CSS, Apis, Hanldebars.js, SequelizeORM " ,
    image: "images/Groupproject2.JPG" ,
    description: "A web application that allows our book lovers to review the Times Magazines top 50 books of all time. After being able to sign up and create a profile, you will be able to leave a custom review of any of these books in this list." ,
    github:"https://github.com/pardue95/One-team-to-rule-them-all" ,
    link: "https://bbrse.herokuapp.com/"
  },
  {
    id: 4,
    title: "COW Money Making" ,
    languages: "JavaScript, LocalStorage, MySQL, NPM, HTML, CSS, Apis,GraphQL , Mongoose, Node.js" ,
    image: "images/Cows.png" ,
    description: "A interactive online database of our consulting firm on helping Cows make money." ,
    github:"https://github.com/hankhint/group-project-3-gp-3-consulting" ,
    link: "https://hanksulting.herokuapp.com/"
  },




];


function Portfolio() {

    return(
      <section className="container">
          <hr></hr>
            <h2 id="portfolio"> Portfolio </h2>

            <Work work={work} />
            <hr></hr>
        </section>
    );
}

export default Portfolio;
