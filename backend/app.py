from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def index():
    # Retrieve the IP address of the client from the X-Real-IP header
    ip_address = request.headers.get("X-Real-IP")
    return f"Hello, your IP address is: {ip_address}"


if __name__ == "__main__":
    app.run()
