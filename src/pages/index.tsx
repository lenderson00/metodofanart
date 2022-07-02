import type { NextPage } from 'next'
import Image from 'next/image'
import { ButtonFixed } from '../components/Button'
import useScrollPosition from '@react-hook/window-scroll'
import clsx from 'clsx'
import Link from 'next/link'
import Head from 'next/head'
import { SEO } from '../components/SEO'

const Home: NextPage = () => {

  const scrollY = useScrollPosition()
  return (
  <div className='pt-6 h-screen w-full'>
    <Head> <SEO /> </Head>
    <div className='h-16 w-48 relative mx-auto my-6'>
      <Image src={'/img/logo.png'} objectFit="cover" layout='fill' alt="Logo Método FanArt" />
    </div>
    <div className='container mx-auto max-w-5xl flex-col-reverse flex md:flex-row gap-16 mt-12 px-[5vw] lg:px-0'>
      <div className='flex flex-col gap-4 flex-1 -translate-y-8 sm:translate-y-0'>
        <h1 className='font-bold text-2xl'> Descubra Finalmente o Exato Método para <span>Aprender a Desenhar</span> os seus Personagens de Animes Favoritos, Mesmo se você não Nasceu com o Dom de Desenhar</h1>

        <p><b>Clique no botão abaixo </b> e dê o primeiro passo para descobrir o Método que ajudou mais de 100 mil pessoas de todas as idades a realizarem o sonho de aprender a desenhar.</p>
        <Link href={'https://go.hotmart.com/Y72446213H?ap=5bdf'} >
          <div className='bg-[#EAB215] text-xl font-bold text-white cursor-pointer px-16 py-3 rounded-md shadow-lg shadow-[#b18c28]/20 animated hover:scale-105'>
          Quero Aprender a Desenhar!
          </div>
        </Link>
        <div className='mx-auto -translate-y-2' >
       <Image src={'/img/pay.svg'}  width={250} height={16} alt="Logo Método FanArt"  />
      </div>
      
      </div>
      <div className='h-52 md:w-1/2 md:h-80 shadow-2xl rounded-xl overflow-hidden hover:scale-[101%] animated' >
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
            E ainda estará preparado para:
             </div>
            <ul className='mt-8 text-xl flex gap-4 flex-col'>
              <li>
              Desenhar na frente dos seus amigos e familiares, mostrando a sua nova habilidade artística.
              </li>
              <li>
              Desenhar sem precisar copiar por cima, só olhando conseguirá desenhar qualquer personagem.
              </li>
              <li>
              Recriar no papel todas as melhores cenas e os melhores personagens mais marcantes para você.
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


    <div className='container mx-auto max-w-5xl mt-12 px-[5vw] sm:px-0'>
      <h1 className='font-bold text-center text-4xl'>Apresentação do Curso</h1>
      <p className='text-center mt-4 text-xl'>Aprenda a Desenhar os seus personagens favoritos de anime em 7 dias, mesmo se você não nasceu com o “dom de desenhar”.</p>
      <div className='h-52  md:h-[450px] flex items-center justify-center scale-75 sm:scale-50 md:scale-75 lg:scale-100' >
       <Image src={'/img/boruto1.png'}  width={527} height={450} objectFit='cover' alt="Logo Método FanArt"  />
      </div>
    </div>

    <div className=' mt-12 px-[5vw] sm:px-0 bg-[#f9f5f1] py-12'>
    <div className='container mx-auto max-w-5xl flex flex-col'>
      <h1 className='text-2xl text-bold text-center mb-12 font-bold'>Como esse curso funciona?</h1>
      <div className='flex flex-col md:flex-row gap-8'>
       <div className='flex flex-col bg-white  px-4 py-6 rounded-lg flex-1 text-center items-center'>
            <h1 className='font-extrabold ' >CURSO 100% ONLINE</h1>
            <p className='mt-4'>Assista de qualquer dispositivo: computador, smartphone, tablet</p>
        </div>
        <div className='flex flex-col bg-white  px-8 py-6 rounded-lg flex-1 text-center items-center'>
            <h1 className='font-extrabold '>+35 VIDEO AULAS</h1>
            <p className='mt-4'>Aulas didáticas, com exercícios práticos que desenvolvem a habilidade de desenhar</p>
        </div>
        <div className='flex flex-col bg-white  px-8 py-6 rounded-lg flex-1 text-center items-center'>
            <h1 className='font-extrabold '>ACESSO VITALÍCIO</h1>
            <p className='mt-4'>Você paga uma única vez, e pode acessar o curso para sempre</p>
        </div>
        <div className='flex flex-col bg-white  px-8 py-6 rounded-lg flex-1 text-center items-center'>
            <h1 className='font-extrabold '>LIBERADO 24H/DIA</h1>
            <p className='mt-4'>Assista quando quiser, a qualquer hora </p>
        </div>
      </div>
       
      </div>
    </div>

    <div className='container mx-auto max-w-5xl mt-12 px-[5vw] lg:px-0'>
      <h1 className='font-bold text-center text-4xl pb-8 lg:pb-24'>O que você vai aprender nesse treinamento</h1>

      <Mod 
        number={1}
        title='Analise de imagens'
        text='Nesse módulo você vai aprender como analisar as imagens de um modo diferente das pessoas normais. Evitando os detalhes que acabam passando despercebido e alinhando passo-a-passo os traços que fazem a diferença entre um desenho profissional e amador'
      />
         
         
      <Mod 
      left
        number={2}
        title='Técnicas de esboço'
        text='Nesse módulo você vai aprender as técnicas de esboço que os verdadeiros desenhistas de mangá utilizam. Vou te passar o exato passo-a-passo para você desenvolver o esboço do desenho. Quanto mais assertivo você for no seu esboço, mais bem estruturado seu desenho vai ficar. É uma das etapas mais importantes. '
      />

      
      <Mod 
        number={3}
        title='Anatomia de Rosto + Variações de Ângulo'
        text='Você provavelmente já sofreu tentando desenhar um personagem em posições diferentes. Isso é um desafio comum até mesmo pra desenhistas intermediários.

        Vou mostrar exatamente como você pode variar as posições dos seus personagens favoritos mantendo a proporção e simetria do desenho.'
      />

      
      <Mod 
      left
        number={4}
        title='Anatomia de Corpo e Movimentos'
        text='Sabe quando você trava na hora de fazer a proporção de tamanho de um desenho? Isso vai acabar definitivamente.

        Além da diferença de tamanho entre personagens maiores/maiores e as demais diferenças de idade dos personagens que acabam influenciando em seu tamanho.
        
        Esse módulo é ESSENCIAL para se desenhar com perfeição.'
      />

      
      <Mod 
        number={5}
        title='O segredo de fazer cabelos de anime/mangá…'
        text='Quase todo mundo que já tentou desenhar um anime ou mangá já travou na hora de fazer os cabelos. Parece que eles nunca ficam exatamente como os desenhos originais.

        E nesse módulo você vai saber a exata técnica para fazer cabelos perfeitos do seu anime ou mangá favorito.'
      />

<Mod 
        number={6}
        left
        title='Mãos e pés perfeitos do seu personagem…'
        text='Não adianta seu desenho ficar perfeito se você não saber finalizar as mãos e os pés dos personagens.

        Isso muitas vezes é o detalhe que falta para que todos admirem mais o seu desenho e também o que separa alguém que desenha bem de algém que apenas faz “rostos bem feitos”.'
      />

      <Mod 
        number={7}
        title='Desenhando Roupas dos Personagens'
        text='Aqui vou te ensinar algumas técnicas para desenhar com exatidão as roupas de seus personagens. 

        Mostrando como é possível desenhar cada detalhe da roupa, e as semelhanças de roupas de manga curta/longa, calças, camisetas, e acessórios. '
      />


      <Mod 
      left
        number={8}
        title='Finalizando desenhos com Caneta'
        text='Nesse módulo vou ensinar como eu faço para passar e finalizar meus desenhos com caneta. Ressaltando os traços e os detalhes. 

        Se você quer deixar seus desenhos profissionais, esse módulo é importantíssimo! '
      />

      <Mod 
        number={9}
        title='Introdução a pintura + Luz e Sombra'
        text='Aqui com seu desenho praticamente finalizado, eu ensino um pouco sobre pintura, e algumas técnicas que eu utilizo em todos meus desenhos e pinturas, para seu desenho ficar ainda mais completo. 

        E também vou te ensinar a sombrear o seu desenho. '
      />
      </div>














    <div className='h-32'>

    </div>
    <ButtonFixed isVisible={scrollY > 800} />
  </div>
  )
}

export default Home

type ModProps = {
  number: number
  text: String
  title: String
  left?: boolean
}

const Mod: React.FC<ModProps> = ({number, text, title, left}) => {
  return (

     <div className={clsx('flex gap-8 lg:gap-32  flex-col', left ? 'sm:flex-row-reverse' : 'sm:flex-row')}>
      <div className={clsx('flex flex-col gap-4 flex-1  ')}>
        <h1 className='font-bold text-2xl'> <span>Módulo {number}</span></h1>
        <h1 className='font-bold text-2xl'> {title}</h1>

        <p>{text}</p>
       
      </div>
      <div className='w-80 h-80 relative ' >
      <Image src={`/img/mod${number}.png`} width={421} height={361} layout={'responsive'} alt="Logo Método FanArt" className='self-center'  />
      </div>
     </div>    
  )
}