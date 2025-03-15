import React from 'react';
import './Home.css';
import sae from '../images/saebf.png';
import { NavLink } from 'react-router-dom';

export default function Home({ searchText }) {

  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: '#FFA500' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="homecon">

      <div className='graph'></div>

      <h3 id="draft">
        {getHighlightedText(`Society of Automotive Engineers, Panjab University`, searchText)}
      </h3>

      <div className="twots">

        <div className="teams">
          <p id="tdesc">
            {getHighlightedText(
              `The SAE UIET Panjab University is a collegiate club affiliated with SAE (Society of Automotive Engineers) India
              and operates within the University Institute of Engineering and Technology (UIET), Panjab University. 
              The club functions across four dynamic domains that fuel its diverse projects and accomplishments.`,
              searchText
            )}
          </p>

          <ol>
            <li id="garuda">
              <b>{getHighlightedText('Team Garuda - ', searchText)}</b>
              {getHighlightedText(
                `The Motorsports Team of SAE: This team specializes in designing and building Formula-style cars, ATVs, and Go-Karts 
                for student competitions while exploring innovative sustainable mobility technologies such as Hyperloop and Hydrogen-CNG-powered vehicles.`,
                searchText
              )}
            </li>
            <br />

            <li id="abhedya">
              <b>{getHighlightedText('Team Abhedya - ', searchText)}</b>
              {getHighlightedText(
                `The Robotics Team of SAE: The most versatile domain in the club, Abhedya participates in national and international competitions 
                hosted by IITs, NITs, and other prestigious institutions. The team competes in events like Maze Solver, Robowars, RC Racing, and Robo Soccer 
                while also developing research-focused projects, including robotic arms and self-balancing bots.`,
                searchText
              )}
            </li>
            <br />

            <li id="vayu">
              <b>{getHighlightedText('Team Vayuveer - ', searchText)}</b>
              {getHighlightedText(
                `The Aerospace Team of SAE: This domain focuses on cutting-edge aerospace technologies, working on projects 
                like RC planes, rescue drones, anti-drone systems, and water rockets, contributing to innovations in the field.`,
                searchText
              )}
            </li>
            <br />

            <li id="alpha">
              <b>{getHighlightedText('Team Alpha One - ', searchText)}</b>
              {getHighlightedText(
                `The Software Team of SAE: Dedicated to software innovation, Alpha One engages in website development, database systems, and AI-driven projects. 
                The team regularly participates in hackathons, achieving consistent victories and adding to the club's success in software development.`,
                searchText
              )}
            </li>
          </ol>

          <p id="lastt">
            {getHighlightedText(
              `Together, these four domains exemplify SAE UIET's commitment to technological advancement and excellence.`,
              searchText
            )}
          </p>
        </div>

        <div className="saedesc">
          <div className="box1">
            <h5 id="saep">
              {getHighlightedText('Society of Automotive Engineers, UIET, Panjab University', searchText)}
            </h5>
            <img src={sae} alt="saeimg" id="saepi" />
          </div>

          <div className="box2">
            <p id="abbr">
              <b>{getHighlightedText('Abbreviation', searchText)}</b>
            </p>
            <p id="abbr1">{getHighlightedText('SAE UIET PU', searchText)}</p>
          </div>

          <div className="box3">
            <p id="forma">
              <b>{getHighlightedText('Formation', searchText)}</b>
            </p>
            <p id="forma1">{getHighlightedText('2007', searchText)}</p>
          </div>

          <div className="box4">
            <p id="nonp">
              <b>{getHighlightedText('Type', searchText)}</b>
            </p>
            <p id="nonp1">{getHighlightedText('Non - Profit Organisation', searchText)}</p>
          </div>

          <div className="box5">
            <p id="legal">
              <b>{getHighlightedText('Legal Status', searchText)}</b>
            </p>
            <p id="legal1">{getHighlightedText('Active', searchText)}</p>
          </div>

          <div className="box6">
            <p id="headq">
              <b>{getHighlightedText('Headquarters', searchText)}</b>
            </p>
            <p id="headq1">{getHighlightedText('Chandigarh, India', searchText)}</p>
          </div>

          <div className="box7">
            <p id="mem">
              <b>{getHighlightedText('Members', searchText)}</b>
            </p>
            <p id="mem1">{getHighlightedText('150', searchText)}</p>
          </div>

          <div className="box8">
            <p id="chair">
              <b>{getHighlightedText('Chairperson', searchText)}</b>
            </p>
            <p id="chair1">{getHighlightedText('Akshit Kain', searchText)}</p>
          </div>

          <div className="box9">
            <p id="vchair">
              <b>{getHighlightedText('Vice - Chairperson', searchText)}</b>
            </p>
            <p id="vchair1">{getHighlightedText('Parth Bansal', searchText)}</p>
          </div>

          <div className="box10">
            <p id="parent">
              <b>{getHighlightedText('Parent Organization', searchText)}</b>
            </p>
            <p id="parent1">{getHighlightedText('SAE India', searchText)}</p>
          </div>

          <div className="box11">
            <p id="web">
              <b>{getHighlightedText('Website', searchText)}</b>
            </p>
            <NavLink to="https://saeuietpu.in/" id="slink">
              {getHighlightedText('saeuietpu.in', searchText)}
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}