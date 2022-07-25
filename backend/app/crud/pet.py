from sqlalchemy.orm import Session
from app.database.init_db import SessionLocal
from app.models import client, pet
from app.core import authentication
from app.schemas.pet import PetCreate


db = SessionLocal()


def get_user_by_petId(pet_id: str):
    return db.query(pet.Pet).filter(pet.Pet.pet_id == pet_id).first()


def create_pet(request: PetCreate):
    
    db_pet = pet.Pet(
        pet_id = request.pet_id,
        client_id = request.client_id)
    db.add(db_pet)
    db.commit()
    db.refresh(db_pet)
    return db_pet



