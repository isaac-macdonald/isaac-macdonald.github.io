import React, { JSX, useEffect, useState, useRef, useLayoutEffect } from 'react';
import './App.css';
// import About from './commands/About';
import Projects from './commands/Projects';
// import Skills from './commands/Skills';
// import Help from './commands/Help';
import ManPage from './commands/ManPage';

const COMPONENTS: Record<string, JSX.Element> = {
    man: <ManPage />,
    // about: <About />,
    projects: <Projects />,
    // skills: <Skills />,
    // help: <Help />,
};

const App = () => {
    const [history, setHistory] = useState<JSX.Element[]>([]);
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const terminalOutputRef = useRef<HTMLDivElement | null>(null);
    const lastHistoryItemRef = useRef<HTMLDivElement | null>(null);

    // Track which suggestion is currently highlighted for cycling
    const [highlightedSuggestion, setHighlightedSuggestion] = useState<number | null>(null);

    useEffect(() => {
        setHistory([<ManPage key="man" />]);
    }, []);

    // Scroll to the last added item after it renders
    useLayoutEffect(() => {
        if (lastHistoryItemRef.current) {
            lastHistoryItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [history]);

    const handleCommand = (command: string) => {
        const cmd = command.toLowerCase().trim();
        if (cmd === 'clear') {
            setHistory([]);
            return;
        }
        const component = COMPONENTS[cmd];
        if (component) {
            setHistory(prev => {
                const newHistory = [
                    ...prev,
                    <div
                        key={Date.now()}
                        ref={lastHistoryItemRef}  // Set ref to the last history item
                    >
                        <span className="prompt-line">user@isaac-macdonald.github.io:~$ {cmd}</span>{component}
                    </div>
                ];
                return newHistory;
            });
        } else {
            setHistory(prev => {
                const newHistory = [
                    ...prev,
                    <div
                        key={Date.now()}
                        ref={lastHistoryItemRef}  // Set ref to the last history item
                    >
                        <span className="prompt-line">user@isaac-macdonald.github.io:~$ {cmd}</span>
                        <pre>Command not found: {cmd}</pre>
                    </div>
                ];
                return newHistory;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput('');
        setSuggestions([]);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInput(val);

        // Find commands that start with the current input value
        const matchedCommands = Object.keys(COMPONENTS).filter(c => c.startsWith(val));
        setSuggestions(matchedCommands);
        setHighlightedSuggestion(null);  // Reset highlighted suggestion when input changes
    };

    const handleTab = (e: React.KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        e.preventDefault(); // Prevent default Tab behavior

        if (suggestions.length === 1) {
            // Autofill if there's exactly one match
            setInput(suggestions[0]);
        } else if (suggestions.length > 1) {
            // Cycle through the suggestions if there are multiple matches
            const nextIndex = (highlightedSuggestion === null)
                ? 0
                : (highlightedSuggestion + 1) % suggestions.length;
            setHighlightedSuggestion(nextIndex);
            setInput(suggestions[nextIndex]);
        }
    };

    return (
        <div className="terminal">
            <div className="terminal-output" ref={terminalOutputRef}>
                {history}
            </div>
            {suggestions.length > 0 && (
                <div className="suggestions">
                    {suggestions.map((s, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: highlightedSuggestion === i ? 'lightgray' : 'transparent',
                            }}
                        >
                            {s}
                        </div>
                    ))}
                </div>
            )}
            <form onSubmit={handleSubmit} className="terminal-input">
                <span className="prompt">user@isaac-macdonald.github.io:~$</span>
                <input
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleTab}  // Handle Tab key press
                    autoFocus
                />
            </form>
        </div>
    );
};

export default App;
