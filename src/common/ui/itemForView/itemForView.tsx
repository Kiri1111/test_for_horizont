import React, {FC, useState} from 'react';
import {Modal} from "../modalWindow/Modal";
import s from './itemForView.module.scss'

type ItemPropsType = {
	title: string
	photo: string
	description: string
}

export const ItemForView: FC<ItemPropsType> = ({photo, title, description}) => {

	const [viewDescription, setViewDescription] = useState(false)

	const viewDescriptionsHandler = () => setViewDescription(true)

	return (

		<div className={s.itemsBlock}>
			{viewDescription && <Modal title={title} setView={setViewDescription}>
                <div className={s.modalChildren}>
                    <img className={s.imgInModal} alt={'icon'} src={photo}/>
                    <div className={s.descriptionsInModal}>{description}</div>
                </div>
            </Modal>}
			<div className={s.content}>

				<div onClick={viewDescriptionsHandler}>
					<img className={s.img} alt={'icon'} src={photo}/>
				</div>
				<div>
					<div className={s.title}>{title}</div>
					<div className={s.button} onClick={viewDescriptionsHandler}>Подробнее</div>
				</div>
			</div>
		</div>
	)
}

