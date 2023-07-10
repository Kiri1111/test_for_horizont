import React, {ChangeEvent, FC, useState} from 'react';
import {Modal} from "../modalWindow/Modal";
import s from './itemForView.module.scss'
import {useAppDispatch} from "../../../app/hooks";
import {tvsActions} from "../../../features/tvs/tvsSlice";

type ItemPropsType = {
	id: string
	title: string
	photo: string
	description: string
	comments: string[]
}

export const ItemForView: FC<ItemPropsType> = ({id, comments, photo, title, description}) => {

	const [viewDescription, setViewDescription] = useState(false)
	const [comment, setComment] = useState('')
	const dispatch = useAppDispatch()
	const commentsForView = comments.map(el => el)
	const setCommentHandler = (e: ChangeEvent<HTMLInputElement>) => setComment(e.currentTarget.value)

	const addCommentHandler = () => {
		dispatch(tvsActions.setComment({id, comment}))
		setComment('')
	}

	const viewDescriptionsHandler = () => setViewDescription(true)

	return (

		<div className={s.itemsBlock}>
			{viewDescription && <Modal title={title} setView={setViewDescription}>
                <div className={s.modalChildren}>
                    <img className={s.imgInModal} alt={'icon'} src={photo}/>
                    <div className={s.descriptionBlock}>
                        <div className={s.descriptionsInModal}>{description}</div>
                        <div className={s.comment}>Комментарии: {commentsForView}</div>
                        <input className={s.input} placeholder={'Ваш комментарии'} value={comment}
                               onChange={setCommentHandler}/>
                        <div className={s.addCommentButton} onClick={addCommentHandler}>Добавить комментарий</div>
                    </div>
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

