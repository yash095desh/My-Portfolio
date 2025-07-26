"use client";

import React, { useRef } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion, useScroll, useTransform } from "motion/react";

const Contact = () => {
  const Contactform = useRef();
  const textRef = useRef();
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !Contactform?.current?.user_name?.value ||
      !Contactform?.current?.user_email?.value ||
      !Contactform?.current?.message?.value
    ) {
      return toast.error("Please fill out all fields");
    }
    emailjs
      .sendForm("service_swr8324", "template_8gpiuwq", Contactform.current, {
        publicKey: "81tRITB_RRcwxMy51",
      })
      .then(() => {
        toast.success("Message Sent");
        Contactform.current.user_name.value = "";
        Contactform.current.user_email.value = "";
        Contactform.current.message.value = "";
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error occurred while sending");
      });
  };

  return (
    <div
      className="py-20 lg:px-10 flex flex-col bg-[#F3F3F3] dark:bg-dark-surface transition-colors duration-300 items-center justify-center"
      id="contact"
    >
      <Title text={"Contact Me"} />
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-20 my-10 mx-4 md:mx-10 lg:mx-20">
        {/* Form */}
        <motion.form
          ref={Contactform}
          onSubmit={sendEmail}
          className="flex flex-col gap-10 lg:basis-[50%] px-5 md:px-12 py-20 rounded-lg bg-white dark:bg-dark-surface2 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="border outline-none border-black dark:border-dark-muted bg-transparent text-black dark:text-dark-text placeholder:text-gray-500 dark:placeholder:text-dark-muted p-4 rounded-lg"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="border outline-none border-black dark:border-dark-muted bg-transparent text-black dark:text-dark-text placeholder:text-gray-500 dark:placeholder:text-dark-muted p-4 rounded-lg"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="border outline-none border-black dark:border-dark-muted bg-transparent text-black dark:text-dark-text placeholder:text-gray-500 dark:placeholder:text-dark-muted p-4 rounded-lg"
            rows={5}
          />
          <button
            type="submit"
            className="bg-black text-white hover:text-black hover:bg-white dark:bg-dark-text dark:text-dark-surface2 dark:hover:bg-dark-surface dark:hover:text-dark-text border border-black dark:border-dark-muted px-6 py-4 rounded-lg transition-all"
          >
            Send Message
          </button>
        </motion.form>

        {/* Text Content with Parallax */}
        <motion.div
          className="flex flex-col gap-4 lg:basis-[50%]"
          ref={textRef}
          style={{ y }}
        >
          <h1 className="text-2xl font-bold text-black dark:text-dark-text">
            Get in touch
          </h1>
          <div className="flex flex-col gap-4 text-[#4B5563] dark:text-dark-muted">
            <p>
              I'm currently available for freelance work. If you have a project
              that you want to get started, think you need my help with
              something or just fancy saying hey, then get in touch.
            </p>
            <p>
              Please fill out the form below and I will get back to you as soon
              as possible.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
