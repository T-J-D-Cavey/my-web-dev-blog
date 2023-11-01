import Image from "next/image";
import Link from "next/link";
import classes from "./const-socials.module.css";

export default function ContactSocials() {
  return (
    <ul className={classes.ul}>
      <li>
        <Link href="https://github.com/T-J-D-Cavey" target="_blank">
          <Image src="/images/site/github-icon.png" alt="Github logo" width={50} height={50} />
        </Link>
      </li>
      <li>
        <Link href="https://uk.linkedin.com/in/timothy-cavey-69b453169" target="_blank">
          <Image src="/images/site/linkedIn-icon.png" alt="Linked in logo" width={50} height={50} />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/TJDCavey" target="_blank">
          <Image src="/images/site/twitter-x-icon.png" alt="X formally Twitter logo" width={50} height={50} />
        </Link>
      </li>
    </ul>
  );
}
