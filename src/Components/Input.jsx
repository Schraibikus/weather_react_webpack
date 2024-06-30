import styled from "styled-components";

const SearchInput = styled.input`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 5px;
  transition-duration: 0.2s;
  opacity: 0.8;
  &::placeholder {
    color: #bf4f74;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const TomatoInput = styled(SearchInput)`
  color: tomato;
  &::placeholder {
    color: tomato;
  }
`;

export const Input = ({ value, onChange }) => {
  return (
    <>
      <TomatoInput
        type="text"
        name="place"
        placeholder="Поиск местоположения:"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
