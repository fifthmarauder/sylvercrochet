"use client";

import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronUpIcon,
  Search,
  ShieldQuestionMark,
} from "lucide-react";
import styles from "./faq.module.css";
import { useState } from "react";

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const faqs = [
    {
      heading: "ORDERS & SHIPPING",
      QA: [
        {
          question: "How long does it take to process my order?",
          answer:
            "Since all our items are handmade, processing takes 7-10 business days for regular items. Custom orders may take 10-15 days depending on the complexity of the design. We'll keep you updated throughout the process!",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "No. For now our orders are restricted to Pakistan only but stay tuned in for more updates!",
        },
        {
          question: "Can I track my order?",
          answer:
            "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this to track your package in real-time.",
        },
        {
          question: "What if my order arrives damaged?",
          answer:
            "We package everything carefully, but accidents happen! If your item arrives damaged, contact us within 48 hours with photos and we'll send you a replacement at no cost.",
        },
      ],
    },
    {
      heading: "PRODUCTS & CUSTOMIZATION",
      QA: [
        {
          question: "Can I request a custom color or design?",
          answer:
            "Yes! We love creating custom pieces. Visit our Custom Order page to submit your request. You can choose colors, sizes, and even send us inspiration photos. We'll work with you to create something special!",
        },
        {
          question: "What materials do you use?",
          answer:
            "We use high-quality acrylic and cotton yarns that are soft, durable, and easy to care for. All materials are safe and hypoallergenic.",
        },
        {
          question: "Are your products suitable for children?",
          answer:
            "Many of our items are perfect for children! All baby and child items are made with safety in mind - no small parts that can come loose.",
        },
        {
          question: "Can I wash my crochet items?",
          answer:
            "Yes! Most items can be hand-washed in cold water with mild detergent and laid flat to dry. Avoid machine washing to maintain the shape and quality.",
        },
      ],
    },
    {
      heading: "RETURNS & EXCHANGES",
      QA: [
        {
          question: "What is your return policy?",
          answer:
            "We accept returns within 2 days of delivery for defective items.",
        },
        {
          question: "How do I exchange an item?",
          answer:
            "Email us at sylvercrochet@gmail.com with your order number and what you'd like to exchange. We'll arrange the exchange and cover return shipping if it's our error.",
        },
        {
          question: "Who pays for return shipping?",
          answer:
            "If you're returning due to our error (wrong item, defect, etc.), we cover return shipping.",
        },
      ],
    },
    {
      heading: "PAYMENTS & PRICINGS",
      QA: [
        {
          question: "What payment methods do you accept?",
          answer: "As of now we only accept online transfers.",
        },
        {
          question: "Do you offer discounts or promotions?",
          answer:
            "Our website's discount feature is currently in progress but you can check out our insta for discount codes and include them in our order details.",
        },
        {
          question: "Why are handmade items more expensive?",
          answer:
            "Each item is crafted by hand with love and care, taking several hours to complete. You're paying for quality materials, skilled craftsmanship, and a unique one-of-a-kind piece that will last for years!",
        },
      ],
    },
    {
      heading: "GENERAL QUESTIONS",
      QA: [
        {
          question: "Do you have a physical store?",
          answer:
            "We currently operate online only, which helps us keep prices affordable while focusing on quality. However, we occasionally participate in local craft fairs, follow our social media for updates!",
        },
        {
          question: "Can I sell or give away items I purchased?",
          answer:
            "Absolutely! Once you purchase an item, it's yours to keep, gift, or resell as you wish. We just ask that you don't claim the handmade work as your own.",
        },
        {
          question: "Are you hiring?",
          answer: "Careers is launching soon!",
        },
      ],
    },
  ];

  const handleClick = (sectionIdx: any, qaIdx: any) => {
    const key = `${sectionIdx}-${qaIdx}`;
    setActive((prev) => (prev === key ? null : key));
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <ShieldQuestionMark className={styles.icon} size={64} />
        <div className="heading" style={{ color: "var(--color-darkPink)" }}>
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className={styles.para}>Got questions? We got answers!</div>
        <div className={styles.searchBoxContainer}>
          <Search color="var(--color-darkPink)" />
          <input
            placeholder="Search for questions.."
            type="text"
            className={styles.input}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.wrapper}>
          {faqs.map((faq, sectionIdx) => {
            return (
              <div key={faq.heading}>
                <div
                  className={`heading ${styles.heading}`}
                  style={{
                    fontSize: "24px",
                    color: "var(--color-darkPink)",
                  }}
                >
                  {faq.heading}
                </div>
                <div>
                  <div className={styles.qaContainer}>
                    {faq.QA.map((qa, qaIdx) => {
                      const key = `${sectionIdx}-${qaIdx}`;
                      return (
                        <div className={styles.qa} key={qaIdx}>
                          <div
                            className={styles.questions}
                            onClick={() => handleClick(sectionIdx, qaIdx)}
                          >
                            <div className={styles.questionContainer}>
                              <div>{qa.question}</div>
                              {active === key ? (
                                <ChevronUpIcon
                                  style={{
                                    fontSize: "12px",
                                    color: "var(--color-darkPink)",
                                  }}
                                />
                              ) : (
                                <ChevronDown
                                  style={{
                                    fontSize: "12px",
                                    color: "var(--color-darkPink)",
                                  }}
                                />
                              )}
                            </div>
                          </div>
                          {active === key && (
                            <div className={styles.answers}>{qa.answer}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
