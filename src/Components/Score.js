import { useEffect } from "react"
const Score = ({ value, onEnd }) => {
    useEffect(() => {
        if(value === 2) {
            onEnd()
        }
    })
    return <div>{`Score: ${value}`}</div>
}

export default Score;
