import React, {useState, useEffect} from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {inject, observer} from 'mobx-react'

import tempImg from "../images/temp.png"

const Post = ({posts:postsStore}) => {
  const {posts} = postsStore
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    setIndex(window.location.search.replace('?','')) 
    // gatsby build 하면 window 떔에 에러 뜸.
    // 첫번째 게시물 떴다가 다른 게시물 뜨는거 수정해야댐. 
    // 게시물 리스트에서 클릭하면 로컬스토리지에 저장했다가 불러오면 될거 같음
  },[])

  return (
    <Layout>
      <SEO title={'Post'}/>
      <div id={'post'}>
        <section className={'top'}>
          <img src={tempImg} alt={'temp'}/>
          <div>
            <p>@shs0655</p>
            <p>어금니금니입니다.</p>
          </div>
        </section>
        <section className={'middle'}>
          <h1>{posts[index].title}</h1>
          <p>{posts[index].date}</p>
          <div className={'line'}/>
          <div className={'btn'}>
            <p>수정</p>
            <p>삭제</p>
          </div>
          <p className={'content'}>{posts[index].content}</p>

          <div className={'tagList'}>

          </div>

        </section>
        <section className={'bottom'}>
          <p>0개의 댓글</p>
          <textarea></textarea>
          <div>
            <p>댓글 작성</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default inject('posts')(observer(Post))