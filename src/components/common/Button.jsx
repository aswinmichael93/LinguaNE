export default function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-6 py-3 rounded-lg bg-orange-500 text-white"
    >
      {children}
    </button>
  );
}
