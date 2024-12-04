import React, { useRef, useState}  from 'react';
import './accordions.css';
import { RiArrowDropDownLine } from 'react-icons/ri'


const data = [
  {
   question: 'What is the average salary of employees?',
   answer: 'The average salary is calculated based on the total salaries of all employees divided by the number of employees. This helps in understanding overall compensation trends.' ,
  },
  {
   question: 'How are promotions tracked?',
   answer: 'Promotions are tracked by monitoring employee performance and achievements. Promoted employees are highlighted in the system for easy reference.',
  },
  {
   question: 'How does the insurance process work?',
   answer: 'Employees are insured based on their role and salary. The system ensures that all employees are accounted for and provides insights into active insurance policies',
  },
  {
   question: 'Can new employees be added manually?',
   answer: 'Yes, you can add new employees using the input fields provided. Simply enter their name and salary, and they will be included in the database.',
  }
 ];

//  accordionitem component
const AccordionItem = ({question, answer, isOpen, onClick}) => {
  const contentHeight = useRef()
   return(
     <div className="wrapper" >
     <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
      <p className='question-content'>{question}</p>
      <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} /> 
     </button>
 
      <div   ref={contentHeight}
       className="answer-container"
       style={{
         height: isOpen ? `${contentHeight.current.scrollHeight}px` : '0px',
       }}>
       <p className="answer-content">{answer}</p>
      </div>
    </div>
   )};

// main Accordion component
const Accordions = () => {

  const [activeIndex, setActiveIndex] = useState(null);


  const handleItemClick = (index) => {
   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='container'>
      {data.map((item, index) => (
      <AccordionItem
       key={index}
       question={item.question}
       answer={item.answer}
       isOpen={activeIndex === index}
       onClick={() => handleItemClick(index)}
      />
     ))}
    </div>
   )
}

export default Accordions