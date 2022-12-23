import { GetStaticProps } from 'next';
import { destinationApi } from '../../data/destinations.data';

export const getStaticProps: GetStaticProps = async () => {
  const firstDestination = destinationApi.getFirst();
  return {
    redirect: {
      destination: destinationApi.getUrl(firstDestination),
      permanent: true,
    },
  };
};

export default function PickYourDestinationIndexPage() {
  return null;
}
