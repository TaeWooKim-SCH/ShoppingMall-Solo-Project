import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import {AiFillGithub} from 'react-icons/ai';


const MainSection = tw.section`
  w-full
  h-full
  bg-[#6874DC]
  flex
  justify-center
  items-center
`;

const MainBox = tw.div`
  w-[80%]
  h-[70%]
  bg-white
  rounded-xl
  flex flex-col
  justify-center
`;

const GithubOAuth = tw.div`
  ml-24
  mt-20
  bg-[#6874DC]
  w-[80px]
  h-[80px]
  flex
  justify-center
  items-center
  rounded-2xl
  cursor-pointer
`;

function Main() {
  return (
    <MainSection>
      <MainBox>
        <div className="text-5xl mb-10 ml-14">
          안녕하세요, <br/>
          <span className="font-bold text-[#2E3363] text-5xl">코피아</span>
          에 오신 것을 환영합니다!
        </div>
        <div className="text-2xl ml-14">쇼핑몰을 이용하시려면 로그인을 해주세요.</div>
        <Link to="/main">
          <GithubOAuth>
            <AiFillGithub size="50" color="white" />
          </GithubOAuth>
        </Link>
      </MainBox>
    </MainSection>
  );
}

export default Main;