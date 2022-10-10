
import { useState } from 'react'

const TaskAttributes = () => {
	// fields in this page: task name, category, workflow, planned start date, deadline, priority, measurements

	const [taskName, setTaskName] = useState('')
	const [category, setCategory] = useState('')
	const [workflow, setWorkflow] = useState('')
	const [priority, setPriority] = useState('')
	const [plannedStartDate, setPlannedStartDate] = useState('')
	const [deadline, setDeadline] = useState('')
	const [measurementsValue, setMeasurementsValue] = useState('')
	const [measurementsUnits, setMeasurementsUnits] = useState('')

	const category_list = ["Civil", "Electrical", "Plumbing", "Carpentry", 
						"Marble Flooring", "Granite Flooring", "Tile Flooring", "False Ceiling", 
						"Fabrication - Windows", "Fabrication - MS, SS", "HVAC", "Lift", 
						"Painting", "Weathering Course", "Waterproofing"]

	const category_workflow_map = {"Civil": ["Civil WF 1", "Civil WF 2", "Civil WF 3"],
									"Electrical": ["Electrical WF 1", "Electical WF 2", "Electrical WF 3"],
									"Plumbing": ["Plumbing WF 1", "Plumbing WF 2", "Plumbing WF 3"],
									"Carpentry": ["Carpentry WF 1", "Carpentry WF 2", "Carpentry WF 3"],
									"Marble Flooring": ["Marble Flooring WF 1", "Marble Flooring WF 2", "Marble Flooring WF 3"],
									"Granite Flooring": ["Granite Flooring WF 1", "Granite Flooring WF 2", "Granite Flooring WF 3"],
									"Tile Flooring": ["Tile Flooring WF 1", "Tile Flooring WF 2", "Tile Flooring WF 3"],
									"False Ceiling": ["False Ceiling WF 1", "False Ceiling WF 2", "False Ceiling WF 3"],
									"Fabrication - Windows": ["Fabrication - Windows WF 1", "Fabrication - Windows WF 2", "Fabrication - Windows WF 3"],
									"Fabrication - MS, SS": ["Civil WF 1", "Civil WF 2", "Civil WF 3"],
									"HVAC": ["HVAC WF 1", "HVAC WF 2", "HVAC WF 3"],
									"Lift": ["Lift WF 1", "Lift WF 2", "Lift WF 3"],
									"Painting": ["Painting WF 1", "Painting WF 2", "Painting WF 3"],
									"Weathering Course": ["Weathering Course WF 1", "Weathering Course WF 2", "Weathering Course WF 3"],
									"Waterproofing": ["Waterproofing WF 1", "Waterproofing WF 2", "Waterproofing WF 3"]
								}
	return (
		<div className="create-card-task-attributes">

			<label htmlFor="task_name">Task Name: </label>
			<input
				type="text"
				id="task_name"
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>

			{/* category*/}
			<label htmlFor="category">Category: </label>
			<select id="category" onChange={(e) => setCategory(e.target.value)}>
				{
					category_list.map(function(category, i) {
						return <option value={category} key={category}>{category}</option>
					})
				}
			</select>

		{/* workflow */}

			<label htmlFor="workflow">Workflow: </label>
			<select id="workflow">
				{ /*
					category_workflow_map[category].map(function(wf, i) {
						return <option value={wf} key={wf}>{wf}</option>
					})
					*/
				}
			</select>

		{/* priority */}
		<br></br>
			Priority:
			<input type="radio" id="priority-high" value="high" name="priority" onChange={(e) => setPriority(e.target.value)}></input>
			<label htmlFor="priority-high">High</label>

			<input type="radio" id="priority-medium" value="medium" name="priority" onChange={(e) => setPriority(e.target.value)}></input>
			<label htmlFor="priority-medium">Medium</label>

			<input type="radio" id="priority-low" value="low" name="priority" onChange={(e) => setPriority(e.target.value)}></input>
			<label htmlFor="priority-low">Low</label>

		{/* planned start date */}
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

			<div className="measurements">
				<label htmlFor="measurement-value">Measurements Value:</label>
				<input type="number" value="measurement-value" id="measurement-value"></input>

				<label htmlFor="measurement-unit">Units:</label>
				<input type="number" value="measurement-value" id="measurement-value"></input>
				
			</div>



	
		</div>
	)
}

export default TaskAttributes