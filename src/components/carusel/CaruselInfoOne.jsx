import React from 'react'
import { CaruselOne } from './CaruselOne';
import image1 from './../../img/carusel_img/photo_1.png';
import image2 from './../../img/carusel_img/photo_2.png';
import image4 from './../../img/carusel_img/photo_4.png';
import image5 from './../../img/carusel_img/photo_5.png';
import image6 from './../../img/carusel_img/photo_6.png';
import image7 from './../../img/carusel_img/photo_7.png';
import image8 from './../../img/carusel_img/photo_8.png';
import image9 from './../../img/carusel_img/photo_9.png';
import image10 from './../../img/carusel_img/photo_10.png';
import image11 from './../../img/carusel_img/photo_11.png';
import image12 from './../../img/carusel_img/photo_12.png';
import image13 from './../../img/carusel_img/photo_13.png';
import image14 from './../../img/carusel_img/photo_14.png';
import image15 from './../../img/carusel_img/photo_15.png';
import image16 from './../../img/carusel_img/photo_16.png';
import image17 from './../../img/carusel_img/photo_17.png';
import image18 from './../../img/carusel_img/photo_18.png';
import image19 from './../../img/carusel_img/photo_19.png';
import image20 from './../../img/carusel_img/photo_20.png';
import image22 from './../../img/carusel_img/photo_22.png';
import image23 from './../../img/carusel_img/photo_23.png';
import image24 from './../../img/carusel_img/photo_24.png';
import image25 from './../../img/carusel_img/photo_25.png';
import image26 from './../../img/carusel_img/photo_26.png';
import image27 from './../../img/carusel_img/photo_27.png';
import './carusel_info_one.css';
import { useTranslation } from 'react-i18next';

const CaruselInfoOne = () => {

    const {t} = useTranslation();

    return (
        <CaruselOne >
            <CaruselOne.Page>
                <img className='picture' src={image1} alt='1' />
                <p>{t('contact_time')}</p>
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image2} alt='2' />
                <p>2</p>
            </CaruselOne.Page>
              <CaruselOne.Page>
                <img className='picture' src={image4} alt='4' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image5} alt='5' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image6} alt='6' />
            </CaruselOne.Page>
             <CaruselOne.Page>
                <img className='picture' src={image7} alt='7' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image8} alt='8' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image9} alt='9' />
            </CaruselOne.Page>
             <CaruselOne.Page>
                <img className='picture' src={image10} alt='10' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image11} alt='11' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image12} alt='12' />
            </CaruselOne.Page> 
             <CaruselOne.Page>
                <img className='picture' src={image13} alt='13' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image14} alt='14' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image15} alt='15' />
            </CaruselOne.Page>
             <CaruselOne.Page>
                <img className='picture' src={image16} alt='16' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image17} alt='17' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image18} alt='18' />
            </CaruselOne.Page>
             <CaruselOne.Page>
                <img className='picture' src={image19} alt='19' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image20} alt='20' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image22} alt='22' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image23} alt='23' />
            </CaruselOne.Page> 
            <CaruselOne.Page>
                <img className='picture' src={image24} alt='24' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image25} alt='25' />
            </CaruselOne.Page>
             <CaruselOne.Page>
                <img className='picture' src={image26} alt='26' />
            </CaruselOne.Page>
            <CaruselOne.Page>
                <img className='picture' src={image27} alt='27' />
            </CaruselOne.Page>
        </CaruselOne>
    )
}
export default CaruselInfoOne