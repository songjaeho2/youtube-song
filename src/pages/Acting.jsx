import React from 'react';
import Main from '../components/section/Main';

const Acting = () => {
    return (
        <Main title="공사중" description="이 페이지는 현재 준비 중입니다.">
            <section className="under-construction">
                <div className="container">
                    <h1>🚧 공사 중입니다 🚧</h1>
                    <p>이 페이지는 현재 열심히 작업 중이에요.<br />곧 멋지게 완성될 예정입니다!</p>
                </div>
            </section>
        </Main>
    );
};

export default Acting;