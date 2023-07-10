import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";

type InitialStateType = {
	items: ItemsType
}

type ItemsType = ItemType[]

type ItemType = {
	id: string
	photo: string
	title: string
	description: string
	color: string
	comments: string[]
}

const initialState: InitialStateType = {
	items: [
		{
			id: v1(),
			photo: 'https://content2.onliner.by/catalog/device/main/933607091a0530027c89b7ec3626c70d.jpeg',
			title: 'Телевизор Horizont 43LE7052D',
			description: '43" 1920x1080 (Full HD), частота матрицы 60 Гц, Smart TV (Яндекс.ТВ), Wi-Fi',
			color: 'black',
			comments: []
		}, {
			id: v1(),
			photo: 'https://content2.onliner.by/catalog/device/main/bd778427be86760c3bda9e6ea54f66d2.jpeg',
			title: 'Телевизор Horizont 32LE7052D',
			description: '32" 1920x1080 (Full HD), матрица VA, частота матрицы 60 Гц, Smart TV (Яндекс.ТВ), Wi-Fi',
			color: 'black',
			comments: []
		}, {
			id: v1(),
			photo: 'https://content2.onliner.by/catalog/device/main/2adbeb7f241b77a6c9e73fdf1f3951cb.jpeg',
			title: 'Телевизор Horizont 24LE5011D',
			description: '24" 1366x768 (HD), частота матрицы 60 Гц',
			color: 'grey',
			comments: []
		}
	]
}

const slice = createSlice({
	name: 'tvs',
	initialState,
	reducers: {
		setComment: (state, action: PayloadAction<{ id: string, comment: string }>) => {
			state.items = state.items.map(el => el.id === action.payload.id ? {
				...el,
				comments: [...el.comments, action.payload.comment]
			} : el)
		}
	},
})

export const tvsReducer = slice.reducer
export const tvsActions = slice.actions