import React, { useEffect, useState } from 'react';
import { getLatestVideosData } from '../../../ServiceLayer/api';
import YouTubeEmbed from './YoutubeEmbed';
import { Spin, Typography } from 'antd';

const { Title } = Typography;

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const result = await getLatestVideosData();
                setVideos(result?.data || []);
            } catch (error) {
                console.error('Failed to fetch videos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const onPlay = (event) => {
        const player = event.target;
        if (currentPlayer && currentPlayer !== player) {
            currentPlayer.pauseVideo();
        }
        setCurrentPlayer(player);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Title level={3} style={{ textAlign: 'center', color: 'red' }}>
                Latest YouTube Videos Uploaded by JanaSena
            </Title>

            {loading ? (
                <div style={{ textAlign: 'center', marginTop: 50, color:'red' }}>
                    <Spin tip="Loading videos..." size="large" style={{ color: 'red' }}/>
                </div>
            ) : (
                <div className="video-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {videos.map((video, index) => (
                        <YouTubeEmbed
                            key={video.id.videoId}
                            videoId={video.id.videoId}
                            thumbnail={video.snippet.thumbnails.high.url}
                            index={index}
                            onPlay={onPlay}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
