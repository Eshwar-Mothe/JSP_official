import React, { useEffect, useState } from 'react';
import { getLatestVideosData } from '../../../ServiceLayer/api';
import YouTubeEmbed from './YoutubeEmbed';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const result = await getLatestVideosData();
                setVideos(result?.data || []);
                console.log('Fetched Videos:', result);
            } catch (error) {
                console.error('Failed to fetch videos:', error);
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
        <div>
            <h2>Latest YouTube Videos Uploaded by JanaSena</h2>
            <div className="video-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
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
        </div>
    );
};

export default VideoGallery;
