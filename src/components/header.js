import React, {useState} from "react"
import { Link } from "gatsby"

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import temp from "../images/temp.png"

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <header>
      <div>
        <p>
          <Link to="/" className='link'>
            velog
          </Link>
        </p>
        <div 
          className={'avatar'}
          onClick={()=>setMenu(!menu)}>
          <img src={temp} alt={'avatarImg'}/>
        </div>
        <ArrowDropUpIcon className={'arrowUp'} style={{display: menu?'flex':'none'}} />
        <div className={'menu'} style={{display: menu?'flex':'none'}}>
          <a href="/myinfo">내 벨로그</a>
          <div/>
          <a href="/write">새 글 작성</a>
          <a href="/">임시 글</a>
          <div/>
          <a href="/setting">설정</a>
          <a href="/index">로그아웃</a>
        </div>
      </div>
    </header>
  )
}

export default Header
