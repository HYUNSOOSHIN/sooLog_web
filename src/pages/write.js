import React, {useState} from 'react'
import marked from 'marked'
import "../components/layout.css"
import SEO from "../components/seo"

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CloseIcon from '@material-ui/icons/Close';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'

import HeaderModal from '../components/write/HeaderModal'
import RightModal from '../components/write/RightModal'

const Write = () => {
  const [headerModal, setHeaderModal] = useState(false)
  const [rightModal, setRightModal] = useState(false)
  const [selected, setSelected] = useState(2) // 에디터 레이아웃 인덱스
  const [postData, setPostData] = useState({ // 게시글에 대한 정보
    title: '',
    content: '',
    tagList: [],
    isPrivate: false,
  })

  return (
    <>
      <SEO title="Write"/>
      <div id='write' 
        onClick={()=>{
          setHeaderModal(false) 
          setRightModal(false)
      }}>
        <div className='writeHeader'>
          <div className='left'>
            <ArrowBackIcon style={{color: '#ffffff', cursor: 'pointer'}} onClick={()=> {
              document.location.replace(document.referrer)
              }}/>
            <input type='text' 
              placeholder='제목을 입력해주세요.'
              value={postData.title}
              onChange={(e)=> setPostData({...postData, title: e.target.value})} />
          </div>
          <div className={'right'}>
            <input type='file' id='filebtn' style={{display: 'none'}} onChange={(e)=>console.log(e.target.files[0])}/>
            <label className='upload' htmlFor={'filebtn'} >
              <ImageOutlinedIcon style={{width: '1rem', marginRight: '0.5rem'}} />
              업로드
            </label>
            <button className='write'
              onClick={(e)=>{
                e.stopPropagation()
                setHeaderModal(!headerModal)
                setRightModal(false)
              }}>
              작성하기
            </button>
            <div onClick={e=>{
              e.stopPropagation()
              setHeaderModal(false)
            }}>
              {rightModal?
                <CloseIcon className={'rightbtn'} 
                onClick={()=> setRightModal(false)}/>:
                <MoreVertIcon className={'rightbtn'} 
                onClick={()=> setRightModal(true)}/>
              }
            </div>
          </div>
        </div>
        <HeaderModal 
          headerModal={headerModal}
          setHeaderModal={setHeaderModal}
          postData={postData}
          setPostData={setPostData}
        />
        <RightModal 
          rightModal={rightModal}
          setRightModal={setRightModal}
          selected={selected} 
          setSelected={setSelected}
        />
        <div className='writeSpace'>
          <div className='mdEditor' style={{display: selected===3? 'none':'block'}}>
            <textarea 
              placeholder='당신의 이야기를 적어보세요...'
              id='content'
              value={postData.content}
              onChange={(e)=> {
                setPostData({...postData, content: e.target.value})
                // 마크다운 변환
                document.getElementById('result').innerHTML = marked(document.getElementById('content').value);
              }}/>
          </div>
          <div className='mdResult' style={{display: selected===1? 'none':'block'}}>
            <h1>{postData.title}</h1>
            <pre id="result"></pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default Write