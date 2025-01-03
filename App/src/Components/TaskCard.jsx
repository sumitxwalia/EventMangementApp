import React from 'react';
import { useDrag } from 'react-dnd';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

function TaskCard({ task }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 bg-gray-100 rounded-lg mb-4 flex items-center justify-between ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
      <div className="flex gap-2">
        <button>
          <TrashIcon className="h-5 w-5 text-red-500" />
        </button>
        <button>
          <PencilIcon className="h-5 w-5 text-blue-500" />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
