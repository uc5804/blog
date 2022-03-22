/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // var [a,b] = [10, 100]; //ES6 destructuring 문법 : array, object 에 있던 자료를 변수에 쉽게 담고 싶을 때

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false); //사이트 첫 로드시 모달창은 안보임, 제목을 누르면 보여야 함
  
  function 반복된UI(){
    var 어레이 = [];

    for (var i = 0; i<3; i++){
      어레이.push(<div>안녕dd</div>);
    }
    return
  }
  // var 어레이 = [2,3,4];

  // var 뉴어레이 = 어레이. map(function(a){ //array 내의 모든 데이터에 똑같은 작업을 시켜주고 싶을 때 .map()
  //   return a*2
  // });

  let posts = '강남 고기 맛집';


  function 제목바꾸기(){
    // var newArray = 글제목에 있던 0번째 데이터를 여자코트추천으로 바꿈
    var newArray = 글제목; // 이건 복사가 아니라 값 공유(reference data type의 특징). 수정된[데이터]를 만들기, 근데 state를 deep copy해서 수정한다!
    var newArray = [...글제목]; //deep copy : 값 공유X, 서로 독립적인 값을 가지는 복사 , [], {}
    //리액트 대원칙 : immutable data
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
    // 글제목변경(['여자 코트 추천', '강남 우동 맛집', '리액트 독학']); //원래 array와 대응되도록 작성
  }

  return (
    <div className="App">
      <div className="black-nav">
          <div>개발 Blog</div> 
      </div>

      

      {
        글제목.map(function(글){ //글제목 개수에 밎게 생성
          return   <div className="list">
                    <h3>{글} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h3>
                    <p>2월 17일 발행</p>
                    <hr/>
                  </div>
        })
      }

      

      {/* 모달버튼 */}
      <button onClick={()=>{modal변경(!modal)}}>모달버튼</button>
      
      {
       modal === true
       ? <Modal />
       : null //텅 빈 HTML이라는 뜻
      }
      
      {/* <img src={logo} />
      <h4>{함수()}</h4> */}

      {/* 데이터 바인딩 : 데이터 가져와서 뿌리기 {변수} 
        1. 변수 가져오기  
        2. 함수 사용하기
        3. 이미지 가져오기
        4. 클래스 네이밍하기 등등
      */}
      {/* JSX 에서 style 속성 집어넣을 때
        중괄호 안에 오브젝트 자료형으로 넣기 : <div style={{color : 'blue'}}>개발 Blog</div> 
        let posts = {color : 'lightblue', fontSize : '30px'} 로 써도 됨
       */}
      
    </div>
    
  );
 

}

function Modal(){
  return(
      <div className="modal">
        <h2></h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
