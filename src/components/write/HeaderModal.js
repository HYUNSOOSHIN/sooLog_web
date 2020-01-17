import React, {useState} from 'react'

import postApi from '../../apis/post/post'

import PublishIcon from '@material-ui/icons/Publish'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import PublicIcon from '@material-ui/icons/Public'
import LockIcon from '@material-ui/icons/Lock'
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

const HeaderModal = ({
  headerModal,
  setHeaderModal,
  postData, // title, content, tagList, isPrivate
  setPostData,
}) => {
  const [tagText, setTagText] = useState('')
  
  return (
    <div id={'writeModal'} style={{ display: headerModal? 'block':'none' }} 
      onClick={(e)=> e.stopPropagation()}
    >
      <div className={'writeModal_top'}>
          <p>새 글 작성하기</p>
          <p className={'title'}>태그 설정</p>
          <div className={'tag'}>
            <input type='text' 
              placeholder={'태그를 입력하세요'}
              value={tagText}
              onChange={(e)=>setTagText(e.target.value)}/>
            <div onClick={()=>{
              if(tagText!=='') setPostData({...postData, tagList:[...postData.tagList, tagText]})
              setTagText('')
              }}>등록</div>
          </div>
          <div className={'tagList'}>
            {postData.tagList.map((item,index)=>
              <div key={index}>
                {item}
                <div
                  onClick={async()=>{
                    const arr = await postData.tagList.splice(index,1)
                    setPostData({...postData, tagList: postData.tagList })
                  }}>
                    <RemoveOutlinedIcon />
                </div>
              </div>
            )}
          </div>
          <p className={'title'}>썸네일 지정</p>
          <div className={'upload'}>
            <PublishIcon />
            <p>업로드</p>
          </div>
          <p className={'title'}>시리즈 설정</p>
          <div className={'series'}>
            <PlaylistAddIcon />
            <p>시리즈에 추가하기</p>
          </div>
      </div>
      <div className={'writeModal_bottom'}>
        <div className={'save'}>
          <p className={'tempsave'}>임시저장</p>
          <p className={'save'} 
            onClick={async()=>{
              const data = {}
              data.title = postData.title
              data.content = postData.content
              data.isPrivate = postData.isPrivate
              const result = await postApi.createPost(data)
              if(result){
                window.location.replace('/myinfo')
              } else alert('게시글 업로드에 실패하였습니다.')
            }}
          >작성하기</p>
        </div>
        <div className={'private'}>
          <div className={postData.isPrivate? 'inactive':'active'}
            onClick={()=>setPostData({...postData, isPrivate: false })}>
            <PublicIcon style={{width: '0.8rem', height: '0.8rem'}} />
            <p>전체 공개</p>
          </div>
          <div className={postData.isPrivate? 'active':'inactive'}
            onClick={()=>setPostData({...postData, isPrivate: true })}>
            <LockIcon style={{width: '0.8rem', height: '0.8rem'}} />
            <p>나만 보기</p>
          </div>
          <p>추가 설정</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderModal