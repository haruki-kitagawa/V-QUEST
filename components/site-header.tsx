import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Heart, BarChart3 } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Trophy className="h-5 w-5" />
          </div>
          <span>V-QUEST</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/tournament"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500 text-white"
          >
            <Calendar className="h-4 w-4" />
            大会日程
          </Link>
          <Link
            href="/rankings"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500 text-white"
          >
            <BarChart3 className="h-4 w-4" />
            ランキング
          </Link>
          <Link
            href="/volunteer"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500 text-white"
          >
            <Heart className="h-4 w-4" />
            ボランティア
          </Link>
        </nav>

        <Button size="sm">参加する</Button>
      </div>
    </header>
  )
}
