import React from "react"

const Trending = () => {
  return (
    <div style={{ flex: 1 }}>
      <pre>
        {`

        다음 작업 예정 

        1. 설정 페이지 
        - 이메일 수정 기능
        - 이메일 수신 설정 작업
        - 회원탈퇴 기능 

        2. 태그 작업
        - 유저정보 페이지
          - 게시물+태그 같이 불러오기
          - 태그리스트 + 태그 갯수
          - 태그 온클릭리스너 어떤 식으로 할 지 생각
        - 게시물 페이지
          - 태그 리스트 불러오기
        - 홈 화면
          - 태그 목록 구현


        앞으로 할 일 리스트

        1. 백엔드
        - 게시글(수정,삭제)
        - 태그 DB 구조
        - api 구현
          -> 게시물 + 태그 get
          -> 게시물 update
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
        - 검색페이지 만들기
        `}
      </pre>
    </div>
  )
}

export default Trending
