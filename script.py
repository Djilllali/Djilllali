import random
import subprocess

file_path = "/Users/mac/Downloads/djaliiil19-main/loader.jsx"

# Generate random content
random_content = str(random.random())

# Modify the file
with open(file_path, "a") as file:
    file.write(random_content)

# Commit and push changes
subprocess.run(["git", "add", file_path])
subprocess.run(["git", "commit", "-m", "Random changes"])
subprocess.run(["git", "push", "origin", "master"])

