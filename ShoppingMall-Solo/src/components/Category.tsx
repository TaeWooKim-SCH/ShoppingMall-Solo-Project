import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import tw from "tailwind-styled-components";

import { RootState } from "../modules";
import { setCategory } from "../modules/categorySlice";
import ApiDataInterFace from "../modules/apidata.interface";

export default function Category() {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootState) => state.productList.products);
  const categoryList: string[] = [
    "every",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];

  const filterClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.innerText === "every") {
      return dispatch(setCategory(productList));
    }
    const filterData = productList.filter((product: ApiDataInterFace) => (
      product.category === e.currentTarget.innerText
    ));
    dispatch(setCategory(filterData));
  }

  return (
    <CategorySection>
      <div className="text-2xl text-[#6874DC] font-bold mb-3">카테고리</div>
      {categoryList.map((category: string) => (
        <CategoryLi onClick={(e) => filterClickHandler(e)}>{category}</CategoryLi>
      ))}
    </CategorySection>
  );
}

const CategorySection = tw.section`
  w-[200px]
  h-[750px]
  shadow-drop
  p-5
  text-center
`;

const CategoryLi = tw.div`
  text-lg
  font-bold
  cursor-pointer
  mb-1
`