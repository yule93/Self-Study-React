
## Container-Presenter Pattern

로직을 수행하는 컴포넌트(Container)와 markup을 통해 UI를 보여주는 컴포넌트(Presenter)가 분리된 패턴. 보통 Container, Presenter, Index JS 파일로 이뤄진다.
 - Container은 논리 담당 클래스 컴포넌트로 data와 api, 논리 구조, state를 담당한다.
 - Presenter은 시각 담당 함수형 컴포넌트로 data를 '보여주기'만 한다.
 - 앱 기능과 UI에 대한 구분이 쉬워진다. 이로 인해 유지보수와 재사용성이 올라간다.
 - 같은 state를 다른 container에게 props 내림으로 상태 공유가 가능하다.


### 대략적인 구조

```JS
    // Presenter.js

    export default = () => "Home";
```
```JS
    // Container.js
    import React from "react";
    import HomePresenter from "./HomePresenter";

    export default class extends React.Component {
    state = {
    };
    render() {
        const { } = this.state;
        return (
        <HomePresenter />
        );
    }
    }
```
```JS
    //index.js
    import HomeContainer from "./HomeContainer";

    export default HomeContainer;
```


### 현재 사용성은?

! 함수형 컴포넌트와 Hook이 표준이 되면서 구식 패턴이 되었다고 한다. 충격과 공포….