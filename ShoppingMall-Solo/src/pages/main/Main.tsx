import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import { ReducerType } from '../../modules';



const MainSection = tw.section`
  w-full
  h-full
  bg-[#6874DC]
  flex
  justify-center
  items-center
`;

function Main() {
  const data = useSelector((state: ReducerType) => state.productList.products);

  return (
    <MainSection>
      
    </MainSection>
  );
}

export default Main;