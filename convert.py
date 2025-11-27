import os
from PIL import Image
import glob

def simple_png_to_jpg(folder_path, quality=95):
    """简化版：直接在当前文件夹转换"""
    for png_file in glob.glob(os.path.join(folder_path, "*.png")):
        try:
            with Image.open(png_file) as img:
                rgb_img = img.convert('RGB')
                jpg_file = os.path.splitext(png_file)[0] + ".jpg"
                rgb_img.save(jpg_file, "JPEG", quality=quality)
                print(f"转换: {os.path.basename(png_file)}")
        except Exception as e:
            print(f"错误: {png_file} - {e}")

# 使用示例
simple_png_to_jpg("./projects/DMDiff_fig")  # 替换为你的文件夹路径