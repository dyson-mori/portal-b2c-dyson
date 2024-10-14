import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;

  max-width: 100%;
  height: 50px;

  margin: 3px;

  background-color: #fff;

  div {
    /* up | right | down | left*/
    padding:10px 5px 6px 10px;
  }

  input {
    width: 100%;
    height: 100%;

    border: 0;
    outline: 0;

    padding: 5px;
    color: #aaa;

    font-weight: 600;
    font-family: var(--font-montserrat_alternates);
  }
`;