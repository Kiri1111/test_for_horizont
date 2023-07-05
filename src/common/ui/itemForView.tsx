import React, {FC} from 'react';

type ItemPropsType = {
	// id: string
	title: string
	photo: string
	// description: string
}

export const ItemForView: FC<ItemPropsType> = ({photo, title}) => {
	return (
		<div>
			<div>{title}</div>
			<div>
				<img alt={'icon'} src={photo}/>
			</div>
		</div>
	)
}

