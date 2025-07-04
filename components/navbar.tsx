"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/" className={cn("navbar-link", pathname === "/" && "navbar-link-active")}>
            Simulador
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/informacion" className={cn("navbar-link", pathname === "/informacion" && "navbar-link-active")}>
            Información
          </Link>
        </li>
      </ul>
    </nav>
  )
}
