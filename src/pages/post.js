import React, {useEffect} from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {inject, observer} from 'mobx-react'

import tempImg from "../images/temp.png"
import { observe } from 'mobx'


const Post = ({posts:postsStore}) => {
  const {posts} = postsStore

  return (
    <Layout>
      <SEO title={'Post'}/>
      <div id={'post'}>
        <section className={'top'}>
          <img src={tempImg}/>
          <div>
            <p>@shs0655</p>
            <p>어금니금니입니다.</p>
          </div>
        </section>
        <section className={'middle'}>
          <h1>{posts[window.location.search.replace('?','')].title}</h1>
          <p>{posts[window.location.search.replace('?','')].date}</p>
          <div className={'line'}/>
          <div className={'btn'}>
            <p>수정</p>
            <p>삭제</p>
          </div>
          <p className={'content'}>{posts[window.location.search.replace('?','')].content}</p>

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