import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GuideForBg() {
    return (
        <div className="flex flex-col items-center p-8 space-y-8">
            <div className="text-center">
                <p className="text-sm font-semibold text-green-600">NEW? START HERE</p>
                <h1 className="text-4xl font-bold">Guide For Beginners</h1>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                <Card className="bg-[#1a202c] text-white">
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <LeafIcon className="w-8 h-8 text-green-500" />
                        <h2 className="text-lg font-bold">START YOUR OWN BLOG</h2>
                        <p className="text-center text-sm">
                            Creating a blog is challenging for beginners. My beginner-friendly step-by-step guide will help you launch
                            your profitable blog in just 15 minutes. For 3+ years, I’ve been blogging & making money online from my
                            blog. Why you not?
                        </p>
                        <Button className="bg-green-500 text-white">LEARN MORE</Button>
                    </CardContent>
                </Card>
                <Card className="bg-[#1a202c] text-white">
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <PiggyBankIcon className="w-8 h-8 text-green-500" />
                        <h2 className="text-lg font-bold">MAKE MONEY BLOGGING</h2>
                        <p className="text-center text-sm">
                            Want to make money from your blog or website? In this guide, I described 11+ legit ways to make money
                            blogging. For 3+ years now, I’ve been earning a substantial amount of money from my blog. Let's start
                            making money!
                        </p>
                        <Button className="bg-green-500 text-white">LEARN MORE</Button>
                    </CardContent>
                </Card>
                <Card className="bg-[#1a202c] text-white">
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <BarChartIcon className="w-8 h-8 text-green-500" />
                        <h2 className="text-lg font-bold">INCREASE BLOG TRAFFIC</h2>
                        <p className="text-center text-sm">
                            Have you launched a new blog? Now it’s time to learn how to increase blog traffic. Bringing targeted
                            traffic to your blog or Website is an important thing. Here are my most effective strategies to drive
                            traffic to your blog.
                        </p>
                        <Button className="bg-green-500 text-white">LEARN MORE</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function BarChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
    )
}


function LeafIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}


function PiggyBankIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
            <path d="M2 9v1c0 1.1.9 2 2 2h1" />
            <path d="M16 11h0" />
        </svg>
    )
}