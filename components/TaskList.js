import TaskItem from "./TaskItem";

export default function TaskList({ tasks, filter, onToggle, onDelete }) {
    if (tasks.length === 0) {
        const emptyMessages = {
            All: "No tasks yet. Add one above.",
            Pending: "Nothing pending. All caught up!",
            Completed: "Nothing completed yet.",
        };

        return (
            <p className="empty-state">{emptyMessages[filter] || "No tasks here."}</p>
        );
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
