import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import { Episode } from "../../types";
import styles from "./styles";
import { Playback } from "expo-av/build/AV";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;

  const [status, setStatus] = useState({});
  const video = useRef<Playback>(null);

  useEffect(() => {
    (async () => {
      // await video.startsWith("http");
    })();
  }, [episode]);
  console.log(episode);

  return (
    <View>
      <Video
        // ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
          uri: episode.poster,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={true}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
