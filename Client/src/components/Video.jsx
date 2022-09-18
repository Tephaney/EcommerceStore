import video from "../assets/MAVideo.mp4";
import styled from "styled-components";

const videoBg = styled.div`
  width: 100%;
  height: 50vh;
  object-fit: contain;
`;

const Video = () => {
  return (
    <div className="videoBg">
      <video src={video} autoPlay muted loop />
    </div>
  );
};

export default Video;
