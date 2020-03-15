import React from "react"
import styled from "styled-components"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import CloseIcon from "@material-ui/icons/Close"
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined"

const Header = ({
  headerModal,
  setHeaderModal,
  rightModal,
  setRightModal,
  postData, // title, content, isPrivate
  setPostData,
}) => {
  return (
    <HeaderContainer>
      <HeaderLeftBox>
        <ArrowBackIcon
          style={{ color: "#ffffff", cursor: "pointer" }}
          onClick={() => {
            window.history.back()
          }}
        />
        <TitleInput
          type="text"
          placeholder="제목을 입력해주세요."
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
      </HeaderLeftBox>

      <HeaderRightBox>
        <input
          type="file"
          id="filebtn"
          style={{ display: "none" }}
          onChange={e => console.log(e.target.files[0])}
        />
        <UploadBtn htmlFor={"filebtn"}>
          <ImageOutlinedIcon style={{ width: "1rem", marginRight: "0.5rem" }} />
          업로드
        </UploadBtn>
        <WriteBtn
          onClick={e => {
            e.stopPropagation()
            setHeaderModal(!headerModal)
            setRightModal(false)
          }}
        >
          작성하기
        </WriteBtn>
        <MoreBtnBox
          onClick={e => {
            e.stopPropagation()
            setHeaderModal(false)
          }}
        >
          {rightModal ? (
            <CloseBtn onClick={() => setRightModal(false)} />
          ) : (
            <MoreBtn onClick={() => setRightModal(true)} />
          )}
        </MoreBtnBox>
      </HeaderRightBox>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: rgb(53, 58, 64);
  padding: 1rem;
  z-index: 1000;
`
const HeaderLeftBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
const TitleInput = styled.input`
  background-color: rgb(53, 58, 64);
  flex: 1;
  margin: 0 1rem;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  &::placeholder {
    color: #fff;
  }
`
const HeaderRightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const UploadBtn = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: inherit;
  margin-right: 1rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid #fff;
  outline: none;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    background-color: #fff;
    color: rgb(53, 58, 64);
  }
`
const WriteBtn = styled.button`
  cursor: pointer;
  background-color: rgb(137, 85, 246);
  padding: 0.3rem 0.5rem;
  border: 1px solid rgb(137, 85, 246);
  outline: none;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    background-color: rgb(146, 121, 242);
  }
`
const MoreBtnBox = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  border-radius: 1rem;
  &:hover {
    background-color: rgb(78, 83, 88);
  }
`
const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff;
`
const MoreBtn = styled(MoreVertIcon)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff;
`
