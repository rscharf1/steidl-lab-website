import csv
import json
import os

# File paths
tsv_file = '_data/team.tsv'
json_file = '_data/team.json'  # Adjust if needed

# Ensure _data directory exists
os.makedirs(os.path.dirname(json_file), exist_ok=True)

# Read TSV and write JSON
with open(tsv_file, newline='', encoding='utf-8') as tsv_f:
    reader = csv.DictReader(tsv_f, delimiter='\t')
    data = list(reader)

with open(json_file, 'w', encoding='utf-8') as json_f:
    json.dump(data, json_f, indent=2)