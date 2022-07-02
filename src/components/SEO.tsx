import Head from 'next/head'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  keywords?: string[]
}

export const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>{ title ?? 'Método Fanart 3.0 | Aprenda a Desenhar'}</title>
      <meta charSet="utf-8" />
      <meta name="title" content="Método Fanart 3.0" />
      <meta name="description"
          content="Criado especialmente para os fãs do desenho animado, o Método Fanart disponibiliza toda a estrutura utilizada pelos criadores dos personagens, para que você consiga desenhar perfeitamente." />
      <meta name="author" content="Mayara Rodrigues " />
      <meta name="keywords"
          content="Metodo Fanart, fanart, fan art, aprender a desenhar, desenho" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="pt-br" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#EAB215" />

      <meta name="image" content="img/favicon.png" />

      <meta itemProp="name" content="Método Fanart 3.0" />
      <meta itemProp="description"
          content="Criado especialmente para os fãs do desenho animado, o Método Fanart disponibiliza toda a estrutura utilizada pelos criadores dos personagens, para que você consiga desenhar perfeitamente." />
      <meta itemProp="image" content="img/hero.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Método Fanart 3.0" />
      <meta name="twitter:description"
          content="Criado especialmente para os fãs do desenho animado, o Método Fanart disponibiliza toda a estrutura utilizada pelos criadores dos personagens, para que você consiga desenhar perfeitamente." />
      <meta name="twitter:site" content="metodofanart" />
      <meta name="twitter:creator" content="metodofanart" />
      <meta name="twitter:image:src" content="img/hero.png" />

      <meta name="og:title" content="Método Fanart 3.0" />
      <meta name="og:description"
          content="Criado especialmente para os fãs do desenho animado, o Método Fanart disponibiliza toda a estrutura utilizada pelos criadores dos personagens, para que você consiga desenhar perfeitamente." />
      <meta name="og:image" content="img/hero.png" />
      <meta name="og:url" content="https://methodofanart.com.br/" />
      <meta name="og:site_name" content="Método FanArt" />
      <meta name="og:locale" content="pt_br" />
      <meta name="og:type" content="website" />

      <link rel="icon" href="img/favicon.png" />
      <link rel="apple-touch-icon" href="img/favicon.png" />
    </Head>
  )
}