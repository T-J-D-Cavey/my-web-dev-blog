import { useState, useEffect } from "react";
import { sendData } from "@/client/helpers/api-utils";
import NewsletterForm from "./newsletter-form";
import Notification from "../ui/notification";
import classes from "./newsletter-signup.module.css";

export default function NewsletterSignup() {
  const [requestStatus, setRequestStatus] = useState();
  const [errorStatus, setErrorStatus] = useState();

  let notificationData;

  useEffect(() => {
    let timeoutId;
    if (requestStatus === "success" || requestStatus === "error") {
      timeoutId = setTimeout(() => {
        setRequestStatus("");
        setErrorStatus("");
      }, 2500);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [requestStatus]);

  async function fetchHandler(userEmail) {
    setRequestStatus("pending");

    const result = await sendData(
      JSON.stringify({ email: userEmail }),
      "/api/email-subscription"
    );

    if (!result.success) {
      setRequestStatus("error");
      setErrorStatus(result.message);
      return;
    }

    setRequestStatus("success");
    return;
  }

  if (requestStatus === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending...",
      message: "Sending your details",
    };
  }

  if (requestStatus === "success") {
    notificationData = {
      status: "success",
      title: "Success",
      message: "Your details have been received!",
    };
  }

  if (requestStatus === "error") {
    notificationData = {
      status: "error",
      title: "Error",
      message: `${errorStatus}`,
    };
  }

  return (
    <section className={classes.container}>
      <div className={classes.h2Container}>
        <h3>Get an email for every new post:</h3>
      </div>
      <NewsletterForm fetchHandler={fetchHandler} />
      {requestStatus && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}
