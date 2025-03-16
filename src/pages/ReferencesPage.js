import React, { useState } from 'react';
import './References.css'
const ReferencesPage = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleReferences = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="references-container">
      <div className="graph"></div>
      <div className="references-header">
        <h2 className="references-title">
          <button 
            className="collapse-button" 
            aria-expanded={isExpanded} 
            onClick={toggleReferences}
          >
            <span className="collapse-icon">{isExpanded ? '▼' : '▶'}</span> References
          </button>
        </h2>
        {/* <button className="edit-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </button> */}
      </div>

      {isExpanded && (
        <ol className="references-list">
        <li>
          <a href="https://saeindia.org/about-us/vision-mission/" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">"Vision & Mission - SAEINDIA - Automotive Engineers, FISITA, Mobility Engineering, Tractor Design Competition, Aero Design Challenge"</span>
          </a>
          . <i>SAEINDIA</i>.
        </li>
      
        <li>
          <a href="https://www.slideshare.net/slideshow/saeefficycle-2010/7016104" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">"SAE.EffiCycle 2010"</span>
          </a>
          . 22 February 2011.
        </li>
      
        <li>
          <a href="https://www.contest.net.in/417.html" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">https://www.contest.net.in/417.html</span>
          </a>
        </li>
      
        <li>
          <a href="https://autocomponentsindia.com/icat-and-maruti-suzuki-to-organise-effi-cycle-technical-event/" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">"ICAT and Maruti Suzuki to organise EFFI-CYCLE technical event"</span>
          </a>
          . 28 April 2014.
        </li>
      
        <li>
          <a href="https://iqac.puchd.ac.in/team-of-u-i-e-t-panjab-university-chandigarh-has-secured-the-all-india-rank-2-in-the-final-phase-of-aerothon-2023/" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">"Team of U.I.E.T. Panjab University, Chandigarh has secured the All India Rank-2 in the final phase of Aerothon 2023"</span>
          </a>.
        </li>
      
        <li>
          <a href="https://www.cityairnews.com/content/pus-uiet-sae-club-triumphs-at-iiit-gwaliors-infotsav-secures-bronze-in-robowars" className="reference-link">
            <span className="caret">^</span> 
            <sup>a</sup> <sup>b</sup> <span className="link-text">"PU's UIET SAE Club Triumphs at IIIT Gwalior's Infotsav, Secures Bronze in Robowars"</span>
          </a>
          . 22 October 2024.
        </li>
      
        <li>
          <a href="https://uiet.puchd.ac.in/?page_id=13638" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">"Hackathon – University Institute of Engineering and Technology"</span>
          </a>.
        </li>
      
        <li>
          <a href="https://www.tribuneindia.com/news/chandigarh/robotic-contests-pu-students-win-laurels/" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">"Robotic contests: PU students win laurels"</span>
          </a>.
        </li>
      
        <li>
          <a href="https://www.cityairnews.com/content/sae-club-students-of-uiet-panjab-university-shine-with-unmatched-triumphs-across-tricity-inter-college-competitions" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">"SAE Club Students of UIET Panjab University Shine with Unmatched Triumphs Across Tricity Inter-College-Competitions"</span>
          </a>
          . 14 November 2024.
        </li>
      
        <li>
          <a href="https://www.cityairnews.com/content/students-from-sae-uiet-pu-attend-bharat-mobility-global-expo-2025" className="reference-link">
            <span className="caret">^</span> 
            <span className="link-text">News, City Air (January 21, 2025). "Students from SAE, UIET, PU attend Bharat Mobility Global Expo 2025"</span>
          </a>
          . <i>Cityairnews</i>.
        </li>
      </ol>
      
      )}
    </div>
  );
};

export default ReferencesPage;