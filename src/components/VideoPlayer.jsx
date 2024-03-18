import ReactPlayer from 'react-player'

const VideoPlayer = ({ videoURL }) => {
  return videoURL ? (
    <div className="w-full aspect-video">
      <ReactPlayer width="100%" height="100%" url={videoURL} />
    </div>
  ) : null
}
export default VideoPlayer
