import styled from 'styled-components';

function App() {
  return (
    <Father as='header'>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">Log in</Btn>
    </Father>
  );
}

export default App;

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 1px;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minlength: 10 })`
  background-color: tomato;
`;
