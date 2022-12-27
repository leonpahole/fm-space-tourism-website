import { GetServerSideProps } from 'next';
import { technologiesApi } from '../../data/technologies.data';

export const getServerSideProps: GetServerSideProps = async () => {
  const firstTechnology = technologiesApi.getFirst();
  return {
    redirect: {
      destination: technologiesApi.getUrl(firstTechnology),
      permanent: true,
    },
  };
};

export default function TechnologyIndexPage() {
  return null;
}
