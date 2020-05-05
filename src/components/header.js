import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { Link } from "@reach/router"

import cookie from "react-cookies"

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"

import user from "../images/user.png"

const Header = ({ menu, setMenu }) => {
  return (
    <Container onClick={() => setMenu(false)}>
      <Div>
        <Logo>
          <LogoLink to="/">sooLog</LogoLink>
        </Logo>

        {cookie.load("token") !== undefined ? (
          <AvatarBtn
            onClick={e => {
              e.stopPropagation()
              setMenu(!menu)
            }}
          >
            <AvatarBtnImg src={user} alt={"avatarImg"} />
          </AvatarBtn>
        ) : (
          <LoginBtn to="/signin">
            <LockOutlinedIcon style={{ width: "2rem", height: "2rem" }} />
          </LoginBtn>
        )}
        <ArrowDropUpIcon
          style={{
            display: menu ? "flex" : "none",
            position: "absolute",
            width: "3rem",
            height: "3rem",
            right: "2.25rem",
            top: "5rem",
          }}
        />
        <Menu style={{ display: menu ? "flex" : "none" }}>
          <ReachLink to={`/userInfo/@${cookie.load("id")}`}>내 정보</ReachLink>
          <Line />
          <ReachLink to={`/write`}>새 글 작성</ReachLink>
          <ReachLink to={`/tempPost`}>임시 글</ReachLink>
          <Line />
          <ReachLink to={`/setting`}>설정</ReachLink>
          <MenuBtn
            onClick={async () => {
              await cookie.remove("token")
              await cookie.remove("id")
              await cookie.remove("_id")
              navigate("/")
            }}
          >
            로그아웃
          </MenuBtn>
        </Menu>
      </Div>
    </Container>
  )
}

export default Header

const Container = styled.header`
  user-select: none;
  background-color: transparent;
  margin: 0 auto;
  max-width: 100%;
  padding: 2rem;
  margin-bottom: 2rem;
`
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin: 0;
`
const Logo = styled.p`
  font-size: 2rem;
  margin: 0;
  line-height: 1.5;
`
const LogoLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const LoginBtn = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(225, 49, 90);
  color: #fff;
  text-decoration: none;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.75rem;
`
const AvatarBtn = styled.div`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid #dbdbdb;
  border-radius: 1.75rem;
`
const AvatarBtnImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0;
  border-radius: 1.75rem;
`
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
`
const MenuBtn = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  color: #000000;
  font-size: 0.8rem;
  &:hover {
    color: rgb(137, 85, 246);
  }
`
const ReachLink = styled(Link)`
  cursor: pointer;
  margin: 0;
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  color: #000000;
  font-size: 0.8rem;
  &:hover {
    color: rgb(137, 85, 246);
  }
`
const Line = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 1px;
  margin: 0.2rem 0;
`
