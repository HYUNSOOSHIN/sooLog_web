import React from "react"

const Trending = () => {
  return (
    <div style={{ flex: 1 }}>
      <pre>
        {`
        앞으로 할 일들

        1. 백엔드
        - 게시글(수정,삭제)
        - DB 관계 지정
        - 태그 DB 구조
        - 소셜 DB 구조
        - api 사용자 구분 (all : 모든 사용자, user: 회원)
        - api 구현
          -> 회원가입
          -> 게시물 + 태그 get
          -> 게시물 update, delete
          -> 게시물 get 태그 조건 추가
          -> 사용자 정보 get, update
          등등


        2. 프론트엔드
        - 글쓰기 화면 마크다운 메뉴 구현
        - 글쓰기하면 md파일로 저장 => s3에 올려서 db에 주소 넣음
        - 글쓰기 화면 이미지 업로드 구현 
        - 내 정보 => 게시글 리스트 => 태그 처리
        - 내 정보 => 게시글 리스트에서 마크다운 문법 제거
        - 홈 탭 => 화면에 간지나는 디지털 시계 or 캘린더 넣고 싶음 
        `}
      </pre>
    </div>
  )
}

export default Trending
