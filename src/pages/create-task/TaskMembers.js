import { useEffect, useState } from 'react'
import Select from 'react-select'
import supabase from '../../config/supabaseClient'

const TaskMembers = () => {

	const [fetchError, setFetchError] = useState(null)
	const [projectUsers, setProjectUsers] = useState(null)
	const [taskMembers, setTaskMembers] = useState(null)
	const [fetchAvatarsError, setFetchAvatarsError] = useState(null)
	const [projectUsersAvatars, setProjectUsersAvatars] = useState(null)

	useEffect(() => {
		const fetchUsers = async () => {
			const { data, error } = await supabase
				.from('users')
				.select()

			if (error) {
				setFetchError('could not fetch users')
				setProjectUsers(null)
				console.log(error)
			}

			if (data) {
				setProjectUsers(data)
				setFetchError(null)
				
				
			}
		}

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

		fetchUsers()
		fetchAvatars()

		


	}, [])

	return (
		<div className="create-card-task-members">
			<label htmlFor="create-card-assignee-list">Assign task to: </label>
			{fetchError && (<p>{fetchError}</p>)}
			{projectUsers && ( <div>
				{projectUsers.map((user, index) => (
					<div key={index}>
						{user.user_first_name}&nbsp;{user.user_last_name}
					</div>
					))}	
			</div>
				
			)}
			
		</div>
	)
}

export default TaskMembers