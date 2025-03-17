import React, { useEffect } from "react";
import "./HistoryPage.css";

const HistoryPage = ({ searchText }) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        ".history-section, .history-subtitle"
      );
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="history-container">
      <div className='graph'></div>
      <div className="history-content">
        <h2 className="history-subtitle">
          {" "}
          ▼ {getHighlightedText("Founding and Early Years (2007–2010)", searchText)}
        </h2>
        <div className="history-section">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `SAE UIET was founded in 2007 by a team of enthusiastic engineers including Mr. Rana Singh Balgir, Mr. Rupak Banerjee, Mr. Harpreet Singh and their dynamic team. Initially, the chapter included students from Electrical, Electronics, and Mechanical branches. Over the years, the society expanded to include IT and CSE students, building a collaborative, multidisciplinary approach to automotive engineering. In 2009, the first UIET Baja Team, named "NH1," was established, marking the beginning of the university's participation in national-level Baja SAE events. Following this, in 2010, Team Pirates continued the tradition of creative design and engineering for Baja SAE, setting a strong foundation for future teams to enhance and innovate.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `In 2009, the first UIET Baja Team, "NH1," was established, marking the beginning of the university's participation in national-level Baja SAE events. Following this, in 2010, Team Pirates continued the tradition of creative design and engineering for Baja SAE, setting a strong foundation for future teams to enhance and innovate.`,
                searchText
              )}
            </p>
          </div>
          <div className="history-gallery">
            <img src="Team-NH1.jpg" alt="" />
          </div>
        </div>
        <h2 className="history-subtitle">
          {" "}
          ▼ {getHighlightedText("The Efficycle Legacy Begins (2010–2013)", searchText)}
        </h2>
        <div className="history-section">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `In 2010, SAE UIET introduced the concept of Efficycle to SAE India, hosting the first-ever Efficycle event at the university. This pioneering step established UIET as a central force in promoting sustainable and efficient engineering practices through the annual Efficycle competition. The chapter's first Efficycle team, "Team Mental Hawks," represented UIET's dedication to eco-friendly vehicle design, which attracted growing attention and participation from other institutions.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `By 2013, Efficycle had expanded to include 129 teams from across India, further solidifying UIET's position in the event's organization and as a role model in innovative engineering.`,
                searchText
              )}
            </p>
          </div>
          <div className="history-gallery">
            <img src="team_pirates.jpg" alt="" />
          </div>
        </div>
        <h2 className="history-subtitle">
          {" "}
          ▼ {getHighlightedText("Early Awards and Achievements (2012–2016)", searchText)}
        </h2>
        <div className="history-section">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `SAE UIET's teams soon began achieving national recognition. In 2012, the Baja team "Chargeurs Phoenix" received the Best Cost Award, with notable performances such as their 7.5-second time in the 38-degree gradient test. During this period, UIET also claimed victory at IIT Bombay's Robowars competition, winning at the TechFest and demonstrating their prowess in robotics and automation.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `The chapter's influence continued to grow, and in 2013, SAE India launched the AWIM (A World In Motion) Program in collaboration with SAE UIET, aiming to bridge academic and industry experiences for students. Efficycle 2016 saw UIET's team rank highly, with their lightweight and efficient tricycle design garnering particular praise from judges and participants alike.`,
                searchText
              )}
            </p>
          </div>
          <div className="history-gallery">
            <img src="img2.jpg" alt="" />
          </div>
        </div>
        <h2 className="history-subtitle">
          {" "}
          ▼ {getHighlightedText("Expansion and New Ventures (2016–2019)", searchText)}
        </h2>
        <div className="history-section">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `Between 2016 and 2019, SAE UIET expanded its participation across various national and international competitions, establishing a robust presence in engineering innovation. During this period, teams Stormbreaker and Sabertooth represented UIET in Baja SAE, Go-Kart, and Formula SAE events, continuously improving vehicle durability, suspension, and overall design. In 2016, following the success of Efficycle, SAE UIET launched the EffiCars initiative, further broadening its exploration into sustainable engineering. EffiCars gained significant attention, with a dedicated Instagram page created to showcase its development, design updates, and event highlights. EffiCars quickly became a popular addition to SAE UIET's project portfolio, reflecting the chapter's commitment to eco-friendly transportation solutions and innovation in vehicle design. Efficycle 2019 saw continued success, with UIET's team achieving a top position thanks to a tricycle design praised for its innovative use of materials and energy efficiency.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `Additionally, in 2019, a team from UIET earned first place at the Smart India Hackathon - Hardware Edition at IIT Hyderabad, showcasing their technical skills and problem-solving abilities. SAE UIET also debuted in the SAE Aero Design Challenge, marking its expansion into aeronautical engineering and demonstrating the chapter's growing interdisciplinary expertise.`,
                searchText
              )}
            </p>
          </div>
        </div>
        <h2 className="history-subtitle">
          {" "}
          ▼ {getHighlightedText("Adaptation During the Pandemic (2020–2021)", searchText)}
        </h2>
        <div className="history-section">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `During the COVID-19 pandemic, SAE UIET shifted its focus to virtual engagements while maintaining an active presence in competitive events. Team B-Ron Motorsports represented UIET in the National Electric Kart Championship (NEKC) 2020, and secured 1st position with being victorious in various domains: virtual round, design report, business plan, endurance. In the same year, Team Immortus Racing participated enthusiastically in the Auto India Racing Championship (AIRC), producing outstanding results and earning noteworthy rankings.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `As in-person events paused, SAE UIET organized online workshops on electric vehicles, hybrid technologies, and data analytics, ensuring continuous learning and skill-building for students. In 2021, where teams submitted CAD models and simulations, demonstrating their adaptability and resilience in challenging times.`,
                searchText
              )}
            </p>
          </div>
          <div className="history-gallery">
            <img src="img4.jpg" alt="" />
          </div>
        </div>
        <h2 className="history-subtitle">
          ▼ {getHighlightedText("Resurgence and Recognition (2022–2023)", searchText)}
        </h2>
        <div className="history-section">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `With the resumption of in-person activities in 2022, SAE UIET renewed its commitment to innovation. The IC Go-Kart team advanced to the dynamic rounds with a vehicle featuring an upgraded suspension system and improved engine tuning. The chapter also resumed on-ground workshops, industry visits, and guest lectures focusing on electric mobility and autonomous technologies. SAE UIET's efforts culminated in 2023 when the team achieved All India Rank 2 at the Aerothon 2023, outperforming other prestigious institutions and underscoring UIET's status as a top-tier engineering chapter. In October 2023, SAE UIET PU collaborating with Techfest, IIT Bombay organized a seminar. The guest of honor for this seminar was Mr Shubham Gupta (Alumnus of IIT-B and an industry expert). He represented "Vigyantram" technology (a company backed by Techfest IIT-B). The guest of honor took a session on Gripper Bot and Line Follower Bot and also guided the students on its industrial application. The speaker shared a thorough knowledge about robotics in which he explained the use of Arduino to make Line Follower Bot and Gripper Bot and how students can also make such complicated bots. The speaker also explained the use and importance of Arduino for robotics. The speaker concluded the session on a high note by showcasing a demo of the working of such bots and motivating the students to contribute in this industry and innovate. This seminar saw an overwhelming participation from a diverse pool of participants.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `In January 2024, SAE finalized its constitution, which was drafted by Akshit Kain and Vinayak Sharma, along with their team. The constitution outlines the club's functioning across four tiers. At the base level is the General Committee, comprising all club members. The next level is the Committee of Members, recognizing those who have actively contributed and demonstrated dedication. Above this is the Executive Board, elected through fair election trials. At the top is the Advisory Board, consisting of former Executive members and senior members who provide valuable guidance and advice. Alumni Committee was also introduced to foster greater ties between the past and the current members.`,
                searchText
              )}
            </p>
          </div>
          <div className="history-gallery-2">
            <img src="img5.jpg" alt="" />
            <img src="Img-6.jpg" alt="" />
          </div>
        </div>
        <h2 className="history-subtitle">
          ▼ {getHighlightedText("Legacy of 2023-2024: A Year of Unyielding Excellence", searchText)}
        </h2>
        <div className="history-section-2">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `The 2023-2024 tenure was a period of remarkable progress for SAE UIET PU, guided by Prof. Shankar Sehgal and led by Student Chairperson Akshit Kain and Student Vice-Chair Parth Bansal. Emerging stronger after the challenges of the global pandemic, the club showcased its resilience and dedication to technical excellence through active participation in competitions and the achievement of significant milestones. Robowar Competition at Technex'24, IIT BHU: In March 2024, Team Rann Yodha, the robotics team of SAE UIET PU, participated enthusiastically in the Robowar tournament at IIT BHU's techfest, Technex' 24. While the team did not secure a position, their performance was commendable, providing valuable insights and motivating the team for future endeavors.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `Robowar Competition at Technex'24, IIT BHU: In March 2024, Team Rann Yodha, the robotics team of SAE UIET PU, participated enthusiastically in the Robowar tournament at IIT BHU's techfest, Technex' 24. While the team did not secure a position, their performance was commendable, providing valuable insights and motivating the team for future endeavors.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `Technoxian 2024 - World Robotics Championship, Noida: The club's participation in Technoxian 2024, held in Noida in August, was a notable milestone. Teams competed in five domains: Maze Solver, RC Plane, Robowar, RC Car, and Water Rocket. Team Maze Solver qualified for the quarter-finals but faced challenges due to last-minute rule changes, which impacted their final standing. Team Robowar and Team Water Rocket also delivered commendable performances, advancing to the first round. These experiences strengthened the teams' confidence for future challenges.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `Robowar at Infotsav 2024, IIIT Gwalior: October 2024 saw a major achievement as Team Abhedya, the Robotics Team, secured 3rd place in the Robowar challenge at Infotsav, the techfest of IIIT Gwalior. The team's robust 8 kg combat bot outshone others, notably defeating NIT Allahabad's 21 kg bot. Team Abhedya Secured 3rd in Circuit Scramble Competition at CU's Techinvent'Circuit Scramble at Tech Invent 2024, Chandigarh University: Another remarkable accomplishment in October was the 3rd place finish by a Abhedya Robotics Team in the Circuit Scramble competition at CU's Tech Invent 2024. These consecutive wins showcased the teams' dedication, technical acumen, and readiness to tackle challenges. These achievements reflect SAE UIET PU's unwavering commitment to fostering a technological culture among its members and the wider student community, inspiring further participation and success in future competitions.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `Bharat Mobility Global Expo 2023, New Delhi: In February 2024, SAE UIET PU organized a visit to the Bharat Mobility Global Expo 2024 in New Delhi. This dynamic platform introduced members to advancements in sustainable and smart mobility solutions, including electric vehicles, hybrid technology, autonomous driving, and connected mobility. Engaging with experts, startups, and industry leaders enriched members' understanding of modern automotive engineering, emphasizing the importance of multidisciplinary knowledge in the field.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `3D Printing and Additive Manufacturing Workshop: From July 29 to August 9, 2024, the club hosted a 10-day online workshop on 3D Printing and Additive Manufacturing, conducted by UIET alumnus Mr. Yash Gopal Mittal, a Prime Minister Research Fellow and PhD scholar at IIT Bombay. This workshop, open to all, attracted diverse participants from institutions like NITs, IITs, and IIITs. It equipped attendees with essential knowledge and practical skills, preparing them for advancements in manufacturing technology.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `PU Internal Hackathon SIH 2024: The PU Internal Hackathon 2024, held on September 9, was one of the greatest milestones achieved by SAE UIET PU in 2024. Led by Shubham Kumar and Vinayak Sharma, the event brought together innovative minds, pushing the boundaries of creativity and problem-solving. It set the stage for our team's journey in the Smart India Hackathon, reinforcing our commitment to excellence in technology and innovation. It was a thrilling event highlighting the creative and problem-solving skills of students. With 60 teams proposing 79 innovative ideas, the hackathon served as a stepping stone for participants gearing up for the Smart India Hackathon (SIH) 2024. Later three teams from UIET were selected for Grand Finale, Among them, one team emerged victorious, winning the grand finale at IIT Tirupati.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `Tricity College Fests: The robotics team excelled at various Tricity college fests, securing:`,
                searchText
              )}
            </p>
            <li className="history-text">
              {getHighlightedText(
                `1st place in RoboSoccer and 2nd place in RC Racing at CCET.`,
                searchText
              )}
            </li>
            <li className="history-text">
              {getHighlightedText(
                `1st place in the vertical category and 2nd place in the horizontal category of Aqua Jet (water rocket) at PECfest.`,
                searchText
              )}
            </li>
          </div>
          <div className="history-gallery-2">
            <img src="img8.jpg" alt="" />
            <img src="img9.jpg" alt="" />
            <img src="img10.jpg" alt="" />
            <img src="img11.jpg" alt="" />
          </div>
        </div>
        <h2 className="history-subtitle">
          {" "}
          ▼ {getHighlightedText("The Bigger Year 2025: Unleashing Boundless Innovation", searchText)}
        </h2>
        <div className="history-section">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `Prometeo'25 IIT Jodhpur's Annual Techfest: In January 2025, Team Abhedya, the robotics team of SAE UIET PU, participated enthusiastically in the Robosoccer tournament at IIT Jodhpur's annual techfest, Prometeo' 25. While the team did not secure a position, their performance was commendable, providing valuable insights and motivating the team for future endeavors. Also, Team Alpha One, the software team of SAE UIET PU, showcased their exceptional skills in the Hackathon, securing a spot among the top 13 teams out of 63. Their commendable efforts reflect their dedication to innovation and problem-solving. This marks a significant step towards establishing themselves as a force to be reckoned with in the competitive world of software development and hackathons, paving the way for even greater achievements ahead.`,
                searchText
              )}
            </p>
            <p className="history-text">
              {getHighlightedText(
                `Bharat Mobility Global Expo 2025 Visit: SAE Students had the privilege of attending the Bharat Mobility Global Expo 2025 on January 20, held at Pragati Maidan, New Delhi. The event, which runs from January 17 to 22, showcases groundbreaking innovations in sustainable and advanced mobility technologies. The students explored cutting-edge technologies displayed by leading global and domestic brands. Key highlights of the visit included advanced electric vehicles like Tata's Harrier EV and Sierra EV, MG's Cyberster, and Toyota's hydrogen-powered Hilux. Students also learned about cutting-edge battery technologies at the Bharat Battery Show and sustainable automotive materials showcased by leading steel manufacturers.`,
                searchText
              )}
            </p>
          </div>
          <div className="history-gallery-2">
            <img src="img12.jpg" alt="" />
          </div>
        </div>
        <h2 className="history-subtitle">
          ▼ {getHighlightedText("Looking Ahead", searchText)}
        </h2>
        <div className="history-section">
          <div className="history-text-cantainer">
            <p className="history-text">
              {getHighlightedText(
                `SAE UIET PU remains committed to organizing impactful events, fostering technical innovation, and supporting members in excelling at future competitions. These endeavors aim to propel the organization to new heights while contributing to its rich legacy.`,
                searchText
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;