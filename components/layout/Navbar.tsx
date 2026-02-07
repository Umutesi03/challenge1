import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  ArrowRightToLine,
  User,
  SearchIcon,
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  ShoppingCart,
  LogOutIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {} from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="bg-black [&_button]:text-white [&_button:hover]:bg-black [&_button:hover]:text-white">
        <div className="container mx-auto px-4 flex justify-between items-center h-12">
          <ul className=" hidden md:flex gap-4">
            <li>
              <Button variant="link">COMMUNITY</Button>
            </li>
            <li>
              <Button variant="link">BOOKS</Button>
            </li>
            <li>
              <Button variant="link">RECIPE INDEX</Button>
            </li>
            <li>
              <Button variant="link">POPULAR</Button>
            </li>
          </ul>
          <ul className="flex gap-2 md:gap-4 [&_svg]:text-[#509E2F] position-right-0">
            <li>
              <Button variant="ghost">
                <ArrowRightToLine />
                Register
              </Button>
            </li>
            <li>
              <Button variant="ghost">
                <User />
                Login
              </Button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex  flex-col lg:flex-row gap-4 lg:gap-8 justify-between items-center">
        <div>
          <Image
            src="/logo.png"
            alt="Recipe Logo"
            width={70}
            height={60}
            className="mx-auto my-4"
          />
        </div>
        <div className="flex justify-between items-center">
          <Select>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <ButtonGroup>
            <Input placeholder="Search..." />
            <Button variant="outline" aria-label="Search">
              <SearchIcon />
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Link href="/#" className="relative inline-block">
            <ShoppingCart className="w-6 h-6 text-neutral-700 hover:text-neutral-900 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
              3
            </span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="profile.png" alt="shadcn" />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheckIcon />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCardIcon />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BellIcon />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
