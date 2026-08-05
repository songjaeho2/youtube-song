import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'


import { todayText } from '../data/today'

const Today = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = ""
            description="">
                
            <section id='todayPage' className={webdPageClass}>
                <h2> </h2>
                <div className="video__inner">
                <VideoCard videos={todayText} variant="today" />
                </div>
            </section>
        </Main>
    )
}

export default Today