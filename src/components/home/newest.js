import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import postApi from "../../apis/post/post"

import temp from "../../images/temp.png"

const Newest = () => {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const postList = await postApi.getPostList()
    if (postList) setPostList(postList)
  }

  const renderPostItem = () => {
    const postItem = post => (
      <PostContainer key={post._id}>
        <UserImgContainer>
          <UserImgView>
            <UserImg src={temp} />
          </UserImgView>
        </UserImgContainer>

        <PostItem>
          <PostItemContent>
            <Top>
              <UserId to="/">{`닉네임`}</UserId>
              <br />
              <TitleText to={`/post?${post._id}`}>{post.title}</TitleText>
              <CreatedAtText>{post.createdAt}</CreatedAtText>
            </Top>
            <Bottom>
              <ContentText>{post.content}</ContentText>
            </Bottom>
          </PostItemContent>
        </PostItem>
      </PostContainer>
    )

    return postList.map(item => postItem(item))
  }

  return <Container>{renderPostItem()}</Container>
}

export default Newest

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
`
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PostItem = styled.div`
  background-color: #fff;
  width: 18rem;
  height: 25rem;
`
const UserImgContainer = styled.div`
  position: relative;
  width: 18rem;
  z-index: 1;
`
const UserImgView = styled.div`
  position: relative;
  display: flex;
  background-color: #fff;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  top: 1.5rem;
  left: 13rem;
  border-radius: 30px;
  z-index: 1;
`
const UserImg = styled.img`
  margin: 0;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`
const PostItemContent = styled.div`
  background-color: #fff;
  width: 18rem;
`
const Top = styled.div`
  padding: 32px 16px;
  border-bottom: 1px solid #e9ecef;
`
const Bottom = styled.div`
  padding: 24px 16px;
`
const UserId = styled(Link)`
  cursor: pointer;
  color: #845ef7;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`
const TitleText = styled(Link)`
  cursor: pointer;
  padding-top: 8px;
  color: #343a40;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
`
const CreatedAtText = styled.p`
  margin: 0;
  margin-top: 8px;
  color: #8aa6c1;
  font-size: 14px;
`
const ContentText = styled.p`
  overflow-y: hidden;
  margin: 0;
  color: #4c657d;
  font-size: 16px;
  word-break: break-all;
  text-overflow: ellipsis;
`
