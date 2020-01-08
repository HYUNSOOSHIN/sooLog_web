import React, {useState} from 'react'

const Post = () => {
  const [tag, setTag] = useState(1)
  return (
    <div id={'myinfo_post'}>
      <div className={'list'}>
        <p>태그</p>
        <div/>
        <ul>
          <li className={tag===1?'active':'unactive'}
            onClick={()=>setTag(1)}>전체보기</li>
          <li className={tag===2?'active':'unactive'}
            onClick={()=>setTag(2)}>개발</li>
          <li className={tag===3?'active':'unactive'}
            onClick={()=>setTag(3)}>취미</li>
        </ul>
      </div>
      <div className={'post'}>
        <div className={'postItem'}>
          <h1>소스코드 리뷰에 대한 짧은 이야기</h1>
          <p className={'content'}>소스코드 리뷰에 대한 개발자들의 생각과 시야 - 개발자와 개발 조직에게 소스코드 리뷰는 필수이며 운명이다. 팀간의 협업, 팀 내부의 대화를 보다 원활하게 만들어 주는 매우 필요한 절차로 꼭 필요하다. 향후 슬랙, 지라등의 협업도구가 명쾌하게 의미 있게 활용되려면 ...</p>
          <p className={'date'}>2019년 12월 25일 0개의 댓글</p>
        </div>
      </div>
    </div>
  )
}

export default Post