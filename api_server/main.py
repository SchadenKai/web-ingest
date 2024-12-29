from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.config import WEB_SERVER
import src.routers.web_scrape as web_scrape

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(web_scrape.router)