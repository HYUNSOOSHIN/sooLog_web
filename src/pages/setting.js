import React, { useState, useEffect } from "react"
import styled from "styled-components"
import cookie from "../utils/cookie"
import userApi from "../apis/user/user"
import socialApi from "../apis/social/social"
import emailApi from "../apis/email/email"

import Layout from "../components/layout"
import Switch from "../components/switch"
import { SocialItem } from "../components/setting/input"

import SettingsIcon from "@material-ui/icons/Settings"

import user from "../images/user.png"

const Setting = () => {
  const limitWC = 100

  //userinfo 수정
  const [edit, setEdit] = useState(false)
  const [error, setError] = useState(false)
  const [nickname, setNickname] = useState("")
  const [nicknameReplica, setNicknameReplica] = useState("어금니금니입니다.")
  const [introduce, setIntroduce] = useState("")
  const [introduceReplica, setIntroduceReplica] = useState("어금니금니입니다.")

  //social 수정
  const [github, setGithub] = useState("")
  const [twitter, setTwitter] = useState("")
  const [facebook, setFacebook] = useState("")
  const [homepage, setHomepage] = useState("")

  //email 수정
  const [emailEdit, setEmailEdit] = useState(false)
  const [email, setEmail] = useState("")
  const [emailReplica, setEmailReplica] = useState("")

  //
  const [replyAlarm, setReplyAlarm] = useState(false)
  const [eventAlarm, setEventAlarm] = useState(false)

  useEffect(() => {
    document.title = "Setting | SOOLOG"

    const getUser = async () => {
      const result1 = await userApi.getUserInfo(cookie.getData("id"))
      if (result1) {
        setNickname(result1.nickname)
        setNicknameReplica(result1.nickname)
        setIntroduce(result1.introduce || "")
        setIntroduceReplica(result1.introduce || "")
        setEmail(result1.email)
        setEmailReplica(result1.email)
      }
      const result2 = await socialApi.getSocial(cookie.getData("id"))
      if (result2) {
        setGithub(result2.github)
        setTwitter(result2.twitter)
        setFacebook(result2.facebook)
        setHomepage(result2.homepage)
      }
      const result3 = await emailApi.getEamilRecieveOption()
      if (result3) {
        setReplyAlarm(result3.reply)
        setEventAlarm(result3.event)
      }
    }
    getUser()
  }, [])

  return (
    <Layout>
      <>
        <TitleContainer>
          <SettingsIcon
            style={{ width: "2.5rem", height: "2.5rem", marginRight: "0.5rem" }}
          />
          <TitleText>설정</TitleText>
        </TitleContainer>

        <ProfileContainer>
          <ProfileText>프로필</ProfileText>
          <UserInfoBox>
            <div className={"thumbnail"}>
              <ProfileImg src={user} alt={"user"} />
              <ProfileChangeBtn className={"imageBtn"}>
                썸네일 변경
              </ProfileChangeBtn>
            </div>
            <UserInfoTextBox>
              {edit ? (
                <>
                  <input
                    style={{
                      paddingLeft: "0.5rem",
                      borderRadius: "0.2rem",
                      border: "1px solid #cbcbcb",
                      outline: "none",
                    }}
                    type={"text"}
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                  />
                  <IntroTextArea
                    defaultValue={introduce}
                    onChange={e => setIntroduce(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <Nick>{nickname}</Nick>
                  <Intro>{introduce}</Intro>
                </>
              )}
              <IntroChangeBtnBox>
                <IntroChangeErrText
                  style={{ color: error ? "#ff0000" : "#000000" }}
                >
                  {error
                    ? "글자 수를 초과하였습니다."
                    : edit
                    ? `남은 글자 수: ${limitWC - introduce.length}`
                    : ""}
                </IntroChangeErrText>
                {edit ? (
                  <div style={{ display: "flex" }}>
                    <IntroChangeBtn
                      onClick={() => {
                        setEdit(false)
                        setError(false)
                        setNickname(nicknameReplica)
                        setIntroduce(introduceReplica)
                      }}
                    >
                      취소
                    </IntroChangeBtn>
                    <IntroChangeBtn
                      onClick={async () => {
                        if (limitWC - introduce.length > -1) {
                          const result = await userApi.updateNicknameNIntro(
                            nickname,
                            introduce
                          )

                          if (result) {
                            alert("닉네임 & 소개가 수정되었습니다.")
                            setEdit(false)
                            setNicknameReplica(nickname)
                            setIntroduceReplica(introduce)
                          } else {
                            alert("중복된 닉네임이 존재합니다.")
                          }
                        } else setError(true)
                      }}
                    >
                      저장
                    </IntroChangeBtn>
                  </div>
                ) : (
                  <IntroChangeBtn
                    onClick={() => {
                      setEdit(true)
                    }}
                  >
                    수정
                  </IntroChangeBtn>
                )}
              </IntroChangeBtnBox>
            </UserInfoTextBox>
          </UserInfoBox>

          <SocialContainer>
            <SocailText style={{ fontWeight: "bold" }}>소셜 정보</SocailText>
            <SocailText style={{ fontSize: "0.9rem" }}>
              여기에 입력하는 정보는 자신의 벨로그 프로필에서 나타나게 됩니다.
            </SocailText>
            <SocialItem
              title={"GitHub"}
              placeholder={"https://github.com/"}
              value={github}
              handler={setGithub}
            />
            <SocialItem
              title={"Twitter"}
              placeholder={"https://twitter.com/"}
              value={twitter}
              handler={setTwitter}
            />
            <SocialItem
              title={"Facebook"}
              placeholder={"https://facebook.com/"}
              value={facebook}
              handler={setFacebook}
            />
            <SocialItem
              title={"홈페이지"}
              value={homepage}
              handler={setHomepage}
            />
            <SocailSaveBtnBox>
              <SocailSaveBtn
                onClick={async () => {
                  const socialData = { github, twitter, facebook, homepage }
                  const result = await socialApi.updateSocial(socialData)
                  if (result) {
                    alert("소셜 정보가 저장되었습니다.")
                  } else {
                    alert("서버 에러(errrrrrrr)")
                  }
                }}
              >
                저장
              </SocailSaveBtn>
            </SocailSaveBtnBox>
          </SocialContainer>
        </ProfileContainer>

        <EmailContainer>
          <EmailText>이메일</EmailText>
          <EmailChangeBox>
            {emailEdit ? (
              <>
                <input
                  type="text"
                  style={{
                    width: "30rem",
                    padding: "0.3rem",
                    outline: "none",
                    border: "1px solid #dbdbdb",
                    borderRadius: "0.3rem",
                  }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    margin: "0 0.5rem",
                    padding: "0.3rem",
                    outline: "none",
                    border: "1px solid rgb(126,99,239)",
                    borderRadius: "0.3rem",
                    color: "rgb(126,99,239)",
                  }}
                  onClick={async () => {
                    const rule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

                    if (!rule.test(email)) {
                      alert("이메일 형식이 아닙니다.")
                    } else {
                      const confirm = window.confirm(
                        "정말로 이메일을 변경하시겠습니까?"
                      )

                      if (confirm) {
                        const result = await userApi.updateEmail({ email })
                        if (result) {
                          setEmailEdit(false)
                          setEmailReplica(email)
                        }
                      }
                    }
                  }}
                >
                  변경
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    margin: 0,
                    padding: "0.3rem",
                    outline: "none",
                    border: "1px solid #bbbbbb",
                    borderRadius: "0.3rem",
                  }}
                  onClick={() => {
                    setEmailEdit(false)
                    setEmail(emailReplica)
                  }}
                >
                  취소
                </button>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <p
                  style={{ margin: 0, marginRight: "0.5rem", fontSize: "1rem" }}
                >
                  {email}
                </p>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    margin: 0,
                    outline: "none",
                    border: "none",
                    color: "#868e96",
                    fontSize: "1rem",
                  }}
                  onClick={() => setEmailEdit(true)}
                >
                  변경
                </button>
              </div>
            )}
          </EmailChangeBox>
          {emailEdit ? (
            <p
              style={{
                margin: 0,
                marginTop: "1rem",
                color: "red",
                fontSize: "0.8rem",
                fontWeight: "normal",
              }}
            >
              이메일 변경을 하시면 이전 이메일로 다시 로그인 할 수 없습니다.
            </p>
          ) : (
            <EmailSetting>
              <EmailSettingText>이메일 수신 설정</EmailSettingText>
              <EmailSettingSwitchBox>
                <Switch
                  checked={replyAlarm}
                  onChange={async () => {
                    const result = await emailApi.setEamilRecieveOption({
                      reply: !replyAlarm,
                      event: eventAlarm,
                    })
                    if (result) setReplyAlarm(!replyAlarm)
                  }}
                />
                <EmailSettingSwitchBoxText>댓글 알림</EmailSettingSwitchBoxText>
              </EmailSettingSwitchBox>
              <EmailSettingSwitchBox>
                <Switch
                  checked={eventAlarm}
                  onChange={async () => {
                    const result = await emailApi.setEamilRecieveOption({
                      reply: replyAlarm,
                      event: !eventAlarm,
                    })
                    if (result) setEventAlarm(!eventAlarm)
                  }}
                />
                <EmailSettingSwitchBoxText>
                  이벤트 및 프로모션
                </EmailSettingSwitchBoxText>
              </EmailSettingSwitchBox>
            </EmailSetting>
          )}
        </EmailContainer>

        <EtcContainer>
          <EtcTitle>기타</EtcTitle>
          <OutBtn
            onClick={async () => {
              const confirm = window.confirm(
                "회원탈퇴 시 복구가 불가능합니다. 정말로 회원탈퇴 하시겠습니까?"
              )

              if (confirm) {
                const result = await userApi.deleteUser()
                if (result) {
                  await cookie.removeAllData()
                  window.location.replace("/")
                }
              }
            }}
          >
            회원 탈퇴
          </OutBtn>
          <p
            style={{
              margin: 0,
              marginBottom: "5rem",
              color: "#868e96",
              fontSize: "0.8rem",
            }}
          >
            탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
          </p>
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
`
const TitleText = styled.p`
  font-size: 2rem;
  margin: 0;
