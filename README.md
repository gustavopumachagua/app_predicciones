# 🌍 App de Predicción de Magnitud Sísmica

Esta aplicación web permite predecir la magnitud de un sismo en base a su **latitud**, **longitud** y **profundidad**, utilizando un modelo de Machine Learning entrenado previamente. Está construida con **Flask** en el backend y una interfaz sencilla en HTML/CSS con clases tipo Tailwind.

---

## 🚀 Tecnologías utilizadas

- Python + Flask (servidor web)
- HTML5 + CSS3 (interfaz)
- JavaScript (manejo del formulario)
- Pandas (manejo de datos)
- Scikit-learn + joblib (modelo ML)
- Modelo preentrenado: `modelo_Mag.joblib`

---

## 🧪 ¿Cómo funciona?

1. El usuario ingresa latitud, longitud y profundidad en un formulario web.
2. La app envía los datos al servidor Flask.
3. El servidor carga un modelo de ML previamente entrenado y predice la magnitud.
4. El resultado se muestra en pantalla de forma dinámica.

---

## 🖥️ Estructura del proyecto

```bash
app/
├── app.py                      # Servidor Flask
├── model/
│   └── modelo\_Mag.joblib       # Modelo ML entrenado
├── templates/
│   └── index.html              # Interfaz principal
├── static/
│   ├── styles.css              # Estilos personalizados (opcional)
│   └── script.js               # Lógica JS para mostrar la predicción
```

---

## ⚙️ Cómo ejecutar el proyecto

1. Asegúrate de tener Python 3 instalado.
2. Instala los paquetes necesarios (Flask, pandas, joblib, etc.):

```bash
pip install flask pandas scikit-learn
```

3. Ejecuta la aplicación:

```bash
python app.py
```

4. Abre tu navegador en: [http://localhost:5000](http://localhost:5000)

---

## 📌 Requisitos de entrada

- **Latitud**: de -90 a 90 grados
- **Longitud**: de -180 a 180 grados
- **Profundidad**: de 0 a 800 km

---

## 📈 Predicción

El modelo recibe los tres valores como entrada y devuelve una estimación de la **magnitud sísmica** esperada, basado en datos históricos.

---

## 📄 Licencia

Este proyecto está licenciado bajo MIT. Puedes usarlo y modificarlo libremente con fines educativos o personales.
