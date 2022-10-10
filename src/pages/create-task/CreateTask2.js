import { useState } from 'react'
import { useHistory } from "react-router-dom";
import supabase from "./../../config/supabaseClient"
import './CreateTask.css'

// import form pages

import TaskMembers from './TaskMembers'
import TaskAttributes from './TaskAttributes'
import LocationAndDesign from './LocationAndDesign'
import LaborMaterial from './LaborMaterial'

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

	const [pageNumber, setPageNumber] = useState(0)
	const pageTitles = ["Task Attributes", "Location & Plans", "Task Members", "Labor & Material"]
	const pageComponents = {0: <TaskAttributes />, 1: <TaskMembers />, 2: <LocationAndDesign />, 3: <LaborMaterial />}

	return (
		<div className="create-card-modal-backdrop">
			<div className="create-card-form-modal">
				<div className="create-card-progressbar">
					<div
						style={{ width: pageNumber === 0 ? "25%" : pageNumber == 1 ? "50%" : pageNumber === 2 ? "75%": "100%" }}>
					</div>
				</div>
				<div className="create-card-form-container">
					<div className="create-card-header">
						<h3>{pageTitles[pageNumber]}</h3>
					</div>
					<div className="create-card-body">
						{pageComponents[pageNumber]}
					</div>
					<div className="create-card-footer">
						<button onClick= {() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 0}>Previous</button>
						<button onClick = {() => {setPageNumber(pageNumber + 1)}} disabled={pageNumber === pageTitles.length - 1}>Next</button>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default CreateTask2