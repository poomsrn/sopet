from typing import List, Optional, datetime
from uuid import uuid4
from pydantic import BaseModel



class PetCreate(BaseModel):
    
    pet_id : str
    client_id : str
