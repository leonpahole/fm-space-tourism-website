import { GetServerSideProps } from 'next';
import { crewMemberApi } from '../../data/crew.data';

export const getServerSideProps: GetServerSideProps = async () => {
  const firstCrewMember = crewMemberApi.getFirst();
  return {
    redirect: {
      destination: crewMemberApi.getUrl(firstCrewMember),
      permanent: true,
    },
  };
};

export default function CrewIndexPage() {
  return null;
}
