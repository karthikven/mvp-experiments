import { useState } from 'react'
import { useHistory } from "react-router-dom";
import supabase from "./../../config/supabaseClient"

const CreateTask = () => {

	const [taskName, setTaskName] = useState('')
	const [category, setCategory] = useState('')
	const [workflow, setWorkflow] = useState('')
	const [startDate, setStartDate] = useState('')
	const [deadline, setDeadline] = useState('')
	const [priority, setPriority] = useState('')
	const [assignerId, setAssignerId] = useState('')
	const [assignerName, setAssignerName] = useState('')
	const [assigneeId, setAssigneeId] = useState('')
	const [assigneeName, setAssigneeName] = useState('')
	const [description, setDescription] = useState('')
	const [plannedStartDate, setPlannedStartDate] = useState('')
	const [plannedNumberOfLaborers, setPlannedNumberOfLaborers] = useState('')
	const [projectID, setProjectID] = useState('')
	const [projectName, setProjectName] = useState('')
	const [locationBlock, setLocationBlock] = useState('')
	const [locationFloor, setLocationFloor] = useState('')
	const [locationUnit, setLocationUnit] = useState('')
	const [locationRoom, setLocationRoom] = useState('')


	const [formError, setFormError] = useState('')

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault()

		const row_to_insert = {task_name: taskName, category: category, workflow: workflow, 
			start_date: startDate, deadline: deadline, priority: priority, assigner_id: assignerId, assigner_name: assignerName, description: description, planned_start_date: plannedStartDate, planned_number_of_laborers: plannedNumberOfLaborers, project_id: projectID, project_name: projectName,
			location_block: locationBlock, location_floor: locationFloor, location_unit: locationUnit, location_room: locationRoom, assignee_id: assigneeId, 
			assignee_name: assigneeName}

		const row_to_insert2 = {task_name: taskName, category: category, workflow: workflow, planned_start_date: plannedStartDate}
		
		for (var field in row_to_insert2) {
			if (!field) {
				setFormError('please fill all the fields')
				return
			}
		}

		/*
		if (!taskName || !category || !workflow || 
			!startDate || !deadline || !priority || 
			!assignerId || !assignerName || !assigneeId || 
			!assigneeName || !description || !plannedStartDate ||
			!plannedNumberOfLaborers || !projectID || 
			!projectName || !locationBlock || !locationFloor ||
			 !locationUnit || locationRoom) {
			setFormError('please fill all the fields')
			return
		}*/

		const {data, error} = await supabase
			.from('tasks')
				.insert([row_to_insert])

		if (error) {
			console.log(error)
			setFormError('please fill all the fields')
		}

		if (data) {
			console.log(data)
			setFormError(null)
			history.push('/')
		}
	}



	return (
		<div className="create-task-page">
			{/* form to allow user to define a task */}
			<form onSubmit={handleSubmit}>

				{/* task name*/}
				<label htmlFor="task_name">Task Name: </label>
				<input 
					type="text"
					id="task_name"
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
				/>

				{/* category*/}
				<label htmlFor="category">Category: </label>
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

				{/* start_date*/}
				<label htmlFor="start_date">Start Date: </label>
				<input 
					type="date"
					id="start_date"
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
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

			{/* description */}
				<label htmlFor="description">Description: </label>
				<input 
					type="text"
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

			{/* planned_start_date */}
				<label htmlFor="planned_start_date">Planned Start Date: </label>
				<input 
					type="date"
					id="planned_start_date"
					value={plannedStartDate}
					onChange={(e) => setPlannedStartDate(e.target.value)}
				/>

				

			{/* planned_number_of_laborers */}
				<label htmlFor="planned_number_of_laborers">Planned Number of Laborers: </label>
				<input 
					type="number"
					id="planned_number_of_laborers"
					value={plannedNumberOfLaborers}
					onChange={(e) => setPlannedNumberOfLaborers(e.target.value)}
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


				<button>create task</button>
        		{formError && <p className="error">{formError}</p>}
			</form>
		</div>
	)
}

export default CreateTask