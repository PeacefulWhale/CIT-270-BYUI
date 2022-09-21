import random
import string
import requests
import time
import os
import json

code1 = 0
code2 = 0
username = ""
phone_number = ""
password = ""
tries = 0
user_content = None
customer_content = None
r1 = None
r2 = None
login = input("Log In? y/n:")
while code1 != 200 or code2 != 200:
    tries += 1
    random.seed = time.time_ns()
    username = "".join(random.choice(string.ascii_letters) for i in range(0, 10))
    phone_number = "".join(random.choice("0123456789") for i in range(0, 10))
    password = "".join(random.choice(string.ascii_letters + "0123456789") for i in range(0, 10)) + "!"
    headers = {"Content-Type" : "application/text"}
    user_content = {
        "userName": username,
        "email": f"{username}@gmail.com",
        "password": password,
        "phone": phone_number,
        "birthData": "2003-01-01",
        "verifyPassword": password
    }
    customer_content = {
        "customerName": username,
        "email": f"{username}@gmail.com",
        "phone": phone_number,
        "birthData": "2003-01-01"
    }
    if (login == "y" or login == "Y"):
        # User Creation.
        r1 = requests.session()
        r1 = requests.post("https://dev.stedi.me/user", json=user_content, headers=headers)
        code1 = r1.status_code

        # Customer Creation.
        r2 = requests.session()
        r2 = requests.post("https://dev.stedi.me/customer", json=customer_content, headers=headers)
        code2 = r2.status_code
    else:
        code1 = 200
        code2 = 200

# Let's save this to our json files.
with open(os.path.join(os.path.dirname(__file__), "user.json"), "w") as file:
    json.dump(user_content, file, indent="     ")
with open(os.path.join(os.path.dirname(__file__), "customer.json"), "w") as file:
    json.dump(customer_content, file, indent="     ")

print(f"Took {tries} to create user...")
print(f"username: {username}")
print(f"email: {username}@gmail.com")
print(f"phone_number: {phone_number}")
print(f"password: {password}")
print('-' * 24)
if r1:
    print(r1.content)
if r2:
    print(r2.content)
