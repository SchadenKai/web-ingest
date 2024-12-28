# FastAPI Web Scraper

This project is a simple FastAPI application that provides an endpoint for web scraping. It allows users to submit a URL and receive a clean text file containing the extracted text from the specified website.

## Project Structure

```
fastapi-web-scraper
├── src
│   ├── main.py              # Entry point of the FastAPI application
│   ├── routers
│   │   └── web_scrape.py    # Router for the web scraping endpoint
│   └── utils
│       └── scraper.py       # Utility functions for web scraping
├── requirements.txt          # Project dependencies
└── README.md                 # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fastapi-web-scraper
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the FastAPI application:
   ```
   uvicorn src.main:app --reload
   ```

## Usage

To scrape a website, send a POST request to the `/web_scrape` endpoint with a JSON body containing the `web_url`:

### Example Request

```
POST /web_scrape
Content-Type: application/json

{
  "web_url": "https://example.com"
}
```

### Example Response

The response will be a clean text file containing the extracted text from the specified URL.