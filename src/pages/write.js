import React, {useState} from 'react'
import { inject, observer } from 'mobx-react'
import marked from 'marked'
import "../components/layout.css"
import SEO from "../components/seo"

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CloseIcon from '@material-ui/icons/Close';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import PublishIcon from '@material-ui/icons/Publish'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import PublicIcon from '@material-ui/icons/Public'
import LockIcon from '@material-ui/icons/Lock'

import left from '../images/write_left.png'
import both from '../images/write_both.png'
import right from '../images/write_right.png'

const Write = ({posts: postsStore}) => {
  const {posts} = postsStore
  const [headerModal, setHeaderModal] = useState(false)
  const [rightModal, setRightModal] = useState(false)
  const [selected, setSelected] = useState(2) // 에디터 레이아웃 인덱스
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function renderModal() {
    return (
      <div className={'writeModal'} style={{ display: headerModal? 'block':'none' }}>
        <div className={'writeModal_top'}>
            <p>새 글 작성하기</p>
            <p className={'title'}>태그 설정</p>
            <div className={'tag'}>
              <input type='text' placeholder={'태그를 입력하세요'}/>
              <p>등록</p>
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
            <p style={{backgroundColor: 'rgb(104,113,123)'}}>임시저장</p>
            <p style={{backgroundColor: 'rgb(127,100,239)'}} 
             
              onClick={()=>{
              window.location.replace('/post')
              }}
            >작성하기</p>
          </div>
          <div className={'private'}>
            <div className={'active'}>
              <PublicIcon style={{width: '0.8rem', height: '0.8rem'}} />
              <p>전체 공개</p>
            </div>
            <div className={'inactive'}>
              <LockIcon style={{width: '0.8rem', height: '0.8rem'}} />
              <p>나만 보기</p>
            </div>
            <p>추가 설정</p>
          </div>
        </div>
      </div>
    )
  }

  function renderRightModal() {
    return (
      <div 
        className={'rigthModalContainer'} 
        style={{ display: rightModal? 'block':'none'}}
        onClick={()=>setRightModal(false)}>
        <div className={'rigthModal'} onClick={(e)=> e.stopPropagation()}>
          <p>레이아웃 설정</p>
          <div className={'layout_set'}>
            <div className={selected===1? 'selected':null} onClick={()=>{setSelected(1)}}>
              <img src={left} alt={'editor'}/>
              <p>에디터만</p>
            </div>
            <div className={selected===2? 'selected':null} onClick={()=>{setSelected(2)}}>
              <img src={both} alt={'both'}/>
              <p>둘 다 보기</p>
            </div>
            <div className={selected===3? 'selected':null} onClick={()=>{setSelected(3)}}>
              <img src={right} alt={'sample'}/>
              <p>미리보기만</p>
            </div>
          </div>

          <p style={{marginTop: '2rem'}}>임시 저장 기록</p>
          <div className={'temp_save'}>
            <p>임시 저장 데이터가 없습니다.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO title="Write"/>
      <div id='write'>
        <div className='writeHeader'>
          <div className='left'>
            <ArrowBackIcon style={{color: '#ffffff', cursor: 'pointer'}} onClick={()=> {
              document.location.replace(document.referrer)
              }}/>
            <input 
              type='text' 
              placeholder='제목을 입력해주세요.'
              onChange={(e)=> setTitle(e.target.value)} />
          </div>
          <div className={'right'}>
            <input type='file' id='filebtn' style={{display: 'none'}} onChange={(e)=>console.log(e.target.files[0])}/>
            <label className='upload' htmlFor={'filebtn'} >
              <ImageOutlinedIcon style={{width: '1rem', marginRight: '0.5rem'}} />
              업로드
            </label>
            <button 
              className='write'
              onClick={()=>setHeaderModal(!headerModal)}>
              작성하기
            </button>
            <div>
              {rightModal?
                <CloseIcon className={'rightbtn'} 
                onClick={()=> setRightModal(!rightModal)}/>:
                <MoreVertIcon className={'rightbtn'} 
                onClick={()=> setRightModal(!rightModal)}/>
              }
            </div>
          </div>
        </div>
        {renderModal()}
        {renderRightModal()}
        <div className='writeSpace'>
          <div className='mdEditor' style={{display: selected===3? 'none':'block'}}>
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
          <div className='mdResult' style={{display: selected===1? 'none':'block'}}>
            <h1>{title}</h1>
            <pre id="result"></pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default inject('posts')(observer(Write))