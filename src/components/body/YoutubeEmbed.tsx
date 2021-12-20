import React from "react";
import styled from "styled-components";

interface Props {
  embedId: string;
}

const YoutubeEmbed: React.FC<Props> = ({ embedId }) => {
  return (
    <Wrapper>
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          title="Embedded youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  position: relative;
  overflow: hidden;

  & div {
    padding-top: 56.25%;
    border: 1px solid blue;
  }

  & iframe {
    position: absolute;
    display: block;
    border: none;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export default YoutubeEmbed;
