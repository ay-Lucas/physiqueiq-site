import { LucideLinkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const people = [
  {
    name: "Steven Dindl",
    imageUrl: "/profile_pictures/steven_profile.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/steven-dindl",
  },
  {
    name: "Lucas Anderson",
    imageUrl: "/profile_pictures/lucas_profile.png",
    linkedinUrl: "https://www.linkedin.com/in/lucas-c-anderson",
  },
  {
    name: "Jacob Cabrey",
    imageUrl: "/profile_pictures/jacob_profile.png",
    linkedinUrl: "https://www.linkedin.com/in/jacob-c-bbb5511ab/",
  },
  {
    name: "Trent Braley",
    imageUrl: "/profile_pictures/trent_profile.png",
    linkedinUrl: "https://www.linkedin.com/in/trentbraley/",
  },
  {
    name: "Miles Wedeking",
    imageUrl: "/profile_pictures/miles_profile.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/miles-wedeking/",
  },
];

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 items-center">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
          Meet our team
        </h2>
        <div className="max-w-xl">
          {/* <p className="mt-6 text-lg/8 text-gray-400"> */}
          {/*   We’re a dynamic group of individuals who are passionate about what */}
          {/*   we do and dedicated to delivering the best results for our clients. */}
          {/* </p> */}
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src={person.imageUrl}
                  className="rounded-full outline-1 -outline-offset-1 outline-white/10"
                />
                <div>
                  <h3 className="text-lg/7 font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <Link href={person.linkedinUrl} className="flex w-fit">
                    <Image
                      src={"/linkedin.png"}
                      alt="linkedin logo"
                      width={30}
                      height={30}
                    />
                  </Link>
                  {/* <p className="text-sm/6 font-semibold text-indigo-400"> */}
                  {/*   {person.role} */}
                  {/* </p> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
