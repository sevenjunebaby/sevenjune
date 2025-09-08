import Main from "./components/Main.jsx"; // use relative path (not "src/...") unless you set up aliases
import "./App.css";

function App() {
  return (
    <div>
      {/* meta tags should be in index.html, not inside App */}
      <Main />
    </div>
  );
}

export default App;
