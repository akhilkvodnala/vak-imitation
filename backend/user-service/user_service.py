from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class User(BaseModel):
    username: str
    password: str

users_db = []

@app.post("/register", response_model=User)
async def register(user: User):
    for u in users_db:
        if u.username == user.username:
            raise HTTPException(status_code=400, detail="Username already exists")
    users_db.append(user)
    return user

@app.get("/users", response_model=List[User])
async def get_users():
    return users_db