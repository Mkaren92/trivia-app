export default function Title({ children, classes, ...props }) {
  return (
    <h1 className={`text-5xl font-bold text-primary ${classes}`} {...props}>
      {children}
    </h1>
  );
}
