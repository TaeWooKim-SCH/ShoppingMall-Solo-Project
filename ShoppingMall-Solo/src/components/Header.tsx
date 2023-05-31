import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-styled-components';

import DropDown from './DropDown';
import { RootState } from '../modules';
import { setIsDrop } from '../modules/hamburgerSlice';
import {AiOutlineMenu} from 'react-icons/ai';
import logo from '../assets/My_logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const drop = useSelector((state: RootState) => state.hamburger.isDrop);
  
  const menuHandler = () => {
    dispatch(setIsDrop());
  }

  return (
    <Navbar>
      <Link to="/main"><img className="w-[120px] ml-10 cursor-pointer" src={logo} alt="로고" /></Link>
      <Hamburger onClick={menuHandler} >
        <AiOutlineMenu size="30" color="white" />
        {drop && <DropDown />}
      </Hamburger>
    </Navbar>
  );
}

const Navbar = tw.header`
  bg-white
  w-full h-[80px]
  shadow-2xl
  flex justify-between items-center
  fixed
  z-40
`;

const Hamburger = tw.section`
  w-[50px] h-[50px]
  bg-[#6874DC]
  flex justify-center items-center
  mr-16
  cursor-pointer
  rounded-lg
`;

