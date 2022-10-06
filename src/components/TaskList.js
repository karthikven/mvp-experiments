import { Link } from 'react-router-dom'
import './TaskList.css'
import homer from './../img/homer.png'
import deadline from './../img/deadline.png'

const TaskList = ({tasks}) => {
	return (
		<div className="task-list-wrapper">

		<div className="task-list-column1">
		
		<div className="task-list">
			<h3>Overdue</h3>
			{tasks.map((task) => (
				<div className="task-preview" key={task.taskId}>
					<Link to={`/tasks/${task.taskId}`}>
						<div className="task-preview-row1"><h4>{ task.taskName }</h4><img className="user-icon" src={homer} width="30" height="30"></img></div>
						<div className="task-preview-row"><div className="high"></div>&nbsp;&nbsp;{ task.priority } &nbsp;&nbsp;&nbsp;&nbsp; <img src={deadline} width="15" height="15"></img>&nbsp;{task.dueDate} &nbsp;&nbsp;&nbsp;&nbsp;{task.category}</div>	
						<div className="task-preview-row">{ task.location } &nbsp;&nbsp;&nbsp;&nbsp; 60% Completed</div>	
					</Link>				
				</div>
				))
			}
		</div>

		</div>


		<div className="task-list-column2">
			
		
			
		
		<div className="task-list">
			<h3>To Do</h3>
			{tasks.map((task) => (
				<div className="task-preview" key={task.taskId}>
					<Link to={`/tasks/${task.taskId}`}>
						<div className="task-preview-row1"><h4>{ task.taskName }</h4><img className="user-icon" src={homer} width="30" height="30"></img></div>
						<div className="task-preview-row"><div className="high"></div>&nbsp;&nbsp;{ task.priority } &nbsp;&nbsp;&nbsp;&nbsp; <img src={deadline} width="15" height="15"></img>&nbsp;{task.dueDate} &nbsp;&nbsp;&nbsp;&nbsp;{task.category}</div>	
						<div className="task-preview-row">{ task.location } &nbsp;&nbsp;&nbsp;&nbsp; 60% Completed</div>	
					</Link>				
				</div>
				))
			}
		</div>


		</div>

		
		<div className="task-list-column3">
			
		
			
		
		<div className="task-list">
			<h3>In Progress</h3>
			{tasks.map((task) => (
				<div className="task-preview" key={task.taskId}>
					<Link to={`/tasks/${task.taskId}`}>
						<div className="task-preview-row1"><h4>{ task.taskName }</h4><img className="user-icon" src={homer} width="30" height="30"></img></div>
						<div className="task-preview-row"><div className="high"></div>&nbsp;&nbsp;{ task.priority } &nbsp;&nbsp;&nbsp;&nbsp; <img src={deadline} width="15" height="15"></img>&nbsp;{task.dueDate} &nbsp;&nbsp;&nbsp;&nbsp;{task.category}</div>	
						<div className="task-preview-row">{ task.location } &nbsp;&nbsp;&nbsp;&nbsp; 60% Completed</div>	
					</Link>				
				</div>
				))
			}
		</div>


		</div>

		<div className="task-list-column4">
			
		
			
		
		<div className="task-list">
			<h3>In Review</h3>
			{tasks.map((task) => (
				<div className="task-preview" key={task.taskId}>
					<Link to={`/tasks/${task.taskId}`}>
						<div className="task-preview-row1"><h4>{ task.taskName }</h4><img className="user-icon" src={homer} width="30" height="30"></img></div>
						<div className="task-preview-row"><div className="high"></div>&nbsp;&nbsp;{ task.priority } &nbsp;&nbsp;&nbsp;&nbsp; <img src={deadline} width="15" height="15"></img>&nbsp;{task.dueDate} &nbsp;&nbsp;&nbsp;&nbsp;{task.category}</div>	
						<div className="task-preview-row">{ task.location } &nbsp;&nbsp;&nbsp;&nbsp; 60% Completed</div>	
					</Link>				
				</div>
				))
			}
		</div>


		</div>	

		<div className="task-list-column5">
			
		<div className="task-list">
			<h3>Done</h3>
			{tasks.map((task) => (
				<div className="task-preview" key={task.taskId}>
					<Link to={`/tasks/${task.taskId}`}>
						<div className="task-preview-row1"><h4>{ task.taskName }</h4><img className="user-icon" src={homer} width="30" height="30"></img></div>
						<div className="task-preview-row"><div className="high"></div>&nbsp;&nbsp;{ task.priority } &nbsp;&nbsp;&nbsp;&nbsp; <img src={deadline} width="15" height="15"></img>&nbsp;{task.dueDate} &nbsp;&nbsp;&nbsp;&nbsp;{task.category}</div>	
						<div className="task-preview-row">{ task.location } &nbsp;&nbsp;&nbsp;&nbsp; 60% Completed</div>	
					</Link>				
				</div>
				))
			}
		</div>


		</div>	


		</div>
	)
}

export default TaskList