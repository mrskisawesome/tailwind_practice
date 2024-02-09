import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div>
        <nav>
          <Link href="/">
            <h1 className="text-3xl font-bold underline">Food Ninja</h1>
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
            {/* recipe cards go here */}
            <div>
              {/* <Image
                src="@/Images/Easy-Five-Bean-Chilli-1jpg.jpg"
                alt="5 Bean Chill"
                width="200px"
              >
                5 Bean Chilli Stew
              </Image> */}
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
