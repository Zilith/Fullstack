#### 2.18* Datos de países, paso 1

En [https://studies.cs.helsinki.fi/restcountries/](https://studies.cs.helsinki.fi/restcountries/) puedes encontrar un servicio que ofrece mucha información sobre diferentes países en un formato legible por máquinas a través de la API REST. Crea una aplicación que te permita ver información de diferentes países.

La interfaz de usuario es muy simple. El país que se mostrará se encuentra escribiendo una consulta de búsqueda en el campo de búsqueda.

Si hay demasiados países (más de 10) que coinciden con la consulta, se le pide al usuario que haga su consulta más específica:

![captura de pantalla de demasiadas coincidencias](https://fullstackopen.com/static/d8a3e3b3af8907d0c3dd495ef0d26ba6/5a190/19b1.png)

Si hay diez o menos países, pero más de uno, se muestran todos los países que coinciden con la consulta:

![captura de pantalla de países coincidentes en una lista](https://fullstackopen.com/static/1d4ebf199806ccfe0df529c08e2a0c6d/5a190/19b2.png)

Cuando solo hay un país que coincide con la consulta, se muestran los datos básicos del país (por ejemplo, capital y área), su bandera y los idiomas hablados:

![captura de pantalla de bandera y atributos adicionales](https://fullstackopen.com/static/1da341d99aa963449991676f4f6c34b3/5a190/19c3.png)

**NB**: Es suficiente que tu aplicación funcione para la mayoría de los países. Algunos países, como _Sudán_, pueden ser difíciles de admitir ya que el nombre del país es parte del nombre de otro país, _Sudán del Sur_. No es necesario que te preocupes por estos casos especiales.