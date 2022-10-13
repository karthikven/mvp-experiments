import { useEffect, useState } from 'react'
import Select from 'react-select'
import supabase from '../../config/supabaseClient'

const TaskMembers = () => {

	const [fetchError, setFetchError] = useState(null)
	const [taskAssignedTo, setTaskAssignedTo] = useState(null)
	const [dropdownUsersList, setDropdownUsersList] = useState(null)
	const [projectUsers, setProjectUsers] = useState(null)

	useEffect(() => {
		const fetchUsers = async () => {
			const { data, error } = await supabase
				.from('users')
				.select()

			if (error) {
				setFetchError('could not fetch users')

				console.log(error)
			}

			if (data) {
				
				setFetchError(null)	
				console.log(data)
				setDropdownUsersList(data.map((record) => (record.user_first_name.concat(" ").concat(record.user_last_name))))
				setDropdownUsersList(data.map((record) => ({value: record.id, label: record.user_first_name.concat(" ").concat(record.user_last_name)})))
			}
		}


		/*
		const fetchAvatars = async () => {
			const {data, error} = await supabase
				.storage
				.from('avatars')
				.list()

			if (error) {
				setFetchAvatarsError('could not fetch users')
				setProjectUsersAvatars(null)
				console.log(error)
			}

			if (data) {
				setProjectUsersAvatars(data)
				setFetchAvatarsError(null)
				console.log(data)
			}
		}
		*/

		fetchUsers()		

	}, [])


	return (
		<div className="create-card-task-members">
			<label htmlFor="create-card-assignee-list">Assign task to: </label>
			{dropdownUsersList && dropdownUsersList.map((user) => (console.log(user)))}
			{/*
			{fetchError && (<p>{fetchError}</p>)}
			{projectUsers && ( <div>
				{projectUsers.map((user, index) => (
					<div key={index}>
						{user.user_first_name}&nbsp;{user.user_last_name}
					</div>
					))}	
			</div>
				
			)}
		*/}

			
		<Select options={dropdownUsersList} isMulti />
			
		</div>
	)
}

export default TaskMembers