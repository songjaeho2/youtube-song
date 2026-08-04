import React from 'react';
import Main from '../components/section/Main';
import profileImg from '../assets/img/youtube/프로필사진.jpg';



const Crr = () => {
    const careerData = {
        2024: ['현대자동차','혼마골프', '카스 ', 'LG U+', '코웨이 비렉스', 'HUG'],
        2025: ['우루오스', '코카콜라', 'LG 베스트샵', '크몽', '카스 0.0' ,'유니세프'],
        2026: ['오브제','나무엑스','LG 전자', '동행복권','자담치킨','오로나민C'],
    };

    return (
        <Main title="경력사항" description="연도별 프로젝트 및 협업 이력입니다.">
            <section className="career-section">
                <div className="career-layout">
                    <div className="profile-image-wrapper">
                        <img src={profileImg} alt="Profile" />
                    </div>
                    <div className="career-container">
                        {Object.entries(careerData).map(([year, items]) => (
                            <div className="career-column" key={year}>
                                <h2>{year}</h2>
                                <div className="divider"></div>
                                <ul>
                                    {items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 다운로드 링크 추가 */}
                <div className="download-section">
                    <h2>프로필 다운로드</h2>
                    <ul>
                        <li>
                            <a href="/files/2026 송재호 프로필.pdf" download="2026 송재호 프로필.pdf">
                                PDF
                            </a>
                        </li>
                        <li>
                            <a href="/files/2026 송재호 프로필.pptx" download="2026 송재호 프로필.pptx">
                                PPTX
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </Main>
    );
};

export default Crr;

