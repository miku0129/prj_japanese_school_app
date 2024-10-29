import React, { Fragment, useEffect, useState } from "react";
import {
  AudioPlayButton,
  AudioPauseButton,
  AudioStopButton,
  AudioMuteButton,
  AudioUnmuteButton,
  AudioReplayButton,
} from "./audio.styles";
import "./audio.styles.scss";

interface AudioProps {
  audioLink: string;
}

const Audio: React.FC<AudioProps> = ({ audioLink }) => {
  const [player, setPlayer] = useState<HTMLAudioElement>();
  const [volume, setVolume] = useState<number>(5);
  const [progressRange, setProgressRange] = useState<number>(0);
  const [isBtnShowPlay, setIsBtnShowPlay] = useState(true);
  const [isBtnShowMute, setIsBtnShowMute] = useState(true);
  const audio_src = audioLink;

  const progressBar = document.getElementById(
    "progress-bar"
  ) as HTMLProgressElement;

  useEffect(() => {
    (async () => {
      const audioElement = (await document.getElementById(
        "music"
      )) as HTMLAudioElement;
      setPlayer(audioElement);
    })();
  }, []);

  const handleShowPlayBtn = () => setIsBtnShowPlay(!isBtnShowPlay);

  const playPauseAudio = () => {
    if (player && player.src) {
      if (player.paused || player.ended) {
        handleShowPlayBtn();
        player.play();
      } else {
        handleShowPlayBtn();
        player.pause();
      }
    }
  };

  // Stop the current media from playing, and return it to the start position
  const stopAudio = () => {
    if (player && player.src) {
      setIsBtnShowPlay(true);
      player.pause();
    }
  };

  const resetPlayer = () => {
    console.log("reset");
    if (player) {
      // Move the media back to the start
      player.currentTime = 0;
      // Set the progressBar to the start
      progressBar.value = Math.floor(
        (100 / player.duration) * player.currentTime
      );

      // Set the play/pause button to 'pause'
      setIsBtnShowPlay(false);
    }
  };

  // Replays the media currently loaded in the player
  const replayAudio = () => {
    if (player && player.src) {
      resetPlayer();
      player.play();
    }
  };

  // Update the progress bar
  const updateProgressBar = () => {
    if (player) {
      // Work out how much of the media has played via the duration and currentTime parameters
      let percentage = Math.floor((100 / player.duration) * player.currentTime);
      percentage = isNaN(percentage) ? 0 : percentage;
      // Update the progress bar's value
      progressBar.value = percentage;
      // Update the progress bar's text (for browsers that don't support the progress element)
      progressBar.innerHTML = progressBar.title = percentage + "% played";
    }
  };

  const seek = (event: MouseEvent) => {
    if (player && player.src) {
      const percent = event.offsetX / progressBar.offsetWidth;
      player.currentTime = percent * player.duration;
      if (event.target) {
        setProgressRange(Math.floor(percent / 100));
        // event.target.innerHTML = progressBar.value + "% played";
      }
    }
  };

  // Update the audio volume
  const handleVolumeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (player) {
      const updatedVolume = parseInt(event.target.value);
      player.volume = updatedVolume / 10;
      setVolume(updatedVolume);
    }
  };

  // Toggles the media player's mute and unmute status
  function muteVolume() {
    if (player && player.src) {
      if (player.muted) {
        player.muted = false;
        setIsBtnShowMute(true);
      } else {
        player.muted = true;
        setIsBtnShowMute(false);
      }
    }
  }

  if (player) {
    // Add a listener for the timeupdate event so we can update the progress bar
    player.addEventListener("timeupdate", updateProgressBar, false);

    player.addEventListener(
      "ended",
      () => {
        if (player && player.src) {
          player.pause();
        }
      },
      false
    );
  }

  if (progressBar) {
    //Skip the progress by clicking the bar
    progressBar.addEventListener("click", seek);
  }

  return (
    <Fragment>
      <audio id="music" src={audio_src}>
        Your browser does not support the audio format.
      </audio>

      <div id="audio_player">
        <div id="audio_show_progress_group">
          <progress id="progress-bar" max="100" value={progressRange}>
            0% played
          </progress>
        </div>
        <div id="audio_control_group">
          <AudioReplayButton
            id="btnReplay"
            className="replay"
            title="replay"
            onClick={replayAudio}
          >
            Replay
          </AudioReplayButton>
          {isBtnShowPlay && (
            <AudioPlayButton
              id="btnPlayPause"
              className="play"
              title="play"
              onClick={playPauseAudio}
            >
              Play
            </AudioPlayButton>
          )}
          {!isBtnShowPlay && (
            <AudioPauseButton
              id="btnPlayPause"
              className="pause"
              title="pause"
              onClick={playPauseAudio}
            >
              Pause
            </AudioPauseButton>
          )}
          <AudioStopButton
            id="btnStop"
            className="stop"
            title="stop"
            onClick={stopAudio}
          >
            Stop
          </AudioStopButton>

          {isBtnShowMute && (
            <AudioMuteButton
              id="btnMute"
              className="mute"
              title="mute"
              onClick={muteVolume}
            >
              Mute
            </AudioMuteButton>
          )}
          {!isBtnShowMute && (
            <AudioUnmuteButton
              id="btnMute"
              className="unmute"
              title="unmute"
              onClick={muteVolume}
            >
              Unmute
            </AudioUnmuteButton>
          )}
          <input
            type="range"
            id="volume-bar"
            title="volume"
            min="0"
            max="10"
            step="1"
            value={volume}
            onChange={handleVolumeInput}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Audio;
