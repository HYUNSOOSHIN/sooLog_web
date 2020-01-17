import React, {useState, useEffect} from 'react'
import marked from 'marked'
import postApi from '../apis/post/post'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from '../components/tag'

import tempImg from "../images/temp.png"

const Post = () => {
  const [post, setPost] = useState({})

  useEffect(()=>{
    getPost()
  },[])

  const getPost = async() => {
    const result = await postApi.readPost(window.location.search.replace('?',''))
    if(result) setPost(result)
    // content에 마크다운으로 넣음
    document.getElementById('content').innerHTML = marked(result.content)
  }

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
          <h1>{post.title}</h1>
          <p>{post.createdAt}</p>
          <div className={'line'}/>
          <div className={'btn'}>
            <p>수정</p>
            <p>삭제</p>
          </div>
          
          <pre id= {'content'} className={'content'}></pre>

          {/* <div className={'tagList'}>
            {post[index].tag.map((tag,idx)=>
              <Tag name={tag} key={idx}/>
            )}
          </div> */}
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

export default Post