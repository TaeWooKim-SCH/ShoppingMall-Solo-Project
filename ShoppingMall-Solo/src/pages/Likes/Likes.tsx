import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";

import { RootState } from "../../modules";
import ApiDataInterFace from "../../modules/apidata.interface";
import Card from "../../components/Card";

export default function Likes() {
  const likesList = useSelector((state: RootState) => state.likesList);
  return (
    <CartSection>
      <section className="w-[900px] flex flex-wrap flex-col">
        <div className="flex flex-wrap justify-evenly">
          {
            likesList.length ? 
            likesList.map((like: ApiDataInterFace) => <Card data={like} />) :
            <div className='mt-[100px] text-xl font-bold'>찜 목록이 없습니다.</div>
          }
        </div>
      </section>
    </CartSection>
  );
}

const CartSection = tw.section`dpfj
  w-full
  flex
  justify-center
  pt-28
`;