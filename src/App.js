import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


//page components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AllTasks from './pages/all-tasks/AllTasks'
import TaskCard from './pages/task-card/TaskCard'
import UserProfile from './pages/user-profile/UserProfile'


// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCity, faHelmetSafety, faClock} from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(faCity, faHelmetSafety, faClock)

function App() {

  return (
    <BrowserRouter>
    <div className="App">
        <Sidebar />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AllTasks />
          </Route>
          <Route path="/tasks/:id">
            <TaskCard />
          </Route>
        {/* 
          <Route path="/users/:userId">
            <UserProfile />
          </Route>

          */}
        </Switch>
        
         

    </div>

    </BrowserRouter>  
  );
}

export default App;
