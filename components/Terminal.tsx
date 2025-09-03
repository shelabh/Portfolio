'use client'

import { useState } from "react"

const Terminal = () => {
    const [input, setInput] = useState("")
    const [history, setHistory] = useState<string[]>([
        "Welcome to Shelabh's Portfolio Terminal 👨‍💻",
        "Type `help` to see available commands."
    ])

    const commands: Record<string, string | string[]> = {
        help: [
            "Available commands:",
            "about   - Who I am",
            "skills  - My skillset",
            "projects- Highlighted work",
            "clear   - Clear the terminal",
        ],
        about: "I’m Shelabh Tyagi, a self-taught engineer with 4+ years freelancing + 6 months as a frontend dev at LeapX.ai. Passionate about web, AI/ML & building products.",
        skills: "JavaScript, TypeScript, React, Next.js, Tailwind, Python, FastAPI, SQLModel, LLMs, Chrome Extensions.",
        projects: [
            "- Chrome Extension + FastAPI + Firecrawl: automated scraping & enrichment pipeline.",
            "- AI Chatbot framework: trainable chatbot with stored context.",
            "- Freelance work across web2, web3 & AI/ML domains."
        ],
        clear: "clear",
        what_are_your_projects_that_you_have_worked_on : "dwdw"
    }

    const handleCommand = (cmd: string) => {
        if (cmd === "clear") {
            setHistory([])
            return
        }
        if (commands[cmd]) {
            const output = Array.isArray(commands[cmd]) ? commands[cmd] : [commands[cmd] as string]
            setHistory(prev => [...prev, `$ ${cmd}`, ...output])
        } else {
            setHistory(prev => [...prev, `$ ${cmd}`, `command not found: ${cmd}`])
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input.trim())
            setInput("")
        }
    }

    return (
        <div className="rounded-lg bg-black max-w-4xl w-full mx-auto h-96 border border-gray-700 flex flex-col">
            {/* Header */}
            <div className="bg-grey rounded-t-lg px-3 py-2 flex items-center gap-2 group">
                <div className="w-4 h-4 rounded-full flex items-center justify-center bg-red">
                    <span className="text-xs font-bold text-black leading-none opacity-0 group-hover:opacity-100 transition-opacity">×</span>
                </div>
                <div className="w-4 h-4 rounded-full flex items-center justify-center bg-yellow">
                    <span className="text-sm font-bold text-black leading-none opacity-0 group-hover:opacity-100 transition-opacity">−</span>
                </div>
                <div className="w-4 h-4 rounded-full flex items-center justify-center bg-green">
                    <span className="text-[10px] font-bold text-black leading-none opacity-0 group-hover:opacity-100 transition-opacity">◻</span>
                </div>
            </div>

            {/* Body */}
            <div className="p-3 text-white font-mono  text-sm flex-1 overflow-y-auto">
                {history.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}

                {/* Input line */}
                <div className="flex ">
                    <span className="text-green-400">go on ask about me $</span>&nbsp;
                    <input
                        className="bg-black flex-1 outline-none text-white"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                </div>
            </div>
        </div>
    )
}

export default Terminal
