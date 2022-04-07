import os

# NOTE doesn't currently handle non-root paths! :)
urls = {
    "/fontsinuse": "/fonts-in-use",
    "/faq": "/help",
    "/techsupport": "/help",
    "/testfonts": "/help",
    "/eula": "/licence",
    "/license": "/licence",
    "/SherpaSans": "/Gitan",
    "/sherpasans": "/Gitan",
    "/tester": "/fonts",
    "/Adapter": "/AdapterPE",
    "/Adelphi": "/AdelphiPE",
    "/Aisha": "/AishaArabic",
    "/Arek": "/ArekArmenian",
    "/Avory": "/AvoryPE",
    "/Clone": "/CloneRoundedPE",
    "/Corsair": "/CorsairPE",
    "/Eskorte": "/EskorteLatin",
    "/Gitan": "/GitanLatin",
    "/Gridlite": "/GridlitePE",
    "/Nassim": "/NassimArabic",
    "/Skolar": "/SkolarPE",
    "/SkolarSans": "/SkolarSansPE",
    "/Skolar-Sans": "/SkolarSansPE",
}

for old, new in urls.items():
    if os.path.isfile(old):
        print(f"Skipping redirect from {old} - file exists as scraped web page")
        continue
    old = f"./{old}.html"
    new = f"{new}.html"

    with open(old, "w") as f:
        tpl = f"""---
---
<!doctype html>
<html>
<head><meta http-equiv="Refresh" content="0; url='{new}'" /></head>
<body>Page moved to <a href="{new}">{new}</a></body>
</html>"""
        f.write(tpl)
        print(f"Written redirect from {old} to {new}")

#     # And once more lowercase :/ won't work, because they would be same named
#     # 
#     old = old.lower()
#     with open(old, "w") as f:
#         tpl = f"""<!doctype html>
# <html>
# <head><meta http-equiv="Refresh" content="0; url='{new}'" /></head>
# <body>Page moved to <a href="{new}">{new}</a></body>
# </html>"""
#         f.write(tpl)
#         print(f"Written redirect from {old} to {new}") 
