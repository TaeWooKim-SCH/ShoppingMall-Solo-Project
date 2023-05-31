import { useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';
import { RootState } from '../../modules';

export default function Main() {
  const data = useSelector((state: RootState) => state.productList.products);

  return (
    <MainSection>
      
    </MainSection>
  );
}

const MainSection = tw.section`
  w-full
  h-full
  bg-[#6874DC]
  flex
  justify-center
  items-center
`;