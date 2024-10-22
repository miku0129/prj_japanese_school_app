"use client";

import styled from "styled-components";

export const CustomBaseStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  justify-content: center;
`;

export const CustomPhraseStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 2rem;
    max-height: 0.1rem;
    text-align: center;
  }
`;

export const CustomShowResultStyle = styled.div<{
  background: string;
}>`
  ${(props) => `background-color: ${props.background}`};
  height: 25rem;
  width: 10rem;
  overflow-x: hidden;
  overflow-y: hidden;
  p {
    font-size: 2rem;
    height: 1rem;
    text-align: center;
  }
`;

export const CustomBtnSkeleton = styled.button`
  height: 10vh;
  width: 10vw;
`;
export const CustomIconBtnStyle = styled(CustomBtnSkeleton)`
  font-size: 2rem;
`;

export const CustomBtnContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
