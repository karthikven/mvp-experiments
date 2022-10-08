import { useState } from 'react'
import { useHistory } from "react-router-dom";
import supabase from "./../../config/supabaseClient"
import './CreateTask.css'

const CreateTask2 = () => {

	const [taskName, setTaskName] = useState('')
	const [category, setCategory] = useState('')
	const [workflow, setWorkflow] = useState('')
	const [deadline, setDeadline] = useState('')
	const [priority, setPriority] = useState('')
	const [assignerId, setAssignerId] = useState('')
	const [assignerName, setAssignerName] = useState('')
	const [assigneeId, setAssigneeId] = useState('')
	const [assigneeName, setAssigneeName] = useState('')
	const [description, setDescription] = useState('')
	/* include watchers */

	const [locationBlock, setLocationBlock] = useState('')
	const [locationFloor, setLocationFloor] = useState('')
	const [locationUnit, setLocationUnit] = useState('')
	const [locationRoom, setLocationRoom] = useState('')
	const [projectID, setProjectID] = useState('')
	const [projectName, setProjectName] = useState('')

	/* planning fields */
	const [plannedStartDate, setPlannedStartDate] = useState('')
	const [plannedNumberOfLaborers, setPlannedNumberOfLaborers] = useState('')
	const [plannedLaborHours, setPlannedLaborHours] = useState('')

	return (
		<div className="create-card-modal-backdrop">
			<div className="create-card-modal">
				<div className="create-card-contents">
					<div className="create-card-contents-wrapper">

						<h3>Create a New Task</h3>

						<form>
							
						<fieldset className="create-card-basic-attributes">
							
							<label htmlFor="task_name">Task Name: </label>
							<input
								type="text"
								id="task_name"
								value={taskName}
								onChange={(e) => setTaskName(e.target.value)}
							/>

							{/* project_id */}
							<label htmlFor="project_id">Project ID: </label>
							<input 
								type="project_id"
								id="project_id"
								value={projectID}
								onChange={(e) => setProjectID(e.target.value)}
							/>


							{/* project_name */}
							<label htmlFor="project_name">Project Name: </label>
							<input 
								type="text"
								id="project_name"
								value={projectName}
								onChange={(e) => setProjectName(e.target.value)}
							/>

							{/* category*/}
							<label htmlFor="category">Category: </label>
							<select id="category">
								{
									
								}
							</select>
							<input 
								type="text"
								id="category"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							/>

							{/* workflow*/}
							<label htmlFor="workflow">Workflow: </label>
							<input 
								type="text"
								id="workflow"
								value={workflow}
								onChange={(e) => setWorkflow(e.target.value)}
							/>

										{/* planned_start_date */}
							<label htmlFor="planned_start_date">Planned Start Date: </label>
							<input 
								type="date"
								id="planned_start_date"
								value={plannedStartDate}
								onChange={(e) => setPlannedStartDate(e.target.value)}
							/>


										{/* deadline*/}
							<label htmlFor="deadline">Deadline: </label>
							<input 
								type="date"
								id="deadline"
								value={deadline}
								onChange={(e) => setDeadline(e.target.value)}
							/>


						{/* priority*/}
							<label htmlFor="priority">Priority: </label>
							<input 
								type="text"
								id="priority"
								value={priority}
								onChange={(e) => setPriority(e.target.value)}
							/>

						{/* description */}
							<label htmlFor="description">Description: </label>
							<input 
								type="text"
								id="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>


						</fieldset>

						<fieldset className="create-card-define-users">
							{/* assignee_id */}
							<label htmlFor="assigner_id">Assigner ID: </label>
							<input 
								type="number"
								id="assigner_id"
								value={assignerId}
								onChange={(e) => setAssignerId(e.target.value)}
							/>

						{/* assignee_name */}
							<label htmlFor="assignee_name">Assigner Name: </label>
							<input 
								type="text"
								id="assigner_name"
								value={assignerName}
								onChange={(e) => setAssignerName(e.target.value)}
							/>

						{/* assignee_id */}
							<label htmlFor="assignee_id">Assignee ID: </label>
							<input 
								type="number"
								id="assignee_id"
								value={assigneeId}
								onChange={(e) => setAssigneeId(e.target.value)}
							/>

							{/* assignee_name */}
							<label htmlFor="assignee_name">Assignee Name: </label>
							<input 
								type="text"
								id="assignee_name"
								value={assigneeName}
								onChange={(e) => setAssigneeName(e.target.value)}
							/>
						</fieldset>


						<fieldset className="create-card-set-location">

						{/* location_block */}
							<label htmlFor="location_block">Location - Block: </label>
							<input 
								type="text"
								id="location_block"
								value={locationBlock}
								onChange={(e) => setLocationBlock(e.target.value)}
							/>

						{/* location_floor */}
							<label htmlFor="location_floor">Location - Floor: </label>
							<input 
								type="number"
								id="location_floor"
								value={locationFloor}
								onChange={(e) => setLocationFloor(e.target.value)}
							/>

						{/* location_unit */}
							<label htmlFor="location_unit">Location - Unit: </label>
							<input 
								type="text"
								id="location_unit"
								value={locationUnit}
								onChange={(e) => setLocationUnit(e.target.value)}
							/>

						{/* location_room */}
							<label htmlFor="location_room">Location - Room: </label>
							<input 
								type="text"
								id="location_room"
								value={locationRoom}
								onChange={(e) => setLocationRoom(e.target.value)}
							/>
						</fieldset>
						

						

						<fieldset className="create-card-plan-details">

						{/* planned_number_of_laborers */}
							<label htmlFor="planned_number_of_laborers">Planned Number of Laborers: </label>
							<input 
								type="number"
								id="planned_number_of_laborers"
								value={plannedNumberOfLaborers}
								onChange={(e) => setPlannedNumberOfLaborers(e.target.value)}
							/>

							{/* planned_number_of_laborers */}
							<label htmlFor="planned_labor_hours">Planned Number of Laborers: </label>
							<input 
								type="number"
								id="planned_labor_hours"
								value={plannedLaborHours}
								onChange={(e) => setPlannedLaborHours(e.target.value)}
							/>

						</fieldset>

						</form>
					
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateTask2