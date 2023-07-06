import {createSlice} from "@reduxjs/toolkit";
import {v1} from "uuid";

const initialState = [
	{
		id: v1(),
		photo: 'https://content2.onliner.by/catalog/device/main/4ab1ccc6539c525c9d283a4f5bfd22bb.png',
		title: 'Микроволновая печь Horizont 20MW800-1479BDS',
		description: 'отдельностоящая, микроволны и гриль, объем 20 л, выходная мощность микроволн 800 Вт, управление электронное, автоприготовление, авторазмораживание, цвет серебристый'
	}, {
		id: v1(),
		photo: 'https://content2.onliner.by/catalog/device/main/f96f995bd191aa5b1d1bef77f8070e16.jpeg',
		title: 'Микроволновая печь Horizont 20MW700-1378AAW',
		description: 'отдельностоящая, микроволны (соло), объем 20 л, выходная мощность микроволн 700 Вт, управление механическое, цвет белый'
	}, {
		id: v1(),
		photo: 'https://content2.onliner.by/catalog/device/main/3c3c42f702feab6a218e303a25e188c5.png',
		title: 'Микроволновая печь Horizont 20MW700-1479BHB',
		description: 'отдельностоящая, микроволны и гриль, объем 20 л, выходная мощность микроволн 700 Вт, управление электронное, автоприготовление, авторазмораживание, цвет черный'
	},
]

const slice = createSlice({
	name: 'microwaves',
	initialState,
	reducers: {},
})

type MicrowavesInitialStateType = typeof initialState
export const microwavesReducer = slice.reducer