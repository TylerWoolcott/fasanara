import { useState, useEffect } from "react"

const Phase = {
    Typing: 'Typing',
    Pausing: 'Pausing',
    Deleting: 'Deleting'
} 

const TYPING_INTERVAL = 70
const PAUSE_MS = 1600
const DELETING_INTERVAL = 20

export const useTypedWord = (words) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [phase, setPhase] = useState(Phase.Typing)
    const [typedWord, setTypedWord] = useState('')
    useEffect(() => {
        switch(phase) {
            case Phase.Typing: {               
                const nextTypedWord = words[selectedIndex].slice(0, typedWord.length + 1)
            
                if (nextTypedWord === typedWord) {
                    setPhase(Phase.Pausing)
                   return 
                }
            
                const timeout = setTimeout(() => {
                    setTypedWord(nextTypedWord)
                }, TYPING_INTERVAL)
            
                return () => clearTimeout(timeout)
            }

            case Phase.Deleting: {               
                if (!typedWord) {
                    const nextIndex = selectedIndex + 1
                    setSelectedIndex(words[nextIndex] ? nextIndex : 0)
                    setPhase(Phase.Typing)
                    return
                }
                const nextRemaining = words[selectedIndex].slice(0, typedWord.length - 1)
            
                const timeout = setTimeout(() => {
                    setTypedWord(nextRemaining)
                }, DELETING_INTERVAL)
            
                return () => clearTimeout(timeout)
            }

            case Phase.Pausing:
                default:
                    const timeout = setTimeout(() => {
                        setPhase(Phase.Deleting)
                    }, PAUSE_MS)
                
                    return () => clearTimeout(timeout) 
        }

    }, [words, typedWord, selectedIndex, phase])

    return typedWord
}
