import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import Image from "next/image"

export default function Home() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Descubra a Excelência em Café: Dicas, Novidades e Ofertas Exclusivas!</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Dedicada a amantes de café, que oferece uma mistura de conteúdo informativo e ofertas exclusivas para os assinantes.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1" placeholder="Insira seu email" type="email" />
              <Button className="bg-amber-800" type="submit">Inscrever-se</Button>
            </form>
          </div>
        </div>

          <div className="w-full py-12 md:py-24 lg:py-32">
            <div className="container flex flex-col gap-4 px-4 text-center md:gap-10 md:px-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Para os amantes do Café</h2>
                <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore o mundo do café conosco! Receba dicas de preparo, descubra novas origens e sabores, e desfrute de ofertas exclusivas em grãos selecionados. Junte-se à nossa comunidade de amantes de café e embarque em uma jornada sensorial, onde cada xícara é uma experiência única. Inscreva-se agora para receber conteúdo envolvente e acesso privilegiado a produtos premium - porque a vida é muito curta para beber café ruim!
                </p>
              </div>
            <div className="grid max-w-[900px] grid-cols-1 items-center justify-center gap-4 mx-auto sm:grid-cols-2 md:gap-6">
              <div className="flex flex-col gap-2">
                <Image
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/c.jpg"
                  width="400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="225"
                  src="/b.jpg"
                  width="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 py-8 md:py-12 dark:border-gray-800">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 min-[400px]:gap-4">
            <Image alt="Logo" className="aspect-w-3/1" height={50} src="/a.jpg" width={150} />
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 ILovveCoffe. All rights reserved.</p>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="grid gap-1">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">340 S Lemon Ave #4133 Walnut, CA 91789</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-2">
                <TwitterIcon className="w-4 h-4 fill-gray-500 transition dark:fill-gray-400" />
                <GithubIcon className="w-4 h-4 fill-gray-500 transition dark:fill-gray-400" />
                <YoutubeIcon className="w-4 h-4 fill-gray-500 transition dark:fill-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}