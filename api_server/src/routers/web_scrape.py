import os
from fastapi import APIRouter, BackgroundTasks, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel
from src.utils.scraper import scrape_website

router = APIRouter()

class WebScrapeRequest(BaseModel):
    web_url: str

def remove_file(file_path: str):
    if os.path.exists(file_path):
        os.remove(file_path)

@router.post("/web_scrape")
async def web_scrape(request: WebScrapeRequest, background_tasks: BackgroundTasks):
    try:
        text = scrape_website(request.web_url)
        file_path = "scraped_content.txt"
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(text)
        background_tasks.add_task(remove_file, file_path)
        return FileResponse(file_path, media_type='application/octet-stream', filename="scraped_content.txt")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))