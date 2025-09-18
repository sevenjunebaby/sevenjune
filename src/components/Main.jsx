import React from "react";
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
  // Example data (replace with API data if needed)
  const statsData = {
    labels: ["Website Visitors", "Page Views", "GitHub Stars", "GitHub Forks"],
    datasets: [
      {
        label: "GitHub",
        data: [1200, 3500, 75, 20], // Example numbers
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(187, 105, 136, 1)",
        pointBackgroundColor: "rgba(236, 160, 207, 1)",
        pointBorderColor: "#fff",
      },
    ],
  };

  const statsOptions = {
    responsive: true,
    maintainAspectRatio: false, // allow custom width/height
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Website & GitHub Statistics" },
    },
    scales: {
      r: {
        beginAtZero: true,
        ticks: { stepSize: 500 },
      },
    },
  };

  return (
    <section id="Main">
      <header>
        <a href="#projects"><h5 className="gradient-text">PROJECTS</h5></a>
        <a href="#courses"><h5 className="gradient-text">COURSES</h5></a>
        <a href="#statistics"><h5 className="gradient-text">STATISTICS</h5></a>
      </header>

      <h1 className="gradient-text" style={{ fontSize: "5rem" }}>SEVEN JUNE</h1>
      <h2 className="gradient-text">AI COMPANY</h2>
      <p>
       community and organization dedicated to AI Engineering, building powerful models,  
        and creating scalable APIs that empower developers, learners, and innovators worldwide. <br /> <br />
       
      </p>

      <div className="content">




        
        <section className="cours" id="projects">
          <h2 className="gradient-text">PROJECTS</h2>
          Share your ideas on our GitHub discussion, and our team will work on them. The best projects will be featured on the official SEVEN JUNE website
        </section>







        <section className="cours" id="courses">
  <div className="course-list">
    <div >
      <h3 className="gradient-text">AI</h3>
      <a href="AI.pdf" target="_blank" rel="noopener noreferrer">
        <img
          src="AI.png"
          alt="AI PDF"
          className="pdf-thumbnail"
        />
      </a>
    </div>

    <div >
      <h3 className="gradient-text">MACHINE LEARNING</h3>
      <a href="machinelearning.pdf" target="_blank" rel="noopener noreferrer">
        <img
          src="MACHINELEARNING.png"
          alt="ML 1 PDF"
          className="pdf-thumbnail"
        />
      </a>
    </div>

    <div >
      <h3 className="gradient-text">ML TIPS</h3>
      <a href="machinelearning-tips&tricks.pdf" target="_blank" rel="noopener noreferrer">
        <img
          src="MACHINELEARNING1.png"
          alt="ML 2 PDF"
          className="pdf-thumbnail"
        />
      </a>
    </div>

<div >
      <h3 className="gradient-text">DEEP LEARINING</h3>
      <a href="deeplearning.pdf" target="_blank" rel="noopener noreferrer">
        <img
          src="DEEPLEARNING.png"
          alt="DL PDF"
          className="pdf-thumbnail"
        />
      </a>
    </div>

<div >
      <h3 className="gradient-text">LLM</h3>
      <a href="transformersllms.pdf" target="_blank" rel="noopener noreferrer">
        <img
          src="LLM.png"
          alt="LLM PDF"
          className="pdf-thumbnail"
        />
      </a>
    </div>


  </div>
   <p> ʀᴇꜰᴇʀᴇɴᴄᴇ ✦ ꜱᴛᴀɴꜰᴏʀᴅ ᴜɴɪᴠᴇʀꜱɪᴛʏ</p>
</section>








        <section className="cours" id="statistics">
          <h2 className="gradient-text">STATISTICS</h2>
          {/* Smaller chart container */}
          <div style={{ width: "500px", height: "500px", margin: "0 auto" }}>
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
        <p> ꜰᴏᴜɴᴅᴇʀ ✦ ᴡɪꜱꜱᴀʟ ʏᴀʜɪᴀ</p>
      </footer>
    </section>
  );
}
