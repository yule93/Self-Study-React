# Methods and Functions in Vanilla JS(or Typescript)
React를 다뤄보며 쓴 여러 메소드나 함수를 복기&복습을 위해 여기에 기록함

## array 관련 메소드&함수

### filter() 함수
조건에 부합했을 때, 남기고 조건에 부합하지 않으면 걸러버리는 JS 기본 메소드. 보통 무언가를 삭제하거나 제외할 때 쓰는 용도인 것 같다.
- ex)
```JS
    arrays.filter((params) => { return (해당 조건이 아닐 경우 걸러서 없애버림) });
```

### map() 함수
각 배열의 요소에 함수 or 값을 뿌려주는 JS 기본 메소드. 보통 반복문으로 값을 뿌려주는 대신에 많이 사용한다.
- ex)
```JS
    arrays.map((params) => { (function context )});
```