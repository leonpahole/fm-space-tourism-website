import { HamburgerNavbar } from './HamburgerNavbar/HamburgerNavbar';
import { RegularNavbar } from './RegularNavbar/RegularNavbar';

export interface NavbarLink {
  label: string;
  path: string;
}

const NavbarLinks: NavbarLink[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Destination',
    path: '/pick-your-destination',
  },
  {
    label: 'Crew',
    path: '/crew',
  },
  {
    label: 'Technology',
    path: '/technology',
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
