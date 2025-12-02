import google.genai as genai

client = genai.Client(api_key="AIzaSyCrMyMdrIExmFUHMmYnP5TnZMJVxS8n4bM")

# Only run this block for Gemini Developer API
# client = genai.Client(api_key='GEMINI_API_KEY')
while True:
        user = input("Enter promt : ")
     
        if user.lower in ["exit","bye","quit"]:
                break

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=user,
        )
        print(response.text)
        