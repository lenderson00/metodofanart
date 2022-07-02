
import { CTA } from './CTA'
import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion"

type Props = {
  isVisible: boolean
}
export const ButtonFixed: React.FC<Props> = ({ isVisible }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <AnimatePresence initial={false}> {isVisible && <motion.div className='fixed bottom-0   left-0 right-0  sm:px-0 '
    initial={{ y: 300, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 1}}
    >
    <div className='bg-gradient-to-t from-[#f9f5f1]  to-transparent h-24'>

    </div>
    
    <div className='  font-semibold bg-[#f9f5f1] w-full'>
      <div className='container mx-auto max-w-5xl w-full  flex  flex-col lg:flex-row  pb-8 pt-4 px-[5vw] gap-5'>
      <h1 className='hidden md:block max-w-xl w-full '>

<b className='font-extrabold'>Clique no botão ao lado</b> e dê o primeiro passo para descobrir o Método que ajudou mais de 100 mil pessoas de todas as idades a realizarem o sonho de aprender a desenhar.

</h1>
        <div className='flex flex-col w-full md:w-[60%]'>
        <CTA />
        <div className='mx-auto mt-2' >
       <Image src={'/img/pay.svg'}  width={250} height={16} alt="Logo Método FanArt"  />
      </div>
        </div>
      </div>
    </div>
    </motion.div> } </AnimatePresence>
  ) 

}
