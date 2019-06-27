import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 40%;
	background-color: rgb(255, 183, 82, 0.9);
	color: rgb(3, 84, 16);
	font-size: 1.5rem;
`;

export default function Home(props) {
	if (localStorage.getItem('user')) {
		const retrievedObject = JSON.parse(localStorage.getItem('user'));
		if (props.id === null) {
			props.updateId(retrievedObject.user_id);
			props.updateToken(retrievedObject.token);
			props.updateIsLoggedIn();
		}

		return (
			<StyledContainer>
				<p>{retrievedObject.message}</p>
			</StyledContainer>
		);
	} else {
		return (
			<StyledContainer>
				<div>
					<p>
						New user? Please <Link to="/register">register</Link>
					</p>
					<p>
						Existing user? Please <Link to="/login">log in</Link>
					</p>
				</div>
			</StyledContainer>
		);
	}
}
