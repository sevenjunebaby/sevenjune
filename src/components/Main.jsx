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
        SEVEN JUNE, a community and organization dedicated to AI Engineering, building powerful models,  
        and creating scalable APIs that empower developers, learners, and innovators worldwide. <br /> <br />
        <b>What We Do</b> <br /> 
        AI Engineering – Build state-of-the-art models in NLP, Computer Vision, Generative AI, and beyond. <br />
        APIs for Builders – Create and share APIs so developers can quickly integrate AI into their apps. <br />
        Collaboration Hub – Share ideas, start projects, and work with like-minded engineers. <br />
        Learn AI From Scratch – Beginner-friendly tutorials, courses, and hands-on guides.
      </p>

      <div className="content">
        <section className="cours" id="projects">
          <h2 className="gradient-text">PROJECTS</h2>
        </section>







        <section className="cours" id="courses">
          <h2 className="gradient-text">COURSES</h2>
      



          
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
        <p> ✦ ᴡɪꜱꜱᴀʟ ʏᴀʜɪᴀ</p>
      </footer>
    </section>
  );
}
