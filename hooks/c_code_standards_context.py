import json
from pathlib import Path


def emit_context(event):
    skill = Path(__file__).resolve().parent.parent / "skills" / "engineering" / "c-code-standards" / "SKILL.md"
    content = skill.read_text(encoding="utf-8")
    print(json.dumps({"hookSpecificOutput": {"hookEventName": event, "additionalContext": content}}, ensure_ascii=True))
