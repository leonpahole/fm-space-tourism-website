import Head from 'next/head';
import { HomePage } from '../components/pages/HomePage/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta
          name="description"
          content="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        />
      </Head>
      <HomePage />
    </>
  );
}
