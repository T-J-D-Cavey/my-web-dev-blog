import Head from "next/head";
import Layout from "../components/ui/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Who Needs Boot Camp?</title>
        <meta
          name="description"
          content="Tim's web development blog. A self-taught learning journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
