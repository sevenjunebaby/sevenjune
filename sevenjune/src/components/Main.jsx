import React, { useEffect, useState } from "react";

function ComingSoon({
  text = "COMING SOON",
  speed = 120,
  blink = true,
  className = "",
}) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    if (index < text.length && mounted) {
      const t = setTimeout(() => {
        setDisplay((d) => d + text.charAt(index));
        setIndex((i) => i + 1);
      }, speed);

      return () => clearTimeout(t);
    }
    return () => {
      mounted = false;
    };
  }, [index, text, speed]);

  return (
    <div
      className={`flex items-center justify-center min-h-[120px] p-6 ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-widest uppercase">
        <span>{display}</span>
        <span
          aria-hidden="true"
          className={`ml-1 inline-block h-8 align-middle ${
            blink ? "animate-blink" : ""
          }`}
        >
          |
        </span>
      </h1>

      <style>{`
        @keyframes blink {
          0% { opacity: 1 }
          50% { opacity: 0 }
          100% { opacity: 1 }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
}

export default function Main() {
  return (
    <section id="Main">
      <img src="./logo.png" alt="logo" />

      <ComingSoon />






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

      <p>ᴏᴡɴᴇʀ ✦ ᴡɪꜱꜱᴀʟ ʏᴀʜɪᴀ</p>
      </footer>
    </section>
  );
}
