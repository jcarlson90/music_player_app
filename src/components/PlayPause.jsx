import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activesong?.title === song.title ? (
    <FaPauseCircle
    size={35}
    className="text-gray-300"
    onClick={handlePaue}
     />
  ) : (
    <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay} />
  ));

export default PlayPause;
