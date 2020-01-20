import React, {useState} from 'react'
import marked from 'marked'
import Tag from '../tag'

const Post = ({posts, tags}) => {
  const [tag, setTag] = useState(1)
  return (
    <div id={'myinfo_post'}>
      <div className={'list'}>
        <p>태그</p>
        <div/>
        <ul>
          <li className={tag===0?'active':'unactive'}
            onClick={()=>setTag(0)}>전체보기</li>
          {tags.map((item, index)=> 
            <li key={index} className={tag===index+1?'active':'unactive'}
              onClick={()=>setTag(index+1)}>{item.tag_name}</li>
          )}
        </ul>
      </div>
      <div className={'post'}>
        {posts.map((item, index)=>
          <div className={'postItem'} key={index}>
            <a href={`/post/?${item.id}`}>{item.title}</a>
            <p className={'content'}>{item.content}</p>
            <p className={'date'}>{`${item.createdAt} - 0개의 댓글`}</p>
            {/* <div style={{display: 'flex', marginTop: '0.5rem'}}>
              {item.tag.map((tag, idx)=>
                <Tag key={idx} name={tag}/>
              )}
            </div> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Post