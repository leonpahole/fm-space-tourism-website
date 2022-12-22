/* eslint-disable @typescript-eslint/no-use-before-define */

import { Paths } from '../components/layout/Navbar/Navbar';

export interface Destination {
  name: string;
  slug: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export const getAllDestinations = (): Destination[] => {
  return Destinations;
};

export const getFirstDestination = (): Destination => {
  return Destinations[0];
};

export const getDestinationUrl = (d: Destination): string => {
  return `${Paths.destination}/${d.slug}`;
};

export const getDestinationBySlug = (slug: string): Destination | null => {
  return Destinations.find((d) => d.slug === slug) ?? null;
};

const Destinations: Destination[] = [
  {
    name: 'Moon',
    slug: 'moon',
    images: {
      png: './assets/destination/image-moon.png',
      webp: './assets/destination/image-moon.webp',
    },
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel: '3 days',
  },
  {
    name: 'Mars',
    slug: 'mars',
    images: {
      png: './assets/destination/image-mars.png',
      webp: './assets/destination/image-mars.webp',
    },
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    travel: '9 months',
  },
  {
    name: 'Europa',
    slug: 'europa',
    images: {
      png: './assets/destination/image-europa.png',
      webp: './assets/destination/image-europa.webp',
    },
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    travel: '3 years',
  },
  {
    name: 'Titan',
    slug: 'titan',
    images: {
      png: './assets/destination/image-titan.png',
      webp: './assets/destination/image-titan.webp',
    },
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 bil. km',
    travel: '7 years',
  },
];
