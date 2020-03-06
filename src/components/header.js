import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import cookie from '../utils/cookie'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import temp from "../images/temp.png"

const Header = ({menu, setMenu}) => {

  return (
    <Container 
      onClick={()=>setMenu(false)}>
      <Div>
        <Logo>
          <LogoLink to="/">
            sooLog
          </LogoLink>
        </Logo>
        <AvatarBtn
          onClick={(e)=>{
            e.stopPropagation()
            setMenu(!menu)
            }}>
          <AvatarBtnImg src={temp} 
            alt={'avatarImg'}/>
        </AvatarBtn>
        <ArrowDropUpIcon 
          style={{
            display: menu? 'flex':'none',
            position: 'absolute',
            width: '3rem',
            height: '3rem',
            right: '2.25rem',
            top: '5rem',
          }}/>
        <Menu style={{display: menu?'flex':'none'}}>
          <MenuItem href="/myinfo">내 정보</MenuItem>
          <Line/>
          <MenuItem href="/write">새 글 작성</MenuItem>
          <MenuItem href="/tempPost">임시 글</MenuItem>
          <Line/>
          <MenuItem href="/setting">설정</MenuItem>
          <MenuItem href="/" onClick={()=>cookie.removeAllData()}>로그아웃</MenuItem>
        </Menu>
      </Div>
    </Container>
  )
}

export default Header

const Container = styled.header`
  user-select: none;
  background-color: inherit;
  margin: 0 auto;
  max-width: 100%;
  padding: 2rem;
  margin-bottom: 2rem;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin: 0;
`;
const Logo = styled.p`
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  line-height: 1.5;
`;
const LogoLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
const AvatarBtn = styled.div`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid #dbdbdb;
  border-radius: 1.75rem;
`;
const AvatarBtnImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0;
  border-radius: 1.75rem;
`;
// const ArrowUpBtn = styled(ArrowDropUpIcon)`
//   position: absolute;
//   width: 3rem;
//   height: 3rem;
//   right: 2.25rem;
//   top: 5rem;
// `;
const Menu = styled.div`
  position: absolute;
  flex-direction: column;
  background-color: #ffffff;
  width: 8.5rem;
  right: 2rem;
  top: 6.7rem;
  border: 1px solid #000000;
`;
const MenuItem = styled.a`
  cursor: pointer;
  margin: 0;
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  color: #000000;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: rgb(137,85,246);
  }
`;
const Line = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 1px;
  margin: 0.2rem 0;
`;