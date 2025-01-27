import React, { useState, useEffect, useRef } from "react";


import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Switch,
  Image,
} from "react-native";
import axios from "axios";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default function App() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const stopTypingRef = useRef(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, sender: "user" };
    setMessages([...messages, userMessage]);

    setIsTyping(true);
    stopTypingRef.current = false;

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        question: userInput,
      });

      const botReply = response.data.reply;
      typeBotMessage(botReply);
    } catch (error) {
      console.error("Error connecting to the backend:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error communicating with the server", sender: "bot" },
      ]);
      setIsTyping(false);
    }

    setUserInput("");
  };

  const typeBotMessage = (message: string) => {
    let currentText = "";
    const interval = 15;
    let index = 0;

    const typeCharacter = () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        setIsTyping(false);
        return;
      }

      if (index < message.length) {
        currentText += message[index];
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { text: currentText, sender: "bot" },
        ]);
        index++;
        typingTimeoutRef.current = setTimeout(typeCharacter, interval);
      } else {
        setIsTyping(false);
      }
    };

    typeCharacter();
  };

  const clearChat = () => {
    setMessages([]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
      <KeyboardAvoidingView style={styles.container} behavior="padding">
     
        <View style={styles.topButtons}>
          <TouchableOpacity onPress={clearChat} style={styles.clearButton}>
          <Image 
          source={require('./')} // Replace with the actual path to your image
          style={styles.clearButtonImage} 
        />


            
          </TouchableOpacity>
          <View style={styles.darkModeContainer} >
            <Text style={styles.footerText}>7 JUNE</Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              thumbColor={isDarkMode ? "#444" : "#ccc"}
            />
          </View>
        </View>
    
        {/* Chat container */}
        <View
          style={[
            styles.chatContainer,
            isDarkMode && styles.darkChatContainer,
          ]}
        >
          <FlatList
            data={messages}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Text
                style={[
                  styles.message,
                  item.sender === "user"
                    ? styles.userMessage
                    : styles.botMessage,
                ]}
              >
                {item.text}
              </Text>
            )}
            contentContainerStyle={styles.chatBox}
          />
          {isTyping && <Text style={styles.typingIndicator}>Typing...</Text>}
        </View>
    
        {/* Input container */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, isDarkMode && styles.darkInput]}
            placeholder="Ask something..."
            placeholderTextColor={isDarkMode ? "#888" : "#ccc"}
            value={userInput}
            onChangeText={setUserInput}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>


          <Image 
          source={require('/home/7june/AndroidStudioProjects/sevenjune/sevenjune/assets/images/send.png')} // Replace with the actual path to your image
          style={styles.sendButtonImage} 
        />

          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
    
}

const styles = StyleSheet.create({
  sendButtonImage :{
    width: 24, 
    height: 24, 
    resizeMode: 'contain', 

  },
  clearButtonImage :{
    width: 24, 
    height: 24, 
    resizeMode: 'contain', 

  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff", // Light mode background color
  },
  darkChatContainer: {
    backgroundColor: "#121212", // Dark mode background color
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "flex-start", // Align buttons to the left
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5", // Matches container background
  },
  chatBox: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    color: " #121212 ",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e5e5ea",
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  darkInput: {
    backgroundColor: "#222",
    color: "#fff",
    borderColor: "#444",
  },
  darkModeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: "#888",
  },
  clearButton: {
    marginLeft: 5,
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 10,
    cursor: "pointer",
  },
  clearButtonText: {
    color: "#888",
  },
  typingIndicator: {
    color: "#888",
    fontStyle: "italic",
    marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  footerText: {
    color: "#444",
  },
});
