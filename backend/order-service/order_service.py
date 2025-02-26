from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Order(BaseModel):
    product_id: int
    quantity: int

orders_db = []

@app.post("/orders")
async def create_order(order: Order):
    orders_db.append(order)
    return {"message": f"Order for {order.quantity} of product {order.product_id} created!"}

@app.get("/orders")
async def get_orders():
    return orders_db