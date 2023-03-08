import './App.css';
import Home from './home/home';
import Project from './home/projects';
import Skills from './home/skills';
import Qualification from './home/qualifications';
import Internships from './home/internships';

function App() {
  let component;
  switch(window.location.pathname){
    case "/":
      component=<Home/>;
      break;
    case "/qualifications":
      component=<Qualification/>;
      break;
    case "/projects":
      component=<Project/>;
      break;
    case "/skills":
      component=<Skills/>;
      break;
    case "/internships":
      component=<Internships/>;
      break;
    default:
      component=<Home/>;
      break;
  }
  // console.log(window.location);
  
  return (
    <>
    {/* <Home/> */}
    {component}
    </>
    
  );
}

export default App;
