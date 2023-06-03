#!/bin/bash

ls ./pages/blog/posts/
echo -n "Blog series: "
read -r series
cp ./template/temp.mdx ./pages/blog/posts/$series/$series$(date +%m%d%y).mdx
vim ./pages/blog/posts/$series/$series$(date +%m%d%y).mdx