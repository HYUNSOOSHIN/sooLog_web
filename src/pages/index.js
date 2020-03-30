import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "../components/layout.css"
import SEO from "../components/seo"
import cookie from "../utils/cookie"

import HomeComponent from "../components/home/home"
import NewestComponent from "../components/home/newest"
import TagListComponent from "../components/home/taglist"

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import HomeIcon from "@material-ui/icons/Home"
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder"
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined"

import user from "../images/user.png"

const Index = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [menu, setMenu] = useState(false)
  const [selected, setSelected] = useState(1)

  useEffect(() => {
    loginCheck()
  }, [])

  const loginCheck = async () => {
    const token = await cookie.getData("token")
    if (token === undefined || token === null) await setIsLogin(false)
    else await setIsLogin(true)
  }

  return (
    <Container onClick={() => setMenu(false)}>
      <SEO title="Home" />

      <Sidebar>
        <Logo>
          <LogoLink to="/" onClick={() => setSelected(1)}>
            sooLog
          </LogoLink>
        </Logo>
        <Input type="text" />

        <SidebarItem
          selected={selected === 1 ? true : false}
          onClick={() => setSelected(1)}
        >
          <HomeIcon style={{ width: "1.5rem", height: "1.5rem" }} />
          <SidebarItemText>홈</SidebarItemText>
        </SidebarItem>
        <SidebarItem
          selected={selected === 2 ? true : false}
          onClick={() => setSelected(2)}
        >
          <QueryBuilderIcon style={{ width: "1.5rem", height: "1.5rem" }} />
          <SidebarItemText>최신 포스트</SidebarItemText>
        </SidebarItem>
        <SidebarItem
          selected={selected === 3 ? true : false}
          onClick={() => setSelected(3)}
        >
          <LabelOutlinedIcon style={{ width: "1.5rem", height: "1.5rem" }} />
          <SidebarItemText>태그 목록</SidebarItemText>
        </SidebarItem>
      </Sidebar>

      <Content>
        <AvatarView>
          {isLogin === true ? (
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
        </AvatarView>
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
          <MenuItem to={`/userInfo`}>내 정보</MenuItem>
          <Line />
          <MenuItem to={`/write`}>새 글 작성</MenuItem>
          <MenuItem to={`/tempPost`}>임시 글</MenuItem>
          <Line />
          <MenuItem to={`/setting`}>설정</MenuItem>
          <MenuItem
            to={"/"}
            onClick={async () => {
              await cookie.removeAllData()
              document.location.reload()
            }}
          >
            로그아웃
          </MenuItem>
        </Menu>
        <div>
          {selected === 1 ? (
            <HomeComponent />
          ) : selected === 2 ? (
            <NewestComponent />
          ) : (
            <TagListComponent />
          )}
        </div>
      </Content>
    </Container>
  )
}

export default Index

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const Sidebar = styled.div`
  user-select: none;
  position: fixed;
  background-color: #ffffff;
  width: 15rem;
  height: 100%;
`
const Logo = styled.p`
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 2rem;
  line-height: 1.5;
`
const LogoLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const Input = styled.input`
  background-color: rgb(242, 243, 245);
  width: 10rem;
  border: 1px solid #dbdbdb;
  border-radius: 0.3rem;
  outline: none;
  margin: 0.5rem 2rem;
  padding-left: 0.5rem;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    background-color: #fff;
    border: 1px solid rgb(115, 86, 234);
  }
`

const SidebarItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.7rem 2rem;
  color: ${props => (props.selected ? "rgb(115,86,234)" : "none")};
  border-right: ${props =>
    props.selected ? "2px solid rgb(115,86,234)" : "none"};
  &:hover {
    background-color: rgb(248, 249, 250);
  }
`

const SidebarItemText = styled.p`
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin-left: 1rem;
`

const Content = styled.div`
  background-color: rgb(242, 243, 245);
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  padding-left: 15rem;
  &::-webkit-scrollbar {
    display: none;
  }
`

const AvatarView = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 3.5rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
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
  z-index: 100;
`
const MenuItem = styled(Link)`
  cursor: pointer;
  margin: 0;
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  color: #000000;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
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
