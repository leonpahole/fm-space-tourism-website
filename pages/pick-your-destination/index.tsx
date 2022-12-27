import { GetServerSideProps } from 'next';
import { destinationApi } from '../../data/destinations.data';

export const getServerSideProps: GetServerSideProps = async () => {
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
