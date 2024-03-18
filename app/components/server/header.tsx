// Next.js
import Link from "next/link";

// Components
import DarkModeSwitch from "../client/darkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6">
      <Link href="/">
        <h2 className="text-2xl font-heavy">
          Difficult Conversations Simulator
        </h2>
      </Link>
      <DarkModeSwitch />
    </div>
  );
}
