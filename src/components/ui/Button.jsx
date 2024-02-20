export default function Button({ children, isDisabled, ...props }) {
  const classes = !isDisabled
    ? "bg-primary text-white hover:bg-primary-dark"
    : "bg-neutral-50 text-gray-400 cursor-not-allowed";

  return (
    <button
      disabled={isDisabled}
      {...props}
      type="button"
      className={`px-5 py-4 font-semibold rounded-lg cursor-pointer ${classes}`}
    >
      {children}
    </button>
  );
}
