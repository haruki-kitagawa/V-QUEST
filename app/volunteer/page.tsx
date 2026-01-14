import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, Clock, MapPin, Users, Award, Building2, TreePine, Handshake } from "lucide-react"

// Mock data for volunteer opportunities
const opportunities = [
  {
    id: 1,
    title: "公園清掃活動",
    organization: "中央区役所",
    category: "環境保全",
    description: "地域の公園をきれいにする清掃活動。ゴミ拾いや落ち葉の掃除を行います。",
    date: "2026-04-14",
    time: "10:00 - 12:00",
    location: "中央公園",
    slots: 15,
    slotsAvailable: 8,
    points: 20,
    difficulty: "初級",
    requirements: ["動きやすい服装", "軍手持参"],
    icon: TreePine,
    color: "text-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    id: 2,
    title: "地域イベント支援",
    organization: "市民活動センター",
    category: "イベント支援",
    description: "地域のお祭りやイベントの準備、運営をサポート。受付や案内、会場設営などを担当。",
    date: "2026-04-14",
    time: "14:00 - 17:00",
    location: "市民ホール",
    slots: 20,
    slotsAvailable: 12,
    points: 30,
    difficulty: "中級",
    requirements: ["笑顔で対応できる方", "立ち仕事が可能な方"],
    icon: Handshake,
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 3,
    title: "福祉施設訪問",
    organization: "社会福祉協議会",
    category: "福祉活動",
    description: "高齢者施設を訪問し、レクリエーション活動のサポートや会話を通じた交流を行います。",
    date: "2026-04-19",
    time: "13:00 - 16:00",
    location: "福祉センター",
    slots: 10,
    slotsAvailable: 5,
    points: 40,
    difficulty: "中級",
    requirements: ["コミュニケーション能力", "思いやりのある対応"],
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-500/10",
  },
  {
    id: 4,
    title: "子ども向け学習支援",
    organization: "教育委員会",
    category: "教育支援",
    description: "放課後の学習支援。小中学生の宿題や勉強のサポートを行います。",
    date: "2026-04-21",
    time: "15:00 - 18:00",
    location: "地域学習センター",
    slots: 8,
    slotsAvailable: 7,
    points: 30,
    difficulty: "中級",
    requirements: ["基礎的な学力", "子どもとのコミュニケーション"],
    icon: Award,
    color: "text-orange-600",
    bgColor: "bg-orange-500/10",
  },
  {
    id: 5,
    title: "災害ボランティア訓練",
    organization: "防災センター",
    category: "防災活動",
    description: "災害時に備えた訓練活動。救援物資の配布訓練や避難所運営のシミュレーション。",
    date: "2026-04-28",
    time: "09:00 - 12:00",
    location: "防災センター",
    slots: 30,
    slotsAvailable: 25,
    points: 35,
    difficulty: "上級",
    requirements: ["動きやすい服装", "体力に自信がある方"],
    icon: Building2,
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
  },
]

const categories = [
  { name: "すべて", count: opportunities.length },
  { name: "環境保全", count: opportunities.filter((o) => o.category === "環境保全").length },
  { name: "イベント支援", count: opportunities.filter((o) => o.category === "イベント支援").length },
  { name: "福祉活動", count: opportunities.filter((o) => o.category === "福祉活動").length },
  { name: "教育支援", count: opportunities.filter((o) => o.category === "教育支援").length },
  { name: "防災活動", count: opportunities.filter((o) => o.category === "防災活動").length },
]

