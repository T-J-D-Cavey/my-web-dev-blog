import Image from "next/image";
import classes from './post-header.module.css'

export default function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <div className={classes.container}>

      <Image src={image} alt={title} width={500} height={400} className={classes.img}/>
      </div>
    </header>
  );
}
