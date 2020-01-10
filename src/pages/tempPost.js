import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import DeleteIcon from '@material-ui/icons/Delete'

const TempPost = () => {
  
  return (
    <Layout>
      <SEO title={'TempPost'}/>
      <div id={'tempPost'}>
        <h1>임시 글 등록</h1> 
        <div />
        <section className={'tempPostList'}>
          <div className={'postInfo'}>
            <p className={'title'}>ㅇㅇㅇㅇ</p>
            <p className={'time'}>방금 전</p> 
          </div>
          <div className={'trashDiv'}>
            <DeleteIcon className={'trashBtn'} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default TempPost