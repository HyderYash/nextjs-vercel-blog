import React from 'react'
import { Input } from "@/components/ui/input"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon, MountainIcon, SearchIcon } from "lucide-react"
import Link from "next/link"
import ThemeChanger from './theme-changer'

const PageHeader = () => {
    return (
        <header className="bg-background border-b sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <MountainIcon className="h-6 w-6" />
                    <span className="text-lg font-semibold">WAYTOIDEA</span>
                </Link>
                <nav className="hidden items-center gap-4 md:flex">
                    <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Start Your Blog
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Contact
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        About
                    </Link>
                    <div className="relative">
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-md bg-muted pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <SearchIcon className="h-4 w-4" />
                        </div>
                    </div>
                    <ThemeChanger />
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-xs">
                        <div className="flex flex-col items-start gap-4 p-4">
                            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                                Start Your Blog
                            </Link>
                            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                                Blog
                            </Link>
                            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                                Contact
                            </Link>
                            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                                About
                            </Link>
                            <div className="relative w-full">
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-full rounded-md bg-muted pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <SearchIcon className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default PageHeader