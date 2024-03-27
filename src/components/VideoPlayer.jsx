import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ videoURL }) => {
  const [isReady, setIsReady] = useState(false)
  const [videoID, setVideoID] = useState(null)

  const extractYouTubeVideoID = (url) => {
    if (url === null) return null
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

    const match = url.match(regex)

    return match ? match[1] : null
  }

  useEffect(() => {
    setVideoID(extractYouTubeVideoID(videoURL))
  }, [videoURL])

  if (!videoURL)
    return (
      <h2 className="w-full aspect-video grid place-content-center">
        Please enter the video link.{' '}
      </h2>
    )

  return (
    <div className="relative w-full aspect-video">
      {!isReady && (
        <div className="absolute animate-pulse w-full h-full bg-slate-200 z-10"></div>
      )}
      <ReactPlayer
        width="100%"
        height="100%"
        url={videoURL}
        onReady={() => setIsReady(true)}
      />
    </div>
  )
}
export default VideoPlayer
