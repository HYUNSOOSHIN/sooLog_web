import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import marked from "marked"
import cookie from "../utils/cookie"
import postApi from "../apis/post/post"
// import tagApi from "../apis/tag/tag"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"

import tempImg from "../images/temp.png"
import { Router } from "@reach/router"

const Post = props => {
  const [post, setPost] = useState({})
  const [tags, setTags] = useState([])

  useEffect(() => {
    getPost()
  }, [])

  const getPost = async () => {
    const result = await postApi.readPost(props.location.state.postId)
    if (result) {
      setPost(result)
      // content에 마크다운으로 넣음
      document.getElementById("content").innerHTML = marked(result.content)
    }
    // const result2 = await tagApi.getPostTags(result.id)
    // if (result2) setTags(result2)
  }

  return (
    <Layout>
      <SEO title={"Post"} />
      <>
        <Top>
          <TopImg src={tempImg} alt={"temp"} />
          <div>
            <TopText>{props.userId}</TopText>
            <TopText>어금니금니입니다.</TopText>
          </div>
        </Top>

        <>
          <Title>{post.title}</Title>
          <CreatedAt>{post.createdAt}</CreatedAt>
          <Line />
          <BtnContainer>
            {cookie.getData("_id") === post.writerId ? (
              <>
                <Btn to={`/write?${post._id}`}>수정</Btn>
                <Btn
                  to={`userInfo/@${cookie.getData("id")}`}
                  onClick={() => {
                    postApi.deletePost(post._id)
                  }}
                >
                  삭제
                </Btn>
              </>
            ) : null}
          </BtnContainer>

          <Pre id={"content"}></Pre>

          <TagList>
            {tags.map((tag, idx) => (
              <Tag name={tag.tagName} key={idx} />
            ))}
          </TagList>
        </>

        <Bottom>
          <BottomText>0개의 댓글</BottomText>
          <TextArea></TextArea>
          <ReplyBtnContainer>
            <ReplyBtn>댓글 작성</ReplyBtn>
          </ReplyBtnContainer>
        </Bottom>
      </>
    </Layout>
  )
}

const postRouter = () => {
  return (
    <Router>
      <Post path="post/:userId/:postTitle" />
    </Router>
  )
}

export default postRouter

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
const TopImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  margin: 0;
`
const TopText = styled.p`
  font-size: 0.8rem;
  margin: 0;
  margin-left: 1rem;
`
const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.4rem;
`
const CreatedAt = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 1rem;
`
const Line = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 1px;
  margin: 0.5rem 0;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Btn = styled(Link)`
  cursor: pointer;
  user-select: none;
  color: #a2a2a2;
  font-size: 0.8rem;
  text-decoration: none;
  margin: 0;
  margin-left: 0.3rem;
`
const Pre = styled.pre`
  white-space: pre-wrap;
  background-color: #fff;
  margin: 3rem 0;
  padding: 0;
`
const TagList = styled.div`
  display: flex;
`
const Bottom = styled.div`
  margin-top: 2rem;
`
const BottomText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
const TextArea = styled.textarea`
  overflow-y: scroll;
  &:-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 0.2rem;
  resize: none;
  outline: none;
  font-size: 1rem;
  &:focus {
    height: 8rem;
  }
`
const ReplyBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
const ReplyBtn = styled.p`
  cursor: pointer;
  user-select: none;
  background-color: rgb(137, 85, 246);
  width: max-content;
  margin-top: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  color: #ffffff;
  font-size: 0.8rem;
  &:hover {
    background-color: rgb(146, 121, 242);
  }
`
