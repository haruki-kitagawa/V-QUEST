import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Users, Clock, MapPin } from "lucide-react"

// Mock data for tournaments
const currentTournament = {
  id: 1,
  name: "チャレンジカップ2026",
  status: "active",
  currentWeek: 2,
  totalWeeks: 3,
  startDate: "2026-04-20",
  endDate: "2026-05-04",
  teamsCount: 24,
}

const schedule = [
  {
    week: 1,
    title: "第1週：ラウンド1",
    status: "completed",
    date: "2026-04-01 - 2026-04-07",
    events: [
      {
        id: 1,
        type: "game",
        title: "ゲーム大会 - バトルロワイヤル",
        date: "2026-04-06",
        time: "19:00 - 21:00",
        location: "オンライン",
        participants: 24,
      },
      {
        id: 2,
        type: "volunteer",
        title: "公園清掃活動",
        date: "2026-04-07",
        time: "10:00 - 12:00",
        location: "中央公園",
        participants: 15,
      },
    ],
  },
  {
    week: 2,
    title: "第2週：ラウンド2",
    status: "active",
    date: "2026-04-08 - 2026-04-14",
    events: [
      {
        id: 3,
        type: "game",
        title: "ゲーム大会 - チーム対戦",
        date: "2026-04-13",
        time: "19:00 - 21:00",
        location: "オンライン",
        participants: 24,
      },
      {
        id: 4,
        type: "volunteer",
        title: "地域イベント支援",
        date: "2026-04-14",
        time: "14:00 - 17:00",
        location: "市民ホール",
        participants: 12,
      },
    ],
  },
]

export default function TournamentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Tournament Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-200/20 text-green-600">
              進行中
            </Badge>
            <span className="text-sm text-muted-foreground">
              {/* 第{currentTournament.currentWeek}週 / {currentTournament.totalWeeks}週 */}
              1週目 / 2週間
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold">{currentTournament.name}</h1>
          <p className="mb-6 text-lg text-muted-foreground">
            {currentTournament.startDate} 〜 {currentTournament.endDate}
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>{currentTournament.teamsCount}チーム参加中</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span>2週間の大会</span>
            </div>
            {/* <div className="flex items-center gap-2 text-muted-foreground">
              <Trophy className="h-5 w-5" />
              <span>上位3チームが決勝進出</span>
            </div> */}
          </div>
        </div>

        {/* Tournament Progress */}
        <Card className="mb-12 p-6">
          <h2 className="mb-6 text-xl font-semibold">進行状況</h2>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">第1週</span>
                <span className="text-muted-foreground">
                  {/* {Math.round((currentTournament.currentWeek / currentTournament.totalWeeks) * 100)}% */}
                  50%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{
                    width: `50%`,
                  }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Schedule */}
        <div className="mb-8">
          <h2 className="mb-6 text-2xl font-bold">スケジュール</h2>
          <div className="space-y-8">
            {schedule.map((week) => (
              <div key={week.week} className="relative">
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${
                      week.status === "completed"
                        ? "bg-green-200 text-green-600"
                        : week.status === "active"
                          ? "bg-blue-200 text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {week.week}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{week.title}</h3>
                      {week.status === "completed" && (
                        <Badge variant="secondary" className="bg-green-200/20 text-green-600">
                          完了
                        </Badge>
                      )}
                      {week.status === "active" && (
                        <Badge variant="secondary" className="bg-blue-200/20 text-primary">
                          進行中
                        </Badge>
                      )}
                      {week.status === "upcoming" && <Badge variant="secondary">予定</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{week.date}</p>
                  </div>
                </div>

                <div className="ml-14 space-y-4">
                  {week.events.map((event) => (
                    <Card key={event.id} className="p-4">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            {event.type === "game" ? (
                              <Badge className="bg-blue-500/10 text-blue-600">ゲーム大会</Badge>
                            ) : (
                              <Badge className="bg-green-500/10 text-green-600">ボランティア</Badge>
                            )}
                          </div>
                          <h4 className="mb-2 font-semibold">{event.title}</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{event.participants}チーム</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {week.status === "upcoming" && (
                            <Button variant="outline" size="sm">
                              詳細
                            </Button>
                          )}
                          {week.status === "completed" && (
                            <Button variant="outline" size="sm" className="bg-blue-500 text-white">
                              結果を見る
                            </Button>
                          )}
                          {week.status === "active" && event.type === "volunteer" && (
                            <Button size="sm">参加する</Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-1">
          {/* <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Trophy className="h-5 w-5 text-primary" />
              決勝進出条件
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>予選2週間の総合ポイント（ランク + ボランティア）上位3チームが決勝進出</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>決勝戦は上位3チームのみの特別トーナメント</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>決勝戦のポイントが最終順位を決定</span>
              </li>
            </ul>
          </Card> */}

          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Calendar className="h-5 w-5 text-primary" />
              参加方法
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>ゲーム大会は全チーム参加必須（週1回）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>ボランティア活動は自由参加（複数参加可能）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>各イベントの詳細は開催3日前に通知</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
