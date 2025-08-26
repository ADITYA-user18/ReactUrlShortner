
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <main>
        <section className="grid grid-cols-2 bg-white h-full  ">
          <div className="flex justify-center flex-col items-center font">
            <p className="font-bold text-3xl">
              The Smarter Way to Share Links
            </p>
            <p className="p-5 text-lg text-gray-700">
              LinkSpark makes long, messy URLs simple and shareable.
              Whether you’re sharing on social media, emails, or business campaigns,
              our powerful shortener ensures your links look clean, professional,
              and easy to remember. Start shortening today and experience a faster,
              smarter way of connecting with the web.
            </p>
            <li className="flex gap-4">
              <Link href="/shorten">
                <button className="  bg-amber-700 text-amber-50 hover:bg-amber-950 hover:scale-105 px-4 py-2 rounded-lg font-semibold transition">
                  Try now
                </button>
              </Link>
              <Link href="https://github.com/ADITYA-user18/ReactUrlShortner"  target="_blank">
                <button className=" bg-amber-700 text-amber-50 hover:bg-amber-950 hover:scale-105 border  px-4 py-2 rounded-lg font-semibold transition">
                  GitHub
                </button>
              </Link>
            </li>

          </div>

          <div className="">
            <Image src='/image.png' alt='The Url Image' width={600} height={700}></Image>
          </div>

        </section>
      </main>
    </>
  );
}
