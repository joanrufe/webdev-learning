import Link from "next/link";
import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout title="Mapage">
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  );
}
