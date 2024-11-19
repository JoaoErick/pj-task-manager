function Button(props) {
  return (
    <button {...props} className="border border-zinc-700 p-2 rounded-md text-yellow-500">
      {props.children}
    </button>
  );
}

export default Button;
