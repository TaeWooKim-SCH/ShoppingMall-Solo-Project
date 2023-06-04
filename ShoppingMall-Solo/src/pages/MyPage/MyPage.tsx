import tw from "tailwind-styled-components";

import Account from "../../components/account";
import Asset from "../../components/Asset";
import NHImg from '../../assets/NHImg.png';
import SHImg from '../../assets/SHImg.png';

export default function MyPage() {
  return (
    <MyPageSection>
      <Card >
        <CardTitle>자산</CardTitle>
        <div className="flex flex-col justify-evenly items-center">
          <Account imgUrl={NHImg} accountName="해봄 N돌핀통장" money={100000} />
          <Account imgUrl={NHImg} accountName="저축 · 주택청약종합저축" />
          <Account imgUrl={SHImg} accountName="쏠편한 입출금통장(저축예금)" />
        </div>
      </Card>
      <Card>
        <CardTitle>소비</CardTitle>
        <Asset />
      </Card>
    </MyPageSection>
  );
}

const MyPageSection = tw.section`
  w-full h-full
  flex flex-col justify-center items-center
  bg-[#e1e6f0]
`;

const Card = tw.div`
  w-[500px]
  bg-white
  mb-5 p-6
  rounded-2xl
`;

const CardTitle = tw.div`
  mb-3
  text-lg font-bold
`;