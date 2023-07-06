import React from 'react';
import {NavLink} from "react-router-dom";
import s from './links.module.scss'

export const Links = () => {
	return (
		<div className={s.linksBlock}>
			<NavLink className={s.link} to={'/tvs'}>
				<div>Телевизоры</div>
			</NavLink>
			<NavLink className={s.link} to={'/microwaves'}>
				<div>Микроволновые печи</div>
			</NavLink>
		</div>
	)
}

