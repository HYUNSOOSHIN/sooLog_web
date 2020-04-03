import React from "react"
import styled from "styled-components"

export const SocialItem = ({ title, placeholder, value, handler }) => {
  return (
    <ItemContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemInputBox>
        {placeholder ? <ItemPlaceholder>{placeholder}</ItemPlaceholder> : null}
        <ItemInput
          type="text"
          value={value}
          onChange={e => handler(e.target.value)}
        />
      </ItemInputBox>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  width: 100%;
`
const ItemTitle = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
`
const ItemInputBox = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  align-items: center;
  margin-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #bababa;
  border-radius: 0.5rem;
`
const ItemPlaceholder = styled.p`
  color: #dbdbdb;
  font-size: 1rem;
  margin: 0;
`
const ItemInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
`
