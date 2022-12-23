import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { DestinationPage } from '../../components/pages/DestinationPage/DestinationPage';
import { Destination, destinationApi } from '../../data/destinations.data';

export const getStaticPaths: GetStaticPaths = () => {
  const destinations = destinationApi.getAll();
  return {
    paths: destinations.map((d) => ({ params: { slug: d.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProps> = async (context: GetStaticPropsContext) => {
  let destination: Destination | null = null;

  if (context.params) {
    destination = destinationApi.getBySlug(context.params.slug as string);
  }

  if (!destination) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      destination,
      allDestinations: destinationApi.getAll(),
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
        <title>{destination.name} - Pick Your Destination | Space Tourism</title>
      </Head>
      <DestinationPage destination={destination} allDestinations={allDestinations} />
    </>
  );
}
