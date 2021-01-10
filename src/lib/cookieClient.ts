import { getCookie } from "cookies-next"

export function getCookieClient(){
  const token = getCookie("session")
  return token;
}