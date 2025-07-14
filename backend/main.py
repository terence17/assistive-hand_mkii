from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Assistive Hand API is running!"}
