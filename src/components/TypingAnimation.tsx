'use client'

import { useEffect, useState } from 'react'

export default function TypingAnimation() {
  const text = 'Hello World'
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (displayedText.length === text.length) {
      setIsTyping(false)
    }
  }, [displayedText, isTyping, text])

  return (
    <div className="text-center px-4">
      <div className="text-6xl md:text-8xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          {displayedText}
        </span>
        {isTyping && <span className="typing-cursor">|</span>}
      </div>
      <p className="text-xl md:text-2xl text-purple-200 mt-8 font-light">
        Welcome to the future
      </p>
    </div>
  )
}