`
const ProfileContainer = styled.div``
const ProfileText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
`
const UserInfoBox = styled.div`
  display: flex;
  margin-top: 1rem;
`
const ProfileImg = styled.img`
  user-select: none;
  width: 12rem;
  height: 12rem;
  margin: 0;
  border-radius: 6rem;
`
const ProfileChangeBtn = styled.p`
  cursor: pointer;
  user-select: none;
  background-color: rgb(126, 99, 239);
  width: 12rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  &:hover {
    background-color: rgb(146, 121, 242);
  }
`
const UserInfoTextBox = styled.div`
  width: 100%;
  padding: 1rem;
`
const Nick = styled.p`
  font-size: 1.5rem;
  margin: 0;
`
const Intro = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-top: 1rem;
`
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
`
const IntroChangeBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`
const IntroChangeErrText = styled.p`
  user-select: none;
  font-size: 1rem;
  margin: 0;
`
const IntroChangeBtn = styled.p`
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  margin: 0;
  margin-left: 0.5rem;
`
const SocialContainer = styled.div`
  margin-top: 1rem;
`
const SocailText = styled.p`
  font-size: 1rem;
  margin: 0;
`
const SocailSaveBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`
const SocailSaveBtn = styled.button`
  cursor: pointer;
  user-select: none;
  background-color: rgb(137, 85, 246);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  outline: none;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: rgb(146, 121, 242);
  }
`
const EmailContainer = styled.div`
  margin-top: 4rem;
`
const EmailText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
`
const EmailChangeBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`
const EmailSetting = styled.div``
const EmailSettingText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.5rem;
`
const EmailSettingSwitchBox = styled.div`
  display: flex;
  align-items: center;

  .Component-root-10 {
    margin: 8px 0;
    margin-right: 8px;
  }
`
const EmailSettingSwitchBoxText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
`
const EmailSaveBtn = styled.p`
  cursor: pointer;
  user-select: none;
  width: max-content;
  padding: 0.3rem;
  border: 1px solid rgb(75, 80, 87);
  border-radius: 0.2rem;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
  margin-top: 0.5rem;
  &:hover {
    background-color: rgb(75, 80, 87);
    color: #fff;
  }
`
const EtcContainer = styled.div`
  margin-top: 4rem;
`
const EtcTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
`
const OutBtn = styled.p`
  cursor: pointer;
  user-select: none;
  width: max-content;
  padding: 0.3rem;
  border: 1px solid rgb(207, 66, 59);
  border-radius: 0.2rem;
  color: rgb(207, 66, 59);
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.1rem 1rem;
  &:hover {
    background-color: rgb(207, 66, 59);
    color: #fff;
  }
`
