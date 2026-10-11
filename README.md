# Skyntists · AstroHack SATEM 2026

Exploración reproducible de espectros de IRAS 16293−2422 y visualizador interactivo de evidencia molecular. El proyecto distingue **compatibilidad tentativa** de identificación confirmada; una coincidencia espectral no es evidencia de vida.

## Aplicación web

La interfaz Streamlit permite explorar W1/W2 por extracción, ampliar los espectros con hover, filtrar candidatos y descargar la tabla de evidencia. Incluye método, límites, procedencia y una explicación de los coeficientes de Einstein. La presentación `.pptx` se conserva como entregable aparte.

### Ejecutar localmente

Requiere Python 3.11+ y `uv`. Desde la raíz del repositorio:

```bash
uv sync
uv run streamlit run app.py
```

Abre la URL local que imprime Streamlit (normalmente `http://localhost:8501`). Si se usa pip en vez de uv, instala las dependencias declaradas en `pyproject.toml`. La aplicación lee los CSV de `espectros/` y `Entregables/Campos_de_evidencia.csv`; no necesita FITS para la visualización.

### Publicación global

Plataforma recomendada: [Streamlit Community Cloud](https://share.streamlit.io/), que ejecuta Streamlit directamente desde una rama de GitHub y admite `uv.lock` para resolver el entorno. Pasos:

1. Asegurar que la rama publicada del repositorio contiene `app.py`, `pyproject.toml`, `uv.lock`, `espectros/W1_espectros.csv`, `espectros/W2_espectros.csv` y `Entregables/Campos_de_evidencia.csv`.
2. En Community Cloud, conectar GitHub y crear una app indicando repositorio, rama y `app.py` como archivo de entrada.
3. Elegir una URL `*.streamlit.app`; la app se actualizará cuando cambien los archivos de esa rama.

El repositorio tiene un remoto GitHub configurado. La cuenta usada por esta sesión no pudo leer los metadatos del repo por el conector (GitHub respondió 404), así que no fue posible configurar el servicio ni verificar permisos de despliegue desde aquí. La publicación requiere que Community Cloud tenga acceso al repositorio; si es privado, se debe autorizar ese acceso desde la cuenta del equipo.

Vercel no es la opción elegida para alojar **el servidor Streamlit**: aunque Vercel incorporó soporte WebSocket en beta para Functions, Streamlit está pensado para ejecutarse como una aplicación Streamlit completa. Community Cloud reduce la adaptación y es el flujo de despliegue documentado por Streamlit. Vercel sí sería una opción si después se crea un frontend independiente (por ejemplo React) que consuma un backend adecuado.

## Análisis científico reproducible

El cuaderno `herramientas/Inicio_AstroHack.ipynb` valida los CSV contra extracciones de cubos FITS, busca y agrupa rasgos, contrasta frecuencias de catálogo, ajusta perfiles de forma descriptiva y genera figuras/CSV. Para ejecutarlo: abre el cuaderno con Jupyter y ejecuta todas las celdas en orden desde la raíz.

**Resultados actuales:** seis perfiles tentativos compatibles con CH₃CN/CH₃CHO; glicina-I es insuficiente. El catálogo local es parcial, varias transiciones pueden pertenecer a un mismo rasgo y la estimación MAD de ruido/SNR es aproximada. No se infieren abundancias, temperatura ni presencia de vida. El catálogo no incluye Aij; `log10_I_300K_nm2_MHz` no equivale a `log10(Aij)`.

## Estructura

- `app.py`: app Streamlit.
- `herramientas/Inicio_AstroHack.ipynb`: análisis reproducible.
- `espectros/`: espectros calibrados W1/W2 usados por notebook y app.
- `cubos/`: cubos FITS para validar la extracción en el notebook.
- `catalogos/`: selección y procedencia de frecuencias.
- `Entregables/`: evidencia, figuras, reporte PDF/LaTeX y presentación.
- `Entregables/README_reproducibilidad.md`: detalle de reproducción y límites.
- `Entregables/CONTRIBUCIONES.md`: aportaciones individuales pendientes de completar por el equipo.

## Fuentes y agradecimientos

Datos ALMA `ADS/JAO.ALMA#2013.1.00278.S`, productos procesados ARI-L. Contexto: Jørgensen et al. (2016), PILS, *A&A* 595, A117, [arXiv:1607.08733](https://arxiv.org/abs/1607.08733). Catálogos: [CDMS](https://cdms.astro.uni-koeln.de/classic/entries/) y [JPL](https://spec.jpl.nasa.gov/). Consulta `catalogos/procedencia_catalogos.json` para identificadores y hashes.

