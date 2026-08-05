import React, { useEffect, useState } from 'react'
import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); // 300ms 후 로딩 완료
        return () => clearTimeout(timer);
    }, []);

    const todayClass = loading ? '' : 'isLoaded';

    return (
        <section id='today'>
            <div className={`today__inner fadeInEffect ${todayClass}`}>
                <div className='today__thumb play__icon'>
                    <Link to={todayText[0].page}>
                        <img src={todayText[0].img} alt={todayText[0].title} />
                    </Link>
                </div>
                <div className='today__text'>
                    <span className='today'>new!</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>{todayText[0].desc}</p>
                    <div className='info'>
                        <span className='author'>{todayText[0].author}</span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Today;
