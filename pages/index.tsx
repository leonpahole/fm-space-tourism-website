import Head from 'next/head';
import { HomePage } from '../components/pages/HomePage/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>
      <HomePage />
    </>
  );
}
