import React, {useState} from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Switch from '../components/switch'
import cookie from '../utils/cookie'

import SettingsIcon from '@material-ui/icons/Settings';

import temp from '../images/temp.png'

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
      <>
        <TitleContainer>
          <SettingsIcon style={{width: '2.5rem', height: '2.5rem', marginRight: '0.5rem'}} />
          <TitleText>설정</TitleText>
        </TitleContainer>

        <ProfileContainer>
          <ProfileText>프로필</ProfileText>
          <UserInfoBox>
            <div className={'thumbnail'}>
              <ProfileImg src={temp}  alt={'temp'} />
              <ProfileChangeBtn className={'imageBtn'}>썸네일 변경</ProfileChangeBtn>
            </div>
            <UserInfoTextBox>
              <Nick>어금니금니</Nick>
              {edit?
                <IntroTextArea defaultValue={description} onChange={(e)=>setDescription(e.target.value)} /> 
                :
                <Intro>{description}</Intro>
              }
              <IntroChangeBtnBox>
                <IntroChangeErrText 
                  style={{color: error?'#ff0000':'#000000'}}>
                    {error?'글자 수를 초과하였습니다.':edit?`남은 글자 수: ${limitWC-description.length}`:''}
                </IntroChangeErrText>
                {edit?
                  <div style={{display: 'flex'}}>
                    <IntroChangeBtn onClick={()=>{
                        setEdit(false)
                        setError(false)
                        setDescription(real)
                    }}>취소</IntroChangeBtn>
                    <IntroChangeBtn onClick={()=>{
                        if(limitWC-description.length>-1){
                          setEdit(false)
                          setReal(description)
                        } 
                        else setError(true)
                    }}>저장</IntroChangeBtn>
                  </div> 
                  : <IntroChangeBtn onClick={()=>{
                        setEdit(true)
                    }}>수정</IntroChangeBtn>
                }
              </IntroChangeBtnBox>
            </UserInfoTextBox>
          </UserInfoBox>

          <SocialContainer>
            <SocailText style={{fontWeight: 'bold'}}>소셜 정보</SocailText>
            <SocailText style={{fontSize: '0.9rem'}}>여기에 입력하는 정보는 자신의 벨로그 프로필에서 나타나게 됩니다.</SocailText>
            <SocailItem>
              <SocailItemText>이메일</SocailItemText>
              <SocailItemInput type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </SocailItem>
            <SocailItem>
              <SocailItemText>GitHub</SocailItemText>
              <SocailItemInput type='text' value={github} onChange={(e)=>setGithub(e.target.value)}/>
            </SocailItem>
            <SocailItem>
              <SocailItemText>Twitter</SocailItemText>
              <SocailItemInput type='text' value={twitter} onChange={(e)=>setTwitter(e.target.value)}/>
            </SocailItem>
            <SocailItem>
              <SocailItemText>Facebook</SocailItemText>
              <SocailItemInput type='text' value={facebook} onChange={(e)=>setFacebook(e.target.value)}/>
            </SocailItem>
            <SocailItem>
              <SocailItemText>홈페이지</SocailItemText>
              <SocailItemInput type='text' value={homepage} onChange={(e)=>setHomepage(e.target.value)}/>
            </SocailItem>
            <SocailSaveBtn>
              <SocailSaveBtnText>저장</SocailSaveBtnText>
            </SocailSaveBtn>
          </SocialContainer>

        </ProfileContainer>

        <EmailContainer>
          <EmailText>이메일</EmailText>
          <EmailChangeBox>
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
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                <p style={{margin: 0, marginRight: '4px'}}>{emailId}</p>
                <p style={{cursor: 'pointer', margin: 0, color: '#868e96', fontSize: '14px', textDecoration: 'underline'}} onClick={()=>setEmailEdit(true)}>변경</p>
              </div>
            }
          </EmailChangeBox>
          {emailEdit? 
            <p style={{margin:0, marginTop: '1rem', color: 'red', fontSize: '0.8rem', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'normal'}}>이메일 변경을 하시면 이전 이메일로 다시 로그인 할 수 없습니다.</p>:
            <EmailSetting>
              <EmailSettingText>이메일 수신 설정</EmailSettingText>
              <EmailSettingSwitchBox>
                <Switch 
                  checked={replyAlarm}
                  onChange={()=>setReplyAlarm(!replyAlarm)}/>
                <EmailSettingSwitchBoxText>댓글 알림</EmailSettingSwitchBoxText>
              </EmailSettingSwitchBox>
              <EmailSettingSwitchBox>
                <Switch 
                  checked={eventAlarm}
                  onChange={()=>setEventAlarm(!eventAlarm)}/>
                <EmailSettingSwitchBoxText>이벤트 및 프로모션</EmailSettingSwitchBoxText>
              </EmailSettingSwitchBox>
              <EmailSaveBtn>이벤트 수신 설정 저장</EmailSaveBtn>
            </EmailSetting>
          }
        </EmailContainer>

        <EtcContainer>
          <EtcTitle>기타</EtcTitle>
          <OutBtn>회원 탈퇴</OutBtn>
        </EtcContainer>
      </>
    </Layout>
  )
}

