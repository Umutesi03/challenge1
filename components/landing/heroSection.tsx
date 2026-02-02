import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex justify-between min-h-[50vh]
        bg-[url('/hero.png')]
        bg-cover bg-center bg-no-repeat">
      <div className="text-white my-auto mx-9 gap-6 flex flex-col">
        <h1 className="text-5xl">
          Meat<span className="font-bold px-4"> Chicken</span>
        </h1>
        <Button variant="outline" className="bg-transparent hover:bg-transparent hover:text-white border-white px-1 text-2xl">More</Button>
      </div>
      <div className="my-auto">
        <ButtonGroup
          orientation="vertical"
          aria-label="Media controls"
          className="h-fit"
        >
          <Button variant="outline" size="icon">
            <Image
              src="/facebook.png"
              alt="Recipe Logo"
              width={200}
              height={100}
              className="mx-auto my-4"
            />
          </Button>
          <Button variant="outline" size="icon">
            <Image
              src="/youtube.png"
              alt="Recipe Logo"
              width={200}
              height={100}
              className="mx-auto my-4"
            />
          </Button>
           <Button variant="outline" size="icon">
            <Image
              src="/twitter.png"
              alt="Recipe Logo"
              width={200}
              height={100}
              className="mx-auto my-4"
            />
          </Button>
          <Button variant="outline" size="icon">
            <Image
              src="/pinterest.png"
              alt="Recipe Logo"
              width={200}
              height={100}
              className="mx-auto my-4"
            />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
