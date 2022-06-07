import Styled from "./index.style";

const Loading = () => {
  return (
    <Styled.Container className="loading-icon">
      <Styled.DotSpinner width={40} height={40} />
    </Styled.Container>
  );
};

export default Loading;
