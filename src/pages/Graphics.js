import React from 'react';

import Layout from '../components/Layout';

// UC Davis
import mbbprogram from '../assets/ucdavis/graphics/mbbprogram.jpg';
import mbbprogramone from '../assets/ucdavis/graphics/mbbprogramone.jpg';
import wbbprogramone from '../assets/ucdavis/graphics/wbbprogramone.jpg';
import springposter from '../assets/ucdavis/graphics/SpringPoster.jpg';
import basketballbanner from '../assets/ucdavis/graphics/BasketballBanner.jpg';
import calpoly from '../assets/ucdavis/graphics/CalPolyFinalNew.jpg';
import conferencepack from '../assets/ucdavis/graphics/ConferencePack.jpg';
import doss from '../assets/ucdavis/graphics/Doss100yard.jpg';
import email from '../assets/ucdavis/graphics/EmailMainStory3.jpg';
import family from '../assets/ucdavis/graphics/FamilyPlan.jpg';
import fighthunger from '../assets/ucdavis/graphics/FightHungerNight.jpg';
import lmu from '../assets/ucdavis/graphics/GameDayLMU.jpg';
import gym from '../assets/ucdavis/graphics/gym.jpg';

// River Bandits
import banner from '../assets/riverbandits/graphics/banner.jpg';
import championshiprecap from '../assets/riverbandits/graphics/championshiprecap.jpg';
import gamereacpone from '../assets/riverbandits/graphics/gamerecapone.jpg';
import lineup from '../assets/riverbandits/graphics/lineup.jpg';
import playeroftheweek from '../assets/riverbandits/graphics/playeroftheweek.jpg';

// Silverbacks
import sbkshalftime from '../assets/silverbacks/silverbackshalftime.jpg';
import sblineup from '../assets/silverbacks/silverbackslineup.jpg';
import sbplayer from '../assets/silverbacks/silverbacksplayer.jpg';

// Program Logos
import photoshop from '../assets/logos/Photoshop.png';
import illustrator from '../assets/logos/illustrator.png';
import xd from '../assets/logos/xd.png';
import indesign from '../assets/logos/indesign.png';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Graphics</h2>
        <p>A collection of graphics created for different positions I've been with.</p>
        <br />
        <p>
          Programs used to create these pieces:
          </p>

        <ul className="icons major">
          <li>
            <img src={photoshop} alt="" />
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
      </header>

    <section id="three" className="wrapper style2 special">
        <h1>UC Davis</h1>
        <hr />
        <div class="row" align="center"> 

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>
        
            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>
        
            <div class="column">
                <img src={mbbprogramone} alt="" height="500" width="400" />
            </div>

            <div class="column">
                <img src={wbbprogramone} alt="" height="500" width="400" />
            </div>

            <div class="column">
                <img src={mbbprogram} alt="" height="500" width="400" />
            </div>
        </div>

    <div class="row" align="center"> 

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>
    
        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            <img src={lmu} alt="" height="600" width="600" />
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            <img src={gym} alt="" height="600" width="600" />
        </div>

        {/* <div class="column">
            <img src={calpoly} alt="" height="300" width="300" />
        </div> */}

        <div class="column">
            {/* <img src={mbbprogram} alt="" height="500" width="400" /> */}
        </div>
    </div>

    <div class="row" align="center"> 

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>
    
        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            <img src={doss} alt="" height="300" width="600" />
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            <img src={email} alt="" height="300" width="600" />
        </div>
    </div>

    <div class="row" align="center"> 

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>
    
        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            <img src={family} alt="" height="300" width="600" />
        </div>

        <div class="column">
            {/* <img src={lmu} alt="" height="500" width="500" /> */}
        </div>

        <div class="column">
            <img src={fighthunger} alt="" height="300" width="600" />
        </div>
    </div>

    <div class="row" > 

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                <img src={springposter} alt="" height="700" width="1255" />
            </div>
        </div>
</section>

<section id="three" className="wrapper style2 special">
        <h1>Quad Cities River Bandits</h1>
        <hr />
        <div class="row" align="center"> 

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>
        
            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>
        
            <div class="column">
                <img src={banner} alt="" height="500" width="1100" />
            </div>
        </div>

        <div class="row" > 

            <div class="column">
                {/* <img src={lmu} alt="" height="500" width="500" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                <img src={lineup} alt="" height="400" width="400" />
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                {/* <img src={springposter} alt="" height="600" width="1200" /> */}
            </div>
            <div class="column">
                <img src={gamereacpone} alt="" height="400" width="400" />
            </div>
        </div>

        <div class="row" > 

<div class="column">
    {/* <img src={lmu} alt="" height="500" width="500" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    <img src={championshiprecap} alt="" height="400" width="400" />
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    {/* <img src={springposter} alt="" height="600" width="1200" /> */}
</div>
<div class="column">
    <img src={playeroftheweek} alt="" height="400" width="400" />
</div>
</div>

    </section>


    <section id="three" className="wrapper style2 special">
        <h1>Atlanta Silverbacks</h1>
        <hr />
        <div class="row" align="center"> 
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column">
                <img src={sbplayer} alt="" height="300" width="600" />
            </div>
            <div class="column">
                <img src={sbkshalftime} alt="" height="300" width="600" />
            </div>
        </div>
            <div class="column" align="center">
                <img src={sblineup} alt="" height="400" width="400" />
            </div>

        <div> 
            
        </div>



    </section>



    </article>
  </Layout>
);

export default IndexPage;
