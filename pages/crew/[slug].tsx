import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { CrewMemberPage } from '../../components/pages/CrewPage/CrewMemberPage';
import { CrewMember, crewMemberApi } from '../../data/crew.data';

export const getStaticPaths: GetStaticPaths = () => {
  const crewMembers = crewMemberApi.getAll();
  return {
    paths: crewMembers.map((d) => ({ params: { slug: d.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProps> = async (context: GetStaticPropsContext) => {
  let crewMember: CrewMember | null = null;

  if (context.params) {
    crewMember = crewMemberApi.getBySlug(context.params.slug as string);
  }

  if (!crewMember) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      crewMember,
      allCrewMembers: crewMemberApi.getAll(),
    },
  };
};

interface IProps {
  crewMember: CrewMember;
  allCrewMembers: CrewMember[];
}

export default function CrewPage({ crewMember, allCrewMembers }: IProps) {
  return (
    <>
      <Head>
        <title>{crewMember.name} - Meet Your Crew | Space tourism</title>
      </Head>
      <CrewMemberPage crewMember={crewMember} allCrewMembers={allCrewMembers} />
    </>
  );
}
