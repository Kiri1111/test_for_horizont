import React from 'react';
import {Links} from "../../common/ui/header/links";
import s from './mainPage.module.scss'
import mainImg from "../../common/images/back.jpg";
import {ParticleComponent} from "../../common/ui/particle/Particle";

export const MainPage = () => {

	const mainPageBackground = {
		backgroundImage: `url(${mainImg})`
	}

	return (
		<div className={s.mainBlock} style={mainPageBackground}>
			<ParticleComponent/>
			<div className={s.welcome}>Добро пожаловать на презентацию техники HORIZONT</div>
			<div className={s.links}>Выберите интересующий раздел:<Links/></div>
		</div>
	)
}
