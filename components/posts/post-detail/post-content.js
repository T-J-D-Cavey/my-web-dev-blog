import ReactMarkdown from "react-markdown";
import React from "react";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import PostHeader from "./post-header";
import NewsletterSignup from "../../newsletter/newsletter-signup";
import ContactSocials from "../../contact/contact-socials";
import classes from "./post-content.module.css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  const post = props.post;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={post.title}
              width={600}
              height={300}
              className={classes.img}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
    a(anchor) {
      const a = (
        <a href={anchor.href} target="_blank">
          {anchor.children}
        </a>
      );
      return a;
    },
  };
  return (
    <>
      <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>
          {post.content}
        </ReactMarkdown>
      </article>
      <NewsletterSignup />
      <article className={classes.footer}>
        <div>
          <ContactSocials />
        </div>
      </article>
    </>
  );
}

// NEED TO ADD A COMMENTS SECTION UNDER EACH AND EVERY POST, WHICH DYNAMICALLY SHOWS ONLY THOSE COMMENTS FROM THE POST.
// THIS WILL NEED GET STATIC PATHS AND GET STATIC PROPS TO PASS THIS AS PROPS
