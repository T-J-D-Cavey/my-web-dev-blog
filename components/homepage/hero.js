import Image from 'next/image';
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/photo-of-tim.JPG" alt="An image showing Tim" width={400} height={400}/>
      </div>
      <h1>Hi, I'm Tim</h1>
      <p>I blog about my self taught journey into web development.</p>
    </section>
  );
}

// NEED TO UPDATE TEXT
