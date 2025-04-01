import { useState, useEffect } from "react";
import { View } from "react-native";
import { VideoItem } from "@/app/types/VideoItem";
import { fetchVideos } from "../utils/SearchResults";
import SearchForm from "@/components/SearchForm";
import VideoList from "@/components/VideoList";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [fetchedVideos, setFetchedVideos] = useState<VideoItem[]>
    ([]);

  async function handleFetchVideos() {
    const fetchResults = await fetchVideos(query);
    console.log("Search fetchResults:", fetchResults); //TODO Remove this line
    setFetchedVideos(fetchResults);
    console.log("handleFetchVideos completed"); //TODO Remove this line
    //setQuery("");
  }

  useEffect(() => {
    console.log("fetchedVideos updated:", fetchedVideos); //TODO Remove this line
  }, [fetchedVideos]);

  console.log(query); //TODO Remove this line
  return (
    <View>
      <SearchForm
        query={query}
        setQuery={setQuery}
        handleFetchVideos={handleFetchVideos}
      />
      <VideoList fetchedVideos={fetchedVideos} />
    </View>
  );
}