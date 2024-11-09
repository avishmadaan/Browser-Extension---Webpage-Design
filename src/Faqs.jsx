import {  ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function Faqs() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        console.log(index)
       setActiveIndex(index === activeIndex ? null : index ) 
       console.log(activeIndex)
    }
  return (
    <>
      <div className="container mx-auto  p-2 mt-16 lg:max-w-screen-1440">
        <h1 className="text-3xl font-bold text-center   ">
        Frequently Asked Questions
        </h1>

        <p className="text-softGray max-w-lg  text-md  mt-5 -2 w-full mx-auto text-center">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
        </p>

        <div className="container mx-auto p-6 mb-32 max-w-2xl" id="faqs">

            {faqData.map((faq, index) => (

                <div key={index} onClick={()=>toggle(index)} className=" py-4 border-b cursor-pointer">

                    <div className="question flex justify-between items-center text-lg hover:text-softRed ">
                <h3 className="">{faq.question}</h3>

                    <div className="arr" onClick={()=> toggle(index)}>
                    {activeIndex === index ?< ChevronUp />:<ChevronDown />}
                    </div>

                    </div>

                    {activeIndex === index?(<div className="mt-3 text-softGray" >
                        {faq.answer}
                    </div>):""}

                    


                </div>

            ))}


        </div>
      </div>
    </>
  );
}

const faqData = [
    {
        question: 'What is Bookmark?',
        answer: 'Bookmark is a tool for managing and saving web links, allowing users to easily access them later.',
    },
    {
        question: 'How can I request a new browser?',
        answer: 'You can request a new browser by contacting our support team through the help center.',
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Yes, a mobile app is available on both iOS and Android platforms.',
    },
    {
        question: 'What about other Chromium browsers?',
        answer: 'Our platform is compatible with most Chromium-based browsers.',
    },
];
