from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import logging

app = Flask(__name__)
CORS(app)
TOKEN = ""


def get_geolocation(ip_address):
    query = f"https://ipinfo.io/{ip_address}?token={TOKEN}"
    res = requests.get(query)
    return res.json()


@app.route("/api/get_ip", methods=["GET"])
def get_ip():
    ip_address = request.headers.get("X-Forwarded-For", request.remote_addr)
    if ip_address:
        ip_address = ip_address.split(",")[0].strip()

    geolocation_data = get_geolocation(ip_address)
    app.logger.info(ip_address)
    return jsonify(geolocation_data)


if __name__ == "__main__":
    app.run(debug="True")
