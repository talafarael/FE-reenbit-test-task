interface IButton {
  readonly title: string;
  readonly func: () => void;
}
export default function Button({ title, func }: IButton) {
  return (
    <button className="ButtonNavigation" onClick={() => func()}>
      {title}
    </button>
  );
}
