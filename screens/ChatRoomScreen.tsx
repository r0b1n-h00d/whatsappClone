import { View, Text, FlatList, ImageBackground } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import chatRoomData from "../data/Chats";
import InputBox from "../components/InputBox";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";

export default function ChatRoomScreen() {
  const route = useRoute();

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />
      <InputBox />
    </ImageBackground>
  );
}
