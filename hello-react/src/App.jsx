import { useState } from "react";

import { Box, Container } from "@mui/material";

import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Item from "./components/Item.jsx";

import { useApp } from "./ThemedApp.jsx";

export default function App() {
  const { showForm } = useApp();

  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello, World!", name: "Alice" },
  ]);
  
  const remove = id => {
    setData(data.filter(item => item.id !== id));
  }

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, {id, content, name}]);
  }

  return (
    <Box>
      <Header />

      <Container 
        maxWidth="sm"
        sx={{ mt: 4 }}>
          {showForm && <Form add={add} />}

          {data.map(item => {
            return (
              <Item 
                key={item.id}
                item={item}
                remove={remove}
              />
            );
          })}
      </Container>
    </Box>
  );
}