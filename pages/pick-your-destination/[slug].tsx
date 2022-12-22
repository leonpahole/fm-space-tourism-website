import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { DestinationPage } from '../../components/pages/DestinationPage/DestinationPage';
import {
  Destination,
  getAllDestinations,
  getDestinationBySlug,
} from '../../data/destinations.data';

export const getStaticPaths: GetStaticPaths = () => {
  const destinations = getAllDestinations();
  return {
    paths: destinations.map((d) => ({ params: { slug: d.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProps> = async (context: GetStaticPropsContext) => {
  let destination: Destination | null = null;

  if (context.params) {
    destination = getDestinationBySlug(context.params.slug as string);
  }

  if (!destination) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      destination,
      allDestinations: getAllDestinations(),
    },
  };
};

interface IProps {
  destination: Destination;
  allDestinations: Destination[];
}

export default function PickYourDestinationPage({ destination, allDestinations }: IProps) {
  return (
    <>
      <Head>
        <title>Pick your destination | Space tourism</title>
      </Head>
      <DestinationPage destination={destination} allDestinations={allDestinations} />
    </>
  );
}
