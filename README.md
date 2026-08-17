# xzhou.au

Published output only. **Do not edit anything here** — every file is generated.

The source is `XinZhou0417/resume` (private), under `site/`. Change content or
design there and run `make -C site`, then copy `site/dist/` into this repo.

`.nojekyll` is load-bearing: GitHub Pages runs Jekyll by default, and Jekyll
skips directories beginning with an underscore. Astro emits its stylesheet into
`_astro/`, so without that file the site deploys with no styling at all.

`CNAME` holds the custom domain. If the Cloudflare record is proxied, SSL/TLS
mode must be **Full**, not Flexible, or the page redirect-loops.
