from flask import Flask

app = Flask(__name__)

@app.route('/') #URL string for the route

def Index():
    return "Hello world!"

if __name__ == "__main__":
    app.run(debug=True)
