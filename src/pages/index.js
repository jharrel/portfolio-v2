import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

// Software
import chatapp from '../assets/software/ChatApp.png';
import eventfox from '../assets/software/eventfox.png';
import instaclone from '../assets/software/InstaClone.png';
import iphone from '../assets/software/Iphone.png';
import moviedb from '../assets/software/moviedb.png';
import mybooklist from '../assets/software/MyBookList.png';
import rb from '../assets/riverbandits/video/rb.png';
import sports from '../assets/software/sports.png';

// Motion Graphics
// import mrrobot from '../assets/motiongraphics/mrrobot.png';
import plane from '../assets/motiongraphics/Plane.png';

// Logos
import html from '../assets/logos/html5.png';
import bootstrap from '../assets/logos/bootstrap.png';
import css from '../assets/logos/css3.png';
import firebase from '../assets/logos/firebase.png';
import handlebars from '../assets/logos/handlebars.png';
import javascript from '../assets/logos/javascript.png';
import jquery from '../assets/logos/jquery.png';
import mongodb from '../assets/logos/mongodb.png';
import mysql from '../assets/logos/mysql.png';
import node from '../assets/logos/node.png';
import react from '../assets/logos/react.png';
import aftereffects from '../assets/logos/AfterEffects.png';
import illustrator from '../assets/logos/illustrator.png';
import indesign from '../assets/logos/indesign.png';
import xd from '../assets/logos/xd.png';
import premierepro from '../assets/logos/premierepro.png';

// Videos


