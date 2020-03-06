import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

import DeleteIcon from '@material-ui/icons/Delete'

const TempPost = () => {
  
  return (
    <Layout>
      <SEO title={'TempPost'}/>
      <>
        <PageTitle>임시 글 등록</PageTitle> 
        <Line />
        <TempPostList>
          <PostInfoContainer>
            <Title>안녕하세요</Title>
            <Time>방금 전</Time> 
          </PostInfoContainer>
          <TrashBtn>
            <TrashBtnImg />
          </TrashBtn>
        </TempPostList>
      </>
    </Layout>
  )
}

export default TempPost

const PageTitle = styled.h2`
  margin: 0;
  padding-bottom: 16px;
  font-size: 40px
`;
const Line = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 1px;
`;
const TempPostList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 1.5rem 1rem;
  border: 1px solid #dbdbdb;
`;
const PostInfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.p`
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;
const Time = styled.p`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;
const TrashBtn = styled.div`
  display: flex;
  width: 2.2rem;
  height: 2.2rem;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #dbdbdb;
  border-radius: 1.1rem;
  color: #dbdbdb;
  &:hover {
    border: 1.5px solid rgb(232,95,89);
    color: rgb(232,95,89)
  }
`;
const TrashBtnImg = styled(DeleteIcon)`
  width: 1.7rem;
  height: 1.6rem;
`;
