import cv2
import numpy as np
import pyautogui
import time

# Open webcam
cap = cv2.VideoCapture(0)

# Background subtractor (detects motion)
fgbg = cv2.createBackgroundSubtractorMOG2(history=500, varThreshold=50)

last_skip_time = 0

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Flip for natural movement
    frame = cv2.flip(frame, 1)

    # Apply background subtractor
    fgmask = fgbg.apply(frame)

    # Clean up mask
    kernel = np.ones((5,5), np.uint8)
    fgmask = cv2.morphologyEx(fgmask, cv2.MORPH_OPEN, kernel)
    fgmask = cv2.morphologyEx(fgmask, cv2.MORPH_CLOSE, kernel)

    # Find contours (moving objects = hand)
    contours, _ = cv2.findContours(fgmask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    for cnt in contours:
        area = cv2.contourArea(cnt)

        # If moving object is big enough → hand gesture detected
        if area > 12000:  
            if time.time() - last_skip_time > 2:  
                print("Hand gesture detected → Skipping ad...")

                # Click for skipping ad
                pyautogui.click()

                last_skip_time = time.time()

            # Draw contour
            cv2.drawContours(frame, [cnt], -1, (0, 255, 0), 3)

    cv2.imshow("Ad Skipper - Hand Motion", frame)
    cv2.imshow("Movement Mask", fgmask)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
