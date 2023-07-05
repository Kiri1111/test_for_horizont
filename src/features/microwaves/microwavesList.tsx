import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {ItemForView} from "../../common/ui/itemForView";
import {microwavesSelector} from "./microwavesSelectors";

export const MicrowavesList = () => {

	const microwaves = useAppSelector(microwavesSelector)

	return (
		<div>
			{microwaves.map(el => <ItemForView key={el.id} title={el.title} photo={el.photo}/>)}
		</div>
	)
}

