import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './carousel.module.css'

export const MyCarousel = ({images}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {images.map((image) => (
            <div className={styles.embla__slide}>
              <Image
                src={image.path}
                alt={image.alt}
                height={500} width={500} 
              />
            </div>
        ))}
      </div>
    </div>
  )
}