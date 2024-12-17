import { View, Text } from "react-native";
import React from "react";
import { commonStyles } from "@/styles/commonStyles";
import { useRoute } from "@react-navigation/native";
import { Anime } from "@/service/animeStore";
import PlaylistHeader from "@/components/playlist/PlaylistHeader";
import VideoPlayer from "@/components/playlist/VideoPlayer";
import Interactions from "@/components/playlist/Interactions";

const Page = () => {
  const route = useRoute() as any;
  const item = route?.params as Anime;

  return (
    <View style={commonStyles.containerBlack}>
      <PlaylistHeader title={item.title} genre={item.genre} />
      <VideoPlayer item={item} />
      <Interactions item={item} />
    </View>
  );
};

export default Page;
