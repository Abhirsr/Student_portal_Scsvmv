export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Common layout for /dashboard pages */}
      {children}
    </div>
  );
}
