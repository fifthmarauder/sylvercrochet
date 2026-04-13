"use client";
import { Heart, HeartIcon } from "lucide-react";
import styles from "./contactus.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api";
import Button from "@/components/common/Button/Button";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !number || !subject || !message) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      const response = await api.post("/api/users/contact", {
        name,
        email,
        number,
        subject,
        message,
      });
      if (response.data.success) {
        toast.success(
          "Your query has been submitted, we will get back to you shortly!",
        );
      }
      setName("");
      setEmail("");
      setNumber("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message, please try again later");
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Heart className={styles.icon} size={64} />
        <div
          className={`heading ${styles.heading}`}
          style={{ color: "var(--color-darkPink)" }}
        >
          CONTACT US
        </div>
        <div className={styles.para}>
          For further questions, contact us here!
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.wrapper}>
            <div className={styles.inputContainer}>
              Name:
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              Email:
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              Phone Number
              <input
                type="number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              Subject
              <input
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            Message:
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.inputArea}
            />
          </div>
          <Button text="Submit" Icon={HeartIcon} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
