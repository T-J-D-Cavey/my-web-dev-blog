import NewsletterForm from "./newsletter-form";
import classes from "./newsletter-signup.module.css";

export default function NewsletterSignup() {
  async function fetchHandler(userEmail) {
    const response = await fetch("/api/email-subscription", {
      method: "POST",
      body: JSON.stringify({ email: userEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
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
