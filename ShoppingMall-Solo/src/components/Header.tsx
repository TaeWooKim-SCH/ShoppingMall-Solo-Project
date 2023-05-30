import { useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import {AiOutlineMenu, AiOutlineStar} from 'react-icons/ai';
import {GiPresent} from 'react-icons/gi';
import logo from '../assets/My_logo.png';

const Navbar = tw.header`
  bg-white
  w-full h-20
  shadow-2xl
  flex justify-between items-center
  fixed
  z-40
`;

export default function Header() {
  const [drop, setDrop] = useState(false);
  
  const menuHandler = () => {
    drop ? setDrop(false) : setDrop(true);
  }

  return (
    <Navbar>
      <img className="w-[130px] ml-10" src={logo} alt="로고" />
      <section className='mr-16 cursor-pointer' onClick={menuHandler}>
        <AiOutlineMenu size="40"/>
      </section>
    </Navbar>
  );
}