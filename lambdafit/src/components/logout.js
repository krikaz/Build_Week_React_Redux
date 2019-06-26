import React from 'react';

export default function Logout() {
	const onLogOut = () => {
		localStorage.clear();
	};

	return (
		<div>
			<button type="submit" onClick={onLogOut}>
				Log Out
			</button>
		</div>
	);
}
