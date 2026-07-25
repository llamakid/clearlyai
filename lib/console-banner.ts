/**
 * Console banner — sky blue "LLAMA" + orange "KID" ASCII wordmark, credited
 * to llamakid.com. Fired once client-side from the root layout.
 */
export function llamakidConsoleBanner(tagline?: string) {
  const banner = `
%c██╗     ██╗      █████╗ ███╗   ███╗ █████╗ %c██╗  ██╗██╗██████╗
%c██║     ██║     ██╔══██╗████╗ ████║██╔══██╗%c██║ ██╔╝██║██╔══██╗
%c██║     ██║     ███████║██╔████╔██║███████║%c█████╔╝ ██║██║  ██║
%c██║     ██║     ██╔══██║██║╚██╔╝██║██╔══██║%c██╔═██╗ ██║██║  ██║
%c███████╗███████╗██║  ██║██║ ╚═╝ ██║██║  ██║%c██║  ██╗██║██████╔╝
%c╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝%c╚═╝  ╚═╝╚═╝╚═════╝
%c                                           %c                   `

  const blue = 'color:#4a9ab5; font-family: monospace; font-weight: bold;'
  const orange = 'color:#e05c1a; font-family: monospace; font-weight: bold;'

  console.log(
    banner,
    blue, orange,
    blue, orange,
    blue, orange,
    blue, orange,
    blue, orange,
    blue, orange,
    blue, orange
  )

  if (tagline) {
    console.log(`%c${tagline}`, 'color: #9a9a96; font-size: 13px;')
  }
}
