import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import LinkWrapper from 'components/LinkWrapper';
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
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <MapBrowser places={places} />
    </>
  );
}
