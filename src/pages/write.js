import React, { useState, useEffect } from "react"
import styled from "styled-components"
import marked from "marked"
import "../components/layout.css"
import cookie from '../utils/cookie'
import postApi from "../apis/post/post"
import Header from "../components/write/Header"
import HeaderModal from "../components/write/HeaderModal"
import RightModal from "../components/write/RightModal"

const Write = () => {
  const [headerModal, setHeaderModal] = useState(false)
  const [rightModal, setRightModal] = useState(false)
  const [selected, setSelected] = useState(2) // 에디터 레이아웃 인덱스
  const [postData, setPostData] = useState({
    // 게시글에 대한 정보
    title: "",
    content: "",
    isPrivate: false,
    userId: null
  })

  useEffect(() => {
    const getUserId = async() => {

      if(window.location.search===''){
        setPostData({...postData, userId: await cookie.getData('_id')})
      } else {
        const result = await postApi.readPost(
          window.location.search.replace("?", "")
        )
        if (result) {
          setPostData({...postData, title: result.title, content: result.content, userId: result.writerId})
          document.getElementById("result").innerHTML = marked(result.content)
        }
      }
    }
    getUserId()
    document.title = "Write | SOOLOG"
  }, [])

  return (
    <>
      <Container
        onClick={() => {
          setHeaderModal(false)
          setRightModal(false)
        }}
      >
        <Header
          headerModal={headerModal}
          setHeaderModal={setHeaderModal}
          rightModal={rightModal}
          setRightModal={setRightModal}
          postData={postData}
          setPostData={setPostData}
        />

        <HeaderModal
          headerModal={headerModal}
          setHeaderModal={setHeaderModal}
          postData={postData}
          setPostData={setPostData}
        />
        <RightModal
          rightModal={rightModal}
          setRightModal={setRightModal}
          selected={selected}
          setSelected={setSelected}
        />

        <WriteSpace>
          <MdEditor style={{ display: selected === 3 ? "none" : "block" }}>
            <TextArea
              placeholder="당신의 이야기를 적어보세요..."
              id="content"
              value={postData.content}
              onChange={e => {
                setPostData({ ...postData, content: e.target.value })
                // 마크다운 변환
                document.getElementById("result").innerHTML = marked(
                  document.getElementById("content").value
                )
              }}
            />
          </MdEditor>
          <MdResult style={{ display: selected === 1 ? "none" : "block" }}>
            <ResultTitle>{postData.title}</ResultTitle>
            <ResultContent id="result"></ResultContent>
          </MdResult>
        </WriteSpace>
      </Container>
    </>
  )
}

export default Write

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const WriteSpace = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  top: 0;
  z-index: 90;
`
const MdEditor = styled.div`
  background-color: rgb(40, 50, 56);
  width: 100%;
  height: 100%;
  padding: 1rem;
`
const TextArea = styled.textarea`
  background-color: rgb(40, 50, 56);
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const MdResult = styled.div`
  overflow-y: scroll;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`
const ResultTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dbdbdb;
`
const ResultContent = styled.pre`
  white-space: pre-wrap;
  background-color: #fff;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
`
