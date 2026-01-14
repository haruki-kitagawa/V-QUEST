import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, TrendingDown, Minus, Medal, Heart, Users } from "lucide-react"

// Mock data for team rankings
const teams = [
  {
    id: 1,
    rank: 1,
    prevRank: 1,
    name: "Dragon Warriors",
    members: ["Player1", "Player2", "Player3", "Player4"],
    rankPoints: 180,
    volunteerPoints: 90,
    totalPoints: 270,
    gamesPlayed: 2,
    volunteerActivities: 3,
  },
  {
    id: 2,
    rank: 2,
    prevRank: 3,
    name: "Phoenix Rising",
    members: ["Player5", "Player6", "Player7", "Player8"],
    rankPoints: 160,
    volunteerPoints: 80,
    totalPoints: 240,
    gamesPlayed: 2,
    volunteerActivities: 2,
  },
  {
    id: 3,
    rank: 3,
    prevRank: 2,
    name: "Thunder Strikers",
    members: ["Player9", "Player10", "Player11", "Player12"],
    rankPoints: 140,
    volunteerPoints: 90,
    totalPoints: 230,
    gamesPlayed: 2,
    volunteerActivities: 3,
  },
  {
    id: 4,
    rank: 4,
    prevRank: 4,
    name: "Shadow Legends",
    members: ["Player13", "Player14", "Player15", "Player16"],
    rankPoints: 120,
    volunteerPoints: 70,
    totalPoints: 190,
    gamesPlayed: 2,
    volunteerActivities: 2,
  },
  {
    id: 5,
    rank: 5,
    prevRank: 6,
    name: "Storm Chasers",
    members: ["Player17", "Player18", "Player19", "Player20"],
    rankPoints: 100,
    volunteerPoints: 80,
    totalPoints: 180,
    gamesPlayed: 2,
    volunteerActivities: 2,
  },
  {
    id: 6,
    rank: 6,
    prevRank: 5,
    name: "Cyber Knights",
    members: ["Player21", "Player22", "Player23", "Player24"],
    rankPoints: 120,
    volunteerPoints: 50,
    totalPoints: 170,
    gamesPlayed: 2,
    volunteerActivities: 1,
  },
  {
    id: 7,
    rank: 7,
    prevRank: 7,
    name: "Frost Giants",
    members: ["Player25", "Player26", "Player27", "Player28"],
    rankPoints: 80,
    volunteerPoints: 60,
    totalPoints: 140,
    gamesPlayed: 2,
    volunteerActivities: 2,
  },
  {
    id: 8,
    rank: 8,
    prevRank: 9,
    name: "Solar Flares",
    members: ["Player29", "Player30", "Player31", "Player32"],
    rankPoints: 80,
    volunteerPoints: 50,
    totalPoints: 130,
    gamesPlayed: 2,
    volunteerActivities: 1,
  },
]

function getRankTrend(rank: number, prevRank: number) {
  if (rank < prevRank) {
    return { icon: TrendingUp, color: "text-green-600", text: "上昇" }
  }
  if (rank > prevRank) {
    return { icon: TrendingDown, color: "text-red-600", text: "下降" }
  }
  return { icon: Minus, color: "text-muted-foreground", text: "変動なし" }
}

function getRankBadge(rank: number) {
  if (rank === 1) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white">
        <Medal className="h-6 w-6" />
      </div>
    )
  }
  if (rank === 2) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 text-white">
        <Medal className="h-6 w-6" />
      </div>
    )
  }
  if (rank === 3) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
        <Medal className="h-6 w-6" />
      </div>
    )
  }
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted font-bold text-black">
      {rank}
    </div>
  )
}

