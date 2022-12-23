import { GetStaticProps } from 'next';
import { crewMemberApi } from '../../data/crew.data';

export const getStaticProps: GetStaticProps = async () => {
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
