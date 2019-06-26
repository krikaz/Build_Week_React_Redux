import { useEffect } from 'react';

export default function Logout(props) {
	// const onLogOut = () => {
	// 	localStorage.clear();
	// };

	// return (
	// 	<div>
	// 		<button type="submit" onClick={onLogOut}>
	// 			Log Out
	// 		</button>
	// 	</div>
	// );

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
