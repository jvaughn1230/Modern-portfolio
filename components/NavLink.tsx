import React from 'react';
import { NavLinkType } from '@/types/types';

type Props = {
  link: NavLinkType;
};

const NavLink = ({ link }: Props) => {
  return (
    <a key={link.href} href={`#${link.href}`} className='nav-link'>
      {link.label}
    </a>
  );
};

export default NavLink;
