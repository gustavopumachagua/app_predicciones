from flask import Flask, render_template, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Cargar el modelo entrenado
model = joblib.load('model/modelo_Mag.joblib')

# Definir las características relevantes
features = ['Latitude', 'Longitude', 'Depth']


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        latitude = float(request.form['latitude'])
        longitude = float(request.form['longitude'])
        depth = float(request.form['depth'])

        input_data = pd.DataFrame(
            [[latitude, longitude, depth]], columns=features)

        prediction = model.predict(input_data)

        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)