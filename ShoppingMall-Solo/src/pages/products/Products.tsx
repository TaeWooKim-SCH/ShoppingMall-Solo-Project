import { useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';

import Card from '../../components/Card';
import Category from '../../components/Category';
import { RootState } from '../../modules';

export default function Products() {
  const productList = useSelector((state: RootState) => state.productList.products);
  const categoryProductList = useSelector((state: RootState) => state.categoryList);

  return (
    <MainSection>
      <Category />
      <section className="w-[900px] flex flex-wrap flex-col">
        <div className="flex flex-wrap justify-evenly">
          {
            productList.length ? 
            categoryProductList.map(product => <Card data={product} key={product.id} />) :
            <div className='mt-[100px] text-xl font-bold'>로딩중...</div>
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
  pt-28
`;