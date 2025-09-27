import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="flex flex-col-reverse items-center lg:justify-start space-y-12 lg:flex-col lg:space-y-4">
            <div>
                <Image alt="Logo" src="/logo.svg" width={200} height={200} />
            </div>
            <div className="flex justify-center space-x-4">
                <Link href="#">
                <Image src="/icon-facebook.svg" alt="Facebook Logo" width={25} height={25} />
                </Link>
                
                <Link href="#">
                <Image src="/icon-twitter.svg" alt="Twitter Logo" width={25} height={25} />
                </Link>

                <Link href="#">
                <Image src="/icon-pinterest.svg" alt="Pinterest Logo" width={25} height={25} />
                </Link>

                <Link href="#">
                <Image src="/icon-instagram.svg" alt="Instagram Logo" width={25} height={25} />
                </Link>
            </div>
        </div>

            <div className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                <Link href="#" className="hover:text-red-400">Home</Link>
                <Link href="#" className="hover:text-red-400">Pricing</Link>
                <Link href="#" className="hover:text-red-400">Products</Link>
                <Link href="#" className="hover:text-red-400">About</Link>
                </div>
                <div className="flex flex-col space-y-3 text-white">
                <Link href="#" className="hover:text-red-400">Careers</Link>
                <Link href="#" className="hover:text-red-400">Community</Link>
                <Link href="#" className="hover:text-red-400">Privacy Policy</Link>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <form>
                    <div className="flex space-x-3">
                        <input type="text" className="flex-1 px-4 rounded-full bg-white focus:outline-none" placeholder="Updated in your inbox"/>
                        <button className="px-6 py-2 text-white rounded-full bg-red-400 hover:bg-red-300 focus:outline-none">Go</button>
                    </div>
                </form>
            </div>
      </div>
    </footer>
  );
};

export default Footer;