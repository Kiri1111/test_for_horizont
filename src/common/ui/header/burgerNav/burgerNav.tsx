import React, {useState} from 'react';
import s from './burgerNav.module.scss'
import burgerI from '../../../images/burger.png'
import {NavLink} from "react-router-dom";

export const BurgerNav = () => {


	const burgerIcon = {
		backgroundImage: `url(${burgerI})`
	}
	let [menuIsOpen, setMenuIsOpen] = useState(false)

	const onBurgerClick = () => {
		setMenuIsOpen(!menuIsOpen)
	}
	return (

		<div className={s.burgerNav}>
			<div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
				<NavLink to={'/test_for_horizont'}>
					<div>Главная</div>
				</NavLink>
				<NavLink to={'/tvs'}>
					<div>Телевизоры</div>
				</NavLink>
				<NavLink to={'/microwaves'}>
					<div>Печи</div>
				</NavLink>
				<NavLink to={'/developed'}>
					<div>Разработал</div>
				</NavLink>

			</div>
			<div style={burgerIcon} onClick={onBurgerClick} className={s.burgerBtn}></div>
		</div>

	);
};

