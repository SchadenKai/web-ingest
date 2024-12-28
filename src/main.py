from fastapi import FastAPI
import src.routers.web_scrape as web_scrape

app = FastAPI()

app.include_router(web_scrape.router)