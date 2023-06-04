import tw from "tailwind-styled-components";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { useDispatch } from "react-redux";

import ApiDataInterFace from "../modules/apidata.interface";
import { setDataElement } from "../modules/apidataSlice";
import { setCartList } from "../modules/likesSlice";
import { setCategoryElement } from "../modules/categorySlice";
import starImg from "../assets/star.png";

export default function Card({ data }: propType) {
  const dispatch = useDispatch();
  const discountPrice = (data.price - data.price * data.discountPercentage / 100).toFixed(1);

  const heartClickHandler = () => {
    if (!data.bookmark) {
      dispatch(setDataElement({...data, bookmark: true}));
      dispatch(setCartList({...data, bookmark: true}));
      dispatch(setCategoryElement({...data, bookmark: true}));
    }
    else {
      dispatch(setDataElement({...data, bookmark: false}));
      dispatch(setCartList({...data, bookmark: false}));
      dispatch(setCategoryElement({...data, bookmark: false}));
    }
  }

  return (
    <CardSection>
      <img className="h-[200px] object-cover" src={data.thumbnail} alt="상품 이미지" />
      <div className="relative mt-3 px-2">
        <div className="font-bold">{data.brand}</div>
        <div className="text-xl font-bold mb-4">{data.title}</div>
        <div className="flex">
          <div className="text-xs text-[#cb1400]">즉시할인가 | {data.discountPercentage}%</div>
          <Discount>{data.price}$</Discount>
        </div>
        <div className="text-[#cb1400] text-xl font-bold">{discountPrice}$</div>
        <div className="absolute flex items-center top-0 right-3">
          <img className="w-[20px] mr-1" src={starImg} alt="별" />
          <div className="font-bold">{data.rating}</div>
        </div>
        {
          data.bookmark ?
          <AiFillHeart 
            className="absolute bottom-0 right-3 cursor-pointer"
            size="40" color="red"
            onClick={heartClickHandler}
          /> :
          <AiOutlineHeart
            className="absolute bottom-0 right-3 cursor-pointer"
            size="40" color="red"
            onClick={heartClickHandler}
          />
        }
      </div>
    </CardSection>
  );
}

interface propType {
  data: ApiDataInterFace;
}

const CardSection = tw.section`
  w-[250px] h-[400px]
  bg-white
  flex flex-col
  mb-10
  p-2
  duration-200
  hover:shadow-card
`;

const Discount = tw.div`
  text-xs
  text-[#888888]
  line-through
  ml-2
`;

