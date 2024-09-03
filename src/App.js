// import styles from "./App.module.css";
// import all from "./Button.module.css";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.color.primary};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
`;

// import * as S from "./App.styles";
// import styled from "styled-components";


// const BaseButton = styled.button`
//   background-color: white;
//   border: 2px solid black;
//   border-radius: 6px;
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background-color linear 800ms;

//   :hover {
//     background-color: black;
//     color: white;
//   }
// `;

// const PrimaryButton = styled(BaseButton)`
//   background-color: red;
// `;

// const Item = styled.li`
//   background-color: ${(props) => (props.isActive ? 'red' : '')};
// `;

function App() {

  return (
      <div>
        <Button>Click me</Button>
      </div>
  );

  // return (
  //   <div>
  //     <S.Container>
  //       <S.Heading>This is my heading</S.Heading>
  //     </S.Container>
  //   </div>
  // );

  // return (
  //   <div>
  //     <BaseButton>Base button</BaseButton>
  //     <PrimaryButton>Base button</PrimaryButton>
  //   </div>
  // );

  // return (
  //   <ul>
  //     <Item>Item 1</Item>
  //     <Item isActive={true}>Item 2</Item>
  //     <Item isActive>Item 3</Item>
  //     <Item>Item 4</Item>
  //   </ul>
  // )

  // return <><div className={styles.container}>Hello world</div>
  // <button className={all.primary}>Click me</button></>;

}

export default App;
