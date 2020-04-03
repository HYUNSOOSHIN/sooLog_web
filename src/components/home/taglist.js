import React, { useState, useEffect } from "react"
import styled from "styled-components"
import tagApi from "../../apis/tag"

import WhatshotIcon from "@material-ui/icons/Whatshot"
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha"

const TagList = () => {
  const [tab, setTab] = useState(1)
  const [tagList, setTagList] = useState([])

  useEffect(() => {
    getTags()
  }, [])

  const getTags = async () => {
    const result = await tagApi.readAllTagList()
    // if (result) {
    //   result.sort((a, b) =>
    //     a.count < b.count ? 1 : a.count > b.count ? -1 : 0
    //   )
    //   await setTagList(result)
    // }
    setTagList(result)
  }

  const sortTags = how => {
    if (how === "name")
      tagList.sort((a, b) =>
        a.tagName > b.tagName ? 1 : a.tagName < b.tagName ? -1 : 0
      )
    else if (how === "count")
      tagList.sort((a, b) =>
        a.count < b.count ? 1 : a.count > b.count ? -1 : 0
      )
  }

  return (
    <Container>
      <TabContainer>
        <TabBtn
          active={tab === 1 ? true : false}
          onClick={() => {
            setTab(1)
            sortTags("count")
          }}
        >
          <WhatshotIcon style={{ width: "20px" }} />
          <TabText>인기순</TabText>
        </TabBtn>
        <TabBtn
          active={tab === 2 ? true : false}
          onClick={() => {
            setTab(2)
            sortTags("name")
          }}
        >
          <SortByAlphaIcon style={{ width: "20px" }} />
          <TabText>이름순</TabText>
        </TabBtn>
      </TabContainer>

      <TagContainer>
        {tagList.map((item, index) => (
          <TagItem key={`tag ${index}`}>
            <TagItemName>{item.name}</TagItemName>
            <TagItemCount>{item.totalCount}</TagItemCount>
          </TagItem>
        ))}
      </TagContainer>
    </Container>
  )
}

export default TagList

const Container = styled.div`
  padding: 0 1rem;
`
const TabContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
const TabBtn = styled.button`
  user-select: none;
  cursor: pointer;
  display: flex;
  background-color: inherit;
  align-items: center;
  margin: 0 0.5rem;
  border: none;
  outline: none;
  border-bottom: ${props => (props.active ? "2px solid #845ef7" : "none")};
  color: ${props => (props.active ? "#845ef7" : "#868e96")};
`
const TabText = styled.p`
  margin: 0;
  margin-left: 0.25rem;
  font-size: 1.2rem;
`
const TagContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`
const TagItem = styled.div`
  user-select: none;
  cursor: pointer;
  float: left;
  display: flex;
  background-color: #fff;
  width: max-content;
  align-items: center;
  margin: 0.375rem;
  padding: 8px 16px;
  border: 1px solid #ced4da;
  border-radius: 22px;
`
const TagItemName = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.2;
`
const TagItemCount = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  color: #868e96;
  font-size: 0.625rem;
  line-height: 1.2;
`
