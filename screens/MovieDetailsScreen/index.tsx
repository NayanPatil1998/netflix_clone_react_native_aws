import React, { useState } from "react";
import { Text, View } from "../../components/Themed";
import styles from "./styles";
import { Image, Pressable } from "react-native";
import movie from "../../assets/data/movie";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import { FlatList } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";

const MovieDetailScreen = () => {
  const firstSeason = movie.seasons.items[0];
  const seasonNames = movie.seasons.items.map((season) => season.name);
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );

  return (
    <View style={styles.container}>
      <VideoPlayer episode={currentEpisode} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem onPress={setCurrentEpisode} episode={item} />
        )}
        style={{ marginBottom: 30 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.seasons}>
                {movie.numberOfSeasons} seasons
              </Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            {/* Play Button */}

            <Pressable
              onPress={() => console.warn("Play")}
              style={styles.playButton}
            >
              <Entypo name="controller-play" size={20} color="black" />
              <Text style={styles.playButtonText}>Play</Text>
            </Pressable>
            {/* Download Button */}
            <Pressable
              onPress={() => console.warn("Download")}
              style={styles.downloadButton}
            >
              <AntDesign name="download" size={20} color="white" />
              <Text style={styles.downloadButtonText}>Download</Text>
            </Pressable>

            <Text style={{ marginVertical: 5 }}>{movie.plot}</Text>

            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* Row with icon Buttons */}
            <View style={{ flexDirection: "row", marginVertical: 15 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>
            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
              dropdownIconColor={"white"}
              style={{ color: "white", width: 130 }}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailScreen;
