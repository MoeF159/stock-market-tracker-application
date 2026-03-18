import Image from "next/image";
import Link from "next/link";
import NavItems from "@/components/NavItems";
import UserDropDown from "@/components/UserDropDown";
import { searchStocks } from "@/lib/actions/finnhub.actions";

const Header = async ({ user }) => {
  // Fetch default search results once on the server so the search overlay has meaningful
  // content immediately without requiring the first client-side API call.
  const initialStocks = await searchStocks();
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
        </Link>

        <nav className="hidden sm:block">
          <NavItems initialStocks={initialStocks} />
         
        </nav> 
          <UserDropDown user={user} initialStocks={initialStocks} />
      </div>
    </header>
  )
}
export default Header