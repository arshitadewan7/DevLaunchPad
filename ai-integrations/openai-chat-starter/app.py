from fastapi import FastAPI
import openai

openai.api_key = "your-api-key"

app = FastAPI()

@app.get("/chat")
async def chat():
    response = openai.Completion.create(model="text-davinci-003", prompt="Say hello", max_tokens=5)
    return {"response": response.choices[0].text.strip()}
