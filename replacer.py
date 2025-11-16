import os

root_directory = r"F:\schoolify-front\src"

for root, dirs, files in os.walk(root_directory):
    for filename in files:
        # Only target .ts and .tsx files
        if filename.endswith((".ts", ".tsx")) and "Eucation" in filename:
            old_path = os.path.join(root, filename)
            new_filename = filename.replace("Eucation", "Education")
            new_path = os.path.join(root, new_filename)

            # Avoid overwriting existing files
            if os.path.exists(new_path):
                print(f"❗ Skip: {new_path} already exists.")
                continue

            os.rename(old_path, new_path)
            print(f"✔ Renamed: {old_path} -> {new_path}")
