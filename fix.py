"""
Fix various things the basic wget may have missed
"""
import os
import re
import sys
import glob
from shutil import copy

DIR = "./"

# Explicitly copy woff/2 and json files for microsite testers (they are
# dynamically loaded, so the scraper misses them)
microsites_repo = os.path.abspath("../rosetta-microsites")
microsites_scraped = os.path.abspath(f"{DIR}/microsite/current")

if not os.path.isdir(microsites_repo):
    sys.exit(f"Local microsites directory at '{microsites_repo}' not found")

for dir in os.listdir(microsites_repo):
    if dir.startswith("."):
        continue
    img = os.path.join(microsites_repo, dir, "images")
    if os.path.isdir(img):
        cp = [os.path.join(img, f) for f in os.listdir(img)
              if f.endswith(".json") or f.endswith("woff")
              or f.endswith("woff2")]
        for file in cp:
            print("Copy %s/images/%s" % (dir, os.path.basename(file)))
            copy(file, os.path.join(microsites_scraped, dir, "images"))


# Remove cachebusting timestamps from files
images = {}
for path in glob.glob(f"{DIR}/**/*.jpg?*", recursive=True):
    if path.startswith("./_site"):
        continue

    file = re.sub(r"\?[0-9]*$", "", path)
    print(f"Save file without cachebuster: {file}")
    os.rename(path, file)
    images[path] = file

# Fix image links in files
for path in glob.glob(f"{DIR}/**/*", recursive=True):
    if path.startswith("./_site"):
        continue

    html = ""
    try:
        with open(path, "r") as f:
            html = f.read()
            html = re.sub("?", "?", html)
        for cached, without in images.items():
            html = re.sub(cached, without)
        with open(path, "w") as f:
            f.write(html)
    except Exception as e:
        print(path, e)

# Fix things in scraped html
done = []
permalinks = {}
for path in glob.glob(f"{DIR}/**/*.html", recursive=True):
    if path.startswith("./_site"):
        continue

    print(f"Fix things in {path}")

    # Prevent re-parsing-substrituting; I think the recursive=True is to blame
    if path in done:
        continue

    if path.startswith("./_site"):
        continue

    # Fix the relative link that opens the modal, it should not include the
    # generated local html
    html = ""
    with open(path, "r") as f:
        html = f.read()
        html = re.sub("%3F", "?", html)
        html = re.sub(r"<a href=\"([^#]*)#charset-modal",
                      "<a href=\"#charset-modal",
                      html)
        html = re.sub(r"href=\"([A-z.]*)(?=#font-family-)",
                      "href=\"",
                      html)
        html = re.sub(r"tester\">Fonts</a>",
                      "fonts\">Fonts</a>",
                      html)
        html = re.sub(r"href=\"(.*)\" rel=\"home\">",
                      "href=\"/\" rel=\"home\">",
                      html)
        html = re.sub(r"\.jpg\?[0-9]*", ".jpg", html)

        if "meta rel\"canonical" not in html:
            html = re.sub(r"</head>",
                          "<meta rel=\"canonical\" href=\"/%s\">\n</head>"
                          % os.path.splitext(os.path.basename(path))[0],
                          html)

        doctype = """<!DOCTYPE html>
<!--[if IE 8]>    <html class="no-js no-svg lt-ie9 responsive"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js responsive"> <!--<![endif]-->"""

        for li in doctype.split("\n"):
            html = html.replace(li, "")

        if html.startswith("---"):
            html = html.split("\n")
            html = "\n".join([r for r in html[3:] if r.strip() != ""])

        if not html.startswith("---"):
            perma = os.path.splitext(path)[0][1:]
            permalinks[os.path.basename(path.replace("%3F", "?"))] = perma
            html = f"---\npermalink: {perma}\n---\n" + html

    with open(path, "w") as f:
        f.write(html)

    done.append(path)

# Fixing permalinks to html files
for path in glob.glob(f"{DIR}/**/*.html", recursive=True):
    if path.startswith("./_site"):
        continue

    html = ""

    with open(path, "r") as f:
        html = f.read()
        html = re.sub("%3F", "?", html)

    for file, permalink in permalinks.items():
        file = re.sub("%3F", "?", file)
        rpl = os.path.splitext(file)[0]
        html = re.sub(re.escape(file), rpl, html)
    with open(path, "w") as f:
        f.write(html)
