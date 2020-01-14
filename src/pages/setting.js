import React, {useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Switch from '../components/switch'

import SettingsIcon from '@material-ui/icons/Settings';

import tempImg from '../images/temp.png'

const Setting = () => {
  const limitWC = 100

  //userinfo 수정
  const [edit, setEdit] = useState(false)
  const [error, setError] = useState(false)
  const [description, setDescription] = useState('어금니금니입니다.')
  const [real, setReal] = useState('어금니금니입니다.')

  //social 수정
  const [email, setEmail] = useState('')
  const [github, setGithub] = useState('https://github.com/')
  const [twitter, setTwitter] = useState('https://twitter.com/')
  const [facebook, setFacebook] = useState('https://facebook.com/')
  const [homepage, setHomepage] = useState('')

  //email 수정
  const [emailEdit, setEmailEdit] = useState(false)
  const [emailId, setEmailId] = useState('shs0655@gmail.com')
  const [real2, setReal2] = useState('shs0655@gmail.com')

  const [replyAlarm, setReplyAlarm] = useState(false)
  const [eventAlarm, setEventAlarm] = useState(false)

  return (
    <Layout>
      <SEO title={'Setting'}/>
      <div id={'setting'}>
        <section className={'title'}>
          <SettingsIcon style={{width: '2.5rem', height: '2.5rem', marginRight: '0.5rem'}} />
          <p>설정</p>
        </section>

        <section className={'profile'}>
          <p>프로필</p>
          <div className={'userInfo'}>
            <div className={'thumbnail'}>
              <img src={tempImg} alt={'temp'} />
              <p className={'imageBtn'}>썸네일 변경</p>
            </div>
            <div className={'text'}>
              <p className={'nickName'}>어금니금니</p>
              {edit?
              <textarea id='setting_description' defaultValue={description} onChange={(e)=>setDescription(e.target.value)} /> 
                :
               <p className={'description'}>{description}</p>
              }
              <div>
                <p style={{color: error?'#ff0000':'#000000'}}>{error?'글자 수를 초과하였습니다.':edit?`남은 글자 수: ${limitWC-description.length}`:''}</p>
                {edit?
                  <div style={{display: 'flex'}}>
                    <p 
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        margin: 0
                      }} 
                     
                      onClick={()=>{
                        setEdit(false)
                        setError(false)
                        setDescription(real)
                      }}
                    >취소</p>
                    <p 
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        margin: 0,
                        marginLeft: '0.5rem'
                      }} 
                     
                      onClick={()=>{
                        if(limitWC-description.length>-1){
                          setEdit(false)
                          setReal(description)
                        } 
                        else setError(true)
                      }}
                    >저장</p>
                  </div> 
                  : <p 
                      style={{cursor: 'pointer'}} 
                     
                      onClick={()=>{
                        setEdit(true)
                      }}
                    >수정</p>
                }
              </div>
            </div>
          </div>
          <div className={'social'}>
            <p style={{fontWeight: 'bold'}}>소셜 정보</p>
            <p style={{fontSize: '0.9rem'}}>여기에 입력하는 정보는 자신의 벨로그 프로필에서 나타나게 됩니다.</p>
            <div className={'socailItem'}>
              <p>이메일</p>
              <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className={'socailItem'}>
              <p>GitHub</p>
              <input type='text' value={github} onChange={(e)=>setGithub(e.target.value)}/>
            </div>
            <div className={'socailItem'}>
              <p>Twitter</p>
              <input type='text' value={twitter} onChange={(e)=>setTwitter(e.target.value)}/>
            </div>
            <div className={'socailItem'}>
              <p>Facebook</p>
              <input type='text' value={facebook} onChange={(e)=>setFacebook(e.target.value)}/>
            </div>
            <div className={'socailItem'}>
              <p>홈페이지</p>
              <input type='text' value={homepage} onChange={(e)=>setHomepage(e.target.value)}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '1rem'}}>
              <p style={{cursor: 'pointer', backgroundColor: 'rgb(137,85,246)', padding: '0.5rem', borderRadius: '0.2rem', color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif'}}>저장</p>
            </div>
          </div>
        </section>

        <section className={'email'}>
          <p>이메일</p>
          <div className={'emailChange'}>
            {emailEdit? 
              <>
                <input type='text' style={{width: '30rem', padding: '0.3rem', outline: 'none', border: '1px solid #dbdbdb', borderRadius: '0.3rem'}} value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
                <p
                  style={{cursor: 'pointer', margin: '0 0.5rem', padding: '0.3rem', border: '1px solid rgb(126,99,239)', borderRadius: '0.3rem', color: 'rgb(126,99,239)'}} 
                 
                  onClick={()=>{
                    setEmailEdit(false)
                    setReal2(emailId)
                }}>변경</p>
                <p
                  style={{cursor: 'pointer', margin: 0, padding: '0.3rem', border: '1px solid #bbbbbb', borderRadius: '0.3rem'}} 
                 
                  onClick={()=>{
                    setEmailEdit(false)
                    setEmailId(real2)
                }}>취소</p>
              </>
              :
              <>
                <p>{emailId}</p>
                <p style={{cursor: 'pointer'}} onClick={()=>setEmailEdit(true)}>변경</p>
              </>
            }
          </div>
          {emailEdit? 
            <p style={{margin:0, marginTop: '1rem', color: 'red', fontSize: '0.8rem', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'normal'}}>이메일 변경을 하시면 이전 이메일로 다시 로그인 할 수 없습니다.</p>:
            <div className={'emailSetting'}>
              <p>이메일 수신 설정</p>
              <div>
                <Switch 
                checked={replyAlarm}
                onChange={()=>setReplyAlarm(!replyAlarm)}/>
                <p>댓글 알림</p>
              </div>
              <div>
                <Switch 
                  checked={eventAlarm}
                  onChange={()=>setEventAlarm(!eventAlarm)}/>
                <p>이벤트 및 프로모션</p>
              </div>
              <p className={'saveBtn'}>이벤트 수신 설정 저장</p>
            </div>
          }
        </section>

        <section className={'etc'}>
          <p>기타</p>
          <p className={'outBtn'}>회원 탈퇴</p>
        </section>
      </div>
    </Layout>
  )
}

export default Setting