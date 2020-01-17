import React, {useState} from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import SEO from "../components/seo"
import cookie from '../utils/cookie'
import LoginPage from './signin'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

import temp from "../images/temp.png"

const Index = () => {
  const [menu, setMenu] = useState(false)
  const [selected, setSelected] = useState(1)

  return (
    cookie.getData('token')===undefined? <LoginPage/>:
    <div id={'index'} onClick={()=>setMenu(false)}>
      <SEO title="Home" />
      <div className={'header'}>
        <p>
          <Link to="/" className={'link'}>
            sooLog
          </Link>
        </p>
        <div 
          className={'avatar'}
          onClick={(e)=>{
            e.stopPropagation()
            setMenu(!menu)
            }}>
          <img src={temp} 
            alt={'avatarImg'}/>
        </div>
        <ArrowDropUpIcon className={'arrowUp'} style={{display: menu?'flex':'none'}} />
        <div className={'menu'} style={{display: menu?'flex':'none'}}>
          <a href="/myinfo">내 정보</a>
          <div/>
          <a href="/write">새 글 작성</a>
          <a href="/tempPost">임시 글</a>
          <div/>
          <a href="/setting">설정</a>
          <a href="/" onClick={()=>cookie.removeAllData()}>로그아웃</a>
        </div>
      </div>
      <div className={'sidebar'}>
       
        <input type='text' />

        <div className={selected===1? 's_sidebarItem':'sidebarItem'}
          onClick={()=>setSelected(1)}>
          <TrendingUpIcon />
          <p>트랜딩</p>
        </div>
        <div className={selected===2? 's_sidebarItem':'sidebarItem'}
          onClick={()=>setSelected(2)}>
          <QueryBuilderIcon />
          <p>최신 포스트</p>
        </div>
        <div className={selected===3? 's_sidebarItem':'sidebarItem'}
          onClick={()=>setSelected(3)}>
          <LabelOutlinedIcon />
          <p>태그 목록</p>
        </div>

      </div>
      <div className={'content'}>
        <div>
          <pre>
            앞으로 할 일들<br/><br/>
            1. 서버구현<br/>
            - 게시글(수정,삭제)<br/>
            - DB 관계 지정<br/>
            - 태그 DB 구조
            <br/><br/>

            2. 프론트<br/>
            - 마크다운 메뉴 구현<br/>
            - 내 정보 => 소셜 추가<br/>
            - 내 정보 => 태그 처리<br/>
            - 내 정보 => 게시글 마크다운 문법 제거<br/>
            - 홈 => 트렌딩 최신포스트 태그목록 처리
            <br/><br/>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Index
