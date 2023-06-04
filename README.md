# 쇼핑몰 웹 프로젝트
dummyJSON의 product API를 이용해 쇼핑몰 웹을 만들었습니다. TypeScript를 경험하기 위한 솔로 프로젝트입니다.

## Stack
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>
- ```TypeScript```: 기존의 동적 타이핑만 가능했던 JavaScript 대신 정적 타이핑을 지원하는 TypeScript를 경험해보고자 사용했습니다.
- ```Redux```: 상태 관리가 필요한 규모의 프로젝트는 아니지만 프로젝트를 하며 어떻게 적용해야 할지 경험해보고자 Redux ToolKit을 사용했습니다.
- ```Vite```: 기존의 CRA는 번들링 과정이 있어 서버 구동시 속도가 매우 느렸습니다. 더욱 빠른 속도를 위해 Vite를 사용했습니다.

## 기획
- ```Git Strategy```: Git Flow
- ```페이지```: Login / Main / MyPage / ProductList / Likes
- ```기능```: 로그인(OAuth로 구현 예정) / 카테고리 / 찜하기 / 계좌 기능(토스 앱을 참고해 구현 예정)

## 문제 해결 과정
### 😅 찜 기능: 다른 곳에서 즉시 반영 안됨
찜 기능을 구현할 때 찜을 누르는 순간 모든 데이터에 똑같이 반영되도록 하는 것이 생각보다 어려웠습니다.<br />
제품 관련 데이터는 전체 제품 / 메인 페이지의 제품 / 카테고리 제품 총 3개로 되어 있어서 어디서든지 찜을 눌렀을 때 다른 곳에도 모두 반영되도록 할 생각이었습니다.<br />
하지만 상품 목록 페이지에서 카테고리 기능을 구현하고 나니 찜 기능이 작동하지 않는 문제점이 있었습니다.<br />
카테고리 데이터는 따로 슬라이스를 만들어 주었기 때문에 찜 버튼을 눌렀을 때 카테고리 리듀서에도 dispatch를 해주면 될 거 같다는 결론에 도달했습니다.<br />
이 생각대로 로직을 수정하니 기능이 잘 동작했습니다.

### 🥺 카테고리 기능: 기존 데이터에서 필터링 VS 새롭게 데이터 목록을 만들어 매 순간 dispatch 해주기
각 항목을 클릭했을 때 기존 데이터에서 필터링을 하면 그 뒤에 클릭하는 항목은 바로 전에 있던 데이터를 기준으로 필터링이 되는 문제가 발생했습니다.<br />
정말 많은 고민을 했지만 항목을 클릭할 때마다 전체 데이터에서 그 항목만 필터링한 새로운 데이터를 dispatch 해주는 로직밖에 생각이 나지 않았습니다.<br />
그래서 이 로직으로 구현을 했지만 더 효율적인 방법이 있을 것 같아 찾아서 더 효율적인 방법이 있다면 수정할 계획입니다.<br />

## 느낀점
처음으로 해보는 타입스크립트 프로젝트라 많이 어려웠습니다. <br />
동적 언어인 자바스크립트만 하다가 정적 언어를 해보니 정말 에러를 잘 잡아줘서 왜 수많은 기업에서 사용하는지 깨닫게 되는 프로젝트였습니다. <br />
아직 끝난 프로젝트가 아닌 앞으로 로그인/계좌/장바구니/결제 기능을 구현할 예정이기 때문에 기대가 됩니다. <br />
로그인 기능은 OAuth로 기능구현을 한 적이 있어 카카오로 시도할 예정이고 계좌는 이미 토스 앱을 참고해 틀은 만들어놨습니다.

## 완성 결과
![image](https://github.com/TaeWooKim-SCH/ShoppingMall-Solo-Project/assets/79956107/14b86a0e-d2cd-4b1b-88cd-1295e4d40ce3)
![image](https://github.com/TaeWooKim-SCH/ShoppingMall-Solo-Project/assets/79956107/1f3b2781-013a-4a7b-a37c-9de1e7931a99)
![image](https://github.com/TaeWooKim-SCH/ShoppingMall-Solo-Project/assets/79956107/c8134f90-d266-4a5d-94e3-3e63235ce671)
![image](https://github.com/TaeWooKim-SCH/ShoppingMall-Solo-Project/assets/79956107/bfef5172-3f54-4559-b438-34bb10473bca)
