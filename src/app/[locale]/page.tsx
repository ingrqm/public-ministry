import { useRedirect } from '@/hooks';

export default function Home() {
  const redirect = useRedirect();

  // TODO: replace with real check
  const isLoggedIn = false;

  if (isLoggedIn) {
    redirect('/dashboard');
  } else {
    redirect('/sign-in');
  }

  return null;
}
