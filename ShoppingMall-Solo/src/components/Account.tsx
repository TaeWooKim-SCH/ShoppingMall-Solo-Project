import tw from "tailwind-styled-components";

export default function Account({imgUrl, accountName, money}: AccountProp) {
  return (
    <AccountSection>
      <BankImg>
        <img className="w-[40px] h-[40px] p-[10px]" src={imgUrl} alt="은행 로고"></img>
      </BankImg>
      <div>
        <div className="text-sm text-gray-600">{accountName}</div>
        <div className="font-bold">{money ? money : 0}</div>
      </div>
    </AccountSection>
  );
}

const AccountSection = tw.section`
  w-[450px] h-[80px]
  hover:bg-gray-300
  flex items-center
  rounded-xl
  cursor-pointer
`;

const BankImg = tw.div`
  w-[40px] h-[40px]
  bg-[#969696]
  rounded-full
  flex justify-center items-center
  mx-5
`;

interface AccountProp {
  imgUrl: string;
  accountName: string;
  money?: number;
}