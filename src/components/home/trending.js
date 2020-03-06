import React from 'react'

const Trending = () => {
  
  return (
    <div style={{flex:1}}>
      <pre>
        {`
        앞으로 할 일들

        1. 백엔드
        - 게시글(수정,삭제)
        - DB 관계 지정
        - 태그 DB 구조
        - 소셜 DB 구조


        2. 프론트엔드
        - 마크다운 메뉴 구현
        - 내 정보 => 소셜 추가
        - 내 정보 => 게시글 리스트 => 태그 처리
        - 내 정보 => 게시글 마크다운 문법 제거
        - 홈 => 트렌딩 처리   ==>  트랜딩 안하고 홈 화면에 디지털 시계 넣고 싶음
        `}
      </pre>
    </div>
  )
}

export default Trending