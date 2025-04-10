    import React, { useState, useEffect } from 'react';
    import { Link, useParams } from 'react-router-dom';
    import { fetchFromAPI } from '../utils/api';
    import { webdText } from '../data/webd'; // 로컬 영상 데이터
    import Main from '../components/section/Main';
    import ReactPlayer from 'react-player';
    import { CiChat1, CiStar, CiRead } from 'react-icons/ci';

    const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [isLocal, setIsLocal] = useState(false);
    const [localVideo, setLocalVideo] = useState(null);

    useEffect(() => {
        const local = webdText.find(v => v.videoId === videoId && v.isLocal);
        if (local) {
        setIsLocal(true);
        setLocalVideo(local);
        } else {
        setIsLocal(false);
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => setVideoDetail(data.items[0]));
        }
        window.scrollTo(0, 0);
    }, [videoId]);

    return (
        <Main title="" description="">
        <section id='videoViewPage'>
            <div className='video__view'>
            <div className='video__play'>
                {isLocal ? (
                <video
                    src={localVideo.src}
                    controls
                    autoPlay
                    style={{ width: '100%', borderRadius: '12px' }}
                />
            ) : (
                    videoDetail && (
                <ReactPlayer
                playing={true}
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width='100%'
                height='100%'
                style={{ position: 'absolute', top: 0, left: 0 }}
                config={{
                    youtube: {
                    playerVars: {
                        cc_load_policy: 0,
                        cc_lang_pref: 'xx',
                        hl: 'en'
                    }
                    }
                }}
                />
                    )
                )}
            </div>

            <div className='video__info'>
                <h2 className='video__title'>
                {isLocal ? localVideo.title : videoDetail?.snippet.title}
                </h2>

                {!isLocal && videoDetail && (
                <div className='video__channel'>
                    <div className='id'>
                    <Link to='/channel/'>{videoDetail.snippet.channelTitle}</Link>
                    </div>
                    <div className='count'>
                    <span className='view'><CiRead />{videoDetail.statistics.viewCount}</span>
                    <span className='like'><CiStar />{videoDetail.statistics.likeCount}</span>
                    <span className='comment'><CiChat1 />{videoDetail.statistics.commentCount}</span>
                    </div>
                </div>
                )}

                {!isLocal && videoDetail && (
                <div className='video__desc'>
                    {videoDetail.snippet.description}
                </div>
                )}
            </div>
            </div>
        </section>
        </Main>
    );
    };

    export default Video;
