import { useEffect } from 'react';

export default function Logout(props) {

	useEffect(() => {
		if (props.isLoggedIn) {
			localStorage.clear();
			window.location = '/';
		} else {
			window.location = '/';
		}
	});

	return null;
}
