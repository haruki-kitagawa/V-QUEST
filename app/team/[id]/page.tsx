import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Heart, TrendingUp, Calendar, Users, Medal, Award, Target, Flame } from "lucide-react"

// Mock data for team details
const teamData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Dragon Warriors",
    rank: 1,
    totalPoints: 270,
    rankPoints: 180,
    volunteerPoints: 90,
    members: [
      { id: 1, name: "TakeshiK", role: "リーダー", rankPoints: 50, volunteerPoints: 30 },
      { id: 2, name: "YukiM", role: "メンバー", rankPoints: 45, volunteerPoints: 25 },
      { id: 3, name: "HiroshiT", role: "メンバー", rankPoints: 45, volunteerPoints: 20 },
      { id: 4, name: "AkikoS", role: "メンバー", rankPoints: 40, volunteerPoints: 15 },
    ],
    gameHistory: [
      { week: 1, game: "バトルロワイヤル", rank: 1, points: 100, date: "2026-04-06" },
      { week: 2, game: "チーム対戦", rank: 2, points: 80, date: "2026-04-13" },
    ],
    volunteerHistory: [
      { activity: "公園清掃活動", points: 20, participants: 3, date: "2026-04-07" },
      { activity: "地域イベント支援", points: 30, participants: 4, date: "2026-04-08" },
      { activity: "福祉施設訪問", points: 40, participants: 2, date: "2026-04-12" },
    ],
    achievements: [
      { title: "トップランナー", description: "総合1位を獲得" },
      { title: "ボランティア精神", description: "3回以上のボランティア参加" },
      { title: "チームワーク", description: "全メンバーが活動に参加" },
    ],
  },
}

export default function TeamProfilePage({ params }: { params: { id: string } }) {
  const team = teamData[params.id] || teamData["1"]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Team Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-3xl font-bold text-primary-foreground">
              {team.rank}
            </div>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <h1 className="text-4xl font-bold">{team.name}</h1>
                {/* <Badge className="bg-primary/10 text-primary">決勝進出圏内</Badge> */}
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{team.members.length}名</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-green-600">ランキング上昇中</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card className="p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Target className="h-5 w-5" />
              <span className="text-sm font-medium">総合順位</span>
            </div>
            <p className="text-3xl font-bold text-primary">{team.rank}位</p>
          </Card>

          <Card className="p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Flame className="h-5 w-5" />
              <span className="text-sm font-medium">総合ポイント</span>
            </div>
            <p className="text-3xl font-bold">{team.totalPoints}pt</p>
          </Card>

          <Card className="p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Trophy className="h-5 w-5" />
              <span className="text-sm font-medium">ランクポイント</span>
            </div>
            <p className="text-3xl font-bold text-blue-500">{team.rankPoints}pt</p>
          </Card>

          <Card className="p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">ボランティア</span>
            </div>
            <p className="text-3xl font-bold text-green-500">{team.volunteerPoints}pt</p>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Team Members */}
            <Card className="p-6">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Users className="h-6 w-6" />
                チームメンバー
              </h2>
              <div className="space-y-4">
                {team.members.map((member: any) => (
                  <div key={member.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {member.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{member.name}</span>
                          {member.role === "リーダー" && (
                            <Badge variant="secondary" className="text-xs">
                              {member.role}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Trophy className="h-4 w-4 text-blue-500" />
                            {member.rankPoints}pt
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-4 w-4 text-green-500" />
                            {member.volunteerPoints}pt
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-white">
                      プロフィール
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Game History */}
            <Card className="p-6">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Trophy className="h-6 w-6" />
                ゲーム戦績
              </h2>
              <div className="space-y-4">
                {team.gameHistory.map((game: any, index: number) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <Badge variant="outline" className="text-primary">第{game.week}週</Badge>
                        <span className="font-semibold">{game.game}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{game.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 flex items-center gap-2">
                        <Medal
                          className={`h-5 w-5 ${
                            game.rank === 1 ? "text-yellow-500" : game.rank === 2 ? "text-gray-400" : "text-orange-500"
                          }`}
                        />
                        <span className="font-semibold">{game.rank}位</span>
                      </div>
                      <div className="text-sm font-semibold text-blue-500">+{game.points}pt</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Volunteer History */}
            <Card className="p-6">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Heart className="h-6 w-6" />
                ボランティア活動履歴
              </h2>
              <div className="space-y-4">
                {team.volunteerHistory.map((activity: any, index: number) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex-1">
                      <div className="mb-1 font-semibold">{activity.activity}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {activity.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {activity.participants}名参加
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-500">+{activity.points}pt</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <Card className="p-6">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Award className="h-6 w-6" />
                実績
              </h2>
              <div className="space-y-4">
                {team.achievements.map((achievement: any, index: number) => (
                  <div key={index} className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="mb-1 font-semibold">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Point Breakdown */}
            <Card className="p-6">
              <h2 className="mb-6 text-lg font-bold">ポイント内訳</h2>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-blue-500" />
                      ランクポイント
                    </span>
                    <span className="font-semibold">{team.rankPoints}pt</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-blue-500 transition-all"
                      style={{ width: `${(team.rankPoints / team.totalPoints) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-green-500" />
                      ボランティア
                    </span>
                    <span className="font-semibold">{team.volunteerPoints}pt</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-green-500 transition-all"
                      style={{ width: `${(team.volunteerPoints / team.totalPoints) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">合計</span>
                    <span className="text-2xl font-bold text-primary">{team.totalPoints}pt</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h2 className="mb-6 text-lg font-bold">統計情報</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">ゲーム参加回数</span>
                  <span className="font-semibold">{team.gameHistory.length}回</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">ボランティア参加</span>
                  <span className="font-semibold">{team.volunteerHistory.length}回</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">平均順位</span>
                  <span className="font-semibold">
                    {(
                      team.gameHistory.reduce((acc: number, g: any) => acc + g.rank, 0) / team.gameHistory.length
                    ).toFixed(1)}
                    位
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">実績バッジ</span>
                  <span className="font-semibold">{team.achievements.length}個</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
