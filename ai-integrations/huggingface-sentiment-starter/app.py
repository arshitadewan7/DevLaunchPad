from transformers import pipeline
from fastapi import FastAPI

app = FastAPI()
classifier = pipeline("sentiment-analysis")

@app.get("/sentiment")
async def sentiment():
    result = classifier("I love using DevLaunchPad!")
    return {"result": result}
