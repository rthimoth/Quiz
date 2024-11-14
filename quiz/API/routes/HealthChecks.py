from flask import Blueprint, jsonify

HealthChecks_bp = Blueprint('HealthCheks', __name__)

@HealthChecks_bp.route('/api/healthcheck')
def HealthCheks():
    data = {"msg":"OK"}
    return jsonify(data)