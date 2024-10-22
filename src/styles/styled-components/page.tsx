"use client";

import styled from "styled-components";

export const CustomPhraseStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 1.3em;
    max-height: 0.1em;
    text-align: center;
  }
`;

export const CustomPhraseMarginLeftStyle = styled(CustomPhraseStyle)`
  margin-left: 3rem;
`;
