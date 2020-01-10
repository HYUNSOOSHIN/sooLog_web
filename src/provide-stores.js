import React from 'react'
import { Provider } from 'mobx-react'
import PostStore from './stores/PostStore'

export default ({ element }) => {
  return <Provider posts={new PostStore()}>{element}</Provider>
}
