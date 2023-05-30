import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-styled-components';

import { RootState } from '../modules';
import { setIsDrop } from '../modules/hamburgerSlice';
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
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.hamburger.isDrop)
  
  const menuHandler = () => {
    dispatch(setIsDrop())
  }

  return (
    <Navbar>
      <img className="w-[130px] ml-10" src={logo} alt="로고" />
      <section className='mr-16 cursor-pointer' onClick={menuHandler}>
        <AiOutlineMenu size="40"/>
      </section>
      {open && <div>하이</div>}
    </Navbar>
  );
}