import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formatttedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const linkPath = `/posts/${slug}`;

  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
        </div>
        <div className={classes.conent}>
          <h3>{title}</h3>
          <time>{formatttedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
