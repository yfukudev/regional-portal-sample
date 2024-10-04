"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Info, MapPin, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LocalPortalComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>ローカル市へようこそ</CardTitle>
              <CardDescription>
                自然豊かで活気あふれる街、ローカル市の公式ポータルサイトです。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://placehold.jp/50/3d4070/ffffff/400x200.png?text=local-portal"
                alt="ローカル市の風景"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardContent>
          </Card>

          <Tabs defaultValue="news">
            <TabsList>
              <TabsTrigger value="news">ニュース</TabsTrigger>
              <TabsTrigger value="events">イベント</TabsTrigger>
              <TabsTrigger value="tourism">観光</TabsTrigger>
            </TabsList>
            <TabsContent value="news">
              <Card>
                <CardHeader>
                  <CardTitle>最新ニュース</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="hover:underline">
                        新しい公園がオープンしました
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        ゴミ収集日程が変更になります
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        市民体育館の利用時間拡大のお知らせ
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <CardTitle>今後のイベント</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="hover:underline">
                        夏祭り（8月1日〜3日）
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        市民マラソン大会（9月15日）
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        農産物直売市（毎週土曜日）
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tourism">
              <Card>
                <CardHeader>
                  <CardTitle>観光スポット</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="hover:underline">
                        ローカル山展望台
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        歴史民俗資料館
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        ローカル温泉
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <aside className="md:w-1/3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>地域サービス</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    各種証明書発行
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    施設予約
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    ゴミ収集カレンダー
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sun className="h-5 w-5 mr-2" />
                今日の天気
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>晴れ - 最高気温: 28°C / 最低気温: 20°C</p>
            </CardContent>
          </Card>
        </aside>
      </main>

      <Footer />
    </div>
  )
}
