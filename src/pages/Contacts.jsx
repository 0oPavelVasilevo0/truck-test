import React from 'react'
// import BtnPhoto from '../components/btnPhoto/BtnPhoto';
import photo from '../img/contact1.jpeg'
import { useTranslation } from 'react-i18next'

const Contacts = () => {

    const {t} = useTranslation()

    return (
        <main className="section">
            <div className="container">
                
                <h1 className="title-1">{t('contact_title')}</h1>
                    <div className='contact'>
                <ul className="content-list">
                    <li className='content-list__item'>
                        <img src={photo} style={{ borderRadius: 20, width: 260 }} alt='' />
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">{t('contact_name')}</h2>
                        <p>{t('contact_region')}</p>
                        <p>{t('contact_time')}</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2"><a href="tel:+79963421022">+7 996 342-10-22</a></h2>
                        <p>Telegram/WhatsApp/Viber</p>
                    </li>
                </ul>
                </div>
            </div>
        </main>
    )
}

export default Contacts