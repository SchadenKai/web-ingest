import requests
from bs4 import BeautifulSoup

def scrape_website(web_url: str) -> str:
    

    response = requests.get(web_url)
    response.raise_for_status()  # Raise an error for bad responses

    soup = BeautifulSoup(response.content, 'html.parser')
    text = soup.get_text(separator='\n', strip=True)  # Extract text and separate by new lines

    return text

