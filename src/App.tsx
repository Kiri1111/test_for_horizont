import React from 'react';
import './app.module.scss';
import {Header} from "./common/ui/header/header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./features/main/mainPage";
import {MicrowavesList} from "./features/microwaves/microwavesList";
import {TvsList} from "./features/tvs/tvsList";
import s from './app.module.scss'

function App() {
	return (
		<div className={s.app}>
			<Header/>
			<Routes>
				<Route path={'/'} element={<MainPage/>}/>
				<Route path={'/tvs'} element={<TvsList/>}/>
				<Route path={'/microwaves'} element={<MicrowavesList/>}/>
			</Routes>
		</div>
	);
}

export default App;
