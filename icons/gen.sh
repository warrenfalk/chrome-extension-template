#!/usr/bin/env bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null
then
    echo "ImageMagick is not installed. Please install it to use this script."
    exit 1
fi

# change to the directory containing this script
cd "$(dirname "$0")"

# Define input and output filenames
INPUT_FILE="icon.svg"
OUTPUT_PREFIX="icon"

# Array of sizes
SIZES=(128 64 48 16)

# Loop through sizes and create corresponding PNG files
for SIZE in "${SIZES[@]}"
do
    OUTPUT_FILE="${OUTPUT_PREFIX}${SIZE}.png"
    convert -background none -resize ${SIZE}x${SIZE} $INPUT_FILE $OUTPUT_FILE
    echo "Created $OUTPUT_FILE"
done

echo "All files created successfully."
