export default function Container({ children, ...props }) {
  return (
    <div {...props} className="container text-center mx-auto py-32">
      {children}
    </div>
  );
}
