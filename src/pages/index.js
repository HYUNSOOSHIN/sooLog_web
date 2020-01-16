import React, {useState} from "react"
import { Link } from "gatsby"
import cookie from '../utils/cookie'

import "../components/layout.css"
import SEO from "../components/seo"

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

import temp from "../images/temp.png"

const Index = () => {
  const [menu, setMenu] = useState(false)
  const [selected, setSelected] = useState(1)

  return (
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
          <img src={cookie.getData('image')===''? temp:cookie.getData('image')} 
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
          <a href="/signin">로그아웃</a>
        </div>
      </div>
      <div className={'sidebar'}>
       
        <input type='text' />

        <div className={selected===1? 's_sidebarItem':'sidebarItem'}
          onClick={()=>{
            setSelected(1)
        }}>
          <TrendingUpIcon />
          <p>트랜딩</p>
        </div>
        <div className={selected===2? 's_sidebarItem':'sidebarItem'}
          onClick={()=>{
            setSelected(2)
        }}>
          <QueryBuilderIcon />
          <p>최신 포스트</p>
        </div>
        <div className={selected===3? 's_sidebarItem':'sidebarItem'}
          onClick={()=>{
            setSelected(3)
        }}>
          <LabelOutlinedIcon />
          <p>태그 목록</p>
        </div>

      </div>
      <div className={'content'}>
        <div>
          <pre>
            앞으로 할 일들<br/><br/>
            1. 서버구현<br/>
            - axios<br/>
            - 로그인(jwt토큰, react-cookies)<br/>
            - 게시글<br/><br/>
            2. 프론트<br/>
            - 마크다운 메뉴<br/>
            - 내 정보 페이지 소셜 추가<br/>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Index
