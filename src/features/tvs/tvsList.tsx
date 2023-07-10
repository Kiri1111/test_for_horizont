import React from 'react';
import {ItemForView} from "../../common/ui/itemForView/itemForView";
import {useAppSelector} from "../../app/hooks";
import {tvsSelector} from "./tvSelectors";

export const TvsList = () => {

	const tvs = useAppSelector(tvsSelector)
	return (
		<div>
			{tvs.map(el => <ItemForView key={el.id} id={el.id} description={el.description} title={el.title}
										photo={el.photo} comments={el.comments}/>)}
		</div>
	)
}

