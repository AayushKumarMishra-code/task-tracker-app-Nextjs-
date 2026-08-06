"use client";

import { useState } from "react";

export default function TaskForm({ onAdd }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;
        onAdd(trimmed);
        setText("");
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                className="task-input"
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={200}
            />
            <button className="btn btn-primary" type="submit">
                Add
            </button>
        </form>
    );
}
