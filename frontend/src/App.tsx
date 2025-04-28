import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Projects } from "./pages/Projects";
import { NotFound } from "./components/NotFound";
import { Experiance } from "./pages/Experiance";
import { ProjectOne } from "./pages/ProjectOne";
import { ProjectTwo } from "./pages/ProjectTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experiance" element={<Experiance />}/>
        <Route path="projects/finsight" element={<ProjectOne/>}/>
        <Route path="projects/" element={<ProjectTwo/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
