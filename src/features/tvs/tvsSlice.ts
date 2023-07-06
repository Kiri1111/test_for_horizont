import {createSlice} from "@reduxjs/toolkit";
import {v1} from "uuid";

const initialState = [
	{
		id: v1(),
		photo: 'https://content2.onliner.by/catalog/device/main/933607091a0530027c89b7ec3626c70d.jpeg',
		title: 'Телевизор Horizont 43LE7052D',
		description: '43" 1920x1080 (Full HD), частота матрицы 60 Гц, Smart TV (Яндекс.ТВ), Wi-Fi'
	}, {
		id: v1(),
		photo: 'https://content2.onliner.by/catalog/device/main/bd778427be86760c3bda9e6ea54f66d2.jpeg',
		title: 'Телевизор Horizont 32LE7052D',
		description: '32" 1920x1080 (Full HD), матрица VA, частота матрицы 60 Гц, Smart TV (Яндекс.ТВ), Wi-Fi'
	}, {
		id: v1(),
		photo: 'https://content2.onliner.by/catalog/device/main/2adbeb7f241b77a6c9e73fdf1f3951cb.jpeg',
		title: 'Телевизор Horizont 24LE5011D',
		description: '24" 1366x768 (HD), частота матрицы 60 Гц'
	}
]

const slice = createSlice({
	name: 'tvs',
	initialState,
	reducers: {},
})

export const tvsReducer = slice.reducer