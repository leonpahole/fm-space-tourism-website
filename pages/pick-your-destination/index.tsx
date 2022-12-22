import { GetStaticProps } from 'next';
import { getDestinationUrl, getFirstDestination } from '../../data/destinations.data';

export const getStaticProps: GetStaticProps = async () => {
  const firstDestination = getFirstDestination();
  return {
    redirect: {
      destination: getDestinationUrl(firstDestination),
      permanent: true,
    },
  };
};

export default function PickYourDestinationIndexPage() {
  return null;
}
