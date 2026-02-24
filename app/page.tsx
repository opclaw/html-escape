'use client'
import {useState} from 'react'
import styles from './page.module.css'

export default function Home() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('escape')

  const escapeHTML = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
  }

  const unescapeHTML = (str: string) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
  }

  const handleConvert = () => {
    setOutput(mode === 'escape' ? escapeHTML(input) : unescapeHTML(input))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HTML Escape / Unescape</h1>
      <div className={styles.modes}>
        <button onClick={() => setMode('escape')} className={mode === 'escape' ? styles.active : ''}>Escape</button>
        <button onClick={() => setMode('unescape')} className={mode === 'unescape' ? styles.active : ''}>Unescape</button>
      </div>
      <textarea value={input} onChange={e => setInput(e.target.value)} className={styles.input} placeholder="Enter HTML..." />
      <button onClick={handleConvert} className={styles.btn}>Convert</button>
      <textarea value={output} readOnly className={styles.output} placeholder="Result..." />
    </div>
  )
}