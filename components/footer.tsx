import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 ローカル市. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline">
            プライバシーポリシー
          </Link>
          <Link href="#" className="hover:underline">
            お問い合わせ
          </Link>
          <Link href="#" className="hover:underline">
            サイトマップ
          </Link>
        </div>
      </div>
    </footer>
  )
}
