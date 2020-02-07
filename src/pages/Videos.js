import React from 'react';

import Layout from '../components/Layout';

// Logos

import aftereffects from '../assets/logos/AfterEffects.png';
import premierepro from '../assets/logos/premierepro.png';
import cinema from '../assets/logos/Cinema.png';

// Videos

// Motion Graphics
import mrrobot from '../assets/motiongraphics/mrrobot.png';
import plane from '../assets/motiongraphics/Plane.png';

// UC Davis Videos
import fbintro from '../assets/ucdavis/videos/UCDavisPlayerIntro.png'
import aggiepackhype from '../assets/ucdavis/videos/AggiePackHype.png'
import ucdavisplayerintro from '../assets/ucdavis/videos/BasketballQuickHit.png'
import evoroadtrip from '../assets/ucdavis/videos/EVORoadTrip.png'
import footballfamilyday from '../assets/ucdavis/videos/FootballFamilyDay.png'
import footballhype from '../assets/ucdavis/videos/FootballHype.png'
import footballtraininghype from '../assets/ucdavis/videos/FootballTrainingHype.png'
import globalaffairsbasketball from '../assets/ucdavis/videos/GlobalAffairsBasketball.png'
import globalaffairsfootball from '../assets/ucdavis/videos/GlobalAffairsFootball.png'
import GlobalAffairsLacrosse from '../assets/ucdavis/videos/GlobalAffairsLacrosse.png'
import highenergymoment from '../assets/ucdavis/videos/HighEnergyMoment.png'
import homecominghype from '../assets/ucdavis/videos/HomecomingHype.png'
import mensbasketballquickhittwo from '../assets/ucdavis/videos/MensBasketballQuickHitTwo.png'
import mensbasketballseasonrecap from '../assets/ucdavis/videos/mensbasketballseasonreacp.png'
import mensbasketballintrovideo from '../assets/ucdavis/videos/MenssBasketballIntroVideo.png'
import morganbertsch from '../assets/ucdavis/videos/morganbertschrecordbreaking.png'
import ucdavishealth from '../assets/ucdavis/videos/ucdavishealthgunrock.png'
import womensbasketballhype from '../assets/ucdavis/videos/WomensBasketballHype.png'

// River Bandits Videos
import itbeginsrascal from '../assets/riverbandits/video/ItBeginsRascal.png'
import rascalboxoffice from '../assets/riverbandits/video/rascalboxoffice.png'
import rascalitbegins from '../assets/riverbandits/video/rascalitbegins.png'
import rascaltickets from '../assets/riverbandits/video/rascalticketsonsale.png'
import rbchamps from '../assets/riverbandits/video/rbchampionship.png'
import commercialone from '../assets/riverbandits/video/commercialone.jpg';
import commercialtwo from '../assets/riverbandits/video/commercialtwo.jpg';
import commercialthree from '../assets/riverbandits/video/commercialthree.jpg';
import fivek from '../assets/riverbandits/video/fivek.jpg';
import letsmoveqc from '../assets/riverbandits/video/letsmoveqc.jpg';
import rascalsdayout from '../assets/riverbandits/video/rascalsdayout.jpg';





