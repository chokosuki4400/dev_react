const classHogeName="foo";
const props={
  id:"bar",
  className:classHogeName
};
const hoge={
  id:"bar",
  className:classHogeName
};


ReactDOM.render(
  <div>
    <h1 {...props}>Hello, world!</h1>
    <p {...hoge}>HOGE</p>
  </div>,
  document.getElementById('app')
);


//コンポーネントの作成
var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>texttext</h2>
      </div>
    )
  }
});

//コンポーネントの描画
ReactDOM.render(
  <MyComponent />,
  document.getElementById('app02')
);

//コンポーネントの作成
function MyH1() {
  return (
    <h1>Hello, world!</h1>
  )
}
function MyH2() {
  return (
    <h2>texttext</h2>
  )
}
function MyComponent() {
  return (
    <div>
      <MyH1 />
      <MyH2 />
    </div>
  )
};

//コンポーネントの描画
ReactDOM.render(
  <MyComponent />,
  document.getElementById('app03')
);


