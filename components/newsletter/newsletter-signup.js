import NewsletterForm from "./newsletter-form";
import Notification from "../ui/notification";
import classes from "./newsletter-signup.module.css";

export default function NewsletterSignup() {
  async function fetchHandler(userEmail) {
    // ADD NOTIFICATION LOGIC TO SHOW SUCCESS
    try {
      const response = await fetch("/api/email-subscription", {
        method: "POST",
        body: JSON.stringify({ email: userEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!data.ok) {
        throw new Error(data.message);
      }

      // ADD NOTIFICATION LOGIC TO SHOW SUCCESS
    } catch (error) {
      // ADD NOTIFICATION LOGIC TO SHOW ERROR
    }
  }

  return (
    <section className={classes.container}>
      <div className={classes.h2Container}>
        <h3>Get an email for every new post:</h3>
      </div>
      <NewsletterForm fetchHandler={fetchHandler} />
    </section>
  );
}
