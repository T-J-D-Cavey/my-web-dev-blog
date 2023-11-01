import Image from 'next/image';
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/photo-of-tim-2.jpeg" alt="An image showing Tim" width={400} height={400}/>
      </div>
      <h1>Who Needs Boot Camp?</h1>
      <p>Tim's web dev blog. A learning journey.</p>
    </section>
  );
}

// NEED TO CONSIDER TS PARTICLES ANIMATION AND BETTER STYLING 
