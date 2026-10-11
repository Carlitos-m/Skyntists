# Skyntists · AstroHack SATEM 2026

Proyecto de análisis exploratorio de espectros milimétricos de **IRAS 16293−2422** y de comunicación interactiva de la evidencia molecular. Integra un cuaderno reproducible, datos espectrales, productos de análisis y una aplicación web tipo wiki.

> **Alcance científico.** Los resultados son compatibilidades espectrales exploratorias, no identificaciones confirmadas. Una coincidencia molecular tampoco constituye evidencia de vida.

## Explora el proyecto

- **[Abrir la aplicación pública](https://skyntists-astrohack.streamlit.app/)**: explicación del proyecto, exploración de espectros, evidencia molecular, método paso a paso, glosario y fuentes.
- **[Repositorio público de la aplicación](https://github.com/YarekAlejandro/skyntists-streamlit)**: paquete mínimo que Streamlit Community Cloud usa para publicar la web.
- **Cuaderno científico**: [`herramientas/Inicio_AstroHack.ipynb`](herramientas/Inicio_AstroHack.ipynb).
- **Evidencia tabulada**: [`Entregables/Campos_de_evidencia.csv`](Entregables/Campos_de_evidencia.csv).
- **Reproducibilidad y limitaciones**: [`Entregables/README_reproducibilidad.md`](Entregables/README_reproducibilidad.md).

La aplicación está diseñada como una wiki interactiva del trabajo: permite filtrar candidatos y extracción, inspeccionar espectros con hover y ampliar regiones; también explica de dónde vienen los datos, cómo se construyó la evidencia y qué conclusiones no se pueden extraer. La presentación `.pptx` se mantiene como entregable independiente.

## Ejecutar localmente

Se requiere Python 3.11 o posterior y [`uv`](https://docs.astral.sh/uv/). Desde la raíz del repositorio:

```powershell
uv sync
uv run streamlit run streamlit_app.py
```

Streamlit mostrará la dirección local, normalmente `http://localhost:8501`. Para usar `pip`, instala las dependencias declaradas en `pyproject.toml` y ejecuta `streamlit run streamlit_app.py`.

La interfaz usa los espectros CSV y la tabla de evidencia; no requiere cargar los cubos FITS. Estos sí se usan en el flujo analítico del cuaderno para validar las extracciones. Ejecuta el cuaderno completo, en orden, desde la raíz del proyecto para reproducir los análisis y productos derivados. Algunas celdas necesitan que los archivos FITS indicados en el propio cuaderno estén disponibles localmente.

## Qué hace el análisis

1. Lee y verifica espectros de las extracciones W1 y W2, conservando sus unidades y metadatos disponibles.
2. Busca máximos locales y agrupa asociaciones de catálogo que pueden corresponder a un mismo rasgo observado.
3. Compara frecuencias observadas con frecuencias de reposo, aplicando la velocidad sistémica adoptada en el análisis (`v_sys = 2.7 km/s`).
4. Ajusta perfiles de forma descriptiva y calcula medidas exploratorias como el ruido local y la relación señal/ruido.
5. Exporta tablas y figuras que alimentan la evidencia y su visualización.

El conjunto actual contiene **siete filas de evidencia**. Seis perfiles se consideran tentativamente compatibles con CH₃CN/CH₃CHO; la evidencia disponible para glicina-I es insuficiente. Esta lectura depende de la selección local de catálogo y no debe interpretarse como una probabilidad de detección. El ruido/SNR estimado con MAD es aproximado; la búsqueda de picos, las asociaciones múltiples y los ajustes descriptivos no sustituyen una evaluación estadística global ni un análisis radiativo completo.

### Coeficientes de Einstein

Los coeficientes de Einstein describen probabilidades de transición radiativa. En particular, **Aᵢⱼ** es la tasa de emisión espontánea y es relevante para modelar intensidades, poblaciones y transferencia radiativa. El catálogo usado aquí no proporciona Aᵢⱼ para las líneas evaluadas: el campo `log10_I_300K_nm2_MHz` es una intensidad catalogada bajo condiciones de referencia y **no equivale** a `log10(Aᵢⱼ)`. Por ello, este trabajo no deriva abundancias ni temperaturas de excitación a partir de ese campo.

## Datos, procedencia y límites

Los espectros proceden de datos de ALMA del proyecto `ADS/JAO.ALMA#2013.1.00278.S` y productos procesados ARI-L. La referencia de contexto es el sondeo PILS de Jørgensen et al. (2016). Las frecuencias de catálogo y su trazabilidad se documentan en [`catalogos/procedencia_catalogos.json`](catalogos/procedencia_catalogos.json); se consultan entradas de [CDMS](https://cdms.astro.uni-koeln.de/classic/entries/) y [JPL](https://spec.jpl.nasa.gov/).

El catálogo incluido es parcial: la ausencia de una transición en él no descarta una molécula, y una coincidencia aislada no la confirma. Las líneas pueden estar mezcladas o confundidas; la calidad de calibración, resolución y cobertura limita las conclusiones. Este análisis no estima abundancias, no determina por sí solo temperatura y no detecta vida.

## Estructura del repositorio
- `streamlit_app.py`: app Streamlit.
- `herramientas/Inicio_AstroHack.ipynb`: análisis reproducible.
- `espectros/`: espectros calibrados W1/W2 usados por notebook y app.
- `cubos/`: cubos FITS para validar la extracción en el notebook.
- `catalogos/`: selección y procedencia de frecuencias.
- `Entregables/`: evidencia, figuras, reporte PDF/LaTeX y presentación.
- `Entregables/README_reproducibilidad.md`: detalle de reproducción y límites.
- `Entregables/CONTRIBUCIONES.md`: aportaciones individuales pendientes de completar por el equipo.

| Ruta | Contenido |
| --- | --- |
| `streamlit_app.py` | Aplicación interactiva ejecutable desde el repositorio del proyecto. |
| `public_streamlit_repo/` | Copia autónoma de la aplicación y los datos requeridos para publicarla. |
| `herramientas/Inicio_AstroHack.ipynb` | Flujo de análisis y generación de productos. |
| `espectros/` | Espectros CSV W1/W2 utilizados por el cuaderno y la aplicación. |
| `cubos/` | Cubos FITS usados para validación en el análisis local. |
| `catalogos/` | Datos de catálogo seleccionados y procedencia. |
| `Entregables/` | Tablas de evidencia, figuras, reporte LaTeX/PDF y presentación. |

El repositorio principal conserva los materiales completos del proyecto. El repositorio público de despliegue contiene solo lo necesario para servir la aplicación; no incluye los cubos FITS ni la presentación.

## Referencias

- Jørgensen, J. K. et al. (2016), “The ALMA Protostellar Interferometric Line Survey (PILS)”, *Astronomy & Astrophysics*, 595, A117. [arXiv:1607.08733](https://arxiv.org/abs/1607.08733).
- [CDMS — Cologne Database for Molecular Spectroscopy](https://cdms.astro.uni-koeln.de/classic/entries/).
- [JPL Molecular Spectroscopy](https://spec.jpl.nasa.gov/).
- [Streamlit Community Cloud: despliegue](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy) y [dependencias](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/app-dependencies).

