import FacebookIcon from "@components/icon/Facebook";
import LinkedInIcon from "@components/icon/LinkedIn";
import Twitter2Icon from "@components/icon/Twitter2";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const products = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about-us",
  },
  {
    text: "Features",
    link: "/",
  },
  {
    text: "App",
    link: "/app",
  },
  {
    text: "Contact",
    link: "/support",
  },
];

const resources = [
  {
    text: "Help center",
    link: "/support",
  },
  {
    text: "Partner",
    link: "/partner",
  },
  {
    text: "Releases",
    link: "/app",
  },
];

const Footer: FC = () => {
  return (
    <footer id="footer" className="py-16">
      <div className="custom-container">
        <div className="md:grid md:grid-cols-3 gap-4">
          <div className="mb-12">
            <Image width={145} height={38} alt="Logo" src="/logo.svg" />
            <p className="mt-8 text-sec max-w-320 font-int">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className="col-span-2 font-vis">
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/4">
                <h4 className="font-medium text-pry text-sm mb-4">Product</h4>
                {products.map((item, index) => (
                  <Link key={`${item.text}-${index}`} href={item.link}>
                    <a className="block mb-3 text-sec">{item.text}</a>
                  </Link>
                ))}
              </div>
              <div className="w-1/2 md:w-1/4">
                <h4 className="font-medium text-pry text-sm mb-4">Resource</h4>
                {resources.map((item, index) => (
                  <Link key={`${item.text}-${index}`} href={item.link}>
                    <a className="block mb-3 text-sec">{item.text}</a>
                  </Link>
                ))}
              </div>

              <div className="w-full mt-8 md:mt-0 md:w-1/2">
                <h4 className="font-medium text-pry text-sm mb-4">
                  Stay up to date
                </h4>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <button className="btn btn-primary font-int font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 py-4 flex flex-wrap justify-between">
          <p className="text-sec">
            &copy; 2022 All Star Limousine. All rights reserved
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span>
              <Twitter2Icon />
            </span>
            <span>
              <LinkedInIcon />
            </span>
            <span>
              <FacebookIcon />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
