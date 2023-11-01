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
        <div className={classes.flex}>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} fill={true} />
          </div>
          <div className={classes.conent}>
            <h3>{title}</h3>
            <time>{formatttedDate}</time>
            <p>{excerpt}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
// NEED TO CONSIDER ALL IMAGE WIDTH AND HEIGHT DIMENSIONS GIVEN TO NEXT IMAGE COMPONENT TO MAKE SURE IMAGE QUALITY ISN'T AFFECTED
