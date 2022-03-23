import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import LinkWrapper from 'components/LinkWrapper';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const MapBrowser = dynamic(() => import('components/Map'), { ssr: false });

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type HomeTemplateProps = {
  places: Place[];
};

export default function HomeTemplate({ places }: HomeTemplateProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to shoiw in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips.joaovitor.com.br"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <MapBrowser places={places} />
    </>
  );
}
