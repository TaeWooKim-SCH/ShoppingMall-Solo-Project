import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { RootState } from '../../modules';


const MainSection = tw.section`
  w-full
  h-full
  bg-[#6874DC]
  flex
  justify-center
  items-center
`;

function Main() {
  const data = useSelector((state: RootState) => state.productList.products);

  return (
    <MainSection>
      
    </MainSection>
  );
}

export default Main;