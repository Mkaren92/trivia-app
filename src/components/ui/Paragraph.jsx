export default function Paragraph({ children, classes, ...props }) {
  return (
    <p className={`text-3xl font-bold text-slate-900 ${classes}`} {...props}>
      {children}
    </p>
  );
}
