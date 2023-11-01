import Head from "next/head";
import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Tim</title>
        <meta
          name="description"
          content="Send me a message and your contact details so we can connect."
        />
      </Head>
      <ContactForm />
    </>
  );
}
