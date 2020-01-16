import React from "react"
import { Link } from "gatsby"
import cookie from '../utils/cookie'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import temp from "../images/temp.png"

const Header = ({menu, setMenu}) => {

  return (
    <header 
      onClick={()=>setMenu(false)}>
      <div>
        <p>
          <Link to="/" className='link'>
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
          <a href="/" onClick={()=>cookie.removeAllData()}>로그아웃</a>
        </div>
      </div>
    </header>
  )
}

export default Header
