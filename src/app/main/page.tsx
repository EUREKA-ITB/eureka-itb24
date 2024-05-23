import img_phyOlympiad from "@/../public/img_phyOlympiad.svg";
import img_sciWriting from "@/../public/img_sciWriting.svg";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function Competition_List() {
  return (
    <div className="flex flex-col space-y-10 px-20 xl:container">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold italic">COMPETITIONS</h1>
        <h2 className="text-2xl font-light">
          Things that are waiting beyond the horizon
        </h2>
      </div>
      <div className="flex flex-row space-x-5">
        <div className="my-auto w-20 flex-shrink-0">
          <Image
            src={img_phyOlympiad}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="text-4xl font-bold">PHYSICS OLYMPIAD </div>
            <div className="my-auto flex-row space-x-4 space-y-4 md:space-y-0 ">
              <Badge variant="default"> SMP/MTs</Badge>
              <Badge variant="default">SD/MI</Badge>
            </div>
          </div>
          <p>
            We&apos;re no strangers to love You know the rules and so do I (do
            I) A full commitment&apos;s what I&apos;m thinking of You
            wouldn&apos;t get this from any other guy I just wanna tell you how
            I&apos;m feeling Gotta make you understand
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-5">
        <div className="my-auto w-20 flex-shrink-0">
          <Image
            src={img_sciWriting}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="text-4xl font-bold">SCIENTIFIC WRITING </div>
            <div className="my-auto flex-row space-x-4 space-y-4 md:space-y-0 ">
              <Badge variant="default"> SMP/MTs</Badge>
              <Badge variant="default">SD/MI</Badge>
            </div>
          </div>
          <p>
            We&apos;re no strangers to love You know the rules and so do I (do
            I) A full commitment&apos;s what I&apos;m thinking of You
            wouldn&apos;t get this from any other guy I just wanna tell you how
            I&apos;m feeling Gotta make you understand
          </p>
        </div>
      </div>
      {/* <div className="flex flex-row">
        <Image
          src={img_sciWriting}
          height={150}
          alt=""
        />
        <div className="flex flex-col">
          <div className="flex flex-row">SCIENTIFIC WRITING SMP/MTs SD/MI </div>
          <p>
            Never gonna give you up Never gonna let you down Never gonna run
            around and desert you Never gonna make you cry Never gonna say
            goodbye Never gonna tell a lie and hurt you
          </p>
        </div>
      </div> */}
    </div>
  );
}
