import React from 'react';

interface ToastProps {
  show: boolean;
  message: string;
  icon?: React.ReactNode;
}

export function Toast({ show, message, icon }: ToastProps) {
  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-200">
      {icon && <span>{icon}</span>}
      <span>{message}</span>
    </div>
  );
}