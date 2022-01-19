# 원티드 캐러셀 프로젝트

[데모 링크](https://preonboarding-wanted-wook.netlify.app/)

![wanted](https://user-images.githubusercontent.com/80494742/150234404-88e1661a-aff2-4d93-8cac-6f34c3f825bd.gif)

<br><br>
        
## 목표

[원티드 메인페이지](https://www.wanted.co.kr/)를 보고, navbar와 반응형이고 무한이자 슬라이드가 가능한 캐러셀 구현

<br><br>

## 구현한 기능

1. 자동으로 회전하는 캐러셀  
    >`setInterval`을 활용했습니다.

<br>

2.  끊기지 않고 계속 카드를 보여주는 캐러셀  
    > 보여주고자 하는 카드의 갯수의 2배를 준비하고 앞 뒤로 붙여주어 연결된 것 처럼 보이게 만들었습니다.

<br>

3.  마우스 오버 시 회전 정지  
    > 마우스 오버,아웃 이벤트와 state를 활용해 구현했습니다.

<br>

4.  새로고침 시마다 새로운 캐러셀 카드 등장  
    > Math.random 메소드를 이용해 초깃값으로 난수를 부여했습니다.
