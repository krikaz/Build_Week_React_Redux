import React from 'react';

export default function User({ props, id }) {
  console.log(id);

	const checkUserInfo = () => {
    props.checkUserInfo(id);
	};

	return (
		<div>
			<button onClick={checkUserInfo}>Check my info</button>

      <div>
        {props.user}
      </div>
		</div>
	);
}
