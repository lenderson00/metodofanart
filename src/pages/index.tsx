import type { NextPage } from 'next'
import Image from 'next/image'
import { ButtonFixed } from '../components/Button'
import useScrollPosition from '@react-hook/window-scroll'

const Home: NextPage = () => {

  const scrollY = useScrollPosition()
  return (
  <div className='pt-6 h-screen w-full'>
    
    <div className='h-16 w-48 relative mx-auto my-6'>
      <Image src={'/img/logo.png'} objectFit="cover" layout='fill' alt="Logo Método FanArt" />
    </div>
    <div className='container mx-auto max-w-5xl flex-col-reverse flex md:flex-row gap-16 mt-12 px-[5vw] sm:px-0'>
      <div className='flex flex-col gap-4 flex-1 -translate-y-8 sm:translate-y-0'>
        <h1 className='font-bold text-2xl'> Descubra Finalmente o Exato Método para <span>Aprender a Desenhar</span> os seus Personagens de Animes Favoritos, Mesmo se você não Nasceu com o Dom de Desenhar</h1>

        <p><b>Clique no botão abaixo </b> e dê o primeiro passo para descobrir o Método que ajudou mais de 100 mil pessoas de todas as idades a realizarem o sonho de aprender a desenhar.</p>
        <button className='bg-[#EAB215] text-xl font-bold text-white px-16 py-3 rounded-md shadow-lg shadow-[#b18c28]/20 animated hover:scale-105'>
          Quero Desenhar Agora!
        </button>
        <div className='mx-auto -translate-y-2' >
       <Image src={'/img/pay.svg'}  width={250} height={16} alt="Logo Método FanArt"  />
      </div>
      
      </div>
      <div className='h-52 md:w-1/2 md:h-80 shadow-2xl rounded-xl overflow-hidden hover:scale-105 cursor-pointer animated' >
       <Image src={'/img/hero.png'}  width={612} height={400} alt="Logo Método FanArt"  />
      </div>
    </div>


    <div className='bg-[#f9f5f1] mt-16 py-16 flex flex-col gap-8'>
      <div className='container mx-auto max-w-5xl  flex flex-col px-[5vw] sm:px-0'>
        <div className='flex gap-16 flex-col md:flex-row '>
          <div>  
            <div className=' text-[#5c4b1c] text-2xl md:text-3xl font-bold w-full max-w-2xl '>
            Ao aplicar o sistema completo do Método Fan Art 3.0 você será capaz de:
             </div>
            <ul className='mt-8 text-xl flex gap-4 flex-col'>
              <li>
              Pegar uma folha, um lápis e desenhar qualquer personagem de anime em poucos minutos.
              </li>
              <li>
              Entender a estrutura usada pelos criadores dos personagens para desenhar de forma perfeita.
              </li>
              <li>
              Ter a habilidade de desenhar em poucas semanas, diferentes de escolas tradicionais que demoram anos.
              </li>
            </ul>

          </div>
          <div className='h-60 md:w-1/2 md:h-64 shadow-2xl rounded-xl overflow-hidden hover:scale-105 cursor-pointer animated' >
       <Image src={'/img/eron.png'}  width={612} height={460} alt="Logo Método FanArt"  />
      </div>
        </div>


        <div className='flex gap-16 mt-16 flex-col md:flex-row'>
        <div className='h-60 md:w-1/2 md:h-64 shadow-2xl rounded-xl overflow-hidden hover:scale-105 cursor-pointer animated' >
       <Image src={'/img/lucy.png'}  width={612} height={460} alt="Logo Método FanArt"  />
      </div>
          <div>  
            <div className=' text-[#5c4b1c]  text-2xl md:text-3xl font-bold w-full max-w-2xl '>
            Ao aplicar o sistema completo do Método Fan Art 3.0 você será capaz de:
             </div>
            <ul className='mt-8 text-xl flex gap-4 flex-col'>
              <li>
              Pegar uma folha, um lápis e desenhar qualquer personagem de anime em poucos minutos.
              </li>
              <li>
              Entender a estrutura usada pelos criadores dos personagens para desenhar de forma perfeita.
              </li>
              <li>
              Ter a habilidade de desenhar em poucas semanas, diferentes de escolas tradicionais que demoram anos.
              </li>
            </ul>

          </div>
          
        </div>


        <div className='flex gap-8 mt-16 flex-col'> 
            <div className=' text-[#5c4b1c] md:text-center text-2xl md:text-3xl font-bold w-full max-w-3xl mx-auto '>
            Você conseguirá tudo isso, independente se você:
             </div>
            <ul className='text-xl flex gap-4 flex-col md:text-center'>
              <li>
              Não nasceu com o “dom de desenhar”.
              </li>
              <li>
              Acredita que não tem idade para aprender (Temos alunos de 8 até 40 anos).
              </li>
              <li>
              Já tentou de tudo, até mesmo entrar em uma escola tradicional de desenho.
              </li>
              <li>
              E até mesmo caso você secretamente se sabote por acreditar (lá no fundo) que não é bom suficiente ou que nunca conseguirá aprender a desenhar seus personagens favoritos.              </li>
            </ul>
        </div>
      </div>
    </div>
    <div className='h-32'>

    </div>
    <ButtonFixed isVisible={scrollY > 800} />
  </div>
  )
}

export default Home
