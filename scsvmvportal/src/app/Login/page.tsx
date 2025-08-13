// src/app/login/page.tsx

import type { Metadata } from 'next';
import LoginForm from '@/components/LoginForm'; // Import our new component

// Export metadata from the Server Component
export const metadata: Metadata = {
  title: 'Student Portal Login',
};

// This is now a simple Server Component that renders the form
export default function LoginPage() {
  return <LoginForm />;
}