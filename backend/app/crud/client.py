from sqlalchemy.orm import Session
from app.database.init_db import SessionLocal
from app.models import client
from app.core import authentication
from app.schemas.client import ClientAuth


db = SessionLocal()


def get_user_by_email(email: str):
    return db.query(client.Client).filter(client.Client.email == email).first()


def create_user(request: ClientAuth):
    hashed_password = authentication.get_password_hash(request.password)
    db_user = client.Client(email=request.email,
                            password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
