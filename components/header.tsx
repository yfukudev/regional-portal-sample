import { Button } from "@/components/ui/button"
import { Home, Menu } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Home className="h-6 w-6" />
          <h1 className="text-2xl font-bold">ローカル市ポータル</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="hover:underline">
            ホーム
          </Link>
          <Link href="#" className="hover:underline">
            ニュース
          </Link>
          <Link href="#" className="hover:underline">
            イベント
          </Link>
          <Link href="#" className="hover:underline">
            観光
          </Link>
          <Link href="#" className="hover:underline">
            サービス
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}
