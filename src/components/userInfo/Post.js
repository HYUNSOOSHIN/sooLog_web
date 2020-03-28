import React, { useState } from "react"
import styled from "styled-components"
// import marked from "marked"
// import Tag from "../tag"

const Post = ({ posts, tags }) => {
  const [tag, setTag] = useState(0)
  return (
    <Container>
      <TagList>
        <TagListTitle>태그</TagListTitle>
        <Line />
        <TagListUl>
          <TagListLi
            active={tag === 0 ? true : false}
            onClick={() => setTag(0)}
          >
            전체보기
          </TagListLi>
          {tags.map((item, index) => (
            <TagListLi
              key={index}
              active={tag === index + 1 ? true : false}
              onClick={() => setTag(index + 1)}
            >
              {item.tagName}
              <TagListLiText> ({item.count})</TagListLiText>
            </TagListLi>
          ))}
        </TagListUl>
      </TagList>
      <PostList>
        {posts.map((item, index) => (
          <PostItem key={index}>
            <PostTitle href={`/post/?${item._id}`}>{item.title}</PostTitle>
            <PostContent>{item.content}</PostContent>
            <PostDate>{`${item.createdAt} - 0개의 댓글`}</PostDate>
            {/* <div style={{display: 'flex', marginTop: '0.5rem'}}>
              {item.tag.map((tag, idx)=>
                <Tag key={idx} name={tag}/>
              )}
            </div> */}
          </PostItem>
        ))}
      </PostList>
    </Container>
  )
}

export default Post

const Container = styled.div`
  display: flex;
`
const TagList = styled.div`
  width: 20%;
  height: 100%;
`
const TagListTitle = styled.p`
  ont-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`
const Line = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 1px;
  margin: 0.3rem 0;
`
const TagListUl = styled.ul`
  list-style: none;
  margin: 0;
`
const TagListLi = styled.li`
  cursor: pointer;
  margin: 0;
  padding: 0.1rem 0;
  color: ${props => (props.active ? "rgb(137,85,246)" : "#343a40")};
  text-decoration: none;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
`
const TagListLiText = styled.label`
  color: #adb5bd;
  font-size: 14px;
`
const PostList = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 2rem;
`
const PostItem = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #dbdbdb;
`
const PostTitle = styled.a`
  color: #222222;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-decoration: none;
  margin: 0;
  &:hover {
    color: rgb(126, 99, 239);
  }
`
const PostContent = styled.p`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin: 0.5rem 0;
`
const PostDate = styled.p`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`
