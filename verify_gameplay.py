import os
from playwright.sync_api import sync_playwright

def verify_gameplay():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use absolute path for index.html
        path = os.path.abspath("index.html")
        url = f"file://{path}"

        context = browser.new_context(record_video_dir="/home/jules/verification/video")
        page = context.new_page()

        print(f"Opening {url}...")
        page.goto(url)
        page.wait_for_timeout(1000)

        # 1. Start Screen
        print("Clicking Start Screen...")
        page.click("#start-screen")
        page.wait_for_timeout(1000)

        # 2. Name Setup
        print("Entering names...")
        page.fill("#p1-name", "Henry")
        page.fill("#p2-name", "Shae")
        page.wait_for_timeout(500)

        print("Starting game...")
        page.click("#start-game-btn")
        page.wait_for_timeout(2000)

        # 3. Game Board
        print("Verifying Board...")
        if page.is_visible("#board"):
            print("Board is visible.")
        else:
            print("Error: Board NOT visible.")

        page.screenshot(path="/home/jules/verification/verification.png")
        print("Screenshot saved to /home/jules/verification/verification.png")

        context.close()
        browser.close()

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/video", exist_ok=True)
    verify_gameplay()
