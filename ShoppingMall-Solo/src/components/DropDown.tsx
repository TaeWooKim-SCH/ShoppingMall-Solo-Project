import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

export default function DropDown() {
  return (
    <DropDownSection>
      <Link to="/mypage"><Li>마이 페이지</Li></Link>
      <Link to="/product"><Li>상품 목록</Li></Link>
      <Link to="/cart"><Li>장바구니</Li></Link>
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
  text-center
  text-xl
  font-bold
`;