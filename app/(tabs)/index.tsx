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
} from "react-native";
import axios from "axios";

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
        { text: "Error communicating with the server.", sender: "bot" },
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
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clearChat} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={isDarkMode ? "#444" : "#ccc"}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  darkChatContainer: {
    backgroundColor: "#121212",
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
    backgroundColor: "#0084ff",
    color: "#fff",
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
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#0084ff",
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: "#fff",
  },
  clearButton: {
    marginLeft: 10,
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: "#fff",
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
