import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import KanbanColumn from '../Components/Kanban';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const initialTasks = [
  { id: 1, title: 'Task 1', description: 'Description of Task 1', status: 'todo' },
  { id: 2, title: 'Task 2', description: 'Description of Task 2', status: 'inProgress' },
  { id: 3, title: 'Task 3', description: 'Description of Task 3', status: 'done' },
];

function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskUpdate = (id, updates) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  const handleTaskDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleTaskMove = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
            <Navbar />
            <div className="p-6 flex gap-4">
                <KanbanColumn
                title="To Do"
                status="todo"
                tasks={tasks.filter((task) => task.status === 'todo')}
                onMoveTask={handleTaskMove}
                onUpdate={handleTaskUpdate}
                onDelete={handleTaskDelete}
                />
                <KanbanColumn
                title="In Progress"
                status="inProgress"
                tasks={tasks.filter((task) => task.status === 'inProgress')}
                onMoveTask={handleTaskMove}
                onUpdate={handleTaskUpdate}
                onDelete={handleTaskDelete}
                />
                <KanbanColumn
                       title="Done"
                       status="done"
                       tasks={tasks.filter((task) => task.status === 'done')}
                        onUpdate={handleTaskUpdate}
                        onDelete={handleTaskDelete}
                />
            </div>
      </DndProvider>
    </>
  );
}

export default Dashboard;