import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="icons">
								<li><a href="https://www.linkedin.com/in/jasonharrel/" className="icon brands fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">Linkedin</span></a></li>
								<li><a href="https://www.github.com/jharrel" className="icon brands fa-github" target="_blank" rel="noopener noreferrer"><span className="label">Github</span></a></li>
                <li><a href="mailto: jason@jharrel.design" className="icon solid fa-envelope" target="_blank" rel="noopener noreferrer"><span className="label">Email</span></a></li>
        </ul>

        <a href="https://drive.google.com/open?id=14Dxl_1y0WsGENXX1QgfPAPC31Dztf7Su" className="button primary" target="_blank" rel="noopener noreferrer">
               View my resume
              </a>

        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              {/* <a href="/#" className="button primary">
                Explore
              </a> */}
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Programming languages I am familiar with
          </h2>
        </header>
        <ul className="icons major">
          <li>
            <img src={html} alt="" />
          </li>
          <li>
            <img src={css} alt="" />
          </li>
          
          <li>
            <img src={javascript} alt="" />
          </li>
          
          <li>
            <img src={mysql} alt="" />
          </li>
          <li>
            <img src={firebase} alt="" />
          </li>
          <li>
            <img src={node} alt="" />
          </li>
          <li>
            <img src={handlebars} alt="" />
          </li>
          <li>
            <img src={jquery} alt="" />
          </li>
        </ul>
      </div>

      <header className="major">
          <h2>
            Programming languages I am familiar with
          </h2>
        </header>
        <ul className="icons major">
          <li>
            <img src={bootstrap} alt="" />
          </li>
          <li>
            <img src={react} alt="" />
          </li>
          <li>
            <img src={mongodb} alt="" />
          </li>
        </ul>

      <div className="inner">
        <header className="major">
          <h2>
            Design programs I am skilled with
          </h2>
        </header>

        <ul className="icons major">
          <li>
            <img src={premierepro} alt="" />
          </li>
          <li>
            <img src={aftereffects} alt="" />
          </li>
          <li>
            <img src={illustrator} alt="" />
          </li>
          <li>
            <img src={indesign} alt="" />
          </li>
          <li>
            <img src={xd} alt="" />
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={eventfox} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="https://eventfox-management-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Eventfox Management</a>
          </h2>
          <h5>
            Created with Ruby on Rails // Bootstrap 4
          </h5>
          <br />
          <p>
            A project management application allowing users to create tasks within individual projects. Users can see their individually assigned tasks and have the option to update them or delete them upon completion.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={chatapp} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="http://chat-app-jh.herokuapp.com/" target="_blank" rel="noopener noreferrer">ChatApp</a>
          </h2>
          <h5>
            Created with NodeJS // Express // Socket.IO
          </h5>
          <p>
            A real-time chat application. Users can have chat conersations with one another while logged into the current chat channel.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={sports} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={instaclone} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="http://chat-app-jh.herokuapp.com/" target="_blank" rel="noopener noreferrer">Insta-Clone</a>
          </h2>
          <h5>
            Created with NodeJS // Express // Socket.IO
          </h5>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={iphone} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="https://iphone-interactive.netlify.com/" target="_blank" rel="noopener noreferrer">Product Information</a>
          </h2>
          <h5>
            Created with HTML // CSS // JavaScript
          </h5>
          <p>
            A product order form site built with HTML, CSS and JavaScript
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={moviedb} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="http://moviedatabasereact.netlify.com/" target="_blank" rel="noopener noreferrer">Movie Database</a>
          </h2>
          <h5>
            Created with React // CSS // MovieDatabase API
          </h5>
          <p>
            An application to look up information about your favorite movies.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={mybooklist} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="http://booklist-jh.herokuapp.com/" target="_blank" rel="noopener noreferrer">My Booklist</a>
          </h2>
          <h5>
            Created with vanilla JavaScript
          </h5>
          <p>
            A book list application created using vanilla JavaScript.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={plane} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="https://vimeo.com/157966459" target="_blank" rel="noopener noreferrer">The Great Escape</a>
          </h2>
          <h5>
            Created with Adobe After Effects // Cinema 4d
          </h5>
          <p>
            An animation showing a bi-plane escaping to be free with the rest of the planes it dreamed of flying with.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={rb} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="https://youtu.be/PFF_5qcFeUk" target="_blank" rel="noopener noreferrer">River Bandits win the first half!</a>
          </h2>
          <h5>
            Created with Adobe Premiere Pro
          </h5>
          <p>
            A video recap of the Quad Cities River Bandits winning the Midwest League First-Half Championship.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Other projects</h2>
        </header>

        <ul className="features">
        
        {/* Weather App React */}
        <li className="icon solid fa-code">
            <h3><a href="https://youtu.be/PFF_5qcFeUk" target="_blank" rel="noopener noreferrer">Weather Application</a></h3>
            <h5>Created using:
              <br />
              React // CSS // Weather API
            </h5>
            <p>
              A real-time weather application where you can view your weather with your city or zipcode.
            </p>
          </li>

          {/* Star Wars */}
          <li className="icon solid fa-code">
            <h3><a href="https://youtu.be/PFF_5qcFeUk" target="_blank" rel="noopener noreferrer">Star Wars Character Creator</a></h3>
            <h5>Created using:
              <br />
              Vanilla JavaScript // Bootstrap // Rails API
            </h5>
            <p>
              A character creator for the Star Wars Universe.
            </p>
          </li>
        
        {/* Mr. Robot */}
          <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/PFF_5qcFeUk" target="_blank" rel="noopener noreferrer">Mr. Robot Title Sequence</a></h3>
            <h5>Created using:
              <br />
              Adobe After Effects // Cinema 4D</h5>
            <p>
              Mr. Robot's title sequence reimagined.
            </p>
          </li>

          {/* UC Davis Football Training Hype */}
          <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/0SyuJLtLWGk" target="_blank" rel="noopener noreferrer">UC Davis Football Hype</a></h3>
            <h5>Created using:
              <br />
              Premiere Pro
            </h5>
            <p>
              UC Davis Football hype video.
            </p>
          </li>

          {/* UC Davis High Energy Moment */}
          <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/a1J0nDlvsJY" target="_blank" rel="noopener noreferrer">High Energy Moment</a></h3>
            <h5>Created using:
              <br />
              Premiere Pro
            </h5>
            <p>
              Each week, UC Davis football has one play highlighted for the team's High-Energy moment of the game. 
            </p>
          </li>

          {/* UC Davis Global Affairs Basketball */}
          <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/6Af4Op_zrDI" target="_blank" rel="noopener noreferrer">Global Affairs: Men's Basketball</a></h3>
            <h5>Created using:
              <br />
              Premiere Pro
            </h5>
            <p>
              A video package highlighting UC Davis great opportunity to study abroad while being a student-athlete. 
            </p>
          </li>

          {/* UC Davis Global Affairs Lacrosse */}
          <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/01_W4xnuN5U" target="_blank" rel="noopener noreferrer">Global Affairs: Lacrosse</a></h3>
            <h5>Created using:
              <br />
              Premiere Pro
            </h5>
            <p>
              A video package highlighting UC Davis great opportunity to study abroad while being a student-athlete. 
            </p>
          </li>

          {/* UC Davis Men's Basketball Quick Hit */}
          <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/qusXtdCnK38" target="_blank" rel="noopener noreferrer">Men's Basketball Quick Hit</a></h3>
            <h5>Created using:
              <br />
              Premiere Pro
            </h5>
            <p>
              A quick hit for social media showing off UC Davis Men's Basketball
            </p>
          </li>

          {/* UC Davis Men's basketball Season Recap */}
          <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/HSsUugmMMUw" target="_blank" rel="noopener noreferrer">Men's Basketball Season Recap</a></h3>
            <h5>Created using:
              <br />
              Premiere Pro
            </h5>
            <p>
              UC Davis Men's basketball team recap video.
            </p>
          </li>

          {/* UC Davis Women's Basketball Hype */}
          <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/NJIAYHL3glI" target="_blank" rel="noopener noreferrer">Women's Basketball Season Hype</a></h3>
            <h5>Created using:
              <br />
              Premiere Pro
            </h5>
            <p>
              UC Davis Women's basketball team get ready for the season.
            </p>
          </li>

          {/* UC Davis Health Gunrock */}
          {/* <li className="icon solid fa-film">
            <h3><a href="https://youtu.be/WyhQLYSZxak" target="_blank" rel="noopener noreferrer">UC Davis Gunrock Visits UC Davis Health</a></h3>
            <h5>Created using:
              <br />
              Premiere Pro
            </h5>
            <p>
              UC Davis mascot, Gunrock, visits his friends at UC Davis Health to show how easy it is to get setup for your next doctors visit. 
            </p>
          </li> */}

        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style2">
      <div className="inner">
        <header>
          <h2>Thank you for visiting</h2>
          <p>
            I am currently looking for my next design opportunity. If you have any leads or would like to discuss more, please click the button to the right to get in touch.
          </p>
        </header>
        <ul className="actions stacked">
          {/* <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li> */}
          <li>

          </li>
          <li>
            
          </li>
          <li>
            <a href="mailto: jason@jharrel.design" className="button fit" target="_blank" rel="noopener noreferrer">
              Email Me
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;