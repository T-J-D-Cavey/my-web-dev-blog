import Head from "next/head";
import "@/styles/globals.css";
import Layout from "@/components/ui/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`< T >'s Blog`}</title>
        <meta
          name="description"
          content="Tim's web development blog. A learning journey and a learner's journal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
// NEED TO UPDATE FAVICON

// NEED TO ADD CONTEXT LOGIC TO HAVE APP WIDE STATE FOR STATUS BAR, WHEN COMMENTS FEATURE IS ADDED

// NEED TO CONSIDER A FOOTER HERE FOR ALL PAGES
