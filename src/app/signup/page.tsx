import Image from "next/image"
import Link from "next/link"
import styles from '../page.module.scss'
import logoImg from '/public/logo.svg'
import { api } from '@/services/api'
import { redirect } from 'next/navigation'

export default function Signup(){

  async function handleRegister(formData: FormData){
    "use server"

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    if( name === "" || email === "" || password === ""){
      console.log("PREENCHA TODOS OS CAMPOS")
      return;
    }

    try{
      await api.post("/users", {
        name,
        email,
        password
      })

    }catch(err){
      console.log("error")
      console.log(err)
    }

    redirect("/")
  }

  return(
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo da pizzaria"
        />

        <section className={styles.login}>
          <h1>Criando sua conta</h1>
          <form action={handleRegister}>
            <input 
              type="text"
              required
              name="name"
              placeholder="Digite seu nome..."
              className={styles.input}
            />

            <input 
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input 
              type="password"
              required
              name="password"
              placeholder="***********"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Cadastrar
            </button>
          </form>

          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça o ligin
          </Link>

        </section>

      </div> 
    </>
  )
}