"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import TaskStats from "@/components/TaskStats";
import TaskForm from "@/components/TaskForm";
import TaskFilter from "@/components/TaskFilter";
import TaskList from "@/components/TaskList";

const STORAGE_KEY = "task-tracker-tasks";

const SEED_TASKS = [
  { id: "seed-1", text: "Learn Next.js App Router", completed: false },
  { id: "seed-2", text: "Build this task tracker", completed: true },
  { id: "seed-3", text: "Push to GitHub", completed: false },
];

function createId() {
  return `task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setTasks(JSON.parse(stored));
      } else {
        setTasks(SEED_TASKS);
      }
    } catch {
      setTasks(SEED_TASKS);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
    }
  }, [tasks, hydrated]);

  function handleAdd(text) {
    setTasks((prev) => [
      { id: createId(), text, completed: false },
      ...prev,
    ]);
  }

  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleDelete(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "Pending") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  if (!hydrated) {
    return null;
  }

  return (
    <main className="main">
      <div className="card">
        <Header />
        <TaskStats tasks={tasks} />
        <TaskForm onAdd={handleAdd} />
        <TaskFilter active={filter} onChange={setFilter} />
        <TaskList
          tasks={filteredTasks}
          filter={filter}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
        <footer className="footer">
          made while figuring things out &mdash; works in modern browsers that support localStorage
        </footer>
      </div>
    </main>
  );
}
