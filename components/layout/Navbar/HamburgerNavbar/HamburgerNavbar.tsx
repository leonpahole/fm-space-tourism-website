import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import navbarStyles from './HamburgerNavbar.module.scss';
import Logo from '../../../../public/assets/shared/logo.svg';
import Hamburger from '../../../../public/assets/shared/icon-hamburger.svg';
import Close from '../../../../public/assets/shared/icon-close.svg';
import { NavbarLink, Paths } from '../Navbar';

interface IProps {
  links: NavbarLink[];
}

export const HamburgerNavbar = ({ links }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className={navbarStyles.container}>
      <Link href={Paths.home}>
        <Image src={Logo} alt="Go back to home" width="40" height="40" />
      </Link>
      {!open && (
        <button
          aria-label="Open navigation menu"
          type="button"
          className={navbarStyles.hamburgerButton}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Image src={Hamburger} alt="" />
        </button>
      )}
      {open && (
        <button
          className={navbarStyles.closeBackdrop}
          onClick={() => {
            setOpen(false);
          }}
          type="button"
          aria-label="Close navigation menu"
        />
      )}
      <div className={clsx({ [navbarStyles.sideBar]: true, [navbarStyles.open]: open })}>
        {open && (
          <>
            <button
              aria-label="Close navigation menu"
              type="button"
              className={navbarStyles.closeSideBarButton}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Image src={Close} alt="" />
            </button>
            <div className={navbarStyles.linksWrapper}>
              {links.map((link, idx) => (
                <Link key={link.path} href={link.path} className={navbarStyles.link}>
                  <span className={navbarStyles.linkBold}>0{idx + 1}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
