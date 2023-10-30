import Image from "next/image";
import classes from "./newsletter-form.module.css";
import { useState } from "react";

export default function NewsletterForm() {
const [showing, setShowing] = useState(false);
    const appearClass = showing ? classes.form : classes.showing; 
    const buttonMove = showing ? classes.buttonUp : classes.button;

    function handleShowing(e) {
        e.preventDefault();
        setShowing((prevState) => !prevState);
    }
  return (
    <div className={classes.container}>
        <div className={classes.buttonContainer}>

      <button onClick={handleShowing} className={buttonMove}>
        <Image
          src="/images/site/down-pointer.png"
          width={40}
          height={40}
          alt="downward pointer"
          />
      </button>
          </div>
      <form className={appearClass}>
        <div className={classes.div}>
          <input type="email" id="email" placeholder="email@address"/>
        </div>
        <div className={classes.div}>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
}
