import React from "react";
import { FlatList } from "react-native";
import { VideoItem } from "@/app/types/VideoItem";
import VideoCard from "./VideoCard";

export default function VideoList({ fetchedVideos }: VideoListProps) {
  return (
    <FlatList
      style={{ padding: 10 }}
      data={fetchedVideos.filter(
        (item) => item.type === "video" && item.video.thumbnails.length > 0
      )}
      renderItem={({ item }) => <VideoCard item={item} />}
      extraData={fetchedVideos} // Force la mise à jour de la liste lorsque fetchedVideos change
    />
  );
}

type VideoListProps = { fetchedVideos: VideoItem[] };
