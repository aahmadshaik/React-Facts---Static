import "../styles/Content.css";
import reactLogo from "../assets/reactjs-icon 2.png";
const Content = () => {
  return (
    <div className="data-container">
      <div className="data">
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>

          <li>Has well over 200K stars on GitHub</li>

          <li>Is maintained by Meta</li>

          <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <div className="logo">
        <img className="react-logo" src={reactLogo}></img>
      </div>
    </div>
  );
};

export default Content;
