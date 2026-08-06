"use client";

const FILTERS = ["All", "Pending", "Completed"];

export default function TaskFilter({ active, onChange }) {
    return (
        <div className="filter-row" role="tablist" aria-label="Task filter">
            {FILTERS.map((f) => (
                <button
                    key={f}
                    role="tab"
                    aria-selected={active === f}
                    className={`filter-btn${active === f ? " filter-btn--active" : ""}`}
                    onClick={() => onChange(f)}
                >
                    {f}
                </button>
            ))}
        </div>
    );
}