const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Videos</h2>
        <p>A collection of videos created for different positions I've been with.</p>
        <br />
        <p>
          Programs used to create these pieces:
          </p>

        <ul className="icons major">
          <li>
            <img src={premierepro} alt="" />
          </li>
          <li>
            <img src={aftereffects} alt="" />
          </li>
          <li>
            <img src={cinema} alt="" />
          </li>
        </ul>
      </header>




      <section id="three" className="wrapper style2 special">
        <div className="inner">


          <ul>

            {/* 1671x798 */}

            {/* Mr. Robot */}
            <img src={mrrobot} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://vimeo.com/233770793" target="_blank">Mr. Robot Title Sequence</a></h3>
              <h5>Created using:
              <br />
                Adobe After Effects // Cinema 4D</h5>
              <p>
                Mr. Robot's title sequence reimagined.
            </p>
            </ol>

            {/* The Great Escape */}
            <img src={plane} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://vimeo.com/157966459" target="_blank">
                The Great Escape</a></h3>
              <h5>Created using:
              <br />
                After Effects // Cinema 4D // Premiere Pro
            </h5>
              <p>
                A plane makes its great escape from the childs room as it knows there's a bigger world to explore just outside the four walls.
            </p>
            </ol>

            {/* Lets move qc */}
            <img src={letsmoveqc} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/g6zmY6dCi-s" target="_blank">Let's Move Quad Cities</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                Quad Cities River Bandits mascot Rascal gets moving to promote Quad Cities Let's Move initiative.
            </p>
            </ol>

                        {/* commercial one */}
                        <img src={commercialone} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/sduBM3CmcPU" target="_blank">Quad Cities River Bandits commercial one</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
              Commercial with River Bandits team owner, Dave Heller, highlighting the homestands promotional giveaways.
            </p>
            </ol>

                        {/* commercial two */}
                        <img src={commercialtwo} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/ErO-tmT7GF8" target="_blank">Quad Cities River Bandits commercial two</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
              Commercial with River Bandits team owner, Dave Heller, highlighting the homestands promotional giveaways.
            </p>
            </ol>

                        {/* commercial three */}
                        <img src={commercialthree} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/cD5yVwBhat8" target="_blank">Quad Cities River Bandits commercial three</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                Commercial with River Bandits team owner, Dave Heller, highlighting the homestands promotional giveaways.
            </p>
            </ol>

            {/* UC Davis Football Training Hype */}
            <img src={fbintro} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/S-hD38EFBuw" target="_blank">UC Davis Player Intro</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                UC Davis Football player intro.
            </p>
            </ol>

            {/* UC Davis High Energy Moment */}
            <img src={highenergymoment} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/a1J0nDlvsJY" target="_blank">High Energy Moment</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                Each week, UC Davis football has one play highlighted for the team's High-Energy moment of the game.
            </p>
            </ol>

            {/* UC DAvis Global Affairs Football */}
            <img src={globalaffairsfootball} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/1vkgaYngA-s" target="_blank">
                Global Affairs: Football</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                A video package highlighting UC Davis great opportunity to study abroad while being a student-athlete.
            </p>
            </ol>

            {/* UC Davis Global Affairs Basketball */}
            <img src={globalaffairsbasketball} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/6Af4Op_zrDI" target="_blank">Global Affairs: Men's Basketball</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                A video package highlighting UC Davis great opportunity to study abroad while being a student-athlete.
            </p>
            </ol>

            {/* UC Davis Global Affairs Lacrosse */}
            <img src={GlobalAffairsLacrosse} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/01_W4xnuN5U" target="_blank">Global Affairs: Lacrosse</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                A video package highlighting UC Davis great opportunity to study abroad while being a student-athlete.
            </p>
            </ol>

            {/* UC Davis Men's Basketball Quick Hit */}

            <img src={mensbasketballquickhittwo} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/qusXtdCnK38" target="_blank">Men's Basketball Quick Hit</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                A quick hit for social media showing off UC Davis Men's Basketball
            </p>
            </ol>

            {/* UC Davis Men's basketball Season Recap */}
            <img src={mensbasketballseasonrecap} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/HSsUugmMMUw" target="_blank">Men's Basketball Season Recap</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                UC Davis Men's basketball team recap video.
            </p>
            </ol>

            {/* UC Davis Women's Basketball Hype */}
            <img src={womensbasketballhype} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/NJIAYHL3glI" target="_blank">Women's Basketball Season Hype</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                UC Davis Women's basketball team get ready for the season.
            </p>
            </ol>

            {/* UC Davis Health Gunrock */}
            <img src={ucdavishealth} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/WyhQLYSZxak" target="_blank">UC Davis Gunrock Visits UC Davis Health</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                UC Davis mascot, Gunrock, visits his friends at UC Davis Health to show how easy it is to get setup for your next doctors visit.
            </p>
            </ol>

            {/* UC Davis Evo */}
            <img src={evoroadtrip} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/EUTpoNzDVkw" target="_blank">UC Davis SF Evo Trip</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro // After Effects
            </h5>
              <p>
                UC Davis EVO project gives student-athletes a chance to expereince different careers first-hand. This trip was to different San Francisco locations that are led by former UC Davis student-athletes.
            </p>
            </ol>

            {/* Quad Cities River Bandits 1 */}
            <img src={rascalitbegins} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/_aI2dDAdS9M" target="_blank">Rascal Video Series Video 1: Rascal gets a new look</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                Rascal realizes the season is quickly approaching and he has to work off his winter body if he's going to fit into his brand new jersey!
            </p>
            </ol>

            {/* Quad Cities River Bandits 2 */}
            <img src={rascaltickets} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/KUOvm8K3ibg" target="_blank">
                Rascal Video Series Video 2: Tickets on sale</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro // After Effects
            </h5>
              <p>
                Rascal has a close call as he almost forgets that his beloved Quad Cities River Bandits tickets went on sale to the general public.
            </p>
            </ol>

            {/* Quad Cities River Bandits 3 */}
            <img src={rascalboxoffice} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/MbKCgXYASp0" target="_blank">
                Rascal Video Series Video 3: Get your ticket on</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                Rascal knows he's going to have some visitors looking to get the best tickets as the box office gets set to open. So in spirit of baseball's favorite mascot, he gets his groove on and sets the box office up for all his friends.
            </p>
            </ol>

            {/* Quad Cities River Bandits 4 */}
            <img src={itbeginsrascal} alt="" height="200" width="400" center />
            <ol className="icon solid fa-film">
              <h3><a href="https://youtu.be/QxiHIaqNCeY" target="_blank">
                Rascal Video Series Video 4: Today's the Day</a></h3>
              <h5>Created using:
              <br />
                Premiere Pro
            </h5>
              <p>
                In the final video of the series, we see Rascal get the team's locker ready as he makes his entrance to welcome the new Quad Cities River Bandits season.
            </p>
            </ol>
          </ul>
        </div>
      </section>


      {/* <section id="three" className="wrapper style2 special">
        <div className="inner"> */}
      <section id="three" className="wrapper style3 special">
        <div className="inner">

          <header>
            <h2>Other Videos</h2>
          </header>

          <ul className="features">

            {/* Aggie Pack Hype */}
            <li className="icon solid fa-film">
              <h3><a href="https://youtu.be/Dkykweh2Gnk" target="_blank">Aggie Pack Hype</a></h3>
              <h5>
                Created at: UC Davis
                <br />
                Created using: Premiere Pro
            </h5>
            </li>

            {/* FB Family Day */}
            <li className="icon solid fa-film">
              <h3><a href="https://youtu.be/iP2IVFJVgi0" target="_blank">Football Family Day</a></h3>
              <h5>
                Created at: UC Davis
                <br />
                Created using: Premiere Pro
            </h5>
            </li>

            {/* Football Hype */}
            <li className="icon solid fa-film">
              <h3><a href="https://youtu.be/dvxCbwdmoOc" target="_blank">Football Hype</a></h3>
              <h5>
                Created at: UC Davis
                <br />
                Created using: Premiere Pro
            </h5>
            </li>

            {/* FB Training Hype */}
            <li className="icon solid fa-film">
              <h3><a href="https://youtu.be/0SyuJLtLWGk" target="_blank">Football Training</a></h3>
              <h5>
                Created at: UC Davis
                <br />
                Created using: Premiere Pro
            </h5>
            </li>

            {/* Homecoming Hype */}
            <li className="icon solid fa-film">
              <h3><a href="https://youtu.be/8fLzMg2V6t0" target="_blank">Homecoming Hype</a></h3>
              <h5>
                Created at: UC Davis
                <br />
                Created using: Premiere Pro
            </h5>
            </li>

            {/* MBB intro */}
            <li className="icon solid fa-film">
              <h3><a href="https://youtu.be/2_Pl7EbbF00" target="_blank">Men's Basketball Intro</a></h3>
              <h5>
                Created at: UC Davis
                <br />
                Created using: Premiere Pro // After Effects
            </h5>
            </li>

            {/* Morgan Bertsch Record */}
            <li className="icon solid fa-film">
              <h3><a href="https://youtu.be/TZg-h3h6SxA" target="_blank">Morgan Bertsch Record Night</a></h3>
              <h5>
                Created at: UC Davis
                <br />
                Created using: Premiere Pro
            </h5>
            </li>

            {/* River Bandits Championship */}
            <li className="icon solid fa-film">
              <h3><a href="https://youtu.be/PFF_5qcFeUk" target="_blank">River Bandits Championship</a></h3>
              <h5>
                Created at: Quad Cities River Bandits
                <br />
                Created using: Premiere Pro
            </h5>
            </li>
          </ul>


        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
