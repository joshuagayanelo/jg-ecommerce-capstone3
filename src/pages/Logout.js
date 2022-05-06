import { Navigate } from 'react-router-dom';

export default function logout() {

	localStorage.clear()
	
	return(

		<Navigate to='/' />

	)
}