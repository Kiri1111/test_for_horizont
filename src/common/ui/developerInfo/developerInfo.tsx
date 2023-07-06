import React from 'react';
import phone from '../../images/phone.png'
import address from '../../images/address.png'
import gitHubI from '../../images/github.png'
import linkedinI from '../../images/linkedin.png'
import telegramI from '../../images/telegram.png'
import s from './developerInfo.module.scss'

export const DeveloperInfo = () => {
	const telIcon = phone
	const addressIcon = address
	const gitHubIcon = gitHubI
	const linkedinIcon = linkedinI
	const telegramIcon = telegramI
	return (
		<div className={s.footerBlock}>
			<div className={s.footerContainer}>
				<div className={s.content}>
					<h2>developed by Kirill Medvedev</h2>
					<div className={s.table}>
						<div className={s.divTel}>
							<div className={s.divs}>
								<img alt={'icon'} className={s.icon} src={addressIcon}/>
								Minsk, Belarus.
							</div>
							<div>
								<img alt={'icon'} className={s.icon} src={telIcon}/>
								+375(44) 722-00-42
							</div>
						</div>
						<div className={s.divTel}>
							<div>
								<a href={'https://github.com/Kiri1111'}>
									<img alt={'icon'} className={s.icon} src={gitHubIcon}/> GitHub
								</a>
							</div>
							<div>
								<a href={'https://t.me/MedvedevKirill92'}>
									<img alt={'icon'} className={s.icon} src={telegramIcon}/> Telegram
								</a>
							</div>
							<div>
								<a href={'https://www.linkedin.com/in/kirill-medvedev-a75893253/'}>
									<img alt={'icon'} className={s.icon} src={linkedinIcon}/> Linkedin
								</a>
							</div>
						</div>
					</div>
					<h3> &copy; 2023 All rights reserved</h3>
				</div>
			</div>
		</div>

	);
};

