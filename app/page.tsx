"use client";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default Home;
