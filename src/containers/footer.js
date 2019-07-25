import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <div className='footer'>
                <hr/>
                Likelion 해커톤 <br/> <br/>
                <div className='footerNotice'>사용 데이터 관련 공지 사항:모든 대기 질 데이터는 발행 당시에 검증되지 않았으며 품질 보증으로 인해 이러한 데이터는 사전 통보없이 언제든지 수정이 가능합니다.
            먼지탈출 넘버원 프로젝트팀은 이 정보의 내용을 편집함에 있어 합당한 기술과 관심을 행사했으며 어떠한 경우에도 계약 상, 불법 행위 또는 기타 손실, 상해, 손상에 대해 책임을 지지 않습니다.</div>
            </div>
        );
    }
}

export default Footer;