import { FontAwesome } from "@expo/vector-icons";
import { View, TextInput, Pressable, StyleSheet } from "react-native";

export default function SearchForm({
  query,
  setQuery,
  handleFetchVideos,
}: SearchFormProps) {
  console.log("SearchForm rendered");
  console.log("query", query);
  return (
    <View style={styles.searchForm}>
      <TextInput
        style={{
          width: "80%",
          height: 24,
          borderColor: "gray",
          borderWidth: 1,
          paddingLeft: 8,
        }}
        placeholder="Rechercher..."
        value={query}
        onChangeText={setQuery}
      />
      <Pressable onPress={handleFetchVideos}>
        <FontAwesome size={20} name="search" />
      </Pressable>
    </View>
  );
}

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleFetchVideos: () => Promise<void>;
}

const styles = StyleSheet.create({
  searchForm: {
    width: "100%",
    height: 26,
    // margin: 8,
    //padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pressable: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});