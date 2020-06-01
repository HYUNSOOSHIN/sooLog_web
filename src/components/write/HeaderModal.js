import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import cookie from "react-cookies"
import postApi from "../../apis/post/post"
import tagApi from "../../apis/tag"

import PublishIcon from "@material-ui/icons/Publish"
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd"
import PublicIcon from "@material-ui/icons/Public"
import LockIcon from "@material-ui/icons/Lock"
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined"

const HeaderModal = ({
  headerModal,
  setHeaderModal,
  postData, // title, content, isPrivate
  setPostData,
}) => {
  const [tagText, setTagText] = useState("")
  const [tagList, setTagList] = useState([])

  return (
    <Container
      style={{ display: headerModal ? "block" : "none" }}
      onClick={e => e.stopPropagation()}
    >
      <Top>
        <TopP>새 글 작성하기</TopP>
        <TopTitle>태그 설정</TopTitle>
        <TagContainer>
          <TagInput
            type="text"
            placeholder={"태그를 입력하세요"}
            value={tagText}
            onChange={e => setTagText(e.target.value)}
          />
          <TagButton
            onClick={() => {
              if (tagText !== "") setTagList([...tagList, tagText])
              setTagText("")
            }}
          >
            등록
          </TagButton>
        </TagContainer>
        <TagList>
          {tagList.map((item, index) => (
            <TagListDiv key={index}>
              {item}
              <TagListDivDiv>
                <RemoveOutlinedIcon
                  style={{ width: "1rem", height: "1rem" }}
                  onClick={async () => {
                    const temp = tagList
                    await temp.splice(index, 1)
                    setTagList([]) // 재렌더링이 안돼서 임시로 넣음
                    setTagList(temp)
                  }}
                />
              </TagListDivDiv>
            </TagListDiv>
          ))}
        </TagList>
        <TopTitle>썸네일 지정</TopTitle>
        <UploadBtn>
          <PublishIcon />
          <UploadBtnP>업로드</UploadBtnP>
        </UploadBtn>
        <TopTitle>시리즈 설정</TopTitle>
        <AddSeriesBtn>
          <PlaylistAddIcon />
          <AddSeriesBtnP>시리즈에 추가하기</AddSeriesBtnP>
        </AddSeriesBtn>
      </Top>

      <Bottom>
        <SaveBtnContainer>
          <TempSaveBtn className={"tempsave"}>임시저장</TempSaveBtn>
          <SaveBtn
            onClick={async () => {
              if (postData.title === "") {
                alert("제목을 채워주세요.")
              } else if (postData.content === "") {
                alert("내용을 채워주세요.")
              } else {
                const data = {}
                data.title = postData.title
                data.content = postData.content
                data.userId = postData.userId
                data.isPrivate = postData.isPrivate
                const result = await postApi.createPost(data)

                const tagData = {
                  tagList: tagList,
                  postId: result,
                }
                const result2 = await tagApi.createTag({ tagData })

                if (result && result2) {
                  alert("포스트가 완료되었습니다.")
                  navigate(`userInfo/@${cookie.load("id")}`)
                } else alert("게시글 업로드에 실패하였습니다.")
              }
            }}
          >
            작성하기
          </SaveBtn>
        </SaveBtnContainer>
        <PrivateSetContainer>
          <div style={{ display: "flex" }}>
            <PrivateBtn
              active={!postData.isPrivate ? true : false}
              onClick={() => setPostData({ ...postData, isPrivate: false })}
            >
              <PublicIcon style={{ width: "0.8rem", height: "0.8rem" }} />
              <PrivateBtnText>전체 공개</PrivateBtnText>
            </PrivateBtn>
            <PrivateBtn
              active={postData.isPrivate ? true : false}
              onClick={() => setPostData({ ...postData, isPrivate: true })}
            >
              <LockIcon style={{ width: "0.8rem", height: "0.8rem" }} />
              <PrivateBtnText>나만 보기</PrivateBtnText>
            </PrivateBtn>
          </div>
          <PrivateSetContainerP>추가 설정</PrivateSetContainerP>
        </PrivateSetContainer>
      </Bottom>
    </Container>
  )
}

export default HeaderModal

const Container = styled.div`
  position: absolute;
  background-color: rgb(75, 81, 88);
  width: 17.5rem;
  height: 25rem;
  top: 5rem;
  right: 1rem;
  z-index: 1000;
`
const Top = styled.div`
  padding: 1.5rem;
`
const TopP = styled.p`
  color: #fff;
  font-size: 1rem;
  margin: 0;
`
const TopTitle = styled.p`
  color: rgb(207, 212, 218);
  font-size: 0.8rem;
  margin: 0;
  margin-top: 1rem;
`
const TagContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
`

const TagInput = styled.input`
  flex: 1;
  padding-left: 0.5rem;
  font-size: 0.9rem;
`
const TagButton = styled.div`
  cursor: pointer;
  user-select: none;
  background-color: rgb(104, 113, 123);
  padding: 0 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  margin: 0;
  line-height: 2.2;
  &:hover {
    background-color: rgb(116, 126, 136);
  }
`

const TagList = styled.div`
  white-space: pre-wrap;
  display: flex;
  margin-top: 0.5rem;
`
const TagListDiv = styled.div`
  display: flex;
  background-color: rgb(235, 238, 240);
  align-items: center;
  margin-right: 0.5rem;
  padding: 0 0.3rem;
  border-radius: 0.2rem;
  color: #000;
  font-size: 0.9rem;
`
const TagListDivDiv = styled.div`
  background-color: rgb(200, 200, 200);
  width: 1rem;
  height: 1rem;
  margin-left: 0.2rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: rgb(185, 59, 52);
    color: #fff;
  }
`

const UploadBtn = styled.div`
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.25rem;
  border-radius: 0.3rem;
  &:hover {
    background-color: rgb(242, 243, 245);
  }
`
const UploadBtnP = styled.p`
  user-select: none;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 0.5rem;
`

const AddSeriesBtn = styled.div`
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  &:hover {
    background-color: rgb(242, 243, 245);
  }
`
const AddSeriesBtnP = styled.div`
  user-select: none;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0.5rem;
`

const Bottom = styled.div`
  background-color: rgb(54, 59, 65);
  padding: 1.5rem;
`
const SaveBtnContainer = styled.div`
  justify-content: space-between;
  display: flex;
`

const TempSaveBtn = styled.p`
  cursor: pointer;
  user-select: none;
  background-color: rgb(104, 113, 123);
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
  padding: 0.2rem 2rem;
  border-radius: 0.3rem;
  &:hover {
    background-color: rgb(116, 126, 136);
  }
`

const SaveBtn = styled.p`
  cursor: pointer;
  background-color: rgb(127, 100, 239);
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
  padding: 0.2rem 2rem;
  border-radius: 0.3rem;
  &:hover {
    background-color: rgb(146, 123, 240);
  }
`

const PrivateSetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
`

const PrivateSetContainerP = styled.p`
  cursor: pointer;
  user-select: none;
  color: rgb(207, 106, 49);
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0;
`

const PrivateBtn = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  background-color: ${props => (props.active ? "rgb(146,122,242)" : "#fff")};
  color: ${props => (props.active ? "#fff" : "rgb(104,113,123)")};
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`

const PrivateBtnText = styled.div`
  font-size: 0.7rem;
  margin: 0;
`
