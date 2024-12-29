'use client'

import { useState } from "react"
import { Loader2, Copy, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { API_SERVER } from "@/constants/configs"

export function Scraper() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    content: string
  } | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(`${API_SERVER}/web_scrape/v2`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          web_url: url
         }),
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error scraping website:", error)
    } finally {
      setLoading(false)
    }
  }

  function downloadTxt() {
    if (!result) return
    const element = document.createElement("a")
    const file = new Blob([result.content], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "scraped-content.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="flex flex-col max-w-screen-xl w-full gap-6">
      <Card className="border-2">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <Input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Scraping...
                </>
              ) : (
                "Scrape"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <div className="max-w-full grid gap-6">
          <Card className="max-w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">Summary</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-orange-500 hover:text-orange-600"
                  onClick={() => navigator.clipboard.writeText(result.content)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-orange-500 hover:text-orange-600"
                  onClick={downloadTxt}
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="max-w-screen-xl">
              <div className="h-[400px] max-w-full overflow-x-auto rounded-md border bg-muted/50 p-4">
                <pre className="text-sm max-w-full ">{result.content}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

