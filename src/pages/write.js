import React, {useState} from 'react'

import "../components/layout.css"
import SEO from "../components/seo"

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import marked from 'marked'
import { inject, observer } from 'mobx-react'

const Write = ({posts: postsStore}) => {
  const {posts} = postsStore
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <SEO title="Write"/>
      <div id='write'>
        <div className='writeHeader'>
          <ArrowBackIcon style={{color: '#ffffff', cursor: 'pointer'}} onClick={()=> {
            document.location.replace(document.referrer)
            }}/>
          <input 
            type='text' 
            placeholder='제목을 입력해주세요.'
            onChange={(e)=> setTitle(e.target.value)} />
          <button className='upload'>
            <ImageOutlinedIcon style={{width: '1rem', marginRight: '0.5rem'}} />
            업로드
          </button>
          <button 
            className='write'
            onClick={async()=>{
              const post = {}
              post.title = title
              post.content = content
              post.date = '언젠가'
              await postsStore.addPost(post)
              window.location.replace('/post')
            }}>
            작성하기
          </button>
          <MoreVertIcon style={{ cursor: 'pointer', color: '#ffffff', margin: '0 1rem'}} />
        </div>
        <div className='writeSpace'>
          <div className='mdEditor'>
            <textarea 
              placeholder='당신의 이야기를 적어보세요...'
              id='content'
              value={content}
              onChange={(e)=> {
                setContent(e.target.value)
                // 마크다운 변환
                document.getElementById('result').innerHTML = marked(document.getElementById('content').value);
              }}/>
          </div>
          <div className='mdResult'>
            <h1>{title}</h1>
            <pre id="result"></pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default inject('posts')(observer(Write))