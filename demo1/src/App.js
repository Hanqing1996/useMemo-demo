import React, { memo } from "react";
import ReactDOM from "react-dom";

function App() {
  const [n, setN] = React.useState(0);
  const onClick = () => {
    setN(n + 1);
  };
  // memo 是通过比较 prop 的值来判断是否 render 该组件的
  const childObj = { name: 'libai' }
  const m = 3
  // 数字/字符串， 每次声明后赋予的值是一样的
  // 对象的值是它的地址，每次声明后赋值会开辟新的内存空间，所以值是不一样的

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>update n {n}</button>
      </div>
      <Child2 data={m} childObj={childObj} />
    </div>
  );
}

const Child2 = memo((props) => {
  console.log("child 执行了");
  return <div>child: {props.data} {props.childObj.name}</div>;
}
);

export default App