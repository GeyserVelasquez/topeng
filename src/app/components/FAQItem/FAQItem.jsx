"use client"; // Indica que este es un Client Component
import React, { useState } from 'react';
import './FAQItem.css';


export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <span>{question}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      <i class="fa-sharp-duotone fa-solid fa-square-chevron-down"></i>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};