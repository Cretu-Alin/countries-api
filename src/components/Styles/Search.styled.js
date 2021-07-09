import styled from "styled-components";

export const SearchFilter = styled.div`
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const InputAbsolute = styled.div`
  width: 40%;
  height: 50px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  overflow: hidden;

  .search-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 1164px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  color: inherit;
  padding-left: 40px;
  background-color: var(--background-el);
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
`;

export const Form = styled.form`
  width: 200px;
`;

export const Select = styled.select`
  outline: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  height: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
`;
