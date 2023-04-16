import Link from "next/link";
import notFound from "../public/notfound.jpg";
import Image from "next/image";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
    <Head>
        <title>Not Found</title>
        <meta name="description" content="page is not found please enter valid url" />
      </Head>
      <main
        className="d-flex flex-column justify-content-center border align-items-center"
        style={{ height: "100vh" }}
      >
        <Image
          style={{ mixBlendMode: "multiply" }}
          className="img-fluid"
          alt="not found image"
          src={notFound}
        />
        <Link className="btn btn-primary text-uppercase" href="/">
          back to homepage
        </Link>
      </main>
    </>
  );
};

export default NotFound;
