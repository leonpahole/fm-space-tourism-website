import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../../../public/assets/shared/logo.svg';
import { NavbarLink, Paths } from '../Navbar';
import navbarStyles from './RegularNavbar.module.scss';

interface IProps {
  links: NavbarLink[];
}

export const RegularNavbar = ({ links }: IProps) => {
  const router = useRouter();

  return (
    <nav className={navbarStyles.wrapper}>
      <Link href={Paths.home}>
        <Image src={Logo} alt="Go back to home" />
      </Link>
      <div className={navbarStyles.separator} />
      <div className={navbarStyles.linksWrapper}>
        {links.map((link, idx) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${navbarStyles.link} ${
              router.pathname === link.path ? navbarStyles.active : ''
            }`}
          >
            <span className={navbarStyles.linkBold}>0{idx + 1}</span>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