export default function RankingsPage() {
  const finalistCutoff = 3

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">ランキング</h1>
          <p className="text-lg text-muted-foreground text-white">
            ランクポイントとボランティアポイントの合計で順位が決定されます
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Trophy className="h-5 w-5" />
              <span className="text-sm font-medium">総参加チーム</span>
            </div>
            {/* <p className="text-3xl font-bold">{teams.length}</p> */}
            <p className="text-3xl font-bold">24</p>
          </Card>

          {/* <Card className="p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Medal className="h-5 w-5" />
              <span className="text-sm font-medium">決勝進出ライン</span>
            </div>
            <p className="text-3xl font-bold">上位{finalistCutoff}チーム</p>
          </Card> */}

          <Card className="p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">平均ボランティア参加</span>
            </div>
            <p className="text-3xl font-bold">
              {/* {(teams.reduce((acc, t) => acc + t.volunteerActivities, 0) / teams.length).toFixed(1)}回 */}
              2.3回
            </p>
          </Card>
        </div>

        {/* Finalist Zone Banner */}
        {/* <Card className="mb-6 bg-primary/5 p-6">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-primary" />
            <div>
              <h2 className="font-semibold">決勝進出ゾーン</h2>
              <p className="text-sm text-muted-foreground">
                上位{finalistCutoff}チームが第3週の決勝トーナメントに進出します
              </p>
            </div>
          </div>
        </Card> */}

        {/* Rankings Table */}
        <div className="space-y-4">
          {teams.map((team) => {
            const trend = getRankTrend(team.rank, team.prevRank)
            const TrendIcon = trend.icon
            const isFinalist = team.rank <= finalistCutoff

            return (
              <Card
                key={team.id}
                className={`p-6 transition-all`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Rank and Team Info */}
                  <div className="flex flex-1 items-center gap-4">
                    <div className="shrink-0">{getRankBadge(team.rank)}</div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <Link href={`/team/${team.id}`}>
                          <h3 className="text-lg font-semibold hover:text-primary">{team.name}</h3>
                        </Link>
                        {/* {isFinalist && <Badge className="bg-primary/10 text-primary">決勝進出圏内</Badge>} */}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{team.members.length}名</span>
                        <span className="mx-1">•</span>
                        <TrendIcon className={`h-4 w-4 ${trend.color}`} />
                        <span className={trend.color}>{trend.text}</span>
                      </div>
                    </div>
                  </div>

                  {/* Points Breakdown */}
                  <div className="flex flex-wrap gap-4 lg:gap-8">
                    <div className="text-center">
                      <div className="mb-1 text-xs text-muted-foreground">ランクP</div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-blue-500" />
                        <span className="text-xl font-bold text-blue-500">{team.rankPoints}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{team.gamesPlayed}試合</div>
                    </div>

                    <div className="text-center">
                      <div className="mb-1 text-xs text-muted-foreground">ボランティアP</div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-green-500" />
                        <span className="text-xl font-bold text-green-500">{team.volunteerPoints}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{team.volunteerActivities}回</div>
                    </div>

                    <div className="text-center">
                      <div className="mb-1 text-xs text-muted-foreground">合計</div>
                      <div className="text-2xl font-bold text-primary">{team.totalPoints}</div>
                      <div className="text-xs text-muted-foreground">ポイント</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button variant="outline" size="sm" asChild className="lg:ml-4 bg-transparent">
                    <Link href={`/team/${team.id}`}>詳細を見る</Link>
                  </Button>
                </div>

                {/* Points Progress Bars */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-xs text-muted-foreground">ランク</span>
                    <div className="flex-1">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-blue-500 transition-all"
                          style={{ width: `${(team.rankPoints / 200) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-xs text-muted-foreground">ボランティア</span>
                    <div className="flex-1">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-green-500 transition-all"
                          style={{ width: `${(team.volunteerPoints / 100) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Point System Reminder */}
        <Card className="mt-12 p-6">
          <h3 className="mb-4 font-semibold">ポイント獲得方法</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-500" />
                <span className="font-medium">ランクポイント</span>
              </div>
              <p className="text-sm text-muted-foreground">
                ゲーム大会での順位に応じて獲得。1位:100pt、2位:80pt、3位:60pt、それ以下:40pt〜
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-500" />
                <span className="font-medium">ボランティアポイント</span>
              </div>
              <p className="text-sm text-muted-foreground">
                ボランティア活動への参加で獲得。活動内容により10pt〜40ptを付与。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
