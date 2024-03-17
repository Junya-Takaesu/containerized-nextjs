import Image from "next/image";
import { Lumiflex, Novatrix, Zenitho, Velustro } from "uvcanvas";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-8xl">This is just an sample page</h1>
      </header>
      <main className="mx-auto w-[30vw] my-6">
        <section className="flex flex-col justify-center align-middle">
          <article className="mb-9 max-w-sm rounded-lg overflow-hidden shadow-2xl bg-white text-black">
            <div className="max-w-sm max-h-[10rem] rounded overflow-hidden shadow-lg">
              <div className="h-[100vh] w-[100vw]">
                <Novatrix />
              </div>
            </div>
            <p className="z-50 p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates quos nulla deleniti aperiam veritatis modi veniam quidem repudiandae at nesciunt dicta consequatur quam fugiat, cumque aspernatur saepe molestiae distinctio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates quos nulla deleniti aperiam veritatis modi veniam quidem repudiandae at nesciunt dicta consequatur quam fugiat, cumque aspernatur saepe molestiae distinctio.
            </p>
          </article>
          <article className="mb-9 max-w-sm rounded-lg overflow-hidden shadow-2xl bg-white text-black">
            <div className="max-w-sm max-h-[10rem] rounded overflow-hidden shadow-lg">
              <div className="h-[100vh] w-[100vw]">
                <Zenitho />
              </div>
            </div>
            <p className="z-50 p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates quos nulla deleniti aperiam veritatis modi veniam quidem repudiandae at nesciunt dicta consequatur quam fugiat, cumque aspernatur saepe molestiae distinctio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates quos nulla deleniti aperiam veritatis modi veniam quidem repudiandae at nesciunt dicta consequatur quam fugiat, cumque aspernatur saepe molestiae distinctio.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
