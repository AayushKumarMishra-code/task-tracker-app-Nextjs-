"use client";

export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className={`task-item${task.completed ? " task-item--done" : ""}`}>
            <label className="task-check-label">
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    aria-label={`Mark "${task.text}" as ${task.completed ? "incomplete" : "complete"}`}
                />
                <span className="task-text">{task.text}</span>
            </label>
            <button
                className="btn btn-delete"
                onClick={() => onDelete(task.id)}
                aria-label={`Delete task: ${task.text}`}
            >
                Delete
            </button>
        </li>
    );
}
