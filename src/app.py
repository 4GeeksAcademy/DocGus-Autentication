from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from api.models import db
from api.routes import api
from api.admin import setup_admin  # <-- Importa setup_admin

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["JWT_SECRET_KEY"] = "super-secret-key"

db.init_app(app)
jwt = JWTManager(app)
CORS(app)

# Configura admin
setup_admin(app)

# Registra blueprint API
app.register_blueprint(api, url_prefix="/api")

with app.app_context():
    db.create_all()

@app.route("/")
def index():
    return "✅ Backend corriendo correctamente. Para admin ve a /admin."
