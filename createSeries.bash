#!/bin/bash

echo -n "New blog series name: "
read -r series
mkdir ./pages/blog/posts/$series
cp ./template/tempseries.js ./pages/blog/$series.js
cp ./template/temp.mdx ./pages/blog/posts/$series/$series$(date +%m%d%y).mdx
vim -o3 ./pages/blog/$series.js ./pages/blog/posts/$series/$series$(date +%m%d%y).mdx ./pages/index.js
