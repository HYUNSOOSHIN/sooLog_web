import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/myinfo/Post"
import Series from "../components/myinfo/Series"

import temp from "../images/temp.png"

const Myinfo = () => {
  const [activeTab, setActiveTab] = useState(1)

  function renderTabContent() {
    switch (activeTab) {
      case 1:
        return <Post/>

      case 2:
        return <Series/>

      case 3:
        return <Series/>
      
      case 4:
        return <Series/>
    
      default:
        return <Post/>
    }
  }

  return (
    <Layout>
      <SEO title="Myinfo" />
      <div id='myinfo'>
        <div className='info'>
          <img src={temp} className={'profileImg'} alt='profileImg' />
          <div>
            <p className="id">@shs0655</p>
            <div className="line"/>
            <p className="nickName">어금니금니</p>
            <p className="description">어금니금니입니다.</p>
          </div>
        </div>
        <div className={'content'}>
          <div className={'tab'}>
            <p className={activeTab===1?'activeTabItem':'tabItem'}
              onClick={()=>setActiveTab(1)}>글</p>
            <p className={activeTab===2?'activeTabItem':'tabItem'}
              onClick={()=>setActiveTab(2)}>시리즈</p>
            <p className={activeTab===3?'activeTabItem':'tabItem'}
              onClick={()=>setActiveTab(3)}>활동</p>
            <p className={activeTab===4?'activeTabItem':'tabItem'}
              onClick={()=>setActiveTab(4)}>소개</p>
          </div>
          <div className={'tabcontent'}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Myinfo
