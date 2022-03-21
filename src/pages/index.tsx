import client from 'graphql/client';
import { GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES } from 'graphql/queries';
import HomeTemplate from 'templates/Home';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type HomeProps = {
  places: Place[];
};

export default function Home({ places }: HomeProps) {
  return <HomeTemplate places={places} />;
}

export async function getStaticProps() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    props: {
      places
    }
  };
}
