"use client"
import { useState } from "react"

export default function LanguageSwitcher() {
    const [language, setLanguage] = useState<string>('ar')
  return (
    <div>
      {
        language === "ar" ? <button onClick={() => setLanguage('en')}>EN</button> :
        <button onClick={() => setLanguage('ar')}>AR</button>
       }
    
    </div>
  )
}
