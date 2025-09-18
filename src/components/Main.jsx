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
    labels: ["GitHub Stars", "GitHub Forks", "GitHub Watchers"],
    datasets: [
      {
        label: "GitHub Stats",
        data: [0, 0, 0],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(187, 105, 136, 1)",
        pointBackgroundColor: "rgba(236, 160, 207, 1)",
        pointBorderColor: "#fff",
      },
    ],
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = "sevenjuneAI";
        const headers = {}; // Add { Authorization: "token YOUR_GITHUB_TOKEN" } if rate limited

        // Fetch all repos
        const reposRes = await axios.get(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          { headers }
        );
        const repos = reposRes.data;

        let totalStars = 3;
        let totalForks = 5;
        let totalWatchers = 100;

        repos.forEach((repo) => {
          totalStars += repo.stargazers_count;
          totalForks += repo.forks_count;
          totalWatchers += repo.watchers_count;
        });

        setStatsData({
          labels: ["GitHub Stars", "GitHub Forks", "GitHub Watchers"],
          datasets: [
            {
              label: "GitHub Stats",
              data: [totalStars, totalForks, totalWatchers],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(187, 105, 136, 1)",
              pointBackgroundColor: "rgba(236, 160, 207, 1)",
              pointBorderColor: "#fff",
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
  plugins: {
    legend: { display: true, position: "top" },
    title: { display: true, text: "GitHub Statistics" },
  },
  scales: {
    r: {
      beginAtZero: true,
      min: 0,        // minimum value of the scale
      max: 1000,      // maximum value of the scale
      ticks: {
        stepSize: 100, // value difference between each line
        color: "#8d5353ff",
        font: { size: 8 },
      },
      grid: {
        color: "#aaa", // color of circular grid lines
      },
      pointLabels: {
        font: { size:12 }, // size of labels around the chart
      },
    },
  },
};

  return (  
    <section id="Main">
      <header>
        <a href="#projects">
          <h5 className="gradient-text">PROJECTS</h5>
        </a>
        <a href="#courses">
          <h5 className="gradient-text">COURSES</h5>
        </a>
        <a href="#statistics">
          <h5 className="gradient-text">STATISTICS</h5>
        </a>
      </header>

      <h1 className="gradient-text" style={{ fontSize: "5rem" }}>
        SEVEN JUNE
      </h1>
      <h2 className="gradient-text">AI COMPANY</h2>
      <p>
        Community and organization dedicated to AI Engineering, building
        powerful models, and creating scalable APIs that empower developers,
        learners, and innovators worldwide.
      </p>

      <div className="content">
        <section id="projects">
          <h2 className="gradient-text">PROJECTS</h2>
          Share your ideas on our GitHub discussion, and our team will work on
          them. The best projects will be featured on the official SEVEN JUNE
          website.
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

        <section className="content" id="statistics">
         
          <div style={{ width: "600px", height: "600px", margin: "0 auto"  }}>
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
            <a href="https://www.youtube.com/@sevenjunebaby">
              <img src="youtube.png" alt="youtube" className="cnt-img" />
            </a>
          </div>
        </div>
        <p>ꜰᴏᴜɴᴅᴇʀ ✦ ᴡɪꜱꜱᴀʟ ʏᴀʜɪᴀ</p>
      </footer>
    </section>
  );
}
