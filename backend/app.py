from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn

from api.main import app as api_app

app = FastAPI()
app.mount("/api", api_app)
app.mount("/", StaticFiles(directory="frontend", html=True), name="static")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
