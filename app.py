import os


def print_tree(root, indent=""):
    entries = sorted(os.listdir(root))
    for i, entry in enumerate(entries):
        path = os.path.join(root, entry)
        is_last = i == len(entries) - 1

        if os.path.isdir(path):
            print(f"{indent}+ {entry}")
            print_tree(path, indent + "    ")
        else:
            print(f"{indent}- {entry}")


if __name__ == "__main__":
    folder_path = "src"  # 👈 change this to your folder path
    print(f"+ {os.path.basename(os.path.abspath(folder_path))}")
    print_tree(folder_path, "    ")
