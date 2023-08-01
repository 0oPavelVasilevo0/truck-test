import { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Page } from './Page/Page';
import './carusel_01.css';
import { CaruselContext } from './carusel-context';

export const CaruselOne = ({ children }) => {
  const [offset, setOffset] = useState(0)
  const [width, setWidth] = useState(580)

  const windowElRef = useRef()

  useEffect(() => {
    const resizeHandler = () => {
      const _width = windowElRef.current.offsetWidth
      setWidth(_width)
      setOffset(0)

    }
    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])


  const handleLeftArrowClick = () => {

    setOffset((currentOffset) => {
      const newOffset = currentOffset + width
      return Math.min(newOffset, 0)
    })
    console.log('pushleft')
  }
  const handleRightArroClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width
      const maxOffset = - (width * (children.length - 1))
      return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <CaruselContext.Provider value={{ width }}>
      <div className='main-container'>
        <FaChevronLeft className='arrow' onClick={handleLeftArrowClick} />
        <div className='window' ref={windowElRef}>
          <div className='all-pages' style={{ transform: `translateX(${offset}px)` }}>
            {children}
          </div>
        </div>
        <FaChevronRight className='arrow' onClick={handleRightArroClick} />
      </div>
    </CaruselContext.Provider>
  )
}

CaruselOne.Page = Page
