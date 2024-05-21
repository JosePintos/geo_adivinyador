from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
TOKEN = "edbf7d4ca8e928"


def get_geolocation(ip_address):
    query = f"https://ipinfo.io/181.116.61.30?token={TOKEN}"
    res = requests.get(query)
    return res.json()


@app.route("/api/get_ip", methods=["GET"])
def get_ip():
    ip_address = request.remote_addr
    geolocation_data = get_geolocation(ip_address)
    return jsonify(geolocation_data)


if __name__ == "__main__":
    app.run(debug="True")
