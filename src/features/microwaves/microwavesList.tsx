import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {ItemForView} from "../../common/ui/itemForView/itemForView";
import {microwavesSelector} from "./microwavesSelectors";

export const MicrowavesList = () => {

	const microwaves = useAppSelector(microwavesSelector)

	return (
		<div>
			{microwaves.map(el => <ItemForView key={el.id} comments={el.comments} id={el.id}
											   description={el.description} title={el.title}
											   photo={el.photo}/>)}
		</div>
	)
}

