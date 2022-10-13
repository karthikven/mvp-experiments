import { useState } from 'react'

const LaborMaterial = () => {

	const [laborHours, setLaborHours] = useState(null)
	const [numberOfLaborers, setNumberOfLaborers] = useState(null)
	const [assignedMaterial, setAssignedMaterial] = useState(null)


	return (
		<div>
			<label htmlFor="create-card-labor-hours">Labor Hours Allocated: </label>
			<input
				type="text"
				id="create-card-labor-hours"
				value={laborHours}
				onChange={(e) => setLaborHours(e.target.value)}
			/>

			<label htmlFor="create-card-labor-hours">Number of Laborers Allocated: </label>
			<input
				type="text"
				id="create-card-labor-hours"
				value={numberOfLaborers}
				onChange={(e) => setNumberOfLaborers(e.target.value)}
			/>

        	<table>
          		<thead>
            		<tr>
              			<th>Material Name</th>
              			<th>Material Brand</th>
              			<th>Material Quantity</th>
              			<th>Material Units</th>
            		</tr>
          		</thead>

          		<tbody>

          		</tbody>
        	</table>
        	
        	<input type="text" onChange={(e) => setMessage(e.target.value)}/>
        	<button>
        		Add item
        	</button>
		</div>
	)

}

export default LaborMaterial