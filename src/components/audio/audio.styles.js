import styled from "styled-components";

export const AudioPlayButton = styled.button`
  text-indent: -9999px;
  width: 16px;
  height: 18px;
  border: none;
  cursor: pointer;
  background: transparent
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAAQCAYAAAAWNJ1eAAAAB3RJTUUH4AMQDS0aGLmsqwAAAAlwSFlzAAAOdAAADnQBaySz1gAAAvZJREFUeNrtmk2u0zAQxyele7gBZcOWcAJ8AKTXFVvKhnW5QbhBD4BEe4GnvgULdkaCNeUE5N2gbJGgeDJ26rhO4rFbKRX5P7mtP+YX2x1PHPdl4ErCa/W6UEmc1ACsVekGQjWyeKwrVWYN+bF63aqU99jsVJqryblvbTGyeKxrkoSPesxC/f3CosyaEBzso0DUvgL5JmZk8VhdoihXKLsnLLtLsYix1jkcf+VIU12wZUwI6LZo89xTN7J4rFOZLxxgxrjG+Vm0WNB27hlvXrWQICb6Im5IXqhU9lwi17Zuh13WS2juF/Dzq0TWW+tzLMvuj2ip47J480W8G5V+qnSwStfg+9KxDbW98V6Bw+qThGdA0WYBPQtmohu507rRYQ/ryg77RU8e9Vmlb1b+q0q3iawPqn+fEllmrF+qlDbGUDVtyRkwQs0YjFll4zpSHMsvikASyHnwVlwALbSV1aq+nU2gfRWGOJPoyaNw33VwyqYDYIXqkqwV0x5vK7sWWy6rSwUcHQgd5b1ebO+AIlvtQNh4GoSkx9RN5P0Vr/HbKTsw7P0sWT9ZxrBET5lMZNnqYs2Yvb7TNF/E4bGkM2/CelInZ0WtVPkPp90bZfvQOBAqzInS9MdTFutE52H5bl92mUxk2eKwhiOzB/L33nIgVJgTpT0tZE7+AcQ70XlY9ioU9TFHXJ9i7UglcOaU9j2FZRvPEidzyR33C9BONoGutYLOg7v99h2+7Mn79Bf8X3w4S9T26ayQ6boca8m0tw83l4msLu31u+hoY+r26ERrz1D7nMdo3ZNHPQWKGEa5LotnySrcThNZobocC/c4tP8oGYwS6AT87gysNm31+1I/6jdFZcZptyaUfwf+2cdOdfz08Gxk8VhNLm1Y3e1DzK0nhdU8kceotIJjFBVADmTq8omumMMxhIVoD8cdvKuRxWMdZTas4ed0l2HRzzNC9xudpQByIgmnj//34w+wQ2ANVf6fPfZ63IUZU+YxHOa/SfwPrCvVP/2nY6KBhDUMAAAAAElFTkSuQmCC")
    no-repeat 0 0; /* url('buttons.png') */
`;

export const AudioPauseButton = styled(AudioPlayButton)`
  background-position: -19px 0;
`;

export const AudioStopButton = styled(AudioPlayButton)`
  background-position: -38px 0;
`;

export const AudioMuteButton = styled(AudioPlayButton)`
  background-position: -95px 0;
`;
export const AudioUnmuteButton = styled(AudioPlayButton)`
  background-position: -114px 0;
`;

export const AudioReplayButton = styled(AudioPlayButton)`
  background-position: -133px 0;
`;