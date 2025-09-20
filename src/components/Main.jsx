import React, { useEffect, useState } from "react";
import axios from "axios";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register Radar chart components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

export default function Main() {
  const [statsData, setStatsData] = useState({
    labels: ["Stars", "Forks", "Watchers", "Followers", "Contrb"],
    datasets: [
      {
        
        data: [0, 0, 0, 0, 0],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(187, 105, 136, 1)",
        pointBackgroundColor: "rgba(236, 160, 207, 1)",
        pointBorderColor: "#fff",
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = "sevenjuneAI";
        const headers = {}; // Add { Authorization: "token YOUR_GITHUB_TOKEN" } if rate limited

        // Fetch user info for followers
        const userRes = await axios.get(`https://api.github.com/users/${username}`, { headers });
        const followers = userRes.data.followers || 0;

        // Fetch all repos
        const reposRes = await axios.get(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          { headers }
        );
        const repos = reposRes.data;

        let totalStars = 3;
        let totalForks = 5;
        let totalWatchers = 100;
        let totalContributions = 4;
        

        repos.forEach((repo) => {
          totalStars += repo.stargazers_count;
          totalForks += repo.forks_count;
          totalWatchers += repo.watchers_count;
          totalContributions += repo.contributors_url ? 1 : 0; 
        });

        setStatsData({
          labels: [" Stars", "Forks", "Watchers", "Followers", "Contrb"],
          datasets: [
            {
              label: "GitHub ",
              data: [totalStars, totalForks, totalWatchers, followers, totalContributions],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(187, 105, 136, 1)",
              pointBackgroundColor: "rgba(236, 160, 207, 1)",
              pointBorderColor: "#fff",
              tension: 0.4,
              fill: true,
              pointRadius: 6,
              pointHoverRadius: 8,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
      }
    };

    fetchGitHubStats();
  }, []);

  const statsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: "easeInOutCubic",
    },
    
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 100,
          color: "#8d5353ff",
          font: { size: 8 },
        },
        grid: { color: "#aaa" },
        pointLabels: { font: { size: 12 } },
      },
    },
  };
  return (  
    <section id="Main">

      <header>
        
      <img className="logo" src="logo.png" alt="" />

       <div className="a1">
        <a href="#projects">
          <h5 className="gradient-text">PROJECTS</h5>
        </a>
        <a href="#courses">
          <h5 className="gradient-text">COURSES</h5>
        </a>
        <a href="#statistics">
          <h5 className="gradient-text">STATISTICS</h5>
        </a></div>


      </header>



      <h1 className="gradient-text" style={{ fontSize: "5rem" }}>
        SEVEN JUNE
      </h1>
      <h2 className="gradient-text">AI COMMUNITY</h2>
      <p>
        Community and organization dedicated to AI Engineering, building
        powerful models, and creating scalable APIs that empower developers,
        learners, and innovators worldwide.
      </p>



<div className="pub">

    <img src="https://kernel-technology.com/wp-content/uploads/2024/01/What-is-Artiificial-IntelligenceAI-1.webp" alt="ai" />
    <img src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/sites/www.builtin.com/files/2022-04/what-is-deep-learning.png" alt="dl" />
    <img src="https://www.uplogictech.com/blog/blog/wp-content/uploads/2023/07/generative-ai.png" alt="genai" />
    <img src="https://cdn.prod.website-files.com/63ca3d566352c27afde699d2/681b736b974cc0cfff723efd_How%20AI%20Agents%20Know%20When%20to%20Call%20APIs%20The%20Hidden%20Intelligence%20Behind%20Autonomous%20Action-p-1080.png" alt="api" />
     <img src="https://d11qzsb0ksp6iz.cloudfront.net/assets/884cc2d834_thumbnail-llm.webp" alt="llm" />


</div>










      <div className="content">
        <section id="projects" >
          <h2 className="gradient-text">PROJECTS</h2>
          Share your ideas on our GitHub discussion, and our team will work on
          them. The best projects will be featured on the official SEVEN JUNE
          website.

<br />

<div className="p">
  <a href="https://github.com/sevenjunebaby/RAG">
  <img src="https://kanerika.com/wp-content/uploads/2025/04/RAG-Thumbnail.jpg" alt="rag" /> 
  </a>
  
  <a href="https://github.com/sevenjunebaby/PostClustering">
  <img src="https://online.keele.ac.uk/wp-content/uploads/2023/07/data-clustering.jpg" alt="cluster" />
   </a>
  
</div>



        </section>





        <section className="cours" id="courses">
          <h2 className="gradient-text">📖 COURSES</h2>
          We provide structured learning paths to help you go from zero to AI
          engineer: 
        
<p style={{ textAlign: "justify" , margin: "30px" ,textAlignLast:"center"}}>
 courses designed to help learners explore the world of Artificial Intelligence AI,
 Machine Learning ML, Deep Learning DL, and Large Language Models LLMs . These courses are structured 
 to guide you from the fundamentals to advanced concepts, providing practical examples, hands-on projects, 
 and real-world applications. Whether you are just starting or looking to deepen your knowledge,
  our learning paths cover key topics such as neural networks, natural language processing,
   computer vision, and transformer architectures. All courses are freely accessible
, allowing you to build your skills at your own pace and become confident in developing AI solutions.


</p>

          <div className="course-list">
            <div>
              <h3 className="gradient-text">AI</h3>
              <a href="AI.pdf" target="_blank" rel="noopener noreferrer">
                <img src="AI.png" alt="AI PDF" className="pdf-thumbnail" />
              </a>
            </div>
            <div>
              <h3 className="gradient-text">MACHINE LEARNING</h3>
              <a
                href="machinelearning.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="MACHINELEARNING.png"
                  alt="ML PDF"
                  className="pdf-thumbnail"
                />
              </a>
            </div>
            <div>
              <h3 className="gradient-text">ML TIPS</h3>
              <a
                href="machinelearning-tips&tricks.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="MACHINELEARNING1.png"
                  alt="ML Tips PDF"
                  className="pdf-thumbnail"
                />
              </a>
            </div>
            <div>
              <h3 className="gradient-text">DEEP LEARNING</h3>
              <a href="deeplearning.pdf" target="_blank" rel="noopener noreferrer">
                <img
                  src="DEEPLEARNING.png"
                  alt="DL PDF"
                  className="pdf-thumbnail"
                />
              </a>
            </div>
            <div>
              <h3 className="gradient-text">LLM</h3>
              <a href="transformersllms.pdf" target="_blank" rel="noopener noreferrer">
                <img src="LLM.png" alt="LLM PDF" className="pdf-thumbnail" />
              </a>
            </div>
          </div>
          <p>ʀᴇꜰᴇʀᴇɴᴄᴇ ✦ ꜱᴛᴀɴꜰᴏʀᴅ ᴜɴɪᴠᴇʀꜱɪᴛʏ</p>
        </section>





        <section  id="statistics" className="stats">
          
          <div className="graph"   >
            <Radar data={statsData} options={statsOptions} />
          </div>
        </section>




      </div>

      <footer>
        <div className="links">
          <div className="cnt">
            <a href="mailto:sevenjune2002@gmail.com">
              <img src="gmail.png" alt="email" className="cnt-img" />
            </a>
            <a href="https://github.com/sevenjuneAI">
              <img src="github.png" alt="github" className="cnt-img" />
            </a>
            
          </div>
        </div>
        <p>Happy to visit our community !</p>
      </footer>
    </section>
  );
}
