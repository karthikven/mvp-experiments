import './TaskCard.css'
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from './../../hooks/useFetch'
import homer from './../../img/homer.png'
import paperclip from './../../img/paperclip.png'
import close from './../../img/close.png'
import floorplan from './../../img/floorplan.jpeg'

const TaskCard = () => {
	const { id } = useParams()
	console.log(id)
	const { data: task, error, isPending } = useFetch('http://localhost:3000/tasks/?taskId=' + id)


	const history = useHistory()

	const handleClick = () => {
		fetch('http://localhost:8000/tasks/' + task.id, {
			method: 'DELETE'
		}).then(()=>{
			history.push('/')
		})
	}

	return (
		<div className="modal-backdrop">
			<div className="modal">
				
			{ isPending && <div>Loading...</div> }
			{ error && <div>{ error }</div> }
			{ task && (
				<div className="task-card-contents">
					<div className="card-contents-line-one">
						<div className="task-card-header">{task[0]['projectName']} / Block: {task[0]['block']} / Floor: {task[0]['floor']} / Unit: {task[0]['unit']} / Room: {task[0]['room']}</div>
						<button className="close-button">X</button>	
					</div>
					
					

					{/*<div className="task-card-header">project name / {task[0]['category']} / {task[0]['workflow']} / #{id}</div>*/}
					<div className="task-card-title"><h2>{task[0]['taskName']}</h2></div>

					<div className="task-card-contents-wrapper">

					<div className="task-card-basic-details">

					<div className="task-attributes">
						<div className="task-attribute-box">{task[0]['category']}</div>
						<div className="task-attribute-box">{task[0]['workflow']}</div>
						<div className="task-attribute-box">{task[0]['priority']}</div>
						<div className="task-attribute-box">{task[0]['dueDate']}</div>
						<div className="task-attribute-box">{task[0]['location']}</div>
					</div>

				{/* List users attached to task*/}

					<div className="task-users">
						<h3>Stakeholders</h3>

						<div className="task-users-assigned-by">
							Assigned by: &nbsp;<img className="user-icon" src={homer} width="20" height="20"></img> &nbsp;{task[0]['assignerName']}&nbsp;&nbsp;&nbsp;
						</div>

						<div className="task-users-assigned-to">
							Assigned to: &nbsp;<img className="user-icon" src={homer} width="20" height="20"></img> &nbsp;{task[0]['assigneeName']}&nbsp;&nbsp;&nbsp;
						</div>

						<div className="task-users-watchers">
							Watchers:
							{
								task[0]['watchers'].map((watcher) => (
									<div className="user-icon-name">
										&nbsp; <img className="user-icon" src={homer} width="20" height="20"></img>&nbsp;
										<div class="watcher-name-hide">{watcher}&nbsp;</div>
									</div>
									))
							}

							
						</div>


						
					</div>

					{

					/*


					<div className="task-users">
						<div className="task-users-assigner">
							<div className="user-icon-name">Assigner: &nbsp; <img className="user-icon" src={homer} width="20" height="20"></img>&nbsp;{task[0]['assignerName']}&nbsp;&nbsp;&nbsp;</div>
						</div>
						<div className="task-users-assignee">
							<div className="user-icon-name">Assignee: &nbsp; <img className="user-icon" src={homer} width="20" height="20"></img>&nbsp;{task[0]['assigneeName']}&nbsp;&nbsp;&nbsp;</div>
						</div>



						<div className="task-users-watchers">
							Watchers:
							{
								task[0]['watchers'].map((watcher) => (
									<div className="user-icon-name">
										&nbsp; <img className="user-icon" src={homer} width="20" height="20"></img>&nbsp;
										<div class="watcher-name-hide">{watcher}</div>
									</div>
									))
							}
						</div>
						
					</div>

					*/
					}

					<div className="task-description">
						<h3>Task Description:</h3>
						{task[0]['description']}
						<ul>
							{task[0]['subtasks'].map((task) => (
								<li>{task}</li>
								))}
						</ul>
					</div>


					<div className="task-comments">
						<h3>Comments:</h3>
					<div className="task-comments-list">
						
						{
							task[0]['comments'].map((comment) => (
								<div className="task-comment-box">
									<div className="task-comment-user-details"><img className="user-icon" src={homer} width="20" height="20"></img>&nbsp;&nbsp;{comment[1]}</div>
									<div className="task-comment-content">{comment[0]}</div>
								</div>
								))
						}

					</div>
					</div>

					<div className="task-comment-new-content-row"><img className="comment-attachment-icon" src={paperclip} width="20" height="20"></img><input className="new-comment" type="text" placeholder="Type your comment here..."></input><button>Send</button></div>
					</div>

						<div className="task-card-planned-resources">

							<h3>Planning:</h3>
							<div>
								<div className="task-card-floorplan">
									<div className="task-card-floorplan-header">Floor plan:</div>
									<img className="comment-attachment-icon" src={floorplan} width="300" height="200"></img>
									
								</div>
								<div className="task-card-planned-start-date">Planned Start Date: &nbsp;{task[0]['plannedStartDate']}</div>
								<div className="task-card-planned-labor-hours">
									<div className="task-card-sub-header"><h4>Labor Hours Allocated</h4></div>
									<div className="number-of-laborers-planned">Total Number of Laborers: &nbsp;{task[0]['plannedNumberofLaborers']}</div>
									<div className="labor-hours-planned">Total Labor Hours: &nbsp;{task[0]['plannedLaborHours']}</div>
									{/*
									<div className="task-card-table">
									
									<table className="labor-hours-table">
										<tr>
											<th>Date</th>
											<th>Number of Laborers</th>
											<th>Labor Hours</th>
										</tr>
										<tbody>
										{
											task[0]['plannedLaborHours'].map((plannedLabor) => (
												<tr>
													<td>{plannedLabor[0]}</td>
													<td>{plannedLabor[1]}</td>
													<td>{plannedLabor[2]}</td>
												</tr>
												))
										}
										</tbody>
									</table>
								
									</div>

									*/}
								</div>

								<div className="task-card-planned-Material">
									<div className="task-card-sub-header"><h4>Material Allocated</h4></div>
									<div className="task-card-table">
									<table className="material-table">
										<tr>
											<th>Material Name</th>
											<th>Brand</th>
											<th>Quantity</th>
											<th>Units</th>
										</tr>
										<tbody>
										{
											task[0]['plannedMaterial'].map((material) => (
												<tr>
													<td>{material[0]}</td>
													<td>{material[1]}</td>
													<td>{material[2]}</td>
													<td>{material[3]}</td>
												</tr>
												))
										}
										</tbody>
									</table>
									</div>
								</div>
							</div>
					</div>

					<div className="task-card-actual-resources">

							<h3>Actuals:</h3>
							<div>
								<div className="task-card-actual-start-date">Actual Start Date: &nbsp;{task[0]['startDate']}</div>
								<div className="task-card-actual-labor-hours">
									<div className="task-card-sub-header"><h4>Labor Hours Employed</h4></div>
									<div className="task-card-table">
									<table className="labor-hours-table">
										<tr>
											<th>Date</th>
											<th>Type of Laborer</th>
											<th>Number of Laborers</th>
											<th>Labor Hours</th>
										</tr>
										<tbody>
										{
											task[0]['actualLaborHours'].map((actualLabor) => (
												<tr>
													<td>{actualLabor[0]}</td>
													<td>{actualLabor[1]}</td>
													<td>{actualLabor[2]}</td>
													<td>{actualLabor[2]}</td>
												</tr>
												))
										}
										</tbody>
									</table>
									</div>
								</div>

								<div className="task-card-actual-Material">
									<div className="task-card-sub-header"><h4>Material Utilized</h4></div>
									<div className="task-card-table">
									<table className="material-table">
										<tr>
											<th>Material Name</th>
											<th>Brand</th>
											<th>Quantity</th>
											<th>Units</th>
										</tr>
										<tbody>
										{
											task[0]['actualMaterial'].map((material) => (
												<tr>
													<td>{material[0]}</td>
													<td>{material[1]}</td>
													<td>{material[2]}</td>
													<td>{material[3]}</td>
												</tr>
												))
										}
										</tbody>
									</table>
									</div>
								</div>
								
								
							</div>
							
					</div>




					</div>
				</div>
				)}
		
      		</div>
    	</div>
	)
}

export default TaskCard