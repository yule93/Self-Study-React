
## Redux?

여러 개의 Component 중 가장 상위의 Component를 앱의 주요 Data State로 다룰 때, Data의 관계도인 부모-자식 간의 깊이가 깊어질 수록 Props를 전달하는데 거쳐야하는 Component의 개수가 많아지면 앱의 성능이 저하, 혹은 효율적이지 못한 Data Flow를 갖게 된다. 이 때, 하나의 Component로 앱 전체의 Data State를 다루기 보다는 **Data Storge or Data Manangement Library를 사용해 여러 단계의 Component를 거치지 않고도 데이터 갱신이 가능하도록 만드는 게 Redux의 핵심**이다. 이외에도 useContext Hook을 사용해 제어가 가능하다.