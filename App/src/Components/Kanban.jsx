import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';

function KanbanColumn({ title, status, tasks, onMoveTask }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => onMoveTask(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`bg-white rounded-lg shadow-md w-1/3 p-4 ${
        isOver ? 'bg-blue-100' : ''
      }`}
    >
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default KanbanColumn;
