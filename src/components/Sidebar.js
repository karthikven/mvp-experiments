import { NavLink } from "react-router-dom"
import "./Sidebar.css"
import cityscape from './../img/cityscape.png'
import hammerIcon from './../img/hammer-icon.png'
import wrench from './../img/wrench.png'
import constructionCrane from './../img/construction-crane.png'
import homer from './../img/homer.png'
import plus from './../img/plus.png'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo">
          <h3>SuperBuilder</h3>
        </div>
      </div>

      <div className="sidebar-live-project">
          <p className="sidebar-sub-header">MY LIVE PROJECT</p>
          <div className="sidebar-project-name">
          <ul>
            <li>
              <NavLink to="/">
                <img src={cityscape} width="30" height="30"></img> <span>&nbsp;Sample Project Name</span>
              </NavLink>    
            </li>
          </ul>
          </div>
        </div>

      <div className="sidebar-category-filters">
          <p className="sidebar-sub-header">Category Filters</p>
          <div className="sidebar-category-filters-list">
          <ul>
            <li>
              <NavLink to="/" className="sideitem">
                <img src={hammerIcon} alt="hammer" height="30px" width="30px"/>
                <span>&nbsp;Foundation</span>
              </NavLink>    
            </li>
            <li>
              <NavLink to="/" className="sideitem">
                <img src={constructionCrane} alt="construction-crane" height="30px" width="30px"/>
                &nbsp;Flooring
              </NavLink>    
            </li>
            <li>
              <NavLink to="/" className="sideitem">
                <img src={wrench} alt="wrench" height="30px" width="30px"/>
                &nbsp;Plumbing
              </NavLink>    
            </li>
            <li>
              <NavLink to="/" className="sideitem">
                <img src={hammerIcon} alt="hammer" height="30px" width="30px"/>
                &nbsp;Electrical
              </NavLink>    
            </li>
            <li>
              <NavLink to="/" className="sideitem">
                <img src={wrench} alt="wrench" height="30px" width="30px"/>
                &nbsp;Painting
              </NavLink>    
            </li>
            <li>
              <NavLink to="/" className="sideitem">
                <img src={wrench} alt="wrench" height="30px" width="30px"/>
                &nbsp;HVAC
              </NavLink>    
            </li>
            <li>
              <NavLink to="/" className="sideitem">
                <img src={constructionCrane} alt="construction-crane" height="30px" width="30px"/>
                &nbsp;Paving
              </NavLink>    
            </li>
          </ul>
          </div>
        </div>

        <p className="sidebar-sub-header">Actions</p>
        <div className="link-to-create-new-task">
          
          <button>
            <NavLink to="/create">
              <img src={plus} width="20" height="20"></img><span>&nbsp;&nbsp;Create New Task</span>
            </NavLink>
          </button>
          
          
        </div>

        <div className="link-to-user-profile">

          <ul>
            <li>
              <NavLink to="/">
                <img src={homer} width="30" height="30"></img> <span>&nbsp;Karthik Venkatesh</span>
              </NavLink>    
            </li>
          </ul>
        </div>


    </div>




  )
}

export default Sidebar