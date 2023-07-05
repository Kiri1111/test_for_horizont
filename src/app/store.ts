import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {microwavesReducer} from "../features/microwaves/microwavesSlice";
import {tvsReducer} from "../features/tvs/tvsSlice";

export const store = configureStore({
	reducer: {
		microwaves: microwavesReducer,
		tvs: tvsReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
	RootState,
	unknown,
	Action<string>>;
