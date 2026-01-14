import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, Heart, Calendar, Target, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              <span>新しいゲーミング体験</span>
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              ゲームで競い、
              <br />
              <span className="text-primary">ボランティアで成長する</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl text-white">
              オンラインゲーム大会とボランティア活動を融合した、全く新しい大会プラットフォーム。
              <br />
              チームで競い合い、地域社会に貢献しながら、真の勝者を目指そう。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/tournament">大会日程を見る</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/volunteer">ボランティアを探す</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">仕組み</h2>
            <p className="text-lg text-muted-foreground text-white">
              2週間で、ゲームとボランティアの両方でポイントを獲得
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">ゲームで競う</h3>
              <p className="text-muted-foreground">
                オンラインゲーム大会で戦い、順位に応じたランクポイントを獲得。チーム全体の実力が試される。
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">ボランティアで貢献</h3>
              <p className="text-muted-foreground">
                地方自治体が提供するボランティア活動に参加し、ボランティアポイントを獲得。社会貢献が勝利の鍵。
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">決勝戦へ</h3>
              <p className="text-muted-foreground">
                ランクポイントとボランティアポイントの合計で上位3チームが決勝戦に進出。真の勝者を決定。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournament Structure */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">大会構成</h2>
            <p className="text-lg text-muted-foreground">2週間で行う大会</p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex items-start gap-4 rounded-lg border bg-background p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold">第1週：ラウンド1</h3>
                <p className="text-muted-foreground text-white">
                  各チームがゲーム大会に参加し、ランクポイントを獲得。同時にボランティア活動にも参加可能。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border bg-background p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold">第2週：ラウンド2</h3>
                <p className="text-muted-foreground text-white">
                  2回目のゲーム大会で追加のランクポイント獲得。ボランティア活動でポイントを積み重ねるチャンス。
                </p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4 rounded-lg border bg-background p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold">第3週：決勝戦</h3>
                <p className="text-muted-foreground">上位3チームが最終決戦で激突。総合ポイントで優勝チームを決定。</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Point System */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">ポイントシステム</h2>
            <p className="text-lg text-muted-foreground text-white">2種類のポイントで総合力を競う</p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <Card className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                  <Trophy className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">ランクポイント</h3>
              </div>
              <p className="mb-4 text-muted-foreground">オンラインゲーム大会での順位に応じて獲得</p>
              <div className="space-y-2 rounded-lg bg-muted/50 p-4">
                <div className="flex justify-between">
                  <span className="text-sm">1位</span>
                  <span className="font-semibold">100pt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">2位</span>
                  <span className="font-semibold">80pt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">3位</span>
                  <span className="font-semibold">60pt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">4位以下</span>
                  <span className="font-semibold">40pt〜</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                  <Heart className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">ボランティアポイント</h3>
              </div>
              <p className="mb-4 text-muted-foreground">地域のボランティア活動への参加で獲得</p>
              <div className="space-y-2 rounded-lg bg-muted/50 p-4">
                <div className="flex justify-between">
                  <span className="text-sm">清掃活動</span>
                  <span className="font-semibold">20pt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">イベント支援</span>
                  <span className="font-semibold">30pt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">福祉活動</span>
                  <span className="font-semibold">40pt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">その他</span>
                  <span className="font-semibold">10pt〜</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
            <Calendar className="mx-auto mb-6 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">今すぐ大会に参加</h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              チームを組んで、ゲームとボランティアで新しい挑戦を始めよう
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/tournament">大会詳細</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/rankings">ランキングを見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
