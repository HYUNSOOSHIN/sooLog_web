import React, {useState} from 'react'
import { inject, observer} from 'mobx-react'
import Tag from '../tag'

const Post = ({posts: postsStore}) => {
  const { posts } = postsStore 
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
        {posts.map((item, index)=>
          <div className={'postItem'} key={index}>
            <a href={`/post?${index}`}>{item.title}</a>
            <p className={'content'}>{item.content}</p>
            <p className={'date'}>{item.date}</p>
            <div style={{display: 'flex', marginTop: '0.5rem'}}>
              {item.tag.map((tag, idx)=>
                <Tag key={idx} name={tag}/>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default inject('posts')(observer(Post))