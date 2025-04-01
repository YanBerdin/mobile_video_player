import { StyleSheet } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
//import { Text, View } from 'react-native';
import VideoList from "@/components/VideoList";
import { useEffect, useState } from "react";
import { getVideoItemList } from "../utils/SearchResults";
import { VideoItem } from "../types/VideoItem"; // voir @


export default function Home() {
  const [fetchedVideos, setFetchedVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    async function fetchHomeFeed() {
      const results = await getVideoItemList("Tutoriel React Native");
      setFetchedVideos(results);
    }
    fetchHomeFeed();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="app/(tabs)/index.tsx" />*/}
      <VideoList fetchedVideos={fetchedVideos} />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
