import React from 'react';

function IntroSection(props) {
    return (
    <section id="introSection" className={props.attr}>
            <h3 className="blind">테니스 경기 방법</h3>
            <div className="intro__inner container">
                <div className="intro__title">
                    <span>frontend</span>
                    <h3>테니스 경기 방법</h3>
                    <p>테니스는 두 명의 선수가 서로 맞서 실내<br/> 또는 야외 코트에서 플레이하는 스포츠입니다.</p>
                </div>
                <div className="intro__desc">
                    <div>
                        <h4 className="icon-bg1">코트 및 장비</h4>
                        <p>테니스 경기는 테니스 코트에서 진행됩니다. 코트는 실내와 야외로 나뉘며, 각각의 코트에는 네트가 있습니다. 경기를 위해 테니스 라켓과 테니스 공이 필요합니다.  </p>
                    </div>
                    <div>
                        <h4 className="icon-bg2">서브&레시브</h4>
                        <p>상대방은 서브를 받아야 합니다. 레시브는 서브를 받는 쪽이 상대의 코트에 공을 넘기는 것입니다. 레시브는 서브 박스 내에서 이루어지며, 서브 받는 사람은 네트를 넘어야 합니다.</p>
                    </div>
                    <div>
                        <h4 className="icon-bg3">진행&점수</h4>
                        <p>경기는 서브와 레시브를 번갈아가며 진행됩니다. 선수는 최대 세 번의 공을 칠 수 있으며, 공은 네트를 넘어야 합니다. 상대방이 공을 받아낼 수 없거나 코트 밖으로 나갈 경우 점수가 올라갑니다.</p>
                    </div>
                    <div>
                        <h4 className="icon-bg4 ">세트 및 경기</h4>
                        <p>경기는 여러 세트로 구성될 수 있습니다. 일반적으로 세트는 6게임으로 이루어지며, 한 선수가 6게임을 이기면 세트를 가져갑니다. 그러나 6-6이 되면 타이브레이크(편형게임)가 이루어져 추가 게임이 진행됩니다. 경기는 일반적으로 세트를 일정 수 이기는 선수가 이기게 됩니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default IntroSection;
