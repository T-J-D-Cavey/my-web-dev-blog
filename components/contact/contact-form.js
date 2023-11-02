import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Notification from "../ui/notification";
import { sendData } from "../../client/helpers/api-utils";
import ContactSocials from "./contact-socials";
import NewsletterSignup from "../newsletter/newsletter-signup";
import classes from "./contact-form.module.css";

export default function ContactForm() {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  const [requestStatus, setRequestStatus] = useState();
  const [statusMessage, setStatusMessage] = useState();
  let notificationData;

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timeoutId = setTimeout(() => {
        setRequestStatus(null);
        setStatusMessage(null);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [requestStatus]);

  async function onSubmitHandler(e) {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const message = messageInputRef.current.value;
    const requestObject = {
      email,
      name,
      message,
    };
    setRequestStatus("pending");

    const fetchSuccess = await sendData(requestObject, "/api/contact-form");

    if (!fetchSuccess.success) {
      setRequestStatus("error");
      setStatusMessage(fetchSuccess.message);
      return;
    }
    setStatusMessage(fetchSuccess.message);
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
      message: `${statusMessage}`,
    };
  }

  if (requestStatus === "error") {
    notificationData = {
      status: "error",
      title: "Error",
      message: `${statusMessage}`,
    };
  }

  return (
    <>
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
            <textarea
              id="message"
              rows="5"
              required
              ref={messageInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <Button variant="dark" type="submit" className={classes.button}>
              SUBMIT
            </Button>
          </div>
        </form>
      </section>
      <section className={classes.contact}>
        <ContactSocials />
      </section>
      <section className={classes.contact}>
        <NewsletterSignup />
      </section>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </>
  );
}
