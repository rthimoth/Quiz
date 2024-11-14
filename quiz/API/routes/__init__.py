from .home import home_bp
from .HealthChecks import HealthChecks_bp

def init_app(app):
    app.register_blueprint(home_bp)
    app.register_blueprint(HealthChecks_bp)