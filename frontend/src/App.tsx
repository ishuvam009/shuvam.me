import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Projects } from "./pages/Projects";
import { NotFound } from "./components/NotFound";
import { Experiance } from "./pages/Experiance";
import { ProjectOne } from "./pages/ProjectOne";
import { ProjectTwo } from "./pages/ProjectTwo";
import { ProjectThree } from "./pages/ProjectThree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experience" element={<Experiance />}/>
        <Route path="projects/finsight" element={<ProjectOne/>}/>
        <Route path="/projects/medium" element={<ProjectTwo/>}/>
        <Route path="/projects/paytm" element={<ProjectThree/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
