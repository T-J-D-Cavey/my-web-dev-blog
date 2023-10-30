import NewsletterForm from "./newsletter-form";
import classes from "./newsletter-signup.module.css";

export default function NewsletterSignup() {
  return (
    <section className={classes.container}>
      <div className={classes.h2Container}>
        <h3>Get an email for every new post:</h3>
      </div>
      <NewsletterForm />
    </section>
  );
}
