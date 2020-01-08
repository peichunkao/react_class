function randomSymbol() {
  return Math.floor(Math.random() * 3);
}

class Machine extends React.Component {
  render() {
    const props = this.props;
    var input = [props.s1, props.s2, props.s3]
    console.log(input);
    var s1 = input[randomSymbol()];
    var s2 = input[randomSymbol()];
    var s3 = input[randomSymbol()];
    var winner = s1 === s2 && s2 === s3;
    var colors = {fontSize: '50px', background: 'white'};

    // var msg;
    // if (s1 === s2 && s2 === s3) {
    //   msg = <p>You win!</p>
    // } else {
    //   msg = <p>You lose!</p>
    // }
    
    return (
      <div className="Machine">
        <h3 className= {winner? "win" : "lose"}>
          {winner? "Winner!" : "Loser!"}</h3>
        <p>{s1}{s2}{s3}</p>
      </div>
    )
  }
}