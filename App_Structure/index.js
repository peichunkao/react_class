class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="Ringo" 
          from="Paul" 
          bangs={8}
          url="https://icatcare.org/app/uploads/2018/09/Scottish-fold.png"
        />
        <Hello 
          to="Steven" 
          from="Ava"
          bangs={2}
          url="https://icatcare.org/app/uploads/2018/09/Scottish-fold.png"
        />
        <NumPicker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