export default function VolunteerPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">ボランティア活動</h1>
          <p className="text-lg text-muted-foreground text-white">地域社会に貢献しながら、チームのポイントを獲得しよう</p>
        </div>

        {/* Info Banner */}
        <Card className="mb-8 bg-gray-700 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-semibold text-white">ボランティアポイントについて</h2>
              <p className="text-sm text-muted-foreground text-white">
                各活動に参加することで、チーム全体にボランティアポイントが加算されます。活動内容や難易度により10pt〜40ptが付与されます。複数の活動に参加することで、より多くのポイントを獲得できます。
              </p>
            </div>
          </div>
        </Card>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">カテゴリー</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category.name} variant="outline" size="sm">
                {category.name}
                <Badge variant="secondary" className="ml-2 border-black">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="space-y-6">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon
            const availabilityPercent = (opportunity.slotsAvailable / opportunity.slots) * 100

            return (
              <Card key={opportunity.id} className="overflow-hidden">
                <div className="flex flex-col gap-6 p-6 lg:flex-row">
                  {/* Icon and Basic Info */}
                  <div className="flex flex-1 gap-4">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${opportunity.bgColor}`}
                    >
                      <Icon className={`h-8 w-8 ${opportunity.color}`} />
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                        <Badge variant="outline" className="text-black">{opportunity.category}</Badge>
                        <Badge
                          variant="secondary"
                          className={
                            opportunity.difficulty === "初級"
                              ? "bg-green-500/10 text-green-600"
                              : "bg-orange-500/10 text-orange-600"
                          }
                        >
                          {opportunity.difficulty}
                        </Badge>
                      </div>

                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{opportunity.organization}</span>
                      </div>

                      <p className="mb-4 text-sm text-muted-foreground">{opportunity.description}</p>

                      {/* Details Grid */}
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>
                            残り{opportunity.slotsAvailable}/{opportunity.slots}枠
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Points and Action */}
                  <div className="flex flex-col items-center justify-between gap-4 lg:w-48 lg:border-l lg:pl-6">
                    <div className="text-center">
                      <div className="mb-1 text-sm text-muted-foreground">獲得ポイント</div>
                      <div className="flex items-center justify-center gap-1">
                        <Heart className="h-5 w-5 text-green-500" />
                        <span className="text-3xl font-bold text-green-500">{opportunity.points}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">ポイント</div>
                    </div>

                    {/* Availability Bar */}
                    <div className="w-full">
                      <div className="mb-2 text-center text-xs text-muted-foreground">募集状況</div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full transition-all ${
                            availabilityPercent < 80
                              ? "bg-green-500"
                              : availabilityPercent > 20
                                ? "bg-orange-500"
                                : "bg-red-500"
                          }`}
                          style={{ width: `${availabilityPercent}%` }}
                        />
                      </div>
                      <div className="mt-1 text-center text-xs text-muted-foreground">
                        {availabilityPercent < 50 ? "余裕あり" : availabilityPercent > 20 ? "残りわずか" : "満員間近"}
                      </div>
                    </div>

                    <Button className="w-full" disabled={opportunity.slotsAvailable === 0}>
                      {opportunity.slotsAvailable > 0 ? "参加申込" : "満員"}
                    </Button>
                  </div>
                </div>

                {/* Requirements */}
                <div className="border-t bg-muted/30 px-6 py-4">
                  <div className="text-sm">
                    <span className="font-medium text-muted-foreground">必要なもの: </span>
                    <span className="text-muted-foreground">{opportunity.requirements.join("、")}</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Award className="h-5 w-5 text-primary" />
              参加のメリット
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>チームのボランティアポイントを獲得し、ランキング上昇に貢献</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>地域社会とのつながりを深め、社会貢献活動の経験を積める</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>チームメンバーとの絆を強化し、協力関係を築く</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>新しいスキルや知識を学ぶ機会を得られる</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Users className="h-5 w-5 text-primary" />
              参加方法
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">1.</span>
                <span>参加したい活動を選び、「参加申込」ボタンをクリック</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">2.</span>
                <span>チーム全員で参加する必要はなく、個人単位での参加も可能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">3.</span>
                <span>活動終了後、自動的にチームにポイントが加算されます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">4.</span>
                <span>複数の活動に参加することで、より多くのポイントを獲得可能</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
