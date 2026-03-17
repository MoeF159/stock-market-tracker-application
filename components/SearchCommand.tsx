"use client"

import { useEffect, useState } from "react"
import { 
  CommandDialog, 
  CommandEmpty, 
  CommandInput, 
  CommandList 
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Loader2, TrendingUp } from "lucide-react"
import Link from "next/link"
import { searchStocks } from "@/lib/actions/finnhub.actions"
import { useDebounce } from "@/hooks/useDebounce"

// Moved defaultStocks outside the component to avoid useEffect dependency warnings
const defaultStocks: StockWithWatchlistStatus[] = [
  { symbol: "TST", name: "TEST", exchange: "NASDAQ", type: "TYPE", isInWatchlist: false }
]

export default function SearchCommand({ 
  renderAs = "button", 
  label = "Add stock", 
  initialStocks 
}: SearchCommandProps) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [stocks, setStocks] = useState<StockWithWatchlistStatus[]>(initialStocks ?? defaultStocks)

  const isSearchMode = !!searchTerm.trim()
  const displayStocks = isSearchMode ? stocks : stocks?.slice(0, 10)

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen(v => !v)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // Debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setStocks(initialStocks ?? defaultStocks)
      return
    }

    const fetchStocks = async () => {
      setLoading(true)
      try {
        const results = await searchStocks(debouncedSearchTerm.trim())
        setStocks(results)
      } catch {
        setStocks([])
      } finally {
        setLoading(false)
      }
    }

    fetchStocks()
  }, [debouncedSearchTerm, initialStocks])

  const handleSelectStock = () => {
    setOpen(false)
    setSearchTerm("")
    setStocks(initialStocks ?? defaultStocks)
  }

  return (
    <>
      {renderAs === "text" ? (
        <span onClick={() => setOpen(true)} className="search-text">
          {label}
        </span>
      ) : (
        <Button onClick={() => setOpen(true)} className="search-btn">
          {label}
        </Button>
      )}

      <CommandDialog open={open} onOpenChange={setOpen} className="search-dialog">
        <div className="search-field">
          <CommandInput
            value={searchTerm}
            onValueChange={setSearchTerm}
            placeholder="Search stocks..."
            className="search-input"
          />
          {loading && <Loader2 className="search-loader" />}
        </div>

        <CommandList className="search-list">
          {loading ? (
            <CommandEmpty className="search-list-empty">Loading stocks...</CommandEmpty>
          ) : displayStocks?.length === 0 ? (
            <CommandEmpty className="search-list-empty">
              {isSearchMode ? "No results found" : "No stocks available"}
            </CommandEmpty>
          ) : (
            <ul>
              <div className="search-count">
                {isSearchMode ? "Search results" : "Popular stocks"} ({displayStocks?.length || 0})
              </div>

              {displayStocks?.map((stock) => (
                <li key={stock.symbol} className="search-item">
                  <Link
                    href={`/stocks/${stock.symbol}`}
                    onClick={handleSelectStock}
                    className="search-item-link"
                  >
                    <div className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-800 rounded">
                      <TrendingUp className="h-4 w-4 text-gray-500 shrink-0" />
                      <div className="flex-1">
                        <div className="search-item-name text-white">{stock.name}</div>
                        <div className="text-sm text-gray-400">
                          {stock.symbol} | {stock.exchange} | {stock.type}
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}