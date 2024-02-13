import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="md:flex text-sky-600">
        <nav className="md:flex-shrink-0">
          <Link href="/">
            <h1 className="text-3xl-sky-900 font-bold underline">Food Ninja</h1>
          </Link>

          <ul>
            <li>
              <Link href="#">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div>
          <Link href="#">Log in</Link>
          <Link href="#">Sign up</Link>
        </div>

        <header>
          <h2>Recipes</h2>
          <h3>For Ninjas</h3>
        </header>
        <div>
          <h4>Latest Recipes</h4>

          <div>
            recipe cards go here
            <div>
              <Image
                className="rounded-lg md:w-56"
                src="/Images/Easy-Five-Bean-Chilli-1jpg.jpg"
                alt="5 Bean Chill"
                width="200"
                height="200"
              />
              <p>5 Bean Chilli Stew</p>
              <p>recipe by Mario</p>
            </div>
          </div>
        </div>
        <h4>Most Popular</h4>
        <div>
          <p>Load more</p>
        </div>
      </main>
    </>
  );
}
