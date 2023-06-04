import { useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';

import Card from '../../components/Card';
import { RootState } from '../../modules';

export default function Main() {
  const productList = useSelector((state: RootState) => state.productList.products);
  const bookmarkList = useSelector((state: RootState) => state.likesList);
  return (
    <MainSection>
      <section className="w-[1100px] flex flex-wrap flex-col">
        <div className="text-3xl font-bold mb-[30px] ml-[30px]">상품 리스트</div>
        <div className="flex justify-evenly h-[400px] mb-[30px]">
          {
            productList.length ? 
            productList.slice(0, 4).map(product => <Card data={product} key={product.id} />) :
            <div className='mt-[100px] text-xl font-bold'>로딩중...</div>
          }
        </div>
        <div className="text-3xl font-bold mb-[30px] ml-[30px]">찜 목록</div>
        <div className='flex justify-evenly'>
          {
            bookmarkList.length ?
            bookmarkList.slice(0, 4).map((el) => <Card data={el} key={el.id} />) :
            <div className='mt-[100px] text-xl font-bold'>찜 목록이 없습니다.</div>
          }
        </div>
      </section>
    </MainSection>
  );
}

const MainSection = tw.section`dpfj
  w-full
  flex
  justify-center
  items-center
  pt-28
`;