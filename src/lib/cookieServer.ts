import { cookies } from 'next/headers'

export function getCookieServer(){
  const token = cookies().get("session")?.value;

  return token || null;
}