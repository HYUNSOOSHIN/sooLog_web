import React from 'react'
import styled from 'styled-components'

import left from '../../images/write_left.png'
import both from '../../images/write_both.png'
import right from '../../images/write_right.png'

const RightModal = ({rightModal,selected,setSelected}) => {
  return (
    <Container 
      style={{ display: rightModal? 'block':'none'}}>
      <Modal onClick={(e)=> e.stopPropagation()}>
        <ModalTitle>레이아웃 설정</ModalTitle>
        <LayoutContainer>
          <LayoutView aaa={selected===1? true:false} onClick={()=>{setSelected(1)}}>
            <LayoutImg src={left} alt={'editor'}/>
            <LayoutText>에디터만</LayoutText>
          </LayoutView>
          <LayoutView aaa={selected===2? true:false} onClick={()=>{setSelected(2)}}>
            <LayoutImg src={both} alt={'both'}/>
            <LayoutText>둘 다 보기</LayoutText>
          </LayoutView>
          <LayoutView aaa={selected===3? true:false} onClick={()=>{setSelected(3)}}>
            <LayoutImg src={right} alt={'sample'}/>
            <LayoutText>미리보기만</LayoutText>
          </LayoutView>
        </LayoutContainer>

        <ModalTitle style={{marginTop: '2rem'}}>임시 저장 기록</ModalTitle>
        <TempSaveList>
          <TempSaveListText>임시 저장 데이터가 없습니다.</TempSaveListText>
        </TempSaveList>
      </Modal>
    </Container>
  )
}

export default RightModal

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  z-index: 999;
`;
const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgb(74,80,87);
  width: 15rem;
  height: 100%;
  padding: 1rem;
  right: 0;
`;
const ModalTitle = styled.div`
  color: #fff;
  font-size: 0.9rem; 
  font-weight: bold;
  margin-top: 4rem;
  margin-bottom: 16px;
`;
const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LayoutView = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: rgb(54,59,65);
  width: 4rem;
  justify-content: center;
  align-items: center;
  border: ${props=>props.aaa? '1px solid #fff':'none'};
  &:hover {
    background-color: rgb(62,67,74);
  }
`;
const LayoutImg = styled.img`
  width: 0.8rem;
  margin: 0;
  margin-top: 0.5rem;
`;
const LayoutText = styled.p`
  user-select: none;
  color: #fff;
  font-size: 0.7rem; 
  margin: 0;
`;
const TempSaveList = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
`;
const TempSaveListText = styled.p`
  flex:1;
  background-color: #343a40;
  color: #fff;
  font-size: 0.75rem;
  margin: 0;
  padding: 12px;
`;