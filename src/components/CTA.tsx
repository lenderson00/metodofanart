import Link from "next/link"
import { click } from "./event"
export const CTA = () => {
  return (
    <Link href={'https://go.hotmart.com/Y72446213H?ap=5bdf'} onClick={ () => {
     click()
    }} >
    <button className='bg-[#EAB215] font-bold text-white px-4 py-2 w-full rounded-md shadow-lg shadow-[#b18c28]/20 animated hover:scale-105'>
      Quero Desenhar Agora!
    </button>
    </Link>
  )

}