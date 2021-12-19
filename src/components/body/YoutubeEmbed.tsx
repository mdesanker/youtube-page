import React from "react";
import styled from "styled-components";

interface Props {
  embedId: string;
}

const YoutubeEmbed: React.FC<Props> = ({ embedId }) => {
  return (
    <Wrapper>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="Embedded youtube"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 480px;
  position: relative;

  & iframe {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

export default YoutubeEmbed;