export default Setting

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
const TitleText = styled.p`
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;
const ProfileContainer = styled.div`
 
`;
const ProfileText = styled.p`
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
`;
const UserInfoBox = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const ProfileImg = styled.img`
  user-select: none;
  width: 12rem;
  height: 12rem;
  margin: 0;
  border-radius: 6rem;
`;
const ProfileChangeBtn = styled.p`
  cursor: pointer;
  user-select: none;
  background-color: rgb(126,99,239);
  width: 12rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: #fff;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0;
  &:hover {
    background-color: rgb(146,121,242);
  }
`;
const UserInfoTextBox = styled.div`
  width: 100%;
  padding: 1rem;
`;
const Nick = styled.p`
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;
const Intro = styled.p`
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin-top: 1rem;
`;
const IntroTextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  padding: 0.5rem;
  resize: none;
  outline: none;
  border: 1px solid #cbcbcb;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const IntroChangeBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
const IntroChangeErrText = styled.p`
  user-select: none;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;
const IntroChangeBtn = styled.p`
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin-left: 0.5rem;
`;
const SocialContainer = styled.div`
  margin-top: 1rem;
`;
const SocailText = styled.p`
  font-size: 1rem; 
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;
const SocailItem = styled.div`
  width: 100%;
`;
const SocailItemText = styled.p`
  font-size: 0.9rem; 
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
`;
const SocailItemInput = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #bababa;
  border-radius: 0.5rem;
  font-size: 1rem; 
  font-family: Arial, Helvetica, sans-serif;
`;
const SocailSaveBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;
const SocailSaveBtnText = styled.p`
  cursor: pointer;
  user-select: none;
  background-color: rgb(137,85,246);
  padding: 0.5rem;
  border-radius: 0.2rem;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    background-color: rgb(146,121,242);
  }
`;
const EmailContainer = styled.div`
  margin-top: 4rem;
`;
const EmailText = styled.p`
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
`;
const EmailChangeBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const EmailSetting = styled.div`

`;
const EmailSettingText = styled.div`
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold; 
  margin: 0;
  margin-bottom: 0.5rem;
`;
const EmailSettingSwitchBox = styled.div`
  display: flex;
  align-items: center;

  .Component-root-10 {
    margin: 8px 0;
    margin-right: 8px;
  }
`;
const EmailSettingSwitchBoxText = styled.p`
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
`;
const EmailSaveBtn = styled.p`
  cursor: pointer;
  user-select: none;
  width: max-content;
  padding: 0.3rem;
  border: 1px solid rgb(75,80,87);
  border-radius: 0.2rem;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
  margin-top: 0.5rem;
  &:hover {
    background-color: rgb(75,80,87);
    color: #fff;
  }
`;
const EtcContainer = styled.div`
  margin-top: 4rem;
`;
const EtcTitle = styled.p`
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
`;
const OutBtn = styled.p`
  cursor: pointer;
  user-select: none;
  width: max-content;
  padding: 0.3rem;
  border: 1px solid rgb(207,66,59);
  border-radius: 0.2rem;
  color: rgb(207,66,59);
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: 0.1rem 1rem;
  &:hover {
    background-color: rgb(207,66,59);
    color: #fff;
  }
`;