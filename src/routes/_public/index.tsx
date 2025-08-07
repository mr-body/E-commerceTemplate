import { ModeToggle } from '@/components/mode-toggle'
import { NavigationMenuDemo } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/auth-context'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Heart, Search, ShoppingCart } from 'lucide-react'

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from 'react'
import Footer from '@/components/footer-page'

export const Route = createFileRoute('/_public/')({
  component: RouteComponent,
})


const produtos = [
  {
    id: 1,
    nome: "Tênis Nike Flex Runner 4",
    categoria: "Calçados",
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c43482e-8fc1-45f6-8c9a-4e689c6738ba/FLEX+RUNNER+4+%28PS%29.png"
  },
  {
    id: 2,
    nome: "Fones de Ouvido Oraimo FreePods 3C",
    categoria: "Eletrônicos",
    url: "https://cdn-img.oraimo.com/fit-in/600x600/AO/product/2024/03/14/oraimo-FreePods3C-12.jpg"
  },
  {
    id: 3,
    nome: "Headset Bluetooth Oraimo OEB-E30D",
    categoria: "Eletrônicos",
    url: "https://manuals.plus/wp-content/uploads/2023/02/oraimo-OEB-E30D-Bluetooth-Wireless-Headset-product.png"
  },
  {
    id: 4,
    nome: "Fones de Ouvido Estéreo Compactos",
    categoria: "Acessórios",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaN8C_2SEra_up4xzgC5zY9IAJt9TjV6JAw&s"
  }
];

const productsList = [
  {
    id: 1,
    nome: "Tênis Nike Flex Runner 4",
    categoria: "Calçados",
    price: 249.90,
    url: "https://adaptive-images.uooucdn.com.br/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a22369-ogxys3lhdz0/pv/6d/af/f7/9c800b8b4167db22d34f211dda.jpg"
  },
  {
    id: 2,
    nome: "Fones de Ouvido Oraimo FreePods 3C",
    categoria: "Eletrônicos",
    price: 199.90,
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6105318-3c83-4836-ab5b-96f2cd95de00/AIR+ZOOM+PEGASUS+41.png"
  },
  {
    id: 3,
    nome: "Headset Bluetooth Oraimo OEB-E30D",
    categoria: "Eletrônicos",
    price: 229.90,
    url: "https://manuals.plus/wp-content/uploads/2023/02/oraimo-OEB-E30D-Bluetooth-Wireless-Headset-product.png"
  },
  {
    id: 4,
    nome: "Fones de Ouvido Estéreo Compactos",
    categoria: "Acessórios",
    price: 99.90,
    url: "https://cdnv2.moovin.com.br/iriacalcados/imagens/produtos/det/tenis-nike-air-max-ap-preto--3b57407d094672b0de3207c49a730b1c.jpg"
  },
  {
    id: 5,
    nome: "Smartwatch Amazfit Bip 3",
    categoria: "Wearables",
    price: 349.90,
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1c1e180a-0063-4348-bada-88304e53639d/ACG+RUFUS.png"
  },
  {
    id: 6,
    nome: "Bolsa Feminina Couro Sintético",
    categoria: "Moda",
    price: 189.90,
    url: "https://letlor.com.br/wp-content/uploads/2023/11/Tenis-Atacado-e-Varejo-Fornecedor-Distribuidora-de-Tenis-Sapato-Botas-e-Calcados-Masculino-Feminino-Nike-Jordan-Shox-12-Molas-Air-Max-Adidas-Porto-Alegre-Rio-Grande-Do-Sul-1farft.jpg"
  },
  {
    id: 7,
    nome: "Mochila Notebook Executiva",
    categoria: "Acessórios",
    price: 219.90,
    url: "https://tfdfjz.vtexassets.com/arquivos/ids/314163/tenis-casual-nike-feminino-court-vision-dh3158-003-preto-dh3158-003-2-.jpg?v=638562235659070000"
  },
  {
    id: 8,
    nome: "Relógio Casio Vintage",
    categoria: "Relógios",
    price: 279.90,
    url: "https://cdnv2.moovin.com.br/iriacalcados/imagens/produtos/det/tenis-nike-air-max-intrlk-lite-branco--e1527495bff14425d2f0c5d8c767041a.jpg"
  }
]




function RouteComponent() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <>
      <header className='p-4 flex items-center justify-around'>
        <h1>
          A sua Imagem
        </h1>
        <NavigationMenuDemo />
        <div className='flex items-center justify-center gap-2'>
          <Button variant={'outline'}>
            <Search />
          </Button>
          <Button variant={'outline'}>
            <ShoppingCart />
          </Button>
          <ModeToggle />
          {
            user ? (
              <Button variant={'outline'} onClick={() => {
                router.navigate({ to: '/dashboard' })
              }}>
                Dashboard
              </Button>
            ) : (
              <>
                <Button variant={'outline'} onClick={() => {
                  router.navigate({ to: '/login' })
                }}>
                  Login
                </Button>
                <Button variant={'secondary'} onClick={() => {
                  router.navigate({ to: '/signup' })
                }}>
                  Sign up
                </Button>
              </>
            )
          }
        </div>
      </header>
      <div className='grid grid-cols-[1.2fr_2fr] items-center gap-3 h-[50%] bg-muted contain-content'>
        <div className='bg-[#0f68ecdd] relative h-[80vh] flex items-center' >
          <img src="/hero-banner.png" className='absolute -right-40 -bottom-1 w-[60%] animate__animated animate__backInUp' />
        </div>
        <div className='max-w-3xl ml-50 space-y-3.5 '>
          <span className='text-2xl text-foreground animate__animated animate__fadeInLeft'>Shop is fun</span>
          <h1 className='text-6xl font-bold animate__animated animate__bounceIn'>Browse Our Premium Product</h1>
          <span className='animate__animated animate__fadeInLeft'>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</span>
          <br />
          <Button className='p-5 mt-5 rounded-3xl animate__animated animate__fadeInDown'>Browse Now</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 p-8">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            style={{
              backgroundImage: `url('${produto.url}')`,
              height: 500,
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            className="bg-muted relative group contain-content  border-1"
          >
            {/* Camada que aparece no hover */}
            <div className="
                absolute bottom-0 left-0 right-0
                bg-[#0000001f] h-full  py-2
                transform translate-y-full
                group-hover:translate-y-0
                transition-transform duration-300
              ">
              <div className="absolute bg-chart-1 left-0 bottom-10 p-3 max-w-[50%]">
                <h1 className="text-lg text-muted font-bold">{produto.nome}</h1>
                <span className="text-sm text-muted">{produto.categoria}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='m-auto max-w-[80%] mt-14'>
        <span>Popular Item in the market</span>
        <h1 className='text-3xl'>Trending Product</h1>

        <div className='grid grid-cols-4 gap-3 mt-8'>
          {productsList.map((produto) => (
            <div className='border-1'>
              <div
                key={produto.id}
                style={{
                  backgroundImage: `url('${produto.url}')`,
                  height: 500,
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
                className="bg-muted relative group contain-content"
              >
                {/* Camada que aparece no hover */}
                <div className=" flex gap-3 justify-center items-center
                absolute bottom-0 left-0 right-0
                bg-[#00000067]  text-center py-2
                transform translate-y-full
                group-hover:translate-y-0
                transition-transform duration-300
              ">
                  <Button variant={"outline"} className='p-5 rounded-full'>
                    <Search />
                  </Button>
                  <Button variant={"outline"} className='p-5 rounded-full'>
                    <Heart />
                  </Button>
                  <Button variant={"outline"} className='p-5 rounded-full'>
                    <ShoppingCart />
                  </Button>
                </div>
              </div>
              <div className="text-center p-5 border-t-1">
                <span className="text-sm">{produto.categoria}</span>
                <h1 className="text-lg font-bold">{produto.nome}</h1>
                <span className="text-sm">{produto.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='px-5 rounded-2xl'>
        <div style={{
          backgroundImage: `url('https://intexsoft.com/app/uploads/2024/04/1920x568-Best-Shopping-Cart-Software-For-Ecommerce.jpg')`,
          height: 500,
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
          className='grid grid-cols-[1fr_2fr] my-10 contain-content rounded-2xl'
        >
          <div className='flex flex-col w-[50%] h-full ml-20 justify-center'>
            <h1 className='text-4xl font-bold'>Up To 50% Off</h1>
            <span>Winter Sale</span>
            <span>Him she'd let them sixth saw light</span>
            <Button className='p-5 mt-5 rounded-3xl'>Browse Now</Button>
          </div>
          <div>

          </div>
        </div>
        <div className='m-auto max-w-[80%] mt-14'>
          <div>
            <span>Popular Item in the market</span>
            <h1 className='text-3xl'>Trending Product</h1>
          </div>
          <div className='mt-10 w-ful'>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {productsList.map((produto, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                    <div className="p-1">
                      <div className='border-1'>
                        <div
                          key={produto.id}
                          style={{
                            backgroundImage: `url('${produto.url}')`,
                            height: 500,
                            width: "100%",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                          }}
                          className="bg-muted relative group contain-content"
                        >
                          {/* Camada que aparece no hover */}
                          <div className=" flex gap-3 justify-center items-center
                absolute bottom-0 left-0 right-0
                bg-[#00000067]  text-center py-2
                transform translate-y-full
                group-hover:translate-y-0
                transition-transform duration-300
              ">
                            <Button variant={"outline"} className='p-5 rounded-full'>
                              <Search />
                            </Button>
                            <Button variant={"outline"} className='p-5 rounded-full'>
                              <Heart />
                            </Button>
                            <Button variant={"outline"} className='p-5 rounded-full'>
                              <ShoppingCart />
                            </Button>
                          </div>
                        </div>
                        <div className="text-center p-5 border-t-1">
                          <span className="text-sm">{produto.categoria}</span>
                          <h1 className="text-lg font-bold">{produto.nome}</h1>
                          <span className="text-sm">{produto.price}</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}
