import React from 'react';
import {NavLink} from "react-router-dom";

export const Links = () => {
	return (
		<div>
			<NavLink to={'/tvs'}>
				<div>tvs</div>
			</NavLink>
			<NavLink to={'/microwaves'}>
				<div>miCrO</div>
			</NavLink>
			<NavLink to={'/'}>
				<div>maIN</div>
			</NavLink>
		</div>
	)
}

