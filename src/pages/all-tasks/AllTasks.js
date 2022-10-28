import './AllTasks.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from './../../hooks/useFetch'
import TaskList from './../../components/TaskList'


function AllTasks() {
	const {data: tasks, isPending, error} = useFetch('http://localhost:3009/tasks')

	return (
		<div className="all-tasks-wrapper">
			{ error && <div>{error}</div>}
			{ isPending && <div>Loading...</div>}
			{ tasks && <TaskList tasks={tasks}/> }
		</div>
	)
}

export default AllTasks