import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import UserContext from '../UserContext'

export default function logout() {

	const { unsetUser, setUser } = useContext(UserContext);

	// Clear the storage
	unsetUser()

	useEffect(() => {
		setUser({id: null});
	}, [])

	return(

		<Navigate to='/' />

	);
}