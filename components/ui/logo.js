import Image from "next/image";
import classes from "./logo.module.css";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <Image src="/images/site/t-icon-light.png" width={40} height={40} alt="Tim's blog logo"/>
    </div>
  );
}
