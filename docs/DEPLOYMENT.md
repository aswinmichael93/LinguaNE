
---

## 2. `docs/DEPLOYMENT.md`

```md
# Deployment Guide

## Requirements
- Node.js 18+
- Python 3.10+

---

## Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
