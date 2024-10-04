import { notFound } from "next/navigation"
import DetailPageContent from "@/components/detail-page-content"
import Header from "@/components/header"
import Footer from "@/components/footer"

// 仮のデータ（実際の実装では、APIやデータベースから取得します）
const dummyData = {
  news: [
    {
      id: 1,
      title: "新しい公園がオープンしました",
      date: "2024-04-01",
      content:
        "市の中心部に新しい公園がオープンしました。広々とした芝生エリア、子供向けの遊具、ウォーキングトラックなどが設置されています。市民の皆様のくつろぎの場としてご利用ください。",
    },
    {
      id: 2,
      title: "ゴミ収集日程が変更になります",
      date: "2024-04-15",
      content:
        "来月より、ゴミ収集の日程が変更になります。詳細は各世帯に配布されるチラシをご確認ください。環境保護にご協力いただき、ありがとうございます。",
    },
  ],
  events: [
    {
      id: 1,
      title: "夏祭り",
      date: "2024-08-01",
      time: "18:00-22:00",
      location: "市民公園",
      content:
        "毎年恒例の夏祭りを開催します。盆踊り、屋台、花火大会など、楽しいイベントが盛りだくさんです。ご家族やお友達とぜひお越しください。",
    },
    {
      id: 2,
      title: "市民マラソン大会",
      date: "2024-09-15",
      time: "9:00-12:00",
      location: "市民陸上競技場",
      content:
        "健康増進と地域交流を目的とした市民マラソン大会を開催します。5km、10km、ハーフマラソンのコースがあります。参加申し込みは市役所窓口または公式ウェブサイトで受け付けています。",
    },
  ],
}

async function getItem(type: string, id: string) {
  // 実際のアプリケーションでは、ここでAPIリクエストを行います
  const item = dummyData[type]?.find((item) => item.id === parseInt(id))
  if (!item) {
    notFound()
  }
  return item
}

export default async function DetailPage({
  params,
}: {
  params: { type: string; id: string }
}) {
  const item = await getItem(params.type, params.id)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <DetailPageContent item={item} type={params.type} />
      </main>
      <Footer />
    </div>
  )
}
