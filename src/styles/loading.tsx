
import styled from '@emotion/styled';

const Loading = styled.div`
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 100% 0 0);
  animation: l5 2s steps(11) infinite;

  &:before {
    content: "Loading...";
  }

  @keyframes l5 {
    to {
      clip-path: inset(0 -1ch 0 0);
    }
  }
`;

export default Loading