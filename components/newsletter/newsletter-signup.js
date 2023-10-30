import NewsletterForm from "./newsletter-form";
import classes from './newsletter-signup.module.css';

export default function NewsletterSignup() {
  return (
    <section className={classes.container}>
      <h2 className={classes.h2}>Send me your email address</h2>
      <p className={classes.p}>And get an email whenever a new blog is posted!</p>
      <NewsletterForm />
    </section>
  );
}
