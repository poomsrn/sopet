from fastapi import APIRouter, HTTPException
from app.core.authentication import verify_password, create_access_token
from app.crud.client import create_user, get_user_by_email
from app.schemas.client import ClientAuth

router = APIRouter(
    prefix="/client",
    tags=["Client"],
    responses={404: {"message": "Not found"}}
)


@router.post("/register")
async def client_register(req: ClientAuth):
    if not get_user_by_email(req.email):
        client = create_user(req)
        return {"email": client.email}

    raise HTTPException(status_code=409, detail="Email is already taken")


@router.post("/login")
async def login(req: ClientAuth):
    user = get_user_by_email(req.email)

    if not user or not verify_password(req.password, user.password):
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")

    jwt = create_access_token({"email": user.email})
    return {"token": jwt}
