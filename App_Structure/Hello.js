class Hello extends React.Component {
  render() {
    const props = this.props;
    let bangs = "!".repeat(props.bangs);
    let img = props.url;
  return (
    <div>
      <h1>Hello There!!! {props.from} to {props.to} {bangs}</h1>
      <img src={img}/>
    </div>
  );
  }
}