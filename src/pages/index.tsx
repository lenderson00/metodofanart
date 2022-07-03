import type { NextPage } from 'next'
import Image from 'next/image'
import { ButtonFixed } from '../components/Button'
import useScrollPosition from '@react-hook/window-scroll'
import clsx from 'clsx'
import Link from 'next/link'
import { SEO } from '../components/SEO'
import { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const ImagesComunidade = [
  '/img/c1.png',
  '/img/c2.png',
  '/img/c3.png',
  '/img/c4.png'
]

const ImagesTest = [
  '/img/t1.png',
  '/img/t2.jpg',
  '/img/t3.png',
  '/img/t4.png',
  '/img/t5.png',
  '/img/t6.png',
  '/img/t7.png',
  '/img/t8.jpg',
  '/img/t9.png',
  '/img/t10.png',
  '/img/t11.png',
  '/img/t12.jpg',
]


const Home: NextPage = () => {

  const scrollY = useScrollPosition()
  
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);



  return (
 <>{ !isSSR && <div className='w-full h-screen pt-6'>
   <SEO />
    <div className='relative w-48 h-16 mx-auto my-6'>
      <Image src={'/img/logo.png'} objectFit="cover" layout='fill' alt="Logo Método FanArt" />
    </div>
    <div className='container mx-auto max-w-5xl flex-col-reverse flex md:flex-row gap-16 mt-12 px-[5vw] lg:px-0'>
      <div className='flex flex-col flex-1 gap-4 -translate-y-8 sm:translate-y-0'>
        <h1 className='text-2xl font-bold'> Descubra Finalmente o Exato Método para <span>Aprender a Desenhar</span> os seus Personagens de Animes Favoritos, Mesmo se você não Nasceu com o Dom de Desenhar</h1>

        <p><b>Clique no botão abaixo </b> e dê o primeiro passo para descobrir o Método que ajudou mais de 100 mil pessoas de todas as idades a realizarem o sonho de aprender a desenhar.</p>
        <Link href={'https://go.hotmart.com/Y72446213H?ap=5bdf'} >
          <div className='bg-[#EAB215] text-xl font-bold text-white cursor-pointer text-center py-3 rounded-md shadow-lg shadow-[#b18c28]/20 animated hover:scale-105'>
          Quero Aprender a Desenhar!
          </div>
        </Link>
        <div className='mx-auto -translate-y-2' >
       <Image src={'/img/pay.svg'}  width={250} height={16} alt="Logo Método FanArt"  />
      </div>
      
      </div>

      <div className='h-52 md:w-1/2 md:h-80 shadow-2xl rounded-xl overflow-hidden hover:scale-[101%] animated relative' >
     
       <BlurImage src={'/img/hero.png'} />
      
      </div>
     
    </div>


    <div className='bg-[#f9f5f1] mt-16 py-16 flex flex-col gap-8'>
      <div className='container mx-auto max-w-5xl  flex flex-col px-[5vw] lg:px-0'>
        <div className='flex flex-col gap-16 md:flex-row '>
          <div className=''>   
            <div className=' text-[#5c4b1c] text-2xl md:text-3xl font-bold w-full max-w-2xl '>
            Ao aplicar o sistema completo do Método Fan Art 3.0 você será capaz de:
             </div>
            <ul className='flex flex-col gap-4 mt-8 text-xl'>
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
          <div className='relative overflow-hidden shadow-2xl cursor-pointer h-60 md:w-1/2 md:h-64 rounded-xl hover:scale-105 animated' >
       <BlurImage src={'/img/eron.png'} />
      </div>
        </div>


        <div className='flex flex-col gap-16 mt-16 md:flex-row'>
        <div className='relative overflow-hidden shadow-2xl cursor-pointer h-60 md:w-1/2 md:h-64 rounded-xl hover:scale-105 animated' >
       <BlurImage src={'/img/lucy.png'}  />
      </div>
          <div>  
            <div className=' text-[#5c4b1c]  text-2xl md:text-3xl font-bold w-full max-w-2xl '>
            E ainda estará preparado para:
             </div>
            <ul className='flex flex-col gap-4 mt-8 text-xl'>
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


        <div className='flex flex-col gap-8 mt-16'> 
            <div className=' text-[#5c4b1c] md:text-center text-2xl md:text-3xl font-bold w-full max-w-3xl mx-auto '>
            Você conseguirá tudo isso, independente se você:
             </div>
            <ul className='flex flex-col gap-4 text-xl md:text-center'>
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


    <div className='container mx-auto max-w-5xl mt-12 px-[5vw] lg:px-0'>
      <h1 className='text-4xl font-bold text-center'>Apresentação do Curso</h1>
      <p className='mt-4 text-xl text-center'>Aprenda a Desenhar os seus personagens favoritos de anime em 7 dias, mesmo se você não nasceu com o “dom de desenhar”.</p>
      <div className='h-52  md:h-[450px] flex items-center justify-center scale-75 sm:scale-50 md:scale-75 lg:scale-100' >
       <Image src={'/img/boruto1.png'}  width={527} height={450} objectFit='cover' alt="Logo Método FanArt"  />
      </div>
    </div>

    <div className=' mt-12 px-[5vw] lg:px-0 bg-[#f9f5f1] py-12'>
    <div className='container flex flex-col max-w-5xl mx-auto'>
      <h1 className='mb-12 text-2xl font-bold text-center text-bold'>Como esse curso funciona?</h1>
      <div className='flex flex-col gap-8 md:flex-row'>
       <div className='flex flex-col items-center flex-1 px-4 py-6 text-center bg-white rounded-lg'>
            <h1 className='font-extrabold ' >CURSO 100% ONLINE</h1>
            <p className='mt-4'>Assista de qualquer dispositivo: computador, smartphone, tablet</p>
        </div>
        <div className='flex flex-col items-center flex-1 px-8 py-6 text-center bg-white rounded-lg'>
            <h1 className='font-extrabold '>+35 VIDEO AULAS</h1>
            <p className='mt-4'>Aulas didáticas, com exercícios práticos que desenvolvem a habilidade de desenhar</p>
        </div>
        <div className='flex flex-col items-center flex-1 px-8 py-6 text-center bg-white rounded-lg'>
            <h1 className='font-extrabold '>ACESSO VITALÍCIO</h1>
            <p className='mt-4'>Você paga uma única vez, e pode acessar o curso para sempre</p>
        </div>
        <div className='flex flex-col items-center flex-1 px-8 py-6 text-center bg-white rounded-lg'>
            <h1 className='font-extrabold '>LIBERADO 24H/DIA</h1>
            <p className='mt-4'>Assista quando quiser, a qualquer hora </p>
        </div>
      </div>
       
      </div>
    </div>

    <div className='container mx-auto max-w-5xl mt-12 px-[5vw] lg:px-0'>
      <h1 className='pb-8 text-4xl font-bold text-center lg:pb-24'>O que você vai aprender nesse treinamento</h1>

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

    <div className='mt-4 px-[5vw] lg:px-0 bg-[#f9f5f1] py-12'>
    <h1 className='text-2xl font-bold text-center'>Além do curso completo <br /> vou disponibilizar <span>mais 4 Bônus</span></h1>
    <div className='container max-w-5xl pb-16 mx-auto mt-12'>
    <div className='mt-12'>
      <Bonus
        value={'R$ 147,00'} 
        number={1}
        title='O segredo de desenhar olhos'
        text='Aqui nesse bônus, vou te ensinar a desenhar olhos com perfeição. Nele você aprenderá:'
        items={['O segredo do traço perfeito de olhos. ', ' Dando vida aos olhos, e expressando emoções. ', 'Exercícios práticos para acelerar o aprendizado de olhos. ']}
      />
    </div>

    <div className='mt-8'>
      <Bonus
        value={'R$ 147,00'} 
        left
        number={2}
        title='O segredo de desenhar olhos'
        text='Aqui nesse bônus, vou te ensinar a desenhar olhos com perfeição. Nele você aprenderá:'
        items={['O segredo do traço perfeito de olhos. ', ' Dando vida aos olhos, e expressando emoções. ', 'Exercícios práticos para acelerar o aprendizado de olhos. ']}
      />
    </div>

    <div className='mt-8'>
      <Bonus
        value={'R$ 147,00'} 
        number={3}
        title='O segredo de desenhar olhos'
        text='Aqui nesse bônus, vou te ensinar a desenhar olhos com perfeição. Nele você aprenderá:'
        items={['O segredo do traço perfeito de olhos. ', ' Dando vida aos olhos, e expressando emoções. ', 'Exercícios práticos para acelerar o aprendizado de olhos. ']}
      />
    </div>

    <div className='mt-8'>
      <Bonus
      left
        value={'R$ 147,00'} 
        number={4}
        title='O segredo de desenhar olhos'
        text='Aqui nesse bônus, vou te ensinar a desenhar olhos com perfeição. Nele você aprenderá:'
        items={['O segredo do traço perfeito de olhos. ', ' Dando vida aos olhos, e expressando emoções. ', 'Exercícios práticos para acelerar o aprendizado de olhos. ']}
      />
    </div>
      <div className='flex items-center justify-center mt-12'>
        <div className='relative h-48 w-[500px]' >
          <BlurImage src={'/img/soma.png'} contain  />
        </div>
      </div>

    </div>
   

    </div>


    <div className='container mx-auto max-w-5xl mt-12 pb-16 px-[5vw] lg:px-0'>
      <h1 className='text-2xl font-bold text-center'>Você <span>fará parte</span>  da:</h1>
      <div className='flex items-center justify-center'>
        <div className='relative h-48 scale-[150%] w-60' >
          <BlurImage src={'/img/comunidade.png'} contain  />
        </div>
      </div>
      <p className='mb-2 text-center'> A Comunidade Fanart é a primeira e única comunidade de desenhistas de anime do Brasil.</p>
      <p className='mb-2 text-center'>Um dos passos mais importantes no processo de aprender a desenhar é o acompanhamento! </p>
      <p className='max-w-xl mx-auto mb-2 text-center'> E por isso professora Mayara Rodrigues junto com 7 instrutores,  irão te ajudar 24 horas por dia, 7 dias por semana!</p>
      
      <h1 className='mt-8 text-2xl font-bold text-center'>Ao entrar na comunidade você poderá:</h1>
      <div className='mt-6'>
        <ul className='flex flex-col gap-4 text-center'>
          <li>Enviar os seus desenhos para serem analisados e avaliados, para você descobrir onde você está errando</li>
          <li>Enviar qualquer dúvida que você tiver durante as aulas do curso</li>
          <li>Participar de sorteios e competições exclusivas entre os alunos</li>
          <li>Se motivar, tendo o apoio de milhares de alunos</li>
        </ul>
      </div>
    </div>

    <div className='mt-4 px-[5vw] lg:px-0 bg-[#f9f5f1] py-12'>
    <div className='container max-w-5xl pb-8 mx-auto mt-12'>
    <h1 className='pb-12 text-2xl font-bold text-center'>Quem é sua professora Mayara?</h1>
      <div className='flex flex-col gap-8 lg:gap-16 md:flex-row'>
        <div className='relative w-full md:w-1/2 h-[450px] overflow-visible' >
        <BlurImage src={'/img/26.png'}  />
        </div>
        <div className='w-full text-center md:w-1/2 md:text-left'>
          <p className='pb-2 '>Hoje, com <b>+100 mil alunos no brasil e no mundo e +1 milhão de inscritos no Youtube</b>. Mayara, descobriu que sua missão é reacender este sonho que muitas pessoas tinham e torná-lo uma realidade.</p>
          <p  className='pb-2 '>Depois de anos, Mayara teve a nítida percepção de que métodos tradicionais de ensino causavam frustação e desistência</p>
          <p className='pb-2 '>Foi então que a sua jornada para desenvolver <b>um método realmente inovador e inspirador</b> começo.</p>
          <p className='pb-2 '>Focada em sua missão de ajudar mais de 200 mil pessoas até 2025 a realizar este antigo sonho que é aprender a desenhar, mesmo se não nasceu com o “dom de desenhar”.</p>
          <p className='pb-2 font-bold '>Surgiu assim o Método Fan Art 3.0</p>
        </div>
      </div>
      </div>
    </div>

    <div className='container mx-auto max-w-5xl mt-12 px-[5vw] lg:px-0 pb-8 text-center'>
     
      <h1 className='pb-12 text-2xl font-bold text-center'>Por quê o Método Fanart funciona?</h1>
      <p className='pb-2'>O Método Fanart foi criado com uma sequência de <b>exercícios comprovados cientificamente</b>, que quando realizados, desenvolvem a habilidade de percepção, coordenação e criatividade nos alunos. </p>
      <p className='pb-2'>É bem simples, <b>basta você aprender os exercícios e treinar de 15 a 20 minutos por dia</b>, 
e logo você verá a evolução nos detalhes e qualidade de seus desenhos.</p>
      
      <div className='flex items-center justify-center w-full mt-8'>
        <div className='relative h-64 overflow-hidden rounded-lg shadow-xl w-96' >
          <BlurImage src={'/img/exerci.png'}  />
        </div>
      </div>
      
      <p className='pb-2 mt-12'>E é por isso que aplicando o passo-a-passo completo do Método Fanart 3.0, você irá desenvolver todos os requisitos necessários para desenhar de verdade, sem precisar copiar por cima um desenho.</p>
      <p className='pb-2'>Você irá pegar um papel, um lápis e desenhar qualquer personagem que vier em sua mente.  </p>
      <p className='pb-2 font-bold'>ESSA É A FÓRMULA PARA DESENVOLVER A HABILIDADE DE DESENHAR DO ZERO, MESMO QUE VOCÊ NÃO TENHA NASCIDO COM O DOM DE DESENHAR! </p>

      <div className='mt-8'>
        <GalleryComunity srcs={ImagesComunidade} />
      </div>
    
    </div>

    <div className='mt-4 px-[5vw] lg:px-0 bg-[#1f1b16] py-12 text-white'>
      <div className='container mx-auto max-w-5xl px-[5vw] lg:px-0' >
      <h1 className='pb-12 text-2xl font-bold text-center'> Veja alguns desenhos dos <span> Meus alunos de Todas as Idades</span> após realizarem o Método Fanart 3.0</h1>

      <GalleryTest srcs={ImagesTest} />
      </div>
    </div>

    <div className='container mx-auto max-w-5xl mt-12 px-[5vw] lg:px-0'>
      <div className='flex items-center justify-center'>
        <div className='relative h-[200px] w-96' >
          <BlurImage src={'/img/oferta.png'}  />
        </div>
      </div>
      <div className="relative w-full h-48 overflow-hidden rounded-lg md:h-96 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={'/img/bonus.png'}
          layout="fill"
          objectFit="contain"
          className={clsx(
            'duration-700 ease-in-out group-hover:opacity-75',
          )}
        />
      </div>
      <p>
      Porém, por Tempo Limitado, você poderá fazer a inscrição por um valor especial de lançamento, por apenas: 
      </p>
    </div>

    <div className='container mx-auto max-w-5xl mt-12 px-[5vw] lg:px-0'>
    <div className='flex items-center justify-center'>
        <div className='relative h-[200px] w-96' >
          <BlurImage src={'/img/39.png'}  />
        </div>
      </div>
      <Link href={'https://go.hotmart.com/Y72446213H?ap=5bdf'}>
      
      <div className='flex items-center justify-center cursor-pointer'>
        <div className='relative h-[200px] w-96' >
          <BlurImage src={'/img/40.png'}  />
        </div>
      </div>
      </Link>

      <p className='py-6 text-center'>
      <b>Menos de R$ 1 por dia</b> e tenha acesso a poderosas ferramentas e conteúdos para aprender a desenhar seus personagens de anime favoritos em tempo recorde.
      </p>
      <p className='max-w-xl pb-6 mx-auto text-center'>
      <b className='text-red-500'>AVISO</b> : O número de vagas para essa turma está se esgotando.

A qualquer momenro essa página pode sair do ar.
      </p>
    </div>

    <div className='bg-[#1f1b16] '>
      <div className='container mx-auto max-w-5xl mt-12 px-[5vw] lg:px-0 py-12 text-white'>
        
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className='flex items-center justify-center'>
            <div className='relative w-48 h-48 px-24 ' >
              <BlurImage src={'/img/41.png'}  />
            </div>
          </div>
          <div className='w-full text-center md:text-left'>
          <h1 className='pb-3 text-2xl font-bold text-[#d5ac3a] '>GARANTIA INCONDICIONAL DE 7 DIAS</h1>
          <h1 className='pb-3 text-2xl font-bold'>Fique 100% Satisfeito Ou Peça Seu Dinheiro De Volta.</h1>
            <p className='pb-2 '>Você tem 7 dias para acessar o conteúdo e se ainda achar que o curso não é para você, basta pedir reembolso e devolverei seu dinheiro de forma integral. Sem perguntar e questionamentos.</p>
            <p className='pb-2 font-bold '>Nesse caso, os riscos são todos meus.</p>
          </div>
        </div>
      </div>
    </div>


    <div className='container mx-auto max-w-5xl mt-12 px-[5vw] lg:px-0 mb-16 text-center lg:text-left'>
      <div className='flex items-center justify-center mb-12'>
        <div className='relative h-[104px] w-96' >
          <BlurImage src={'/img/42.png'}  />
        </div>
      </div>
      <p className='mb-2'>✅ É Seguro realizar a compra do curso Método Fan Art 3.0?</p>
      <p className='mb-2'>✅ Você realmente devolve o dinheiro caso eu não goste do curso?</p>
      <p className='mb-2'>✅ Eu posso pagar em até 10x no cartão de crédito?</p>
      <p className='mb-2'>✅ Eu posso pagar em 2 cartões de créditos diferentes?</p>
      <p className='mb-2'>✅ Terei acesso imediato á uma área exclusiva como aluno(a) do curso? </p>
      <p className='mb-2'>✅ Ganharei acesso à aulas em vídeo + audio + texto?</p>
      <p className='mb-2'>✅ Ao finalizar minha compra à vista ganho acesso imediato ao Grupo dos Alunos?</p>
      <p className='mb-2'>✅ É verdade que já na primeira semana eu [ou meu filho(a)] consigo ver resultados das aplicações práticas do curso?</p>
      <p className='mb-2'>✅ Eu sinto que não tenho dom e nem talento para desenhar. Mesmo assim consigo desenhar meus personagens favoritos com qualidade e confiança?</p>
      <p className='mb-2'>✅ As técnicas ensinadas no curso servem para o meu filho (a) que ainda é criança e tem entre 8 à 16 anos?</p>
      <p className='mb-2'>✅ As técnicas ensinadas no curso servem para mim que sou adulto e sinto que passei da idade de aprender?</p>
    </div>

    <div className='relative w-48 h-16 mx-auto my-6 mb-16'>
      <Image src={'/img/logo.png'} objectFit="cover" layout='fill' alt="Logo Método FanArt" />
    </div>

    <div className='mt-6 px-[5vw] lg:px-0 bg-[#f9f5f1] py-12 text-center z-40'>
   
    <p>Todos os Direitos Reservados - Método Fanart</p>
    <p>Whatsapp de Atendimento: (21) 91168-7140</p>
    <Link href={'/politica-de-privacidade'} className="bg-red-300 ">
      <button className='cursor-pointer'>Politica de Privacidade - Termos de uso</button>
    </Link>
    
    </div>

    <div className='h-36 bg-[#f9f5f1] '>

    </div>
    <ButtonFixed isVisible={scrollY > 800} />
  </div> } </> 
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
        <h1 className='text-2xl font-bold'> <span>Módulo {number}</span></h1>
        <h1 className='text-2xl font-bold'> {title}</h1>

        <p>{text}</p>
       
      </div>
      <div className='flex items-center justify-center'>
        <div className='relative w-80 h-80 ' >
        <Image src={`/img/mod${number}.png`} width={421} height={361} layout={'responsive'} alt="Logo Método FanArt" className='self-center'  />
        </div>
      </div>
      
     </div>    
  )
}

type BonusProps = {
  number: number
  text: String
  items?: string[]
  value: string
  title: String
  left?: boolean
}

const Bonus: React.FC<BonusProps> = ({number, text, title, left, items, value}) => {
  return (

     <div className={clsx('flex gap-8 lg:gap-32  flex-col bg-white px-8 py-8 rounded-2xl', left ? 'sm:flex-row-reverse' : 'sm:flex-row')}>
      <div className={clsx('flex flex-col gap-4 flex-1 justify-center  text-sm')}>
        <h1 className='text-2xl font-bold'> <span>{title}</span></h1>

        <p >{text}</p>

        {
          items && <>
            <ul>
              {items.map(item => {
                return (
                  <li key={item}>✔️ {item}</li>
                ) 
              })}
            </ul>
          </>
        }
        <p> Vendido separadamente por: <span className='font-bold text-[#d5ac3a]'>{value}</span></p>
      </div>
      <div className='flex items-center justify-center'>
        <div className='relative w-64 h-64 ' >
        <Image src={`/img/bonus${number}.png`} objectFit='contain'  layout={'fill'} alt="Logo Método FanArt" className='self-center'  />
        </div>
      </div>
      
     </div>    
  )
}


const BlurImage: React.FC<{src: string, contain?: boolean}> = ({src, contain }) => {
  const [isLoading, setLoading] = useState(true)

  return (

      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={src}
          layout="fill"
          objectFit={contain ? 'contain' : 'fill'}
          className={clsx(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
  
  )
}


const GalleryComunity: React.FC<{srcs: string[]}> = ({ srcs }) => {
  return (
    <div className="gap-8 py-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 aspect-video">
        {srcs.map((src) => (
          <ImageComunity src={src} key={src} />
        ))}
    </div>
  )
}

const GalleryTest: React.FC<{srcs: string[]}> = ({ srcs }) => {
  return (
    <div className="gap-8 py-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
        {srcs.map((src) => (
          <ImageCard src={src} key={src} />
        ))}
    </div>
  )
}

const ImageCard: React.FC<{src: string}> = ({ src }) => {
  const [isOpen, setOpen] = useState(false)

  const [index, setIndex] = useState(ImagesTest.indexOf(src))
  
 return (
  <div className="relative mb-6 shadow-2xl cursor-pointer shadow-black/10" onClick={() => {
    setOpen(true)
  }}>
    <img className="overflow-hidden rounded-lg" src={src} />
    {isOpen && (
          <Lightbox
            mainSrc={ImagesTest[index]}
            enableZoom={false}
            onImageLoad={() => console.log(index + ' comu')}
            nextSrc={ImagesTest[(index + 1) % ImagesTest.length]}
            prevSrc={ImagesTest[(index + ImagesTest.length - 1) % ImagesTest.length]}
            onCloseRequest={() =>  setOpen(false)}
            onMovePrevRequest={() => setIndex((index + ImagesTest.length - 1) % ImagesTest.length) }
            onMoveNextRequest={() => setIndex((index + ImagesTest.length + 1) % ImagesTest.length) }
          />
        )}
  </div>
 )
}



const ImageComunity: React.FC<{src: string}> = ({ src }) => {
  const [isOpen, setOpen] = useState(false)

  const [index, setIndex] = useState(ImagesComunidade.indexOf(src))
  
 return (
  <div className="relative mb-6 shadow-2xl cursor-pointer shadow-black/10" onClick={() => {
    setOpen(true)
  }}>
    <img className="overflow-hidden rounded-lg" src={src} />
    {isOpen && (
          <Lightbox
            mainSrc={ImagesComunidade[index]}
            enableZoom={false}
            onImageLoad={() => console.log(index + ' comu')}
            mainSrcThumbnail={ImagesComunidade[index]}
            nextSrc={ImagesComunidade[(index + 1) % ImagesComunidade.length]}
            prevSrc={ImagesComunidade[(index + ImagesComunidade.length - 1) % ImagesComunidade.length]}
            onCloseRequest={() =>  setOpen(false)}
            onMovePrevRequest={() => setIndex((index + ImagesComunidade.length - 1) % ImagesComunidade.length) }
            onMoveNextRequest={() => setIndex((index + ImagesComunidade.length + 1) % ImagesComunidade.length) }
          />
        )}
  </div>
 )
}
