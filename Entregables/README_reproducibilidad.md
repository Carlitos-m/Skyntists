# Skyntists — reproducción AstroHack SATEM 2026

## Contenido
- `herramientas/Inicio_AstroHack.ipynb`: validación de extracción, búsqueda de rasgos, comparación espectroscópica, ajustes descriptivos, grado empírico de compatibilidad por especie y exportación de evidencia/figuras.
- `line_statistics.py`: detección de picos, asociaciones de catálogo y prueba de desplazamiento circular con corrección Benjamini–Yekutieli.
- `Entregables/Campos_de_evidencia.csv`: mediciones por hipótesis y decisión; glicina-I permanece insuficiente.
- `Entregables/resumen_confianza_molecular.csv`: compatibilidad por especie frente a desplazamientos circulares, q ajustado BY y grado cualitativo (se genera al ejecutar el cuaderno).
- `Entregables/reporte.pdf` y `reporte.tex`: informe breve para la convocatoria. `Entregables/reporte_tecnico.pdf` y `.tex`: memoria técnica ampliada complementaria. `presentacion.pptx`: defensa de 5 min.
- `espectros/` y `cubos/`: datos originales necesarios, incluidos una sola vez.

## Ejecución
Desde la raíz del paquete: instalar Python 3.11 o posterior y dependencias `numpy pandas scipy matplotlib astropy jupyter`; abrir `herramientas/Inicio_AstroHack.ipynb` y ejecutar todas las celdas en orden. El cuaderno detecta la raíz del proyecto y escribe los CSV y PNG bajo `Entregables/`, incluido el resumen de grado de evidencia molecular. No requiere acceso de red.

## Método y cautelas
Se usan espectros procesados ARI-L, marco LSRK, unidades Jy/beam y extracción B_offset (x,y)=(54,46). La comprobación del FITS frente al CSV verifica la extracción, no recalibra los datos. La búsqueda compara frecuencias de reposo con v_radio=2.7 km/s una sola vez. El ruido por diferencias vecinas es aproximado y puede verse afectado por correlación y líneas. El grado de compatibilidad compara el número de rasgos asociados con patrones de catálogo desplazados circularmente y corrige las 12 especies mediante Benjamini–Yekutieli; no es una probabilidad posterior ni reemplaza modelado LTE/no-LTE, completitud del catálogo o separación de blends. Los ajustes gaussianos son descriptivos; el catálogo educativo local no es exhaustivo. No interpretar SNR como probabilidad de identificación.

## Procedencia y fuentes
Datos ALMA `ADS/JAO.ALMA#2013.1.00278.S`, productos ARI-L; región IRAS 16293−2422. Contexto: Jørgensen et al. (2016), PILS, A&A 595, A117, https://arxiv.org/abs/1607.08733. Frecuencias del catálogo local CDMS/JPL; procedencia y hashes en `catalogos/procedencia_catalogos.json`. El campo `log10_I_300K_nm2_MHz` no es Einstein Aij. Para uso de Aij, consultar parámetros y documentación de la transición exacta.

Reconocimiento ALMA: “This paper makes use of the following ALMA data: ADS/JAO.ALMA#2013.1.00278.S. ALMA is a partnership of ESO, NSF (USA), NINS (Japan), NRC (Canada), NSTC and ASIAA (Taiwan), and KASI (Republic of Korea), in cooperation with the Republic of Chile. The Joint ALMA Observatory is operated by ESO, AUI/NRAO and NAOJ.” https://almascience.eso.org/alma-data/publication-acknowledgement

# -- Nota ッ --
## Antes de entregar
Completar `CONTRIBUCIONES.md`, inspeccionar el resultado de cada celda/figura y ensayar el límite de 5 minutos más 3 minutos de preguntas. Las tareas individuales no se han inventado.
