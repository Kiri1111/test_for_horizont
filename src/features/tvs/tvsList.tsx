import React from 'react';
import {ItemForView} from "../../common/ui/itemForView";
import {useAppSelector} from "../../app/hooks";
import {tvSelector} from "./tvSelectors";

export const TvsList = () => {

	const tvs = useAppSelector(tvSelector)

	return (
		<div>
			{tvs.map(el => <ItemForView key={el.id} title={el.title} photo={el.photo}/>)}
		</div>
	)
}

