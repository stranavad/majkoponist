import json

text = ["{'id': 28, 'answer': '15'}", "{'id': 24, 'answer': '16'}", "{'id': 26, 'answer': '15'}"]
for txt in text:
    print(txt)
    txt = txt.replace("\'", "\"")
    obj = json.loads(txt)
    print(obj['answer'])
