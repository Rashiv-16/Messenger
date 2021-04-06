import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { SocketContext } from "../context/socket";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  padding: 20px;
`;

const Output = styled.div`
  width: 80%;
  height: 60%;
  padding: 20px;
  border: 2px solid black;
  overflow-y: scroll;
`;

const Form = styled.form`
  width: 80%;
  height: 10%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 80%;
  height: 60%;
  font-size: 18px;
  padding: 15px;
`;

const Button = styled.button`
  width: 18%;
  height: 60%;
`;

const Message = styled.p`
  padding: 10px;
  font-size: 18px;
  border: 1px solid green;
  margin-bottom: 5px;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [term, setTerm] = useState("");
  const socket = useContext(SocketContext);
  useEffect(() => {
    socket.on("message2", (msg) => {
      setMessages([...messages, msg]);
      console.log("Socket Client ran");
    });
    return () => {
      socket.off("message2");
    };
  }, [messages]);

  const displayMessage = () => {
    let P = messages.map((message, index) => {
      return <Message key={index}>{message}</Message>;
    });
    return P;
  };
  return (
    <Container>
      <Output>{displayMessage()}</Output>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          socket.connect();
          // socket.emit("message", e.target.elements.inputMessage.value);
          socket.emit("message2", e.target.elements.inputMessage.value);
          setTerm("");
          console.log("Submit Ran");
          // setCount(counter);
          // counter++;
        }}
      >
        <Input
          type="text"
          name="inputMessage"
          value={term}
          autoComplete="off"
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button>Send</Button>
      </Form>
    </Container>
  );
};

export default Chat;
