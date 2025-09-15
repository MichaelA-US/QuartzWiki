import { QuartzComponent, QuartzComponentProps } from "./types"

export default (() => {
  function SimpleNav(_: QuartzComponentProps) {
    return (
      <nav class="topnav">
        <a class="internal" href="/">Home</a>
        <a class="internal" href="/projects/">Projects</a>
        <a class="internal" href="/blog/">Blog</a>
        <a class="internal" href="/about/">About</a>
      </nav>
    )
  }
  SimpleNav.css = `
    .topnav { display:flex; gap:1rem; align-items:center; flex-wrap:wrap; }
    .topnav a { text-decoration:none; }
  `
  return SimpleNav
}) satisfies QuartzComponent
