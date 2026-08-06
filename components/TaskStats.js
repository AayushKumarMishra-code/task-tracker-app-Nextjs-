export default function TaskStats({ tasks }) {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;

    return (
        <div className="stats-row">
            <div className="stat-item">
                <span className="stat-number">{total}</span>
                <span className="stat-label">Total</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
                <span className="stat-number stat-number--completed">{completed}</span>
                <span className="stat-label">Completed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
                <span className="stat-number stat-number--pending">{pending}</span>
                <span className="stat-label">Pending</span>
            </div>
        </div>
    );
}
