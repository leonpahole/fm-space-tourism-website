import { HamburgerNavbar } from './HamburgerNavbar/HamburgerNavbar';
import { RegularNavbar } from './RegularNavbar/RegularNavbar';

export interface NavbarLink {
  label: string;
  path: string;
}

export const Paths = {
  home: '/',
  destination: '/pick-your-destination',
  crew: '/crew',
  technology: '/technology',
};

const NavbarLinks: NavbarLink[] = [
  {
    label: 'Home',
    path: Paths.home,
  },
  {
    label: 'Destination',
    path: Paths.destination,
  },
  {
    label: 'Crew',
    path: Paths.crew,
  },
  {
    label: 'Technology',
    path: Paths.technology,
  },
];

export const Navbar = () => {
  return (
    <header>
      <RegularNavbar links={NavbarLinks} />
      <HamburgerNavbar links={NavbarLinks} />
    </header>
  );
};
