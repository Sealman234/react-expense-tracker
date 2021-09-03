import './Card.css';

function Card(props) {
  const classes = `card ${props.className}`;

  // props.children allows you to create wrapper components
  return <div className={classes}>{props.children}</div>;
}

export default Card;
