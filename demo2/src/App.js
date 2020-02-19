import React, { memo,useMemo } from "react";

function App() {
  const [n, setN] = React.useState(0);
  const [m, setM] = React.useState(0);
  const onClick = () => {
    setN(n + 1);
  };
  // 当 m 值改变时，childObj 的值才改变
  const childObj = useMemo(() => {
    console.log('childObj 被赋予新的值')
    return {
      name: 'libai'
    }
  },[m])

  return (
    <div>
      <div>
        <button onClick={onClick}>update n {n}</button>
      </div>
      <Child2 data={m} childObj={childObj} />
    </div>
  );
}

// 当 m 值不变时，Child2 不会执行
const Child2 = memo((props) => {
  console.log("child 执行了");
  return <div>child: {props.data} {props.childObj.name}</div>;
}
);

export default App