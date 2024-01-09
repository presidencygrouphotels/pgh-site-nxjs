import os
from PIL import Image
import argparse

def process_images(input_folder, output_folder, resize_factor, webp_quality, webp_effort):
    # Ensure the output folder exists
    os.makedirs(output_folder, exist_ok=True)


    for filename in os.listdir(input_folder):
        if filename.endswith(('.jpg', '.jpeg', '.png')):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename.split('.')[0] + '.webp')

            image = Image.open(input_path)

            #  33% of the original size
            width, height = image.size
            new_size = (int(width * resize_factor), int(height * resize_factor))
            resized_image = image.resize(new_size)

            # Save resized image as WebP 
            resized_image.save(output_path, 'webp', quality=webp_quality, method=webp_effort)

            print(f"{filename} processed!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Batch process images in a folder.")
    parser.add_argument("input_folder", help="Input folder containing images to be processed.")
    parser.add_argument("output_folder", help="Output folder to save processed images.")
    parser.add_argument("--resize_factor", type=float, default=0.33, help="Resize factor (default: 0.33)")
    parser.add_argument("--webp_quality", type=int, default=75, help="WebP quality (0-100, default: 75)")
    parser.add_argument("--webp_effort", type=int, default=6, help="WebP effort (0-6, default: 6)")

    args = parser.parse_args()

    process_images(args.input_folder, args.output_folder, args.resize_factor, args.webp_quality, args.webp_effort)
