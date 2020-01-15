import React from 'react'

import left from '../../images/write_left.png'
import both from '../../images/write_both.png'
import right from '../../images/write_right.png'

const RightModal = ({rightModal,selected,setSelected}) => {
  return (
    <div id={'rigthModalContainer'} 
      style={{ display: rightModal? 'block':'none'}}>
      <div className={'rigthModal'} onClick={(e)=> e.stopPropagation()}>
        <p>레이아웃 설정</p>
        <div className={'layout_set'}>
          <div className={selected===1? 'selected':null} onClick={()=>{setSelected(1)}}>
            <img src={left} alt={'editor'}/>
            <p>에디터만</p>
          </div>
          <div className={selected===2? 'selected':null} onClick={()=>{setSelected(2)}}>
            <img src={both} alt={'both'}/>
            <p>둘 다 보기</p>
          </div>
          <div className={selected===3? 'selected':null} onClick={()=>{setSelected(3)}}>
            <img src={right} alt={'sample'}/>
            <p>미리보기만</p>
          </div>
        </div>

        <p style={{marginTop: '2rem'}}>임시 저장 기록</p>
        <div className={'temp_save'}>
          <p>임시 저장 데이터가 없습니다.</p>
        </div>
      </div>
    </div>
  )
}

export default RightModal