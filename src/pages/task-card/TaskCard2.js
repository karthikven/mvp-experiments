import './TaskCard2.css'
import { useParams } from 'react-router-dom'
import { useState } from "react";
import useFetch from './../../hooks/useFetch'
// import icons
import { Close } from '@mui/icons-material';
import TaskAttributes from './task-card-components/TaskAttributes'
import TaskUpdates from './task-card-components/TaskUpdates'
import TaskMetrics from './task-card-components/TaskMetrics'




const TaskCard2 = () => {

	const { id } = useParams()
	console.log(id)
	const { data: task, error, isPending } = useFetch(`http://localhost:3009/tasks/${id}`)
	

	const [toggleState, setToggleState] = useState(1)

	const toggleTab = (index) => {
		setToggleState(index)
	}

	return (
		<div className="modal-backdrop">
			<div className="modal">
				{ isPending && <div>Loading...</div> }
				{ error && <div>{ error }</div> }
				{ task && (

					<div className="task-card-contents">
						<div className="card-contents-line-one">
							<div className="task-card-header">{task.task['project_name']} / Block: {task.task['location_block']} / Floor: {task.task['location_floor']} / Unit: {task.task['location_unit']} / Room: {task.task['location_room']}</div>
							<Close className="close-button" style={{ color: 'red'}} /> 
						</div>

					{/* task title */}
						<div className="task-card-title"><h1>{task.task['task_name']}</h1></div>

					{/* make a container and split it into 3 tabs: Attributes, Updates, Metrics */}
						<div className="task-card-tabs-container">

							{/* tab headers */}
							<div className="task-card-tab-buttons">
								<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Attributes</button>
								<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Updates</button>
								<button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Metrics</button>
							</div>

							{/* tab contents */}
							<div className="task-card-tab-content">
							
								<TaskAttributes toggleState={toggleState} task={task.task}/>
								<TaskUpdates toggleState={toggleState} />
								<TaskMetrics toggleState={toggleState} />
								
							</div>
						</div>
					</div>
					)
				}
			</div>
		</div>
	)
}

export default TaskCard2