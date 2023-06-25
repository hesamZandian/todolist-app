import React from "react";
import Button from "shared/components/Button";
import Checkbox from "shared/components/Checkbox";

export interface TodoItemProps {
  title: string;
  completed: boolean;
  onToggleTodo: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  title,
  completed,
  onToggleTodo,
}) => {
  return (
    <li className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center">
        <span className="flex-grow">{title}</span>
        <Checkbox className="text-blue-500" onChange={onToggleTodo} />
      </div>
      <div className="flex items-center space-x-2">
        <Button className="text-red-500 hover:text-red-600">Delete</Button>
      </div>
    </li>
  );
};
