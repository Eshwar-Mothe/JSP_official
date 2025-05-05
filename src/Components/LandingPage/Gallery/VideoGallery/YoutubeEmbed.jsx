import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YouTubeEmbed = ({ videoId, index, onPlay, thumbnail }) => {
    const [showPlayer, setShowPlayer] = useState(false);

    const handleThumbnailClick = () => {
        setShowPlayer(true);
    };

    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
            autoplay: 1,
            rel: 0
        }
    };

    return (
        <div className="video-card" style={{ width: '320px', margin: '10px' }}>
            {showPlayer ? (
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onPlay={onPlay}
                    className="youtube-iframe"
                />
            ) : (
                <div className="video-thumbnail" onClick={handleThumbnailClick} style={{ cursor: 'pointer' }}>
                    <img
                        src={thumbnail}
                        alt={`Video ${index}`}
                        style={{ width: '100%', height: '100%',objectFit:'cover', borderRadius: '8px' }}
                    />
                </div>
            )}
        </div>
    );
};

export default YouTubeEmbed;
