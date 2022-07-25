from typing import List, Optional
from uuid import uuid4
from pydantic import BaseModel


class ClientBase(BaseModel):
    email: str


class ClientAuth(ClientBase):
    password: str
