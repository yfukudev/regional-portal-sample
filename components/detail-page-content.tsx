"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"

type ItemType = {
  id: number
  title: string
  date: string
  content: string
  time?: string
  location?: string
}

type DetailPageContentProps = {
  item: ItemType
  type: string
}

export default function DetailPageContent({
  item,
  type,
}: DetailPageContentProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>
            {type === "events" ? (
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{item.date}</span>
                <Clock className="h-4 w-4 ml-4" />
                <span>{item.time}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{item.date}</span>
              </div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{item.content}</p>
          {type === "events" && item.location && (
            <p className="font-semibold">場所: {item.location}</p>
          )}
        </CardContent>
      </Card>
      <div className="mt-4">
        <Button asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> トップページに戻る
          </Link>
        </Button>
      </div>
    </>
  )
}
