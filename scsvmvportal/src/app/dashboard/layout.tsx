export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* You can add sidebar/header here if you want */}
      {children}
    </div>
  )
}
