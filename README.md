# Caption Pilot

Static English caption tool website generated from structured data.

## Build

```powershell
node build.js
```

Optional domain for canonical URLs and sitemap:

```powershell
$env:SITE_URL="https://your-domain.com"
node build.js
```

## Deploy

Upload the contents of `dist/` to any static host.
