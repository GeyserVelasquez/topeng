import './faq.css'

import {FAQItem} from '../components/FAQItem/FAQItem.jsx'

export default function faq() {
    const faqData = [
      { question: "What is Topeng?", answer: "The quantum flux capacitor..." },
      { question: "How could I put private my account?", answer: "You can set your account..." },
      { question: "Could I monetize my Topeng’s?", answer: "Yes, you can monetize..." },
      // Agrega más preguntas y respuestas aquí
    ];
  
    return (
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </section>
    );
  };