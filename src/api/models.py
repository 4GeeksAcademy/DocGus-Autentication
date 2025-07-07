# ---------------------------- MODELO USER ----------------------------
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)

    def __init__(self, email, password):
        self.email = email
        self.set_password(password)

    def set_password(self, password):
        """
        Genera y guarda el hash seguro de la contraseña.
        """
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """
        Verifica si la contraseña coincide con el hash almacenado.
        """
        return check_password_hash(self.password_hash, password)

    def serialize(self):
        """
        Opcional: Para devolver datos públicos del usuario.
        """
        return {
            "id": self.id,
            "email": self.email,
        }
