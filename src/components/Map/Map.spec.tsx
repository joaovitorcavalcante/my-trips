import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Petrópolis',
        slig: 'petrópolis',
        location: {
          latitude: 0,
          longitude: 0
        }
      }
    ];

    render(<Map places={places} />);

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument();
  });
});
