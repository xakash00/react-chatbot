import moment from "moment";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  BotMessage,
  Button,
  ChatBox,
  ChatInputGroup,
  Heading,
  HumanMessage,
  Input,
  Status,
} from "../../styled/styles";

const ChatBot = () => {
  const [typing, setTyping] = useState(false);
  const humanMessage = useRef();
  const input = useRef();
  const botmessage = useRef();
  const handleInput = (e) => {
    e.preventDefault();
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words1 = new RegExp(welcome);
    if (words1.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTyping((p) => true);
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
        setTyping(false);
        inputRef.focus()
      }, 2000);
    }
    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words2 = new RegExp(how);
    if (words2.test(document.querySelector("#input").value)) {
      setTyping((p) => true);
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
        inputRef.focus()
        setTyping(false);
        inputRef.focus()
      }, 1000);
    }

    let response = [
      "i am good|i am fine|I'm fine|I am fine|I am fine today|I am fine today|i m fine|i m great|I'm fine|I m great|I m good|i m good|great|Great",
    ];
    let words3 = new RegExp(response);
    if (words3.test(document.querySelector("#input").value)) {
      setTyping((p) => true);
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That's good";
        inputRef.value = "";
        setTyping(false);
        inputRef.focus()
      }, 1000);
    }

    let badWords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words4 = new RegExp(badWords);
    if (words4.test(document.querySelector("#input").value)) {
      setTyping((p) => true);
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use foul language";
        inputRef.value = "";
        setTyping(false);
        inputRef.focus()
      }, 1000);
    }
    let date = [
      "What is toaday's date|todays's date|todays date|tell me the date|date",
    ];
    let words5 = new RegExp(date);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      setTyping((p) => true);
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = `Today's date is ${moment(new Date()).format(
          "DD MMMM YYYY"
        )}`;
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
        setTyping(false);
        inputRef.focus()
      }, 1000);
    }

    let day = ["What is the day|day|tell me the day|day|tell me the day|and day|and whats the day|and what is the day|and the day"];
    let words7 = new RegExp(day);
    if (words7.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      setTyping((p) => true);
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = `Today is ${moment(new Date()).format(
          "dddd"
        )}`;
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
        setTyping(false);
        inputRef.focus()
      }, 1000);
    }
    let search  = ["search google"]
    let words8 = new RegExp(search);
    if(words8.test(document.querySelector('#input').value)){
      const status = document.querySelector(".status");
      setTyping(p=>true);
      setTimeout(() => {
        getBotMessage.innerText= `searching ${inputRef.value} and redirecting to google`
        status.innerText = "Active";
        status.style.color = "green";
        <Link to={{pathname:`https://www.google.com/search?q=${inputRef.value}`}}/>
        // inputRef.value = "";
        setTyping(false);
        inputRef.focus()
      }, 1000);
    }
    
    getHumanMessage.innerText = inputRef.value;
  };

  return (
    <div>
      <ChatBox>
        <Heading>Chat-Bot</Heading> <Status className="status">Active</Status>
        <HumanMessage
          color="#28d"
          id="message2"
          ref={humanMessage}
        ></HumanMessage>
        <BotMessage id="message1" ref={botmessage}></BotMessage>
        <ChatInputGroup onSubmit={handleInput}>
          <Input
            type="text"
            id="input"
            placeholder="Enter your message"
            ref={input}
            disabled={typing}
          />
          <Button disabled={typing} type="submit">
            {typing===true?"Responding...":"Send"}
          </Button>
        </ChatInputGroup>
      </ChatBox>
    </div>
  );
};

export default ChatBot;
