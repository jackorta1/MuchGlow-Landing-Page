"use client";
import React from "react";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";

const AccordionDataAr = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const accordionItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
  <motion.div 
    className="webMarg container"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="row justify-content-center">
      <motion.div 
        className="col-lg-5 text-center text-lg-end"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h6 
          className="fs-6 fw-semibold"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          الدعم
        </motion.h6>
        <motion.h3 
          className="colored display-4 fw-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          الأسئلة المتكررة
        </motion.h3>
        <motion.p 
          className="fs-5 w-75 mx-auto mx-lg-0 lh-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          كل ما تحتاج معرفته عن تطبيقنا. لم تجد الإجابة التي تبحث عنها؟ اتصل بنا على&nbsp;
          <a
            href="mailto:support@muchglow.com"
            className="textPara fw-bold text-decoration-none"
          >
            support@muchglow.com
          </a>
          .
        </motion.p>
      </motion.div>
      <motion.div 
        className="col-lg-7"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        {/* Removed defaultActiveKey to prevent any Accordion from being open by default */}
        <Accordion>
          {[
            {
              title: "ما هو ماتش غلو؟",
              body: "ماتش غلو هو تطبيق موبايل يغير طريقة حجز خدمات الصالونات والمنتجعات الصحية، ويقدم مكافآت مخصصة وتجارب سلسة.",
            },
            {
              title: "هل ماتش غلو هو تطبيق خدمات منزلية للصالونات؟",
              body: "لا، هو يسهل الحجز في الصالون وجمع الطلبات من خارج الصالون مع برامج ولاء للصالونات والعملاء.",
            },
            {
              title: "كيف أسجل صالوني؟",
              body: "قم بتعبئة نموذج 'كن شريكاً'، وسيتواصل معك فريقنا في غضون 24 ساعة لتسجيلك.",
            },
            {
              title: "هل يتم الدفع عبر ماتش غلو للخدمات؟",
              body: "نعم، يتم الدفع بشكل آمن عبر Apple Pay أو البطاقات أو المحفظة داخل التطبيق.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={accordionItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body className="textPara fs-5">
                  {item.body}
                </Accordion.Body>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </motion.div>
  );
};

export default AccordionDataAr;
