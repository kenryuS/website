#!/bin/bash

ls ./posts/
echo -n "Blog series: "
read -r series
cp ./temp.mdx ./posts/$series/$series$(date +%m%d%y).mdx
