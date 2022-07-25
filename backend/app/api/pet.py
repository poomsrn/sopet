from fastapi import APIRouter
from app.core import authentication
from app.crud import pet
from app.schemas.pet import PetCreate

router = APIRouter(
    prefix="/pet",
    tags=["Pet"],
    responses={404: {"message": "Not found"}}
)


@router.get("/")
async def read_pets():
    return [{"username": "Rick"}, {"username": "Morty"}]


@router.post("/add")
async def add_pet(newPet: PetCreate):
    return pet.create_pet(newPet)
    



