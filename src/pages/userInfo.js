import React, { useState, useEffect } from "react"
import styled from "styled-components"
import cookie from "../utils/cookie"
import userApi from "../apis/user/user"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/userInfo/Post"
import Series from "../components/userInfo/Series"
import Scrap from "../components/userInfo/Scrap"
import Introduce from "../components/userInfo/Introduce"

import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkIcon from "@material-ui/icons/Link"

import user from "../images/user.png"

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    nickName: "",
    introduce: "",
    github: "",
    twitter: null,
    facebook: "",
    homepage: "",
    image: null,
  })
  const [activeTab, setActiveTab] = useState(1)

  useEffect(() => {
    const param = window.location.search.replace("?", "")
    const getUser = async () => {
      const result = await userApi.getUserInfo(
        param === "" ? cookie.getData("_id") : param
      )

      if (result) {
        setUserInfo({
          ...userInfo,
          id: result.id,
          email: result.email,
          nickName: result.nickname,
          introduce: result.introduce,
        })
      }
    }
    getUser()
  }, [])

  function renderTabContent() {
    switch (activeTab) {
      case 1:
        return <Post />

      case 2:
        return <Series />

      case 3:
        return <Scrap />

      case 4:
        return <Introduce />

      default:
        return <Post />
    }
  }

  return (
    <Layout>
      <SEO title={`${userInfo.nickName}'s Info`} />
      <div>
        <InfoContainer>
          <ProfileImg src={user} alt="profileImg" />
          <InfoView>
            <IdText>{`@${userInfo.id}`}</IdText>
            <Line />
            <NickText>{`${userInfo.nickName}`}</NickText>
            <IntroText>{`${
              userInfo.introduce ? userInfo.introduce : ""
            }`}</IntroText>
            <div style={{ marginTop: "16px" }}>
              <div style={{ display: "flex", height: "max-content" }}>
                {userInfo.github ? (
                  <a
                    href={`${userInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem", color: "#555555" }}
                  >
                    <GitHubIcon style={{ width: "34px", height: "34px" }} />
                  </a>
                ) : null}
                {userInfo.twitter ? (
                  <a
                    href={`${userInfo.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem", color: "#555555" }}
                  >
                    <TwitterIcon style={{ width: "34px", height: "34px" }} />
                  </a>
                ) : null}
                {userInfo.facebook ? (
                  <a
                    href={`${userInfo.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem", color: "#555555" }}
                  >
                    <FacebookIcon style={{ width: "34px", height: "34px" }} />
                  </a>
                ) : null}
              </div>
              <div style={{ marginTop: "16px" }}>
                {userInfo.email ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "0.5rem",
                      }}
                    />
                    <a
                      href={`${userInfo.email}`}
                      style={{
                        margin: 0,
                        color: "#845ef7",
                        fontSize: "16px",
                        textDecoration: "none",
                      }}
                    >
                      {`${userInfo.email}`}
                    </a>
                  </div>
                ) : null}
                {userInfo.homepage ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LinkIcon
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "0.5rem",
                      }}
                    />
                    <a
                      href={`${userInfo.homepage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        margin: 0,
                        color: "#845ef7",
                        fontSize: "16px",
                        textDecoration: "none",
                      }}
                    >
                      {`${userInfo.homepage}`}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </InfoView>
        </InfoContainer>

        <div>
          <TabContainer>
            <Tab
              active={activeTab === 1 ? true : false}
              onClick={() => setActiveTab(1)}
            >
              글
            </Tab>
            <Tab
              active={activeTab === 2 ? true : false}
              onClick={() => setActiveTab(2)}
            >
              시리즈
            </Tab>
            <Tab
              active={activeTab === 3 ? true : false}
              onClick={() => setActiveTab(3)}
            >
              스크랩
            </Tab>
            <Tab
              active={activeTab === 4 ? true : false}
              onClick={() => setActiveTab(4)}
            >
              소개
            </Tab>
          </TabContainer>
          <TabContent>{renderTabContent()}</TabContent>
        </div>
      </div>
    </Layout>
  )
}

export default UserInfo

const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`
const ProfileImg = styled.img`
  user-select: none;
  width: 12rem;
  height: 12rem;
  margin: 0;
  border-radius: 6rem;
`
const InfoView = styled.div`
  width: 100%;
  padding: 2.5rem 0 0 2rem;
`
const IdText = styled.div`
  color: rgb(137, 85, 246);
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`
const Line = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 1px;
  margin: 0.5rem 0;
`
const NickText = styled.p`
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
`
const IntroText = styled.p`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin-top: 1.5rem;
`
const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const Tab = styled.p`
  cursor: pointer;
  display: flex;
  width: 5rem;
  justify-content: center;
  color: ${props => (props.active ? "rgb(137,85,246)" : "black")};
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 1rem;
  padding: 0.5rem 0;
  border-bottom: ${props =>
    props.active ? "2px solid rgb(137,85,246)" : "none"};
`
const TabContent = styled.div`
  width: 100%;
  margin-top: 4rem;
`
