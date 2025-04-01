import { StyleSheet, ActivityIndicator } from 'react-native';
// import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';
import VideoList from "@/components/VideoList";
import { useState } from "react";
import { fetchVideos } from "../utils/SearchResults";
import { VideoItem } from "../types/VideoItem"; // check @
import SearchForm from "@/components/SearchForm";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [fetchedVideos, setFetchedVideos] = useState<VideoItem[]>
    ([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleFetchVideos() {
    setLoading(true);
    try {
      const fetchResults = await fetchVideos(query);
      console.log("Search results:", fetchResults); //TODO Remove this line
      setFetchedVideos(fetchResults);
      console.log("handleFetchVideos completed"); //TODO Remove this line
      //setQuery("");
    } catch (error) {
      console.error("Error fetching videos:", error);
      setFetchedVideos([]);
      setQuery("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <SearchForm
        query={query}
        setQuery={setQuery}
        handleFetchVideos={handleFetchVideos}
      />
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*<EditScreenInfo path="app/(tabs)/index.tsx" />*/}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <VideoList fetchedVideos={fetchedVideos} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 5,
    height: 2,
    width: '100%',
  },
});
