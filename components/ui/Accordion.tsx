"use client"
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";




interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const contentClasses = isOpen
    ? 'max-h-screen opacity-100'
    : 'max-h-0 opacity-0';


  const iconClasses = isOpen
    ? 'transform rotate-90'
    : 'transform rotate-0';

  return (
    <div className="mb-4 overflow-hidden">
      <button
        className="accordion-header w-full border-b border-dotted border-gray-400 py-2 cursor-pointer select-none flex flex-row justify-between items-center transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[16px] font-semibold text-main-color">{title}</h3>

        <span className={`text-xl font-bold transition-transform duration-300 ${iconClasses}`}>
          <IoIosArrowForward
            size={18}
            className='text-main-color'
          />
        </span>
      </button>
      <div
        className={`accordion-content ${contentClasses} transition-all duration-500 ease-in-out`}
      >
        <div className="p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;