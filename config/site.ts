import type { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteRoutes = {
  home: "/",
  projects: "/projects",
  login: "/login",
  register: "/register",
}

export const siteConfig: SiteConfig = {
  name: "Fetcch",
  description: "Unified Payments Layer",
  mainNav: [
    {
      title: "Home",
      href: siteRoutes.home,
      disabled: false,
      external: false,
    },
    {
      title: "Use Cases",
      href: "/use-cases",
      disabled: true,
      external: false,
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: false,
      external: false,
    },
    {
      title: "Docs",
      href: "/docs",
      disabled: false,
      external: false,
    },
  ],
  links: {
    twitter: "https://twitter.com/FetcchX",
    github: "https://github.com/FetcchX",
  },
}
