import React, {FC, useState} from 'react';
import {Modal} from "../modalWindow/Modal";

type ItemPropsType = {
	title: string
	photo: string
	description: string
}

export const ItemForView: FC<ItemPropsType> = ({photo, title, description}) => {

	const [viewDescription, setViewDescription] = useState(false)

	return (
		<div>

			{viewDescription && <Modal title={title} setView={setViewDescription}>
                <div>
                    <img alt={'icon'} src={photo}/>
                    <div>{description}</div>
                </div>
            </Modal>}

			<div>{title}</div>
			<div onClick={() => setViewDescription(true)}>
				<img alt={'icon'} src={photo}/>
			</div>


		</div>
	)
}

