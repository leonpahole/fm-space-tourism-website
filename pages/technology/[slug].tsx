import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { TechnologyPage } from '../../components/pages/TechnologyPage/TechnologyPage';
import { technologiesApi, Technology } from '../../data/technologies.data';

export const getStaticPaths: GetStaticPaths = () => {
  const technologies = technologiesApi.getAll();
  return {
    paths: technologies.map((d) => ({ params: { slug: d.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProps> = async (context: GetStaticPropsContext) => {
  let technology: Technology | null = null;

  if (context.params) {
    technology = technologiesApi.getBySlug(context.params.slug as string);
  }

  if (!technology) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      technology,
      allTechnologies: technologiesApi.getAll(),
    },
  };
};

interface IProps {
  technology: Technology;
  allTechnologies: Technology[];
}

export default function SpecificTechnologyPage({ technology, allTechnologies }: IProps) {
  const title = `${technology.name} - Technologies | Space tourism`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <TechnologyPage technology={technology} allTechnologies={allTechnologies} />
    </>
  );
}
