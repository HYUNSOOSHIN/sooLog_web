import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import postApi from '../../apis/post/post'

import temp from "../../images/temp.png"

const Newest = () => {

  const [posts, setPosts] = useState([])
  
  useEffect(()=> {
    getPost()
  },[])

  const getPost = async() => {
    const result = await postApi.getPostList()
    if(result) setPosts(result)
  }

  const renderPostItem = () => {

    const postItem = (post) => (
      <PostItem key={post.id}>
        <UserImgContainer>
          <UserImgView>
            <UserImg src={temp}/>
          </UserImgView>
        </UserImgContainer>
        <PostItemContent>
          <Top>
            <UserId to='/'>아이디</UserId>
            <br />
            <TitleText to='/'>{post.title}</TitleText>
            <CreatedAtText>{post.createdAt}</CreatedAtText>
          </Top>
          <Bottom>
            <ContentText>{post.content}</ContentText>
          </Bottom>
        </PostItemContent>
      </PostItem>
    )

    return posts.map(item=>postItem(item))
  }

  return (
    <Container>
      {renderPostItem()}
    </Container>
  )
}

export default Newest

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;
const PostItem = styled.div`
  background-color: #fff;
  width: 18rem;
  height: 25rem;
`;
const UserImgContainer = styled.div`
  position: absolute; 
  width: 18rem;
`;
const UserImgView = styled.div`
  position: absolute;
  display: flex;
  background-color: #fff;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  top: -30px;
  right: 16px;
  border-radius: 30px;
`;
const UserImg = styled.img`
  margin: 0;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
const PostItemContent = styled.div`
  background-color: #fff;
  width: 18rem;
`;
const Top = styled.div`
  padding: 32px 16px;
  border-bottom: 1px solid #e9ecef;
`;
const Bottom = styled.div`
  padding: 24px 16px;
`;
const UserId = styled(Link)`
  cursor: pointer;
  color: #845ef7;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;
const TitleText = styled(Link)`
  cursor: pointer;
  padding-top: 8px;
  color: #343a40;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
`;
const CreatedAtText = styled.p`
  margin: 0;
  margin-top: 8px;
  color: #8aa6c1;
  font-size: 14px;
`;
const ContentText = styled.p`
  overflow-y: hidden;
  margin: 0;
  color: #4c657d;
  font-size: 16px;
  word-break: break-all;
  text-overflow: ellipsis;
`;