
## React Hook

함수형 컴포넌트에서 할 수 없던 다양한 작업/재사용을 할 수 있게 도와주는 라이브러리. 가장 기본적인 Hook으로는 useState가 있다.
종류가 다양하며 사용자 정의 커스텀 Hook을 만들 수 있기 때문에 타인이 만든 오픈소스 Hook을 설치해 이용이 가능하다. 이로 인해 유지보수성과 가독성이 좋아진다.

### 대표적인 Hook 종류
 - useState()
 - useEffect()
 - useContext
 - ….

### Hook 정의 틀(선언 방법)
const useOOO(Hook 이름) = (함수에 전달할 변수들. 객체 타입으로 전달해도 ok) => {
    const [원하는 변수 명(ex: trigger), 변수를 세팅하는 함수(setTrigger)] = useState({
        param1: (사용할 특정 값),
        param2: (사용할 특정 값),
        ...
    });
    ...
}
와 같이 정의하며 랜더링할 수 있다.