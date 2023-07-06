import React from 'react';
import './app.module.scss';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./features/main/mainPage";
import {MicrowavesList} from "./features/microwaves/microwavesList";
import {TvsList} from "./features/tvs/tvsList";
import s from './app.module.scss'
import {Header} from "./common/ui/header/header";
import {DeveloperInfo} from "./common/ui/developerInfo/developerInfo";

function App() {
	return (
		<div className={s.app}>
			<Header/>
			<Routes>
				<Route path={'/test_for_horizont'} element={<MainPage/>}/>
				<Route path={'/tvs'} element={<TvsList/>}/>
				<Route path={'/microwaves'} element={<MicrowavesList/>}/>
				<Route path={'/developed'} element={<DeveloperInfo/>}/>
			</Routes>
		</div>
	)
}

export default App;
