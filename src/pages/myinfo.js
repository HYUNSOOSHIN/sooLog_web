import React, {useState,useEffect} from "react"
import styled from 'styled-components'
import postApi from '../apis/post/post'
import tagApi from '../apis/tag/tag'
import cookie from '../utils/cookie'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/myinfo/Post"
import Series from "../components/myinfo/Series"
import Activity from "../components/myinfo/Activity"
import Introduce from "../components/myinfo/Introduce"

import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';


import temp from "../images/temp.png"

const Myinfo = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [postsList, setPostsList] = useState([])
  const [tagsList, setTagsList] = useState([])

  useEffect(()=>{
    getPosts()
  },[])
  
  const getPosts = async() => {
    const posts = await postApi.getPostList()
    if(posts) setPostsList(posts)
    const tags = await tagApi.getTags()
    if(tags) setTagsList(tags)
  }

  function renderTabContent() {
    switch (activeTab) {
      case 1:
        return <Post posts={postsList} tags={tagsList}/>

      case 2:
        return <Series/>

      case 3:
        return <Activity/>
      
      case 4:
        return <Introduce/>
    
      default:
        return <Post/>
    }
  }

  return (
    <Layout>
      <SEO title="Myinfo" />
      <div>
        <InfoContainer>
          <ProfileImg src={temp} alt='profileImg' />
          <InfoView>
            <IdText>@{cookie.getData('id')}</IdText>
            <Line />
            <NickText>{cookie.getData('nickname')}</NickText>
            <IntroText>{cookie.getData('introduce')}</IntroText>
            <div style={{marginTop: '16px'}}> 
              <div style={{display: 'flex'}}>
                <a href="https://github.com/HYUNSOOSHIN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{marginRight: '1rem', color: '#555555'}}>
                  <GitHubIcon style={{width:'34px', height: '34px'}}/>
                </a>
                <a href="/" target="_blank" style={{marginRight: '1rem', color: '#555555'}}>
                  <TwitterIcon style={{width:'34px', height: '34px'}}/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100005402461078&ref=bookmarks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{marginRight: '1rem', color: '#555555'}}>
                  <FacebookIcon style={{width:'34px', height: '34px'}}/>
                </a>
              </div>
              <div style={{marginTop: '16px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <EmailIcon style={{width:'20px', height: '20px', marginRight: '0.5rem'}}/>
                  <a href="/" style={{margin: 0, color: '#845ef7', fontSize: '16px', textDecoration: 'none'}}>이메일</a>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <LinkIcon style={{width:'20px', height: '20px', marginRight: '0.5rem'}}/>
                  <a href="/" style={{margin: 0, color: '#845ef7', fontSize: '16px', textDecoration: 'none'}}>홈페이지</a>
                </div>
              </div>
            </div>
          </InfoView>
        </InfoContainer>

        <div>
          <TabContainer>
            <Tab active={activeTab===1? true:false}
              onClick={()=>setActiveTab(1)}>글</Tab>
            <Tab active={activeTab===2? true:false}
              onClick={()=>setActiveTab(2)}>시리즈</Tab>
            <Tab active={activeTab===3? true:false}
              onClick={()=>setActiveTab(3)}>활동</Tab>
            <Tab active={activeTab===4? true:false}
              onClick={()=>setActiveTab(4)}>소개</Tab>
          </TabContainer>
          <TabContent>
            {renderTabContent()}
          </TabContent>
        </div>
      </div>
    </Layout>
  )
}

export default Myinfo

const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
const ProfileImg = styled.img`
  user-select: none;
  width: 12rem;
  height: 12rem;
  margin: 0;
  border-radius: 6rem;
`;
const InfoView = styled.div`
  width: 100%;
  padding: 2.5rem 0 0 2rem;
`;
const IdText = styled.div`
  color: rgb(137,85,246);
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;
const Line = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 1px;
  margin: 0.5rem 0;
`;
const NickText = styled.p`
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
`;
const IntroText = styled.p`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin-top: 1.5rem;
`;
const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Tab = styled.p`
  cursor: pointer;
  display: flex;
  width: 5rem;
  justify-content: center;
  color: ${props=> props.active? 'rgb(137,85,246)' : 'black'};
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 1rem;
  padding: 0.5rem 0;
  border-bottom: ${props=> props.active? '2px solid rgb(137,85,246)' : 'none'};
`;
const TabContent = styled.div`
  width: 100%;
  margin-top: 4rem;
`;