import qrcode

data =  "Babin Loves You Rititka uuummmaaaahhhhhh 😘"

qr = qrcode.make(data)
# qr = qrcode.QRCode
qr.save("img_.png")

import qrcode

# # Data to encode
# data = "This is some data for the QR code."

# # Generate the QR code image
# img = qrcode.make(data)

# # Save the image to a file
# img.save("my_qrcode.png")