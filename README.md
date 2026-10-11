# Skyntists · AstroHack SATEM 2026

Exploración reproducible de espectros de IRAS 16293−2422 y visualizador interactivo de evidencia molecular. El proyecto distingue **compatibilidad tentativa** de identificación confirmada; una coincidencia espectral no es evidencia de vida.

## Aplicación web

La interfaz Streamlit permite explorar W1/W2 por extracción, ampliar los espectros con hover, filtrar candidatos y descargar la tabla de evidencia. Incluye método, límites, procedencia y una explicación de los coeficientes de Einstein. La presentación `.pptx` se conserva como entregable aparte.

### Ejecutar localmente

Requiere Python 3.11+ y `uv`. Desde la raíz del repositorio:

```bash
uv sync
uv run streamlit run streamlit_app.py
```

Abre la URL local que imprime Streamlit (normalmente `http://localhost:8501`). Si se usa pip en vez de uv, instala las dependencias declaradas en `pyproject.toml`. La aplicación lee los CSV de `espectros/` y `Entregables/Campos_de_evidencia.csv`; no necesita FITS para la visualización.

### Publicación global

- **App pública:** [skyntists-astrohack.streamlit.app](https://skyntists-astrohack.streamlit.app/)
- **Repositorio público de despliegue:** [YarekAlejandro/skyntists-streamlit](https://github.com/YarekAlejandro/skyntists-streamlit)

`public_streamlit_repo/` replica el paquete autosuficiente publicado: incluye la app y los CSV necesarios para visualizarla, sin cubos FITS ni la presentación `.pptx`. Streamlit Community Cloud ejecuta Streamlit directamente desde GitHub y acepta dependencias con `requirements.txt` ([guía de despliegue](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy), [dependencias](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/app-dependencies)).

## Análisis científico reproducible

El cuaderno `herramientas/Inicio_AstroHack.ipynb` valida los CSV contra extracciones de cubos FITS, busca y agrupa rasgos, contrasta frecuencias de catálogo, ajusta perfiles de forma descriptiva y genera figuras/CSV. Para ejecutarlo: abre el cuaderno con Jupyter y ejecuta todas las celdas en orden desde la raíz.

**Resultados actuales:** seis perfiles tentativos compatibles con CH₃CN/CH₃CHO; glicina-I es insuficiente. El catálogo local es parcial, varias transiciones pueden pertenecer a un mismo rasgo y la estimación MAD de ruido/SNR es aproximada. No se infieren abundancias, temperatura ni presencia de vida. El catálogo no incluye Aij; `log10_I_300K_nm2_MHz` no equivale a `log10(Aij)`.

## Estructura

- `streamlit_app.py`: app Streamlit para ejecutar desde el repositorio privado.
- `public_streamlit_repo/`: paquete mínimo para alojar la app desde un repo público.
- `herramientas/Inicio_AstroHack.ipynb`: análisis reproducible.
- `espectros/`: espectros calibrados W1/W2 usados por notebook y app.
- `cubos/`: cubos FITS para validar la extracción en el notebook.
- `catalogos/`: selección y procedencia de frecuencias.
- `Entregables/`: evidencia, figuras, reporte PDF/LaTeX y presentación.
- `Entregables/README_reproducibilidad.md`: detalle de reproducción y límites.
- `Entregables/CONTRIBUCIONES.md`: aportaciones individuales pendientes de completar por el equipo.

## Fuentes y agradecimientos

Datos ALMA `ADS/JAO.ALMA#2013.1.00278.S`, productos procesados ARI-L. Contexto: Jørgensen et al. (2016), PILS, *A&A* 595, A117, [arXiv:1607.08733](https://arxiv.org/abs/1607.08733). Catálogos: [CDMS](https://cdms.astro.uni-koeln.de/classic/entries/) y [JPL](https://spec.jpl.nasa.gov/). Consulta `catalogos/procedencia_catalogos.json` para identificadores y hashes.

