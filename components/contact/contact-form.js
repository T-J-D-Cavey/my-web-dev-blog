import { useRef, useState, useEffect } from "react";
import Notification from "../ui/notification";
import { sendData } from "../../helpers/api-utils";
import classes from "./contact-form.module.css";

// NEED TO ADJUST THIS LOCAL STATE ONCE GLOBAL STATE IS SET UP
export default function ContactForm() {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  const [requestStatus, setRequestStatus] = useState();
  const [errorStatus, setErrorStatus] = useState();
  let notificationData;

  useEffect(() => {
    if(requestStatus === 'success' || requestStatus === 'error') {
      const timeoutId = setTimeout(() => {
        setRequestStatus(null);
        setErrorStatus(null);
      }, 2000);

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [requestStatus])

  async function onSubmitHandler(e) {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const message = messageInputRef.current.value;
    // NEED TO ADD CLIENT SIDE VALIDATION
    const requestObject = {
      email,
      name,
      message,
    };
    setRequestStatus("pending");

    const fetchSuccess = await sendData(requestObject, "/api/contact-form");

    if (!fetchSuccess.success) {
      setRequestStatus("error");
      setErrorStatus(fetchSuccess.message);
      return;
    }
    setRequestStatus("success");
    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    messageInputRef.current.value = "";
    return;
  }

  if (requestStatus === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending...",
      message: "Sending your message",
    };
  }

  if (requestStatus === "success") {
    notificationData = {
      status: "success",
      title: "Success",
      message: "Sent message!",
    };
  }

  if (requestStatus === "error") {
    console.log(errorStatus)
    notificationData = {
      status: "error",
      title: "Error",
      message: "Failed to send message",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Contact Me</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" rows="5" ref={messageInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}

// NEED TO ADD LINKS TO MY GITHUB, MY PORTFOLIO AND LINKEDIN