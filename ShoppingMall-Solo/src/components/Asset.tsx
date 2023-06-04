import tw from "tailwind-styled-components";

import CardImg from '../assets/CardImg.png';

export default function Asset() {
  return (
    <AssetSection>
      <BankImg>
        <img className="w-[30px]" src={CardImg} alt="카드 이미지" />
      </BankImg>
      <div>
        <div className="text-sm text-gray-600">이번 달 쓴 금액</div>
        <div className="font-bold">4224424</div>
      </div>
    </AssetSection>
  );
}

const AssetSection = tw.section`
  w-[450px] h-[80px]
  hover:bg-gray-300
  flex items-center
  rounded-xl
  cursor-pointer
`;

const BankImg = tw.div`
  w-[40px] h-[40px]
  rounded-full
  flex justify-center items-center
  mx-5
`;