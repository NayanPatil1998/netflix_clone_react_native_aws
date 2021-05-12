import { Video } from "expo-av";
import { Playback } from "expo-av/build/AV";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-native";
import { Text, View } from "../../components/Themed";
import { Episode } from "../../types";
import styles from "./styles";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  //   const _handleVideoRef = (component: any) => {
  //     const playbackObject = component;
  //     const source = {
  //       uri: episode.video,
  //     };
  //     playbackObject.loadASync(source, {}, false);
  //   };
  const video = useRef<Playback>(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        posterSource={{
          uri: episode.poster,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  );
};

export default VideoPlayer;
