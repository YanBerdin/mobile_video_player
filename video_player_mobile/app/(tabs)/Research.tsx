import { useState } from "react";
import { View } from "react-native";
import { VideoItem } from "@/app/types/VideoItem";
import { getVideoItemList } from "../utils/SearchResults";
import SearchForm from "@/components/SearchForm";
import VideoList from "@/components/VideoList";

export default function Search() {
  console.log("Search rendered");

  const [query, setQuery] = useState<string>("");
  const [fetchedVideos, setFetchedVideos] = useState<VideoItem[]>
    ([]);

  async function handleSearch() {
    const results = await getVideoItemList(query);
    setFetchedVideos(results);
    console.log("handleSearch");
    setQuery(query);
  }
  console.log(query);
  return (
    <View>
      <SearchForm
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      <VideoList fetchedVideos={fetchedVideos} />
    </View>
  );
}