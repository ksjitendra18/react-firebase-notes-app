import DashNav from "./DashNav"
import { Link } from "react-router-dom"
import FetchTemperature from "./FetchTemperature"

const Dashboard = () => {

  // console.log(user);
  return (
   <>
   <DashNav/>

   <section id="dashboard">
      <div className="dashboard-container">
        <h2 className="greeting">Hello User</h2>
        <div className="weather-info">
          
            {/* <p>The weather is 30 C</p> */}
            <FetchTemperature/>
        </div>

        <div className="dashboard-cta">
            <button className="dash-btn dash-btn-notes">Create a new Note</button>
            <button className="dash-btn dash-btn-link">Save a new link</button>
        </div>
      </div>
    </section>
   </>
  )
}

export default Dashboard