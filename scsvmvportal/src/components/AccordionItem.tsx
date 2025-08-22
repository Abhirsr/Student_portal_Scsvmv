"use client";

import { useState } from 'react';

// Define the types for the component's props.
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

// The AccordionItem component.
const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  // State to track if the accordion is open or closed.
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state.
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-white border-t-6">
      {/* Header section of the accordion */}
      <div
        className="flex justify-between items-center p-2 cursor-pointer bg-[#0369A1] text-white"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </div>

      {/* DYNAMIC CONTENT CONTAINER */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;