export default function Player({name, symbol}) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
      </span>
      <span className="player-symbol">{symbol}</span>
      <button>Edit</button>
    </li>
  );
}