import { useTypedWord } from "./useTypedWord"

const words = [' stakers', ' miners', ' founders', ' developers']

export const FasanaraWords = () => {
    const word = useTypedWord(words)

    return (
    <h2 className='bgText text-[40px] lg:text-[60px] leading-none'>
        <span className='font-extrabold text-[#eeebe5]'>Fasanara backs the 
            <span className=''>
            {word}
            </span>
        </span>
    </h2>
)
}

