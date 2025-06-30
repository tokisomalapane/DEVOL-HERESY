import Link from "next/link"
import { Instagram, Facebook, Youtube, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMediaSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Connect With Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
            <p className="text-neutral-600 mb-6 text-sm md:text-base">
              Stay updated with our latest collections, behind-the-scenes content, and community events by following us
              on social media.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              <Link
                href="https://www.instagram.com/devol.heresy.merch/"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
              >
                <Instagram className="h-6 w-6 md:h-8 md:w-8 mb-2" />
                <span className="font-medium text-sm md:text-base">Instagram</span>
              </Link>

              <Link
                href="https://www.facebook.com/people/Devol-Heresy-Clothing/100064125063373/?locale=bs_BA"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-blue-600 text-white rounded-lg hover:opacity-90 transition"
              >
                <Facebook className="h-6 w-6 md:h-8 md:w-8 mb-2" />
                <span className="font-medium text-sm md:text-base">Facebook</span>
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCdKIudxHkTXw2Xu1gf4pnOg"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-red-600 text-white rounded-lg hover:opacity-90 transition"
              >
                <Youtube className="h-6 w-6 md:h-8 md:w-8 mb-2" />
                <span className="font-medium text-sm md:text-base">YouTube</span>
              </Link>

              <Link
                href="https://www.threads.net/@devol.heresy.merch"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-black text-white rounded-lg hover:opacity-90 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 md:h-8 md:w-8 mb-2"
                >
                  <path d="M9 12h.01" />
                  <path d="M15 12h.01" />
                  <path d="M12 12h.01" />
                  <path d="M12 16h.01" />
                  <path d="M12 20h.01" />
                  <path d="M18 8c0-2.5-2-4.5-4.5-4.5h-3C8 3.5 6 5.5 6 8v8c0 2.5 2 4.5 4.5 4.5h3c2.5 0 4.5-2 4.5-4.5z" />
                </svg>
                <span className="font-medium text-sm md:text-base">Threads</span>
              </Link>

              <Link
                href="https://www.tiktok.com/@devolheresy.clothing"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-lg hover:opacity-90 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 md:h-8 md:w-8 mb-2"
                >
                  <path d="M9 12A3 3 0 1 0 9 6a3 3 0 0 0 0 6v0Z" />
                  <path d="M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
                  <path d="M15 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6v0Z" />
                  <path d="M15 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
                </svg>
                <span className="font-medium text-sm md:text-base">TikTok</span>
              </Link>

              <Link
                href="https://open.spotify.com/playlist/4pRTrzKzAXNCGpJEdFtYuf?si=vDQenf8pSaaCN5sdVsHviQ&nd=1&_branch_match_id=1441865208841516401&utm_medium=sharing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1nfLrszPKTHMT6lMsq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FABWo%2F2I6AAAA"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-green-600 text-white rounded-lg hover:opacity-90 transition"
              >
                <Music className="h-6 w-6 md:h-8 md:w-8 mb-2" />
                <span className="font-medium text-sm md:text-base">Spotify</span>
              </Link>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  )
}
