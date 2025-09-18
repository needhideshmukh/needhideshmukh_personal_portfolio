// src/TypingEffect.js
import React, { useState, useEffect } from "react"

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      }, speed)

      return () => clearTimeout(timeoutId)
    }
  }, [index, text, speed])

  return <span dangerouslySetInnerHTML={{ __html: displayedText }} />
}

export default TypingEffect
