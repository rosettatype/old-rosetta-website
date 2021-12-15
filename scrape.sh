# via https://stackoverflow.com/a/39753416/999162 (also has explanation of the flags)
# -m to mirror, alias of -r -N -l inf -nr
# -k convert links (relative for internal, full for absolute)
# -K keep orig file of -k
# -t depth
# -P folder to scrape into "." + --no-host-directories = git repo root folder
wget -m -E -k -K -t 10 --random-wait --no-if-modified-since --no-check-certificate --no-verbose --no-host-directories -P . https://old.rosettatype.com

echo "Added old redirects"
python redirects.py

echo "Copy missed webfonts and json files from microsites"
python fix.py

echo "Fixing left-over absolute URLs"
# kind of risky... there shouldn't be any, but of course there are, since not
# all internal URLs properly use their current app base url old.rosettatype.com
for ext in html css js
do
    find . -type f -name "*.$ext" -print0 | xargs -0 sed -i '' -e 's|http://rosettatype.com/|/|g'
    find . -type f -name "*.$ext" -print0 | xargs -0 sed -i '' -e 's|https://rosettatype.com/|/|g'
    find . -type f -name "*.$ext" -print0 | xargs -0 sed -i '' -e 's|http://www.rosettatype.com/|/|g'
    find . -type f -name "*.$ext" -print0 | xargs -0 sed -i '' -e 's|https://www.rosettatype.com/|/|g'
    find . -type f -name "*.$ext" -print0 | xargs -0 sed -i '' -e 's|http://old.rosettatype.com/|/|g'
    find . -type f -name "*.$ext" -print0 | xargs -0 sed -i '' -e 's|https://old.rosettatype.com/|/|g'
done
