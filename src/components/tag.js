import React from 'react'
import styled from 'styled-components'

const Tag = ({name}) => {
  return(
    <TagItem>{name}</TagItem>
  )
}

export default Tag

const TagItem = styled.div`
  cursor: pointer;
  user-select: none;
  background-color: rgb(235,238,240);
  width: max-content;
  margin-right: 0.5rem;
  padding: 0 0.3rem;
  border-radius: 0.2rem;
  color: #000;
  font-size: 0.8rem;
  &:hover {
    background-color: rgb(242,243,245)
  }
`;