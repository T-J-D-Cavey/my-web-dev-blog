import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main>{props.children}</Main>
        <NextScript />
        <div id="notifications"></div>
      </body>
    </Html>
  );
}
