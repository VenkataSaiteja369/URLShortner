import React from 'react';

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export function Tabs({ value, onValueChange, children }: TabsProps) {
  return <div>{children}</div>;
}

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

export function TabsList({ className = '', children }: TabsListProps) {
  return (
    <div className={`flex space-x-1 rounded-lg bg-gray-100 p-1 ${className}`}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function TabsTrigger({ value, children, onClick }: TabsTriggerProps) {
  const handleClick = () => {
    onClick?.();
    const element = document.getElementById(`section-${value}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md 
        hover:bg-white hover:text-indigo-600 hover:shadow-sm
        transition-all duration-200 ease-in-out
        data-[state=active]:bg-white data-[state=active]:text-indigo-600 
        data-[state=active]:shadow-sm transform hover:scale-105"
      data-state={value === 'active' ? 'active' : 'inactive'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export function TabsContent({ value, children }: TabsContentProps) {
  return <div id={`section-${value}`}>{children}</div>;
}