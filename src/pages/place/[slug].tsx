import client from 'graphql/client';
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PlaceTemplate from 'templates/Place';

type Image = {
  url: string;
  height: number;
  width: number;
};

type PlaceProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: Image[];
  };
};

export default function Place({ place }: PlaceProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PlaceTemplate place={place} />;
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  if (!place) return { notFound: true };

  return {
    props: {
      place
    }
  };
};
