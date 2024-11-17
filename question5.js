/** Can you explain the problem with the following code, and how to fix it. **/

/**
當按下按鈕後，this.state.count會是1，非3。
因為setState是異步操作，連續調用setState，React並不會馬上更新state，而是會將這些更新合併並批量處理。因此在handleAddCount中的每一次setState呼叫中，this.state.count還是會使用當前的count值，並沒有反映已經被更新的count值，這就導致了多次更新實際上是基於相同的舊值。
利用setState的回調函數，這樣可以保證每次setState的更新基於最新的狀態值。React會將當前的state作為參數傳遞給回調函數，這樣就能在每次更新時使用最新的 state值。
**/

// 修正後
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById("root"));
