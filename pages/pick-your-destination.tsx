import Head from 'next/head';
import { DestinationPage } from '../components/pages/DestinationPage/DestinationPage';
import { Destinations } from '../data/destinations.data';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pick your destination | Space tourism</title>
      </Head>
      <DestinationPage destination={Destinations[0]} allDestinations={Destinations} />
    </>
  );
}
