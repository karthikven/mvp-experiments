import './TaskCard2.css'
import { useParams } from 'react-router-dom'
import { useState } from "react";
import useFetch from './../../hooks/useFetch'
// import icons
import { Close } from '@mui/icons-material';



const TaskCard2 = () => {

	const { id } = useParams()
	console.log(id)
	const { data: task, error, isPending } = useFetch('http://localhost:3000/tasks/?taskId=' + id)
	console.log(task)

	return (
		<div className="modal-backdrop">
			<div className="modal">
				{ isPending && <div>Loading...</div> }
				{ error && <div>{ error }</div> }
				{ task && (

					<div className="task-card-contents">
						<div className="card-contents-line-one">
							<div className="task-card-header">{task[0]['projectName']} / Block: {task[0]['block']} / Floor: {task[0]['floor']} / Unit: {task[0]['unit']} / Room: {task[0]['room']}</div>
							<Close className="close-button" style={{ color: 'red'}} /> 
						</div>

					{/* task title */}
						<div className="task-card-title"><h1>{task[0]['taskName']}</h1></div>

					{/* make a container and split it into 3 tabs: Attributes, Updates, Metrics */}
						<div className="task-card-tabs-container">

							{/* tab headers */}
							<div className="task-card-tab-buttons">
								<button className="tabs active-tabs">Attributes</button>
								<button className="tabs">Updates</button>
								<button className="tabs">Metrics</button>
							</div>

							{/* tab contents */}
							<div className="task-card-tab-content">

								{/* tab 1 */}
								<div className="content active-content">
									<h2>Attributes</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
										praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
										vel voluptatum?
									</p>
								</div>

								{/* tab 2 */}
								<div className="content">
									<h2>Attributes</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
										praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
										vel voluptatum?
									</p>
								</div>

								{/* tab 3 */}
								<div className="content">
									<h2>Attributes</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
										praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
										vel voluptatum?
									</p>
								</div>
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