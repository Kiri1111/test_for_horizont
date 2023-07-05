import React from 'react';
import {BurgerNav} from "./burgerNav/burgerNav";
import s from './header.module.scss'

export const Header = () => {
	return (
		<div className={s.headerBlock}>
			<BurgerNav/>
			<span>HORIZONT R&D center</span>
		</div>
	)
}

