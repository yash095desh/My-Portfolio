"use client";
import React, { useRef } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const Contactform = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !Contactform?.current?.user_name?.value ||
      !Contactform?.current?.user_email?.value ||
      !Contactform?.current?.message?.value
    ) {
      return toast.error("Please fill out all feilds");
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
        toast.error("Error Occured while sending");
      });
  };

  return (
    <div
      className=" py-20 lg:px-10 flex flex-col items-center justify-center"
      id="contact-us"
    >
      <Title text={"Contact Me"} />
      <div className=" flex flex-col-reverse lg:flex-row justify-between gap-20 my-10 mx-10 lg:mx-20">
        <form
          ref={Contactform}
          onSubmit={sendEmail}
          className=" flex flex-col gap-10 lg:basis-[50%] px-12 py-20 rounded-lg bg-[#F3F3F3]"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="border outline-none  border-black p-4 rounded-lg"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="border outline-none  border-black p-4 rounded-lg"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="border outline-none  border-black p-4 rounded-lg"
            rows={5}
          />
          <button
            type="submit"
            className="bg-black text-white hover:text-black hover:bg-white border border-black px-6 py-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
        <div className=" flex flex-col gap-4 lg:basis-[50%]">
          <h1 className=" text-2xl font-bold">Get in touch</h1>
          <div className=" flex flex-col gap-4 text-[#4B5563]">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
