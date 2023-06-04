import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

export default function DropDown() {
  return (
    <DropDownSection>
      <Link to="/mypage"><Li>마이 페이지</Li></Link>
      <Link to="/product"><Li>상품 목록</Li></Link>
      <Link to="/likes"><Li>찜 목록</Li></Link>
    </DropDownSection>
  );
}

const DropDownSection = tw.ul`
  w-[180px] h-[150px]
  top-[70px] right-[50px]
  bg-white
  absolute
  flex flex-col justify-evenly
  shadow-drop
  rounded-[10px]
`;

const Li = tw.li`
  w-[100%]
  h-[50px]
  p-[10px]
  rounded-[10px]
  text-center
  text-xl
  font-bold
  hover:bg-gray-300
`;