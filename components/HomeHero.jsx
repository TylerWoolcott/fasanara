import { FasanaraWords } from './FasanaraHero'
import Image from 'next/image'

const Welcome = () => {
    return (
        <div className='min-h-screen '>
        <div className='bgWrap'>
          <Image
            alt="background"
            src="/hero.jpeg"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            />
        </div>
         <FasanaraWords />
        <h2 className='bgSubtext text-[#eeebe5] text-[18px] font-semibold mt-[52px] md:mt-[12px]'>
        Join more than 2,700 individual investors who have come together through Fasanara to invest £1.3B in private equity. Invest in top tier funds from some of the world’s most legendary firms.
        </h2>
      </div>
    )
} 

export default Welcome;