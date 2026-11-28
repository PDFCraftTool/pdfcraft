import { toolContentEn } from './en';
/**
 * Spanish Tool Content / Contenido de Herramientas en Español
 * Requirements: 3.1 - Multi-language support
 * 
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 */

import type { ToolContent } from '@/types/tool';

/**
 * Spanish tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentEs: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Herramienta Múltiple PDF",
    "metaDescription": "Editor PDF todo en uno: combina, divide, organiza, elimina, rota y extrae páginas en una sola herramienta.",
    "keywords": [
      "herramienta múltiple pdf",
      "editor pdf",
      "combinar pdf",
      "dividir pdf",
      "organizar pdf"
    ],
    "description": "<p>La Herramienta Múltiple PDF es tu solución integral para todas las tareas de gestión de páginas PDF. Combina múltiples operaciones en una única interfaz intuitiva.</p><p>Todo el procesamiento ocurre en tu navegador, asegurando privacidad completa.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta tu archivo PDF o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Elige la Operación",
        "description": "Selecciona entre combinar, dividir, organizar, eliminar, rotar o extraer páginas."
      },
      {
        "step": 3,
        "title": "Procesa y Descarga",
        "description": "Haz clic en procesar y descarga tu PDF modificado."
      }
    ],
    "useCases": [
      {
        "title": "Preparación de Documentos",
        "description": "Prepara documentos eliminando páginas innecesarias y reordenando contenido.",
        "icon": "file-check"
      },
      {
        "title": "Ensamblaje de Informes",
        "description": "Combina secciones de informes en un único documento profesional.",
        "icon": "book-open"
      },
      {
        "title": "Gestión de Archivos",
        "description": "Divide archivos grandes y extrae páginas relevantes.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Cuántos PDFs puedo procesar?",
        "answer": "Puedes procesar hasta 10 archivos PDF simultáneamente, con un tamaño máximo de 500MB."
      },
      {
        "question": "¿Se conservan los marcadores?",
        "answer": "Sí, al combinar PDFs se conservan los marcadores existentes."
      },
      {
        "question": "¿Hay límite de páginas?",
        "answer": "No hay límite estricto. La herramienta maneja documentos con cientos de páginas."
      }
    ]
  },
  "merge-pdf": {
    "title": "Combinar PDF",
    "metaDescription": "Combina múltiples archivos PDF en un solo documento. Combinador de PDF gratuito con reordenamiento.",
    "keywords": [
      "combinar pdf",
      "unir pdf",
      "fusionar pdf",
      "combinador pdf"
    ],
    "description": "<p>Combinar PDF te permite unir múltiples documentos PDF en un solo archivo. Sube tus archivos, ordénalos y combínalos en un documento cohesivo.</p><p>Todo ocurre localmente en tu navegador para máxima privacidad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Archivos PDF",
        "description": "Arrastra y suelta múltiples archivos PDF o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Ordena los Archivos",
        "description": "Arrastra las miniaturas para ordenarlos como desees."
      },
      {
        "step": 3,
        "title": "Combina y Descarga",
        "description": "Haz clic en Combinar y descarga tu PDF unificado."
      }
    ],
    "useCases": [
      {
        "title": "Combinar Informes",
        "description": "Une informes mensuales en un documento anual.",
        "icon": "file-text"
      },
      {
        "title": "Crear Portafolios",
        "description": "Combina documentos de proyectos en un portafolio profesional.",
        "icon": "briefcase"
      },
      {
        "title": "Consolidar Facturas",
        "description": "Une facturas para propósitos contables.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "¿Cuántos PDFs puedo combinar?",
        "answer": "Hasta 100 archivos PDF con un tamaño total de 500MB."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad original sin compresión."
      },
      {
        "question": "¿Puedo combinar PDFs protegidos?",
        "answer": "Necesitas descifrarlos primero con nuestra herramienta Descifrar PDF."
      }
    ]
  },
  "rotate-custom": {
    "title": "Rotar por Grados Personalizados",
    "metaDescription": "Rota páginas PDF en cualquier ángulo. Rotación precisa para enderezar documentos escaneados.",
    "keywords": [
      "rotar pdf ángulo personalizado",
      "enderezar pdf",
      "deskew pdf",
      "rotación personalizada pdf"
    ],
    "description": "<p>Rotar por Grados Personalizados te da control preciso sobre la orientación de tus páginas PDF. A diferencia de las herramientas estándar que solo rotan en incrementos de 90 grados, esta herramienta te permite rotar páginas en cualquier ángulo específico.</p><p>Perfecto para enderezar documentos escaneados torcidos o ajustar diagramas. Puedes corregir páginas individuales o aplicar la misma rotación a todo el documento.</p><p>Todo el procesamiento ocurre localmente en tu navegador, asegurando privacidad total mientras logras una alineación perfecta.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Sube el archivo PDF con las páginas que necesitas rotar."
      },
      {
        "step": 2,
        "title": "Establece el Ángulo",
        "description": "Ingresa el grado exacto de rotación para cada página, o un ángulo para todas."
      },
      {
        "step": 3,
        "title": "Vista Previa y Ajuste",
        "description": "Usa la vista previa en tiempo real para asegurar una alineación perfecta."
      },
      {
        "step": 4,
        "title": "Aplica y Descarga",
        "description": "Haz clic en Rotar para aplicar los cambios y descargar tu PDF enderezado."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Escaneados",
        "description": "Endereza páginas escaneadas que quedaron torcidas.",
        "icon": "scan"
      },
      {
        "title": "Dibujos Técnicos",
        "description": "Ajusta la orientación de planos y diagramas con precisión.",
        "icon": "ruler"
      },
      {
        "title": "Diseños Creativos",
        "description": "Crea diseños únicos rotando páginas en ángulos artísticos.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo rotar con decimales?",
        "answer": "Actualmente soporta grados enteros, pero estamos trabajando en precisión decimal."
      },
      {
        "question": "¿Afecta el contenido?",
        "answer": "El contenido se rota visualmente. El tamaño de página se ajusta automáticamente."
      },
      {
        "question": "¿Puedo rotar solo una página?",
        "answer": "Sí, puedes establecer un ángulo personalizado para cualquier página individual."
      }
    ]
  },
  "grid-combine": {
    "title": "Combinar en Cuadrícula PDF",
    "metaDescription": "Combinar múltiples archivos PDF en páginas individuales con un diseño de cuadrícula flexible. Organice 2, 4, 6, 9 o más PDF por página con bordes y espaciado.",
    "keywords": [
      "combinar cuadrícula",
      "fusionar pdf cuadrícula",
      "collage pdf",
      "múltiples pdf una página",
      "pdf n-up",
      "cuadrícula pdf"
    ],
    "description": "\n      <p>La herramienta Combinar en Cuadrícula ofrece una forma única de fusionar múltiples archivos PDF separados en páginas individuales. A diferencia de la herramienta estándar \"Fusionar PDF\" que simplemente añade páginas, o la herramienta \"N-Up\" que reorganiza páginas de un solo documento, Combinar en Cuadrícula toma múltiples archivos de entrada y los organiza uno al lado del otro en un diseño de cuadrícula personalizable.</p>\n      <p>Puede elegir entre varias configuraciones de cuadrícula como 2x1, 2x2, 3x3, etc. Esto es perfecto para comparar múltiples documentos, crear folletos de diferentes fuentes o imprimir versiones compactas de varios archivos.</p>\n      <p>Personalice la salida controlando el tamaño de página, la orientación, los márgenes, el espaciado y los bordes. Todo el procesamiento ocurre localmente en su navegador para máxima privacidad.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Archivos PDF",
        "description": "Suba dos o más archivos PDF que desee combinar. Puede reorganizarlos en el orden deseado."
      },
      {
        "step": 2,
        "title": "Elegir Diseño de Cuadrícula",
        "description": "Seleccione el diseño de cuadrícula deseado (ej: 2x2 para 4 archivos por página, 3x3 para 9 archivos por página)."
      },
      {
        "step": 3,
        "title": "Personalizar Apariencia",
        "description": "Ajuste configuraciones como tamaño de página (A4, Carta), orientación, espaciado entre elementos y bordes."
      },
      {
        "step": 4,
        "title": "Combinar y Descargar",
        "description": "Haga clic en \"Combinar PDFs\" para generar su nuevo documento con diseño de cuadrícula y descargue el resultado."
      }
    ],
    "useCases": [
      {
        "title": "Comparación Visual",
        "description": "Coloque diferentes versiones de un diseño o documento una al lado de la otra en una sola página para una fácil comparación.",
        "icon": "layout-grid"
      },
      {
        "title": "Imprimir Folletos",
        "description": "Combine múltiples documentos cortos o diapositivas en una sola hoja para ahorrar costos de impresión.",
        "icon": "printer"
      },
      {
        "title": "Creación de Portafolios",
        "description": "Muestre múltiples archivos de proyecto en una vista general de cuadrícula limpia y organizada.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia de N-Up?",
        "answer": "N-Up toma páginas de UN PDF y las pone en una hoja. Combinar en Cuadrícula toma MÚLTIPLES ARCHIVOS PDF DIFERENTES y los pone en una hoja."
      },
      {
        "question": "¿Cuántos archivos puedo combinar?",
        "answer": "Puede combinar hasta 100 archivos dependiendo de la memoria de su navegador, pero los diseños como 4x4 acomodan hasta 16 archivos por página."
      },
      {
        "question": "¿Puedo añadir bordes?",
        "answer": "Sí, puede añadir bordes alrededor de cada archivo PDF y personalizar el color del borde."
      }
    ]
  },
  "split-pdf": {
    "title": "Dividir PDF",
    "metaDescription": "Divide archivos PDF en múltiples documentos. Extrae páginas específicas o divide por rangos.",
    "keywords": [
      "dividir pdf",
      "separar pdf",
      "extraer páginas",
      "divisor pdf"
    ],
    "description": "<p>Dividir PDF te permite separar un documento PDF en múltiples archivos. Perfecto para extraer capítulos o crear archivos individuales.</p><p>Procesamiento local para máxima seguridad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el archivo a dividir."
      },
      {
        "step": 2,
        "title": "Define los Rangos",
        "description": "Ingresa los números de página o rangos (ej: 1-5, 8, 10-15)."
      },
      {
        "step": 3,
        "title": "Divide y Descarga",
        "description": "Haz clic en Dividir y descarga los archivos resultantes."
      }
    ],
    "useCases": [
      {
        "title": "Extraer Capítulos",
        "description": "Divide libros en capítulos individuales.",
        "icon": "book"
      },
      {
        "title": "Separar Escaneos",
        "description": "Divide documentos escaneados en archivos individuales.",
        "icon": "copy"
      },
      {
        "title": "Crear Material",
        "description": "Extrae páginas específicas para material de apoyo.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo dividir en páginas individuales?",
        "answer": "Sí, selecciona \"Dividir cada página\" para crear archivos de una página."
      },
      {
        "question": "¿Qué pasa con los marcadores?",
        "answer": "Los marcadores dentro del rango extraído se conservan."
      },
      {
        "question": "¿Puedo dividir PDFs protegidos?",
        "answer": "Primero descifra el PDF con nuestra herramienta Descifrar PDF."
      }
    ]
  },
  "compress-pdf": {
    "title": "Comprimir PDF",
    "metaDescription": "Reduce el tamaño de archivos PDF manteniendo la calidad. Compresor de PDF gratuito.",
    "keywords": [
      "comprimir pdf",
      "reducir tamaño pdf",
      "compresor pdf",
      "optimizar pdf"
    ],
    "description": "<p>Comprimir PDF reduce el tamaño de tus documentos manteniendo calidad aceptable. Ideal para correos electrónicos y almacenamiento.</p><p>Compresión local en tu navegador.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento a comprimir."
      },
      {
        "step": 2,
        "title": "Elige el Nivel",
        "description": "Selecciona: Bajo (mejor calidad), Medio o Alto (menor tamaño)."
      },
      {
        "step": 3,
        "title": "Comprime y Descarga",
        "description": "Haz clic en Comprimir y descarga el PDF optimizado."
      }
    ],
    "useCases": [
      {
        "title": "Adjuntos de Correo",
        "description": "Reduce el tamaño para cumplir límites de correo.",
        "icon": "mail"
      },
      {
        "title": "Publicación Web",
        "description": "Optimiza PDFs para descarga web rápida.",
        "icon": "globe"
      },
      {
        "title": "Ahorro de Espacio",
        "description": "Comprime documentos archivados.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "¿Cuánto puedo reducir?",
        "answer": "PDFs con imágenes pueden reducirse 50-80%. Solo texto tiene menor reducción."
      },
      {
        "question": "¿Afecta la calidad del texto?",
        "answer": "No, el texto permanece nítido. Solo las imágenes se comprimen."
      },
      {
        "question": "¿Puedo comprimir varios PDFs?",
        "answer": "Sí, hasta 10 archivos simultáneamente."
      }
    ]
  },
  "edit-pdf": {
    "title": "Editar PDF",
    "metaDescription": "Edita archivos PDF en línea. Añade texto, imágenes, anotaciones y formas.",
    "keywords": [
      "editar pdf",
      "editor pdf",
      "anotar pdf",
      "añadir texto pdf"
    ],
    "description": "<p>Editar PDF proporciona herramientas completas para modificar y anotar documentos. Añade texto, imágenes, formas y comentarios.</p><p>Edición local para privacidad total.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento a editar."
      },
      {
        "step": 2,
        "title": "Selecciona Herramienta",
        "description": "Elige: texto, resaltado, formas, imágenes o comentarios."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Aplica los cambios y descarga el PDF editado."
      }
    ],
    "useCases": [
      {
        "title": "Revisión de Documentos",
        "description": "Añade comentarios y marcas para revisión colaborativa.",
        "icon": "message-square"
      },
      {
        "title": "Completar Formularios",
        "description": "Rellena campos y añade firmas sin imprimir.",
        "icon": "edit-3"
      },
      {
        "title": "Redacción",
        "description": "Elimina información sensible antes de compartir.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo editar texto original?",
        "answer": "Sí. Selecciona Editar texto en la barra del PDF, pulsa un bloque existente, introduce el reemplazo y aplícalo. El texto se sustituye permanentemente en el PDF exportado."
      },
      {
        "question": "¿Las ediciones son permanentes?",
        "answer": "Puedes aplanarlas para hacerlas permanentes o mantenerlas editables."
      },
      {
        "question": "¿Hay función deshacer?",
        "answer": "Sí, soporta deshacer/rehacer y restablecer al original."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG a PDF",
    "metaDescription": "Convierte imágenes JPG a PDF. Combina múltiples JPG en un documento PDF.",
    "keywords": [
      "jpg a pdf",
      "jpeg a pdf",
      "convertir jpg",
      "imagen a pdf"
    ],
    "description": "<p>JPG a PDF convierte tus imágenes JPEG en documentos PDF. Combina múltiples imágenes en un único PDF profesional.</p><p>Conversión local para privacidad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes",
        "description": "Arrastra y suelta archivos JPG o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Ordena y Configura",
        "description": "Reordena imágenes y selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Haz clic en Convertir y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Álbumes de Fotos",
        "description": "Crea álbumes PDF de fotos para compartir.",
        "icon": "image"
      },
      {
        "title": "Escaneo de Documentos",
        "description": "Convierte fotos de documentos en PDFs.",
        "icon": "camera"
      },
      {
        "title": "Portafolios",
        "description": "Compila trabajos fotográficos en un portafolio.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "¿Cuántas imágenes puedo convertir?",
        "answer": "Hasta 100 imágenes JPG en un único PDF."
      },
      {
        "question": "¿Se preserva la calidad?",
        "answer": "Sí, las imágenes se incrustan en calidad original."
      },
      {
        "question": "¿Puedo establecer diferentes tamaños?",
        "answer": "Se aplica un tamaño uniforme. Las imágenes se escalan manteniendo proporción."
      }
    ]
  },
  "sign-pdf": {
    "title": "Firmar PDF",
    "metaDescription": "Añade firmas electrónicas a documentos PDF. Dibuja, escribe o sube tu firma.",
    "keywords": [
      "firmar pdf",
      "firma electrónica",
      "e-firma",
      "firma digital"
    ],
    "description": "<p>Firmar PDF te permite añadir firmas electrónicas a tus documentos. Crea tu firma dibujando, escribiendo o subiendo una imagen.</p><p>Firma local para seguridad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento a firmar."
      },
      {
        "step": 2,
        "title": "Crea tu Firma",
        "description": "Dibuja, escribe o sube una imagen de firma. También puedes escanear una foto de una firma escrita en papel."
      },
      {
        "step": 3,
        "title": "Coloca y Descarga",
        "description": "Posiciona la firma y descarga el PDF firmado."
      }
    ],
    "useCases": [
      {
        "title": "Firma de Contratos",
        "description": "Firma contratos electrónicamente sin imprimir.",
        "icon": "file-signature"
      },
      {
        "title": "Completar Formularios",
        "description": "Añade firma a formularios y documentos oficiales.",
        "icon": "clipboard"
      },
      {
        "title": "Aprobaciones",
        "description": "Firma documentos en procesos de aprobación.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "¿Es legalmente vinculante?",
        "answer": "Las firmas electrónicas son reconocidas en la mayoría de países. Consulta regulaciones locales."
      },
      {
        "question": "¿Puedo guardar mi firma?",
        "answer": "Sí, se guarda en el almacenamiento local del navegador."
      },
      {
        "question": "¿Puedo añadir múltiples firmas?",
        "answer": "Sí, añade tantas firmas como necesites en cualquier página."
      }
    ]
  },
  "crop-pdf": {
    "title": "Recortar PDF",
    "metaDescription": "Recorta páginas PDF para eliminar márgenes y áreas no deseadas.",
    "keywords": [
      "recortar pdf",
      "cortar pdf",
      "eliminar márgenes",
      "redimensionar pdf"
    ],
    "description": "<p>Recortar PDF elimina márgenes y áreas no deseadas de tus páginas. Útil para eliminar espacios en blanco o estandarizar dimensiones.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento a recortar."
      },
      {
        "step": 2,
        "title": "Define el Área",
        "description": "Arrastra los controles o ingresa medidas precisas."
      },
      {
        "step": 3,
        "title": "Recorta y Descarga",
        "description": "Aplica el recorte y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Eliminar Márgenes",
        "description": "Recorta márgenes excesivos de documentos escaneados.",
        "icon": "maximize-2"
      },
      {
        "title": "Enfocar Contenido",
        "description": "Recorta para resaltar áreas específicas.",
        "icon": "target"
      },
      {
        "title": "Estandarizar Páginas",
        "description": "Haz que todas las páginas tengan el mismo tamaño.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "¿El recorte es permanente?",
        "answer": "Sí, el contenido fuera del área se elimina. Guarda una copia de seguridad."
      },
      {
        "question": "¿Puedo recortar páginas diferentes?",
        "answer": "Sí, puedes aplicar diferentes configuraciones a cada página."
      },
      {
        "question": "¿Afecta la calidad del texto?",
        "answer": "No, el contenido restante mantiene su calidad original."
      }
    ]
  },
  "extract-pages": {
    "title": "Extraer Páginas",
    "metaDescription": "Extrae páginas específicas de archivos PDF. Guarda páginas individuales como nuevos documentos.",
    "keywords": [
      "extraer páginas pdf",
      "guardar páginas",
      "copiar páginas pdf"
    ],
    "description": "<p>Extraer Páginas te permite seleccionar y guardar páginas específicas de un PDF como nuevos archivos. Perfecto para crear extractos.</p><p>Extracción local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Páginas",
        "description": "Haz clic en miniaturas o ingresa números de página."
      },
      {
        "step": 3,
        "title": "Extrae y Descarga",
        "description": "Crea el nuevo PDF con las páginas seleccionadas."
      }
    ],
    "useCases": [
      {
        "title": "Crear Extractos",
        "description": "Extrae páginas relevantes para documentos de referencia.",
        "icon": "file-minus"
      },
      {
        "title": "Compartir Contenido",
        "description": "Extrae páginas específicas para compartir.",
        "icon": "share-2"
      },
      {
        "title": "Archivar",
        "description": "Guarda páginas clave para archivo a largo plazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo extraer páginas no consecutivas?",
        "answer": "Sí, selecciona cualquier combinación de páginas."
      },
      {
        "question": "¿Se conservan los marcadores?",
        "answer": "Los marcadores a páginas extraídas se conservan."
      },
      {
        "question": "¿Puedo extraer de múltiples PDFs?",
        "answer": "Esta herramienta trabaja con un PDF. Usa Combinar PDF para múltiples archivos."
      }
    ]
  },
  "organize-pdf": {
    "title": "Organizar PDF",
    "metaDescription": "Reordena, duplica y elimina páginas PDF. Arrastra y suelta para reorganizar.",
    "keywords": [
      "organizar pdf",
      "reordenar páginas",
      "reorganizar pdf"
    ],
    "description": "<p>Organizar PDF proporciona una interfaz de arrastrar y soltar para reorganizar páginas. Reordena, duplica o elimina páginas fácilmente.</p><p>Organización local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Reorganiza",
        "description": "Arrastra miniaturas para reordenar, duplicar o eliminar."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Aplica los cambios y descarga el PDF reorganizado."
      }
    ],
    "useCases": [
      {
        "title": "Corregir Orden",
        "description": "Corrige el orden de páginas escaneadas incorrectamente.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Orden Personalizado",
        "description": "Ordena páginas para presentaciones específicas.",
        "icon": "list"
      },
      {
        "title": "Eliminar Páginas",
        "description": "Elimina páginas en blanco o irrelevantes.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo duplicar páginas?",
        "answer": "Sí, duplica cualquier página y colócala donde quieras."
      },
      {
        "question": "¿Hay función deshacer?",
        "answer": "Sí, soporta deshacer/rehacer y restablecer al original."
      },
      {
        "question": "¿Puedo organizar múltiples PDFs?",
        "answer": "Trabaja con un PDF. Primero combínalos con Combinar PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Eliminar Páginas",
    "metaDescription": "Elimina páginas no deseadas de archivos PDF. Selecciona y elimina páginas específicas.",
    "keywords": [
      "eliminar páginas pdf",
      "quitar páginas",
      "borrar páginas pdf"
    ],
    "description": "<p>Eliminar Páginas te permite quitar páginas no deseadas de tus documentos PDF. Elimina páginas en blanco o contenido innecesario.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Páginas",
        "description": "Haz clic en miniaturas o ingresa números de página."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Elimina las páginas seleccionadas y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Eliminar Páginas en Blanco",
        "description": "Limpia documentos eliminando páginas vacías.",
        "icon": "file-x"
      },
      {
        "title": "Eliminar Contenido Sensible",
        "description": "Elimina páginas confidenciales antes de compartir.",
        "icon": "shield"
      },
      {
        "title": "Optimizar Documentos",
        "description": "Elimina páginas desactualizadas o irrelevantes.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo recuperar páginas eliminadas?",
        "answer": "No, la eliminación es permanente. Guarda una copia de seguridad."
      },
      {
        "question": "¿Puedo eliminar múltiples páginas?",
        "answer": "Sí, selecciona y elimina múltiples páginas a la vez."
      },
      {
        "question": "¿Afecta los marcadores?",
        "answer": "Los marcadores a páginas eliminadas se remueven."
      }
    ]
  },
  "bookmark": {
    "title": "Editar Marcadores",
    "metaDescription": "Añade, edita y organiza marcadores en archivos PDF para navegación fácil.",
    "keywords": [
      "marcadores pdf",
      "editar marcadores",
      "índice pdf",
      "navegación pdf"
    ],
    "description": "<p>Editar Marcadores te permite crear y gestionar marcadores en tus documentos PDF para facilitar la navegación.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Gestiona Marcadores",
        "description": "Añade, edita, elimina o reorganiza marcadores."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Aplica los cambios y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Crear Índice",
        "description": "Añade marcadores para crear un índice navegable.",
        "icon": "bookmark"
      },
      {
        "title": "Organizar Documentos",
        "description": "Estructura documentos largos con marcadores.",
        "icon": "list"
      },
      {
        "title": "Mejorar Accesibilidad",
        "description": "Facilita la navegación en documentos extensos.",
        "icon": "navigation"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo crear marcadores anidados?",
        "answer": "Sí, puedes crear jerarquías de marcadores."
      },
      {
        "question": "¿Los marcadores funcionan en todos los lectores?",
        "answer": "Sí, son compatibles con todos los lectores PDF estándar."
      },
      {
        "question": "¿Puedo importar marcadores?",
        "answer": "Puedes crear marcadores manualmente o desde el índice existente."
      }
    ]
  },
  "table-of-contents": {
    "title": "Tabla de Contenidos",
    "metaDescription": "Genera automáticamente una tabla de contenidos para documentos PDF.",
    "keywords": [
      "tabla de contenidos pdf",
      "índice pdf",
      "toc pdf",
      "generar índice"
    ],
    "description": "<p>Tabla de Contenidos genera automáticamente un índice navegable para tus documentos PDF basado en encabezados.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona niveles de encabezado y estilo."
      },
      {
        "step": 3,
        "title": "Genera y Descarga",
        "description": "Crea la tabla de contenidos y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Largos",
        "description": "Añade navegación a manuales y libros.",
        "icon": "book"
      },
      {
        "title": "Informes",
        "description": "Crea índices para informes profesionales.",
        "icon": "file-text"
      },
      {
        "title": "Documentación",
        "description": "Mejora la navegación en documentación técnica.",
        "icon": "file-code"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo detecta los encabezados?",
        "answer": "Analiza el formato del texto para identificar encabezados."
      },
      {
        "question": "¿Puedo personalizar el estilo?",
        "answer": "Sí, puedes ajustar fuente, tamaño y formato."
      },
      {
        "question": "¿Dónde se inserta la tabla?",
        "answer": "Puedes elegir insertarla al inicio o en una página específica."
      }
    ]
  },
  "page-numbers": {
    "title": "Números de Página",
    "metaDescription": "Añade números de página a documentos PDF con formato personalizable.",
    "keywords": [
      "números de página pdf",
      "numerar páginas",
      "paginación pdf"
    ],
    "description": "<p>Números de Página te permite añadir numeración a tus documentos PDF con posición y formato personalizables.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Formato",
        "description": "Selecciona posición, fuente, tamaño y formato."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Añade los números y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Profesionales",
        "description": "Añade numeración a informes y propuestas.",
        "icon": "file-text"
      },
      {
        "title": "Libros y Manuales",
        "description": "Numera páginas de publicaciones.",
        "icon": "book"
      },
      {
        "title": "Documentos Legales",
        "description": "Añade numeración requerida para documentos oficiales.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo excluir páginas?",
        "answer": "Sí, puedes excluir portadas u otras páginas específicas."
      },
      {
        "question": "¿Qué formatos están disponibles?",
        "answer": "Números arábigos, romanos, letras y formatos personalizados."
      },
      {
        "question": "¿Puedo cambiar la posición?",
        "answer": "Sí, elige entre 9 posiciones diferentes en la página."
      }
    ]
  },
  "add-watermark": {
    "title": "Añadir Marca de Agua",
    "metaDescription": "Añade marcas de agua de texto o imagen a documentos PDF.",
    "keywords": [
      "marca de agua pdf",
      "watermark pdf",
      "añadir marca",
      "proteger pdf"
    ],
    "description": "<p>Añadir Marca de Agua te permite insertar marcas de agua de texto o imagen en tus documentos PDF para protección o branding.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Marca de Agua",
        "description": "Ingresa texto o sube imagen, ajusta posición y opacidad."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Añade la marca de agua y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Proteger Documentos",
        "description": "Marca documentos como confidenciales o borradores.",
        "icon": "shield"
      },
      {
        "title": "Branding",
        "description": "Añade logo de empresa a documentos.",
        "icon": "image"
      },
      {
        "title": "Derechos de Autor",
        "description": "Protege contenido con marcas de copyright.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo usar imágenes?",
        "answer": "Sí, soporta PNG, JPG y otros formatos de imagen."
      },
      {
        "question": "¿Puedo ajustar la opacidad?",
        "answer": "Sí, ajusta la transparencia de 0% a 100%."
      },
      {
        "question": "¿Se aplica a todas las páginas?",
        "answer": "Puedes aplicar a todas o seleccionar páginas específicas."
      }
    ]
  },
  "header-footer": {
    "title": "Encabezado y Pie de Página",
    "metaDescription": "Añade encabezados y pies de página personalizados a documentos PDF.",
    "keywords": [
      "encabezado pdf",
      "pie de página pdf",
      "header footer pdf"
    ],
    "description": "<p>Encabezado y Pie de Página te permite añadir texto personalizado en la parte superior e inferior de tus páginas PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Contenido",
        "description": "Ingresa texto para encabezado y/o pie de página."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Añade el contenido y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Corporativos",
        "description": "Añade nombre de empresa y fecha.",
        "icon": "building"
      },
      {
        "title": "Informes",
        "description": "Incluye título del documento y números de página.",
        "icon": "file-text"
      },
      {
        "title": "Documentos Legales",
        "description": "Añade información de confidencialidad.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo usar variables?",
        "answer": "Sí, incluye fecha, número de página y total de páginas."
      },
      {
        "question": "¿Puedo personalizar la fuente?",
        "answer": "Sí, ajusta fuente, tamaño, color y alineación."
      },
      {
        "question": "¿Puedo tener diferentes encabezados?",
        "answer": "Puedes configurar diferentes para páginas pares e impares."
      }
    ]
  },
  "invert-colors": {
    "title": "Invertir Colores",
    "metaDescription": "Invierte los colores de documentos PDF para modo oscuro o efectos especiales.",
    "keywords": [
      "invertir colores pdf",
      "modo oscuro pdf",
      "negativo pdf"
    ],
    "description": "<p>Invertir Colores cambia los colores de tu PDF a su negativo, útil para modo oscuro o efectos visuales.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona páginas y opciones de inversión."
      },
      {
        "step": 3,
        "title": "Invierte y Descarga",
        "description": "Aplica la inversión y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Modo Oscuro",
        "description": "Crea versiones de modo oscuro para lectura nocturna.",
        "icon": "moon"
      },
      {
        "title": "Accesibilidad",
        "description": "Mejora la legibilidad para usuarios con sensibilidad a la luz.",
        "icon": "eye"
      },
      {
        "title": "Efectos Visuales",
        "description": "Crea efectos de negativo para diseño.",
        "icon": "palette"
      }
    ],
    "faq": [
      {
        "question": "¿Afecta las imágenes?",
        "answer": "Sí, todos los elementos visuales se invierten."
      },
      {
        "question": "¿Puedo invertir páginas específicas?",
        "answer": "Sí, selecciona las páginas a invertir."
      },
      {
        "question": "¿Es reversible?",
        "answer": "Sí, invierte de nuevo para restaurar los colores originales."
      }
    ]
  },
  "background-color": {
    "title": "Color de Fondo",
    "metaDescription": "Cambia el color de fondo de páginas PDF.",
    "keywords": [
      "color de fondo pdf",
      "fondo pdf",
      "cambiar fondo"
    ],
    "description": "<p>Color de Fondo te permite cambiar el color de fondo de tus páginas PDF para mejorar la legibilidad o estética.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Color",
        "description": "Elige el color de fondo deseado."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Cambia el fondo y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Lectura Cómoda",
        "description": "Usa fondos crema o sepia para reducir fatiga visual.",
        "icon": "eye"
      },
      {
        "title": "Branding",
        "description": "Aplica colores corporativos a documentos.",
        "icon": "palette"
      },
      {
        "title": "Impresión",
        "description": "Prepara documentos con fondos específicos para impresión.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo usar cualquier color?",
        "answer": "Sí, selecciona cualquier color del selector o ingresa código hex."
      },
      {
        "question": "¿Afecta el contenido?",
        "answer": "No, solo cambia el fondo. El contenido permanece intacto."
      },
      {
        "question": "¿Puedo aplicar a páginas específicas?",
        "answer": "Sí, selecciona las páginas a modificar."
      }
    ]
  },
  "text-color": {
    "title": "Cambiar Color de Texto",
    "metaDescription": "Cambia el color del texto en documentos PDF.",
    "keywords": [
      "color de texto pdf",
      "cambiar texto pdf",
      "modificar texto"
    ],
    "description": "<p>Cambiar Color de Texto te permite modificar el color del texto en tus documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Colores",
        "description": "Elige el color original y el nuevo color."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Cambia el color y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Accesibilidad",
        "description": "Mejora el contraste para mejor legibilidad.",
        "icon": "eye"
      },
      {
        "title": "Branding",
        "description": "Aplica colores corporativos al texto.",
        "icon": "palette"
      },
      {
        "title": "Impresión",
        "description": "Prepara documentos para impresión en blanco y negro.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo cambiar colores específicos?",
        "answer": "Sí, selecciona el color a reemplazar y el nuevo color."
      },
      {
        "question": "¿Afecta las imágenes?",
        "answer": "No, solo afecta el texto del documento."
      },
      {
        "question": "¿Funciona con todos los PDFs?",
        "answer": "Funciona mejor con PDFs que contienen texto real, no imágenes de texto."
      }
    ]
  },
  "add-stamps": {
    "title": "Añadir Sellos",
    "metaDescription": "Añade sellos predefinidos o personalizados a documentos PDF.",
    "keywords": [
      "sellos pdf",
      "stamps pdf",
      "añadir sello",
      "marcar pdf"
    ],
    "description": "<p>Añadir Sellos te permite insertar sellos predefinidos como \"Aprobado\", \"Confidencial\" o sellos personalizados.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Sello",
        "description": "Elige un sello predefinido o crea uno personalizado."
      },
      {
        "step": 3,
        "title": "Coloca y Descarga",
        "description": "Posiciona el sello y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Aprobación de Documentos",
        "description": "Marca documentos como aprobados o rechazados.",
        "icon": "check-circle"
      },
      {
        "title": "Confidencialidad",
        "description": "Añade sellos de confidencial o uso interno.",
        "icon": "lock"
      },
      {
        "title": "Estado de Documentos",
        "description": "Marca como borrador, final o revisado.",
        "icon": "tag"
      }
    ],
    "faq": [
      {
        "question": "¿Qué sellos predefinidos hay?",
        "answer": "Incluye Aprobado, Rechazado, Confidencial, Borrador, Final y más."
      },
      {
        "question": "¿Puedo crear sellos personalizados?",
        "answer": "Sí, crea sellos con texto e imagen personalizados."
      },
      {
        "question": "¿Puedo añadir múltiples sellos?",
        "answer": "Sí, añade tantos sellos como necesites."
      }
    ]
  },
  "remove-annotations": {
    "title": "Eliminar Anotaciones",
    "metaDescription": "Elimina todas las anotaciones y comentarios de documentos PDF.",
    "keywords": [
      "eliminar anotaciones pdf",
      "quitar comentarios",
      "limpiar pdf"
    ],
    "description": "<p>Eliminar Anotaciones quita todos los comentarios, resaltados, notas y otras anotaciones de tus documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Tipos",
        "description": "Elige qué tipos de anotaciones eliminar."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Quita las anotaciones y descarga el PDF limpio."
      }
    ],
    "useCases": [
      {
        "title": "Limpiar Documentos",
        "description": "Elimina marcas de revisión antes de publicar.",
        "icon": "eraser"
      },
      {
        "title": "Privacidad",
        "description": "Quita comentarios antes de compartir externamente.",
        "icon": "shield"
      },
      {
        "title": "Versión Final",
        "description": "Crea versiones limpias de documentos revisados.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tipos de anotaciones se eliminan?",
        "answer": "Comentarios, resaltados, notas adhesivas, dibujos y más."
      },
      {
        "question": "¿Puedo eliminar selectivamente?",
        "answer": "Sí, elige qué tipos de anotaciones eliminar."
      },
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia de seguridad antes de eliminar."
      }
    ]
  },
  "form-filler": {
    "title": "Rellenar Formularios",
    "metaDescription": "Rellena formularios PDF interactivos en línea.",
    "keywords": [
      "rellenar formularios pdf",
      "completar pdf",
      "formularios interactivos"
    ],
    "description": "<p>Rellenar Formularios te permite completar formularios PDF interactivos directamente en tu navegador.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el formulario."
      },
      {
        "step": 2,
        "title": "Completa Campos",
        "description": "Rellena los campos del formulario."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Guarda el formulario completado."
      }
    ],
    "useCases": [
      {
        "title": "Formularios Oficiales",
        "description": "Completa formularios gubernamentales o legales.",
        "icon": "file-text"
      },
      {
        "title": "Solicitudes",
        "description": "Rellena solicitudes de empleo o servicios.",
        "icon": "clipboard"
      },
      {
        "title": "Contratos",
        "description": "Completa contratos y acuerdos.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "¿Funciona con todos los formularios?",
        "answer": "Funciona con formularios PDF interactivos estándar."
      },
      {
        "question": "¿Puedo guardar y continuar después?",
        "answer": "Sí, guarda el progreso y continúa más tarde."
      },
      {
        "question": "¿Puedo añadir firma?",
        "answer": "Sí, usa la herramienta Firmar PDF para añadir firmas."
      }
    ]
  },
  "form-creator": {
    "title": "Crear Formularios",
    "metaDescription": "Crea formularios PDF interactivos con campos rellenables.",
    "keywords": [
      "crear formularios pdf",
      "formularios interactivos",
      "campos pdf"
    ],
    "description": "<p>Crear Formularios te permite añadir campos interactivos a documentos PDF para crear formularios rellenables.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento base."
      },
      {
        "step": 2,
        "title": "Añade Campos",
        "description": "Inserta campos de texto, casillas, botones de radio, etc."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Guarda el formulario interactivo."
      }
    ],
    "useCases": [
      {
        "title": "Formularios de Empresa",
        "description": "Crea formularios internos rellenables.",
        "icon": "building"
      },
      {
        "title": "Encuestas",
        "description": "Diseña encuestas y cuestionarios.",
        "icon": "clipboard-list"
      },
      {
        "title": "Solicitudes",
        "description": "Crea formularios de solicitud profesionales.",
        "icon": "file-plus"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tipos de campos puedo añadir?",
        "answer": "Texto, casillas, botones de radio, listas desplegables, fechas y más."
      },
      {
        "question": "¿Puedo hacer campos obligatorios?",
        "answer": "Sí, configura validación y campos requeridos."
      },
      {
        "question": "¿Los formularios funcionan en todos los lectores?",
        "answer": "Sí, son compatibles con lectores PDF estándar."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Eliminar Páginas en Blanco",
    "metaDescription": "Detecta y elimina automáticamente páginas en blanco de documentos PDF.",
    "keywords": [
      "eliminar páginas en blanco",
      "quitar páginas vacías",
      "limpiar pdf"
    ],
    "description": "<p>Eliminar Páginas en Blanco detecta y elimina automáticamente las páginas vacías de tus documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Sensibilidad",
        "description": "Ajusta el umbral de detección de páginas en blanco."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Quita las páginas en blanco y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Limpiar Escaneos",
        "description": "Elimina páginas en blanco de documentos escaneados.",
        "icon": "file-minus"
      },
      {
        "title": "Optimizar Documentos",
        "description": "Reduce el tamaño eliminando páginas vacías.",
        "icon": "zap"
      },
      {
        "title": "Preparar para Impresión",
        "description": "Elimina páginas innecesarias antes de imprimir.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo detecta páginas en blanco?",
        "answer": "Analiza el contenido de cada página para detectar vacías."
      },
      {
        "question": "¿Puedo revisar antes de eliminar?",
        "answer": "Sí, muestra las páginas detectadas para confirmación."
      },
      {
        "question": "¿Detecta páginas casi en blanco?",
        "answer": "Sí, ajusta la sensibilidad para incluir páginas con poco contenido."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Imagen a PDF",
    "metaDescription": "Convierte múltiples formatos de imagen a PDF. Soporta JPG, PNG, WebP, BMP, TIFF, SVG, HEIC.",
    "keywords": [
      "imagen a pdf",
      "convertir imagen",
      "foto a pdf",
      "múltiples imágenes pdf"
    ],
    "description": "<p>Imagen a PDF convierte varios formatos de imagen en documentos PDF. Soporta JPG, PNG, WebP, BMP, TIFF, SVG y HEIC.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes",
        "description": "Arrastra y suelta imágenes o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Ordena y Configura",
        "description": "Reordena y selecciona opciones de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentación",
        "description": "Convierte capturas de pantalla en documentación.",
        "icon": "image"
      },
      {
        "title": "Portafolios",
        "description": "Crea portafolios de imágenes en PDF.",
        "icon": "folder"
      },
      {
        "title": "Archivos",
        "description": "Archiva imágenes en formato PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formatos soporta?",
        "answer": "JPG, PNG, WebP, BMP, TIFF, SVG y HEIC."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, las imágenes se incrustan en calidad original."
      },
      {
        "question": "¿Puedo combinar diferentes formatos?",
        "answer": "Sí, mezcla cualquier formato de imagen soportado."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG a PDF",
    "metaDescription": "Convierte imágenes PNG a documentos PDF con transparencia preservada.",
    "keywords": [
      "png a pdf",
      "convertir png",
      "imagen png pdf"
    ],
    "description": "<p>PNG a PDF convierte imágenes PNG en documentos PDF, preservando la transparencia cuando es posible.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes PNG",
        "description": "Arrastra y suelta archivos PNG."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página y orientación."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Gráficos",
        "description": "Convierte gráficos PNG con transparencia.",
        "icon": "image"
      },
      {
        "title": "Logos",
        "description": "Crea PDFs de logos para impresión.",
        "icon": "star"
      },
      {
        "title": "Capturas",
        "description": "Convierte capturas de pantalla en PDF.",
        "icon": "monitor"
      }
    ],
    "faq": [
      {
        "question": "¿Se preserva la transparencia?",
        "answer": "La transparencia se preserva en el PDF resultante."
      },
      {
        "question": "¿Puedo convertir múltiples PNGs?",
        "answer": "Sí, combina múltiples PNGs en un PDF."
      },
      {
        "question": "¿Qué calidad tiene el resultado?",
        "answer": "Se mantiene la calidad original de las imágenes."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP a PDF",
    "metaDescription": "Convierte imágenes WebP a documentos PDF.",
    "keywords": [
      "webp a pdf",
      "convertir webp",
      "imagen webp pdf"
    ],
    "description": "<p>WebP a PDF convierte imágenes en formato WebP a documentos PDF.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes WebP",
        "description": "Arrastra y suelta archivos WebP."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Imágenes Web",
        "description": "Convierte imágenes descargadas de la web.",
        "icon": "globe"
      },
      {
        "title": "Archivos",
        "description": "Archiva imágenes WebP en formato PDF.",
        "icon": "archive"
      },
      {
        "title": "Documentación",
        "description": "Incluye imágenes WebP en documentos.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es WebP?",
        "answer": "WebP es un formato de imagen moderno desarrollado por Google."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad de la imagen original."
      },
      {
        "question": "¿Soporta WebP animado?",
        "answer": "Se convierte el primer fotograma de WebP animados."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG a PDF",
    "metaDescription": "Convierte gráficos vectoriales SVG a documentos PDF.",
    "keywords": [
      "svg a pdf",
      "convertir svg",
      "vector a pdf"
    ],
    "description": "<p>SVG a PDF convierte gráficos vectoriales SVG en documentos PDF, manteniendo la escalabilidad.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Archivos SVG",
        "description": "Arrastra y suelta archivos SVG."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Logos",
        "description": "Convierte logos vectoriales para impresión.",
        "icon": "star"
      },
      {
        "title": "Ilustraciones",
        "description": "Crea PDFs de ilustraciones vectoriales.",
        "icon": "pen-tool"
      },
      {
        "title": "Diagramas",
        "description": "Convierte diagramas SVG a PDF.",
        "icon": "git-branch"
      }
    ],
    "faq": [
      {
        "question": "¿Se mantiene la calidad vectorial?",
        "answer": "Sí, los gráficos permanecen escalables en el PDF."
      },
      {
        "question": "¿Soporta SVG complejos?",
        "answer": "Sí, soporta la mayoría de características SVG."
      },
      {
        "question": "¿Puedo convertir múltiples SVGs?",
        "answer": "Sí, combina múltiples SVGs en un PDF."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP a PDF",
    "metaDescription": "Convierte imágenes BMP a documentos PDF.",
    "keywords": [
      "bmp a pdf",
      "convertir bmp",
      "bitmap a pdf"
    ],
    "description": "<p>BMP a PDF convierte imágenes en formato BMP (bitmap) a documentos PDF.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes BMP",
        "description": "Arrastra y suelta archivos BMP."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Imágenes Antiguas",
        "description": "Convierte archivos BMP heredados.",
        "icon": "image"
      },
      {
        "title": "Capturas Windows",
        "description": "Convierte capturas en formato BMP.",
        "icon": "monitor"
      },
      {
        "title": "Archivos",
        "description": "Archiva imágenes BMP en PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es BMP?",
        "answer": "BMP es un formato de imagen sin compresión de Windows."
      },
      {
        "question": "¿Se reduce el tamaño?",
        "answer": "Sí, el PDF resultante suele ser más pequeño que el BMP original."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad de la imagen."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC a PDF",
    "metaDescription": "Convierte imágenes HEIC de iPhone a documentos PDF.",
    "keywords": [
      "heic a pdf",
      "convertir heic",
      "iphone foto pdf"
    ],
    "description": "<p>HEIC a PDF convierte imágenes HEIC (formato de iPhone) a documentos PDF.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes HEIC",
        "description": "Arrastra y suelta archivos HEIC."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Fotos de iPhone",
        "description": "Convierte fotos de iPhone a PDF.",
        "icon": "smartphone"
      },
      {
        "title": "Álbumes",
        "description": "Crea álbumes PDF de fotos HEIC.",
        "icon": "image"
      },
      {
        "title": "Compartir",
        "description": "Convierte para compartir con usuarios sin soporte HEIC.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es HEIC?",
        "answer": "HEIC es el formato de imagen predeterminado de iPhone desde iOS 11."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad de la imagen original."
      },
      {
        "question": "¿Soporta Live Photos?",
        "answer": "Se convierte la imagen estática de Live Photos."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF a PDF",
    "metaDescription": "Convierte imágenes TIFF a documentos PDF.",
    "keywords": [
      "tiff a pdf",
      "convertir tiff",
      "tif a pdf"
    ],
    "description": "<p>TIFF a PDF convierte imágenes TIFF de alta calidad a documentos PDF.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes TIFF",
        "description": "Arrastra y suelta archivos TIFF."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Escaneados",
        "description": "Convierte escaneos TIFF a PDF.",
        "icon": "scan"
      },
      {
        "title": "Fotografía Profesional",
        "description": "Crea PDFs de fotos de alta calidad.",
        "icon": "camera"
      },
      {
        "title": "Archivos",
        "description": "Archiva imágenes TIFF en PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Soporta TIFF multipágina?",
        "answer": "Sí, cada página TIFF se convierte en una página PDF."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad de la imagen."
      },
      {
        "question": "¿Soporta TIFF con capas?",
        "answer": "Se aplana el TIFF al convertir."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Texto a PDF",
    "metaDescription": "Convierte archivos de texto plano a documentos PDF.",
    "keywords": [
      "texto a pdf",
      "txt a pdf",
      "convertir texto"
    ],
    "description": "<p>Texto a PDF convierte archivos de texto plano (.txt) en documentos PDF con formato personalizable.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Archivo de Texto",
        "description": "Arrastra y suelta o pega texto."
      },
      {
        "step": 2,
        "title": "Configura Formato",
        "description": "Selecciona fuente, tamaño y márgenes."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentación",
        "description": "Convierte archivos README y documentación.",
        "icon": "file-text"
      },
      {
        "title": "Código",
        "description": "Crea PDFs de código fuente.",
        "icon": "code"
      },
      {
        "title": "Notas",
        "description": "Convierte notas de texto a PDF.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo personalizar la fuente?",
        "answer": "Sí, selecciona fuente, tamaño y color."
      },
      {
        "question": "¿Soporta caracteres especiales?",
        "answer": "Sí, soporta Unicode y caracteres especiales."
      },
      {
        "question": "¿Puedo añadir encabezados?",
        "answer": "Sí, configura encabezados y pies de página."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON a PDF",
    "metaDescription": "Convierte datos JSON a documentos PDF formateados.",
    "keywords": [
      "json a pdf",
      "convertir json",
      "datos a pdf"
    ],
    "description": "<p>JSON a PDF convierte datos JSON en documentos PDF con formato legible.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Archivo JSON",
        "description": "Arrastra y suelta o pega JSON."
      },
      {
        "step": 2,
        "title": "Configura Formato",
        "description": "Selecciona estilo de presentación."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentación API",
        "description": "Crea documentación de respuestas API.",
        "icon": "code"
      },
      {
        "title": "Informes de Datos",
        "description": "Genera informes de datos JSON.",
        "icon": "bar-chart"
      },
      {
        "title": "Configuraciones",
        "description": "Documenta archivos de configuración.",
        "icon": "settings"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo se formatea el JSON?",
        "answer": "Se presenta con indentación y resaltado de sintaxis."
      },
      {
        "question": "¿Soporta JSON grandes?",
        "answer": "Sí, maneja archivos JSON de cualquier tamaño."
      },
      {
        "question": "¿Puedo personalizar colores?",
        "answer": "Sí, configura el esquema de colores del resaltado."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF a JPG",
    "metaDescription": "Convierte páginas PDF a imágenes JPG de alta calidad.",
    "keywords": [
      "pdf a jpg",
      "pdf a jpeg",
      "convertir pdf imagen"
    ],
    "description": "<p>PDF a JPG convierte las páginas de tu documento PDF en imágenes JPG de alta calidad.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona calidad y páginas a convertir."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes JPG."
      }
    ],
    "useCases": [
      {
        "title": "Compartir en Redes",
        "description": "Convierte páginas para compartir en redes sociales.",
        "icon": "share-2"
      },
      {
        "title": "Presentaciones",
        "description": "Usa páginas PDF como imágenes en presentaciones.",
        "icon": "presentation"
      },
      {
        "title": "Web",
        "description": "Convierte para usar en sitios web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Qué calidad tienen las imágenes?",
        "answer": "Configura la calidad de 1 a 100, con 100 siendo la máxima."
      },
      {
        "question": "¿Puedo convertir páginas específicas?",
        "answer": "Sí, selecciona las páginas a convertir."
      },
      {
        "question": "¿Cómo descargo múltiples imágenes?",
        "answer": "Se descargan como archivo ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF a PNG",
    "metaDescription": "Convierte páginas PDF a imágenes PNG con transparencia.",
    "keywords": [
      "pdf a png",
      "convertir pdf png",
      "pdf imagen png"
    ],
    "description": "<p>PDF a PNG convierte las páginas de tu documento PDF en imágenes PNG de alta calidad.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona resolución y páginas."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes PNG."
      }
    ],
    "useCases": [
      {
        "title": "Gráficos",
        "description": "Extrae gráficos con transparencia.",
        "icon": "image"
      },
      {
        "title": "Diseño",
        "description": "Usa páginas en proyectos de diseño.",
        "icon": "palette"
      },
      {
        "title": "Documentación",
        "description": "Incluye páginas como imágenes en documentos.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "¿Soporta transparencia?",
        "answer": "Sí, las áreas transparentes se preservan."
      },
      {
        "question": "¿Qué resolución tienen?",
        "answer": "Configura la resolución en DPI (72-600)."
      },
      {
        "question": "¿Puedo convertir todas las páginas?",
        "answer": "Sí, convierte todas o selecciona específicas."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF a WebP",
    "metaDescription": "Convierte páginas PDF a imágenes WebP optimizadas para web.",
    "keywords": [
      "pdf a webp",
      "convertir pdf webp",
      "pdf imagen web"
    ],
    "description": "<p>PDF a WebP convierte las páginas de tu documento PDF en imágenes WebP optimizadas para web.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona calidad y páginas."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes WebP."
      }
    ],
    "useCases": [
      {
        "title": "Sitios Web",
        "description": "Crea imágenes optimizadas para web.",
        "icon": "globe"
      },
      {
        "title": "Rendimiento",
        "description": "Reduce el tamaño de imágenes para carga rápida.",
        "icon": "zap"
      },
      {
        "title": "Blogs",
        "description": "Convierte páginas para artículos de blog.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Por qué WebP?",
        "answer": "WebP ofrece mejor compresión que JPG y PNG."
      },
      {
        "question": "¿Es compatible con todos los navegadores?",
        "answer": "Sí, todos los navegadores modernos soportan WebP."
      },
      {
        "question": "¿Puedo ajustar la compresión?",
        "answer": "Sí, configura el nivel de calidad."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF a BMP",
    "metaDescription": "Convierte páginas PDF a imágenes BMP sin compresión.",
    "keywords": [
      "pdf a bmp",
      "convertir pdf bmp",
      "pdf bitmap"
    ],
    "description": "<p>PDF a BMP convierte las páginas de tu documento PDF en imágenes BMP sin compresión.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona resolución y páginas."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes BMP."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilidad",
        "description": "Crea imágenes para software antiguo.",
        "icon": "monitor"
      },
      {
        "title": "Impresión",
        "description": "Genera imágenes sin pérdida para impresión.",
        "icon": "printer"
      },
      {
        "title": "Edición",
        "description": "Crea imágenes para edición sin pérdida.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Por qué BMP?",
        "answer": "BMP no tiene compresión, ideal para máxima calidad."
      },
      {
        "question": "¿Los archivos son grandes?",
        "answer": "Sí, BMP produce archivos más grandes que otros formatos."
      },
      {
        "question": "¿Puedo convertir múltiples páginas?",
        "answer": "Sí, se descargan como archivo ZIP."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF a TIFF",
    "metaDescription": "Convierte páginas PDF a imágenes TIFF de alta calidad.",
    "keywords": [
      "pdf a tiff",
      "convertir pdf tiff",
      "pdf tif"
    ],
    "description": "<p>PDF a TIFF convierte las páginas de tu documento PDF en imágenes TIFF de alta calidad.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona resolución y compresión."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes TIFF."
      }
    ],
    "useCases": [
      {
        "title": "Impresión Profesional",
        "description": "Crea imágenes para impresión de alta calidad.",
        "icon": "printer"
      },
      {
        "title": "Archivos",
        "description": "Archiva documentos en formato TIFF.",
        "icon": "archive"
      },
      {
        "title": "Escaneo",
        "description": "Convierte para flujos de trabajo de escaneo.",
        "icon": "scan"
      }
    ],
    "faq": [
      {
        "question": "¿Soporta TIFF multipágina?",
        "answer": "Sí, puede crear un TIFF multipágina o archivos separados."
      },
      {
        "question": "¿Qué compresión usa?",
        "answer": "Soporta LZW, ZIP y sin compresión."
      },
      {
        "question": "¿Qué resolución recomiendas?",
        "answer": "300 DPI para impresión, 150 DPI para pantalla."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF a Escala de Grises",
    "metaDescription": "Convierte documentos PDF a color a escala de grises.",
    "keywords": [
      "pdf escala de grises",
      "pdf blanco y negro",
      "convertir pdf gris"
    ],
    "description": "<p>PDF a Escala de Grises convierte documentos PDF a color en versiones en escala de grises.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona páginas a convertir."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga el PDF en escala de grises."
      }
    ],
    "useCases": [
      {
        "title": "Ahorro de Tinta",
        "description": "Prepara documentos para impresión económica.",
        "icon": "printer"
      },
      {
        "title": "Documentos Formales",
        "description": "Crea versiones formales en blanco y negro.",
        "icon": "file-text"
      },
      {
        "title": "Accesibilidad",
        "description": "Mejora la legibilidad para algunos usuarios.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia del original a color."
      },
      {
        "question": "¿Afecta las imágenes?",
        "answer": "Sí, todas las imágenes se convierten a grises."
      },
      {
        "question": "¿Reduce el tamaño del archivo?",
        "answer": "Puede reducir ligeramente el tamaño."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF a JSON",
    "metaDescription": "Extrae datos estructurados de documentos PDF a formato JSON.",
    "keywords": [
      "pdf a json",
      "extraer datos pdf",
      "pdf datos json"
    ],
    "description": "<p>PDF a JSON extrae el contenido y estructura de documentos PDF en formato JSON.</p><p>Extracción local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona qué datos extraer."
      },
      {
        "step": 3,
        "title": "Extrae y Descarga",
        "description": "Descarga el archivo JSON."
      }
    ],
    "useCases": [
      {
        "title": "Procesamiento de Datos",
        "description": "Extrae datos para procesamiento automatizado.",
        "icon": "database"
      },
      {
        "title": "Integración",
        "description": "Integra contenido PDF en aplicaciones.",
        "icon": "plug"
      },
      {
        "title": "Análisis",
        "description": "Analiza estructura y contenido de PDFs.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "¿Qué datos se extraen?",
        "answer": "Texto, metadatos, estructura de páginas y más."
      },
      {
        "question": "¿Extrae tablas?",
        "answer": "Intenta detectar y estructurar tablas."
      },
      {
        "question": "¿Funciona con PDFs escaneados?",
        "answer": "Para PDFs escaneados, usa primero OCR PDF."
      }
    ]
  },
  "ocr-pdf": {
    "title": "OCR PDF",
    "metaDescription": "Reconocimiento óptico de caracteres para hacer PDFs escaneados buscables.",
    "keywords": [
      "ocr pdf",
      "reconocimiento texto",
      "pdf buscable",
      "escaneo a texto"
    ],
    "description": "<p>OCR PDF aplica reconocimiento óptico de caracteres a PDFs escaneados para hacerlos buscables y editables.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el PDF escaneado."
      },
      {
        "step": 2,
        "title": "Selecciona Idioma",
        "description": "Elige el idioma del documento."
      },
      {
        "step": 3,
        "title": "Procesa y Descarga",
        "description": "Aplica OCR y descarga el PDF buscable."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Escaneados",
        "description": "Haz buscables documentos escaneados.",
        "icon": "scan"
      },
      {
        "title": "Archivos Históricos",
        "description": "Digitaliza documentos antiguos.",
        "icon": "archive"
      },
      {
        "title": "Accesibilidad",
        "description": "Permite lectores de pantalla en PDFs escaneados.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Qué idiomas soporta?",
        "answer": "Soporta más de 100 idiomas incluyendo español, inglés, chino y más."
      },
      {
        "question": "¿Qué precisión tiene?",
        "answer": "La precisión depende de la calidad del escaneo, típicamente 95%+."
      },
      {
        "question": "¿Modifica el aspecto del PDF?",
        "answer": "No, añade una capa de texto invisible sobre la imagen."
      }
    ]
  },
  "alternate-merge": {
    "title": "Combinación Alternada",
    "metaDescription": "Combina dos PDFs alternando páginas de cada documento.",
    "keywords": [
      "combinar alternado",
      "intercalar pdf",
      "mezclar páginas"
    ],
    "description": "<p>Combinación Alternada combina dos PDFs alternando páginas de cada documento, útil para documentos de doble cara.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Dos PDFs",
        "description": "Arrastra y suelta los dos documentos."
      },
      {
        "step": 2,
        "title": "Configura Orden",
        "description": "Selecciona el orden de alternancia."
      },
      {
        "step": 3,
        "title": "Combina y Descarga",
        "description": "Crea el PDF combinado."
      }
    ],
    "useCases": [
      {
        "title": "Escaneos Doble Cara",
        "description": "Combina escaneos de anverso y reverso.",
        "icon": "copy"
      },
      {
        "title": "Documentos Bilingües",
        "description": "Alterna páginas en dos idiomas.",
        "icon": "languages"
      },
      {
        "title": "Comparación",
        "description": "Alterna versiones para comparación.",
        "icon": "git-compare"
      }
    ],
    "faq": [
      {
        "question": "¿Qué pasa si tienen diferente número de páginas?",
        "answer": "Las páginas extra se añaden al final."
      },
      {
        "question": "¿Puedo invertir el orden de uno?",
        "answer": "Sí, puedes invertir el orden de cualquier documento."
      },
      {
        "question": "¿Puedo combinar más de dos PDFs?",
        "answer": "Esta herramienta es para dos PDFs. Usa Combinar PDF para más."
      }
    ]
  },
  "add-attachments": {
    "title": "Añadir Adjuntos",
    "metaDescription": "Añade archivos adjuntos a documentos PDF.",
    "keywords": [
      "adjuntos pdf",
      "añadir archivos pdf",
      "incrustar archivos"
    ],
    "description": "<p>Añadir Adjuntos te permite incrustar archivos dentro de documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Añade Archivos",
        "description": "Selecciona los archivos a adjuntar."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Descarga el PDF con adjuntos."
      }
    ],
    "useCases": [
      {
        "title": "Documentación",
        "description": "Incluye archivos de soporte en documentos.",
        "icon": "paperclip"
      },
      {
        "title": "Informes",
        "description": "Adjunta datos fuente a informes.",
        "icon": "file-text"
      },
      {
        "title": "Contratos",
        "description": "Incluye anexos en contratos.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tipos de archivos puedo adjuntar?",
        "answer": "Cualquier tipo de archivo: documentos, imágenes, hojas de cálculo, etc."
      },
      {
        "question": "¿Hay límite de tamaño?",
        "answer": "El tamaño total del PDF con adjuntos no debe exceder 500MB."
      },
      {
        "question": "¿Cómo se accede a los adjuntos?",
        "answer": "Los lectores PDF muestran los adjuntos en un panel lateral."
      }
    ]
  },
  "extract-attachments": {
    "title": "Extraer Adjuntos",
    "metaDescription": "Extrae archivos adjuntos de documentos PDF.",
    "keywords": [
      "extraer adjuntos pdf",
      "descargar adjuntos",
      "archivos incrustados"
    ],
    "description": "<p>Extraer Adjuntos te permite descargar los archivos incrustados en documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Revisa Adjuntos",
        "description": "Ve la lista de archivos adjuntos."
      },
      {
        "step": 3,
        "title": "Extrae y Descarga",
        "description": "Descarga los adjuntos seleccionados."
      }
    ],
    "useCases": [
      {
        "title": "Recuperar Archivos",
        "description": "Extrae archivos de documentos recibidos.",
        "icon": "download"
      },
      {
        "title": "Organización",
        "description": "Separa adjuntos para organización.",
        "icon": "folder"
      },
      {
        "title": "Análisis",
        "description": "Extrae datos adjuntos para análisis.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo sé si un PDF tiene adjuntos?",
        "answer": "La herramienta muestra todos los adjuntos encontrados."
      },
      {
        "question": "¿Puedo extraer adjuntos específicos?",
        "answer": "Sí, selecciona los adjuntos a extraer."
      },
      {
        "question": "¿Se modifica el PDF original?",
        "answer": "No, solo se extraen copias de los adjuntos."
      }
    ]
  },
  "edit-attachments": {
    "title": "Editar Adjuntos",
    "metaDescription": "Gestiona los archivos adjuntos en documentos PDF.",
    "keywords": [
      "editar adjuntos pdf",
      "gestionar adjuntos",
      "modificar adjuntos"
    ],
    "description": "<p>Editar Adjuntos te permite añadir, eliminar y renombrar archivos adjuntos en documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Gestiona Adjuntos",
        "description": "Añade, elimina o renombra adjuntos."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Descarga el PDF modificado."
      }
    ],
    "useCases": [
      {
        "title": "Actualizar Adjuntos",
        "description": "Reemplaza adjuntos desactualizados.",
        "icon": "refresh-cw"
      },
      {
        "title": "Limpiar PDFs",
        "description": "Elimina adjuntos innecesarios.",
        "icon": "trash-2"
      },
      {
        "title": "Organizar",
        "description": "Renombra adjuntos para mejor organización.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo reemplazar un adjunto?",
        "answer": "Sí, elimina el existente y añade el nuevo."
      },
      {
        "question": "¿Puedo cambiar el nombre?",
        "answer": "Sí, renombra cualquier adjunto."
      },
      {
        "question": "¿Afecta el contenido del PDF?",
        "answer": "No, solo modifica los adjuntos."
      }
    ]
  },
  "divide-pages": {
    "title": "Dividir Páginas",
    "metaDescription": "Divide páginas PDF grandes en múltiples páginas más pequeñas.",
    "keywords": [
      "dividir páginas pdf",
      "cortar páginas",
      "separar páginas"
    ],
    "description": "<p>Dividir Páginas corta páginas PDF grandes en múltiples páginas más pequeñas.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura División",
        "description": "Selecciona cómo dividir las páginas."
      },
      {
        "step": 3,
        "title": "Divide y Descarga",
        "description": "Descarga el PDF con páginas divididas."
      }
    ],
    "useCases": [
      {
        "title": "Posters",
        "description": "Divide posters grandes para impresión en partes.",
        "icon": "layout-grid"
      },
      {
        "title": "Planos",
        "description": "Divide planos grandes en secciones.",
        "icon": "map"
      },
      {
        "title": "Presentaciones",
        "description": "Divide diapositivas anchas en páginas estándar.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo se dividen las páginas?",
        "answer": "Puedes dividir horizontal, vertical o en cuadrícula."
      },
      {
        "question": "¿Puedo especificar el tamaño?",
        "answer": "Sí, define el tamaño de las páginas resultantes."
      },
      {
        "question": "¿Se pierde contenido?",
        "answer": "No, todo el contenido se preserva en las páginas divididas."
      }
    ]
  },
  "add-blank-page": {
    "title": "Añadir Página en Blanco",
    "metaDescription": "Inserta páginas en blanco en documentos PDF.",
    "keywords": [
      "añadir página blanco",
      "insertar página pdf",
      "página vacía"
    ],
    "description": "<p>Añadir Página en Blanco te permite insertar páginas vacías en cualquier posición de tu documento PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Posición",
        "description": "Elige dónde insertar la página en blanco."
      },
      {
        "step": 3,
        "title": "Añade y Descarga",
        "description": "Inserta la página y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Separadores",
        "description": "Añade páginas en blanco como separadores de sección.",
        "icon": "file-plus"
      },
      {
        "title": "Impresión",
        "description": "Añade páginas para impresión a doble cara.",
        "icon": "printer"
      },
      {
        "title": "Notas",
        "description": "Inserta páginas para notas manuscritas.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo añadir múltiples páginas?",
        "answer": "Sí, añade tantas páginas en blanco como necesites."
      },
      {
        "question": "¿Puedo elegir el tamaño?",
        "answer": "Las páginas en blanco coinciden con el tamaño del documento."
      },
      {
        "question": "¿Puedo añadir al inicio o final?",
        "answer": "Sí, inserta en cualquier posición."
      }
    ]
  },
  "reverse-pages": {
    "title": "Invertir Páginas",
    "metaDescription": "Invierte el orden de las páginas en documentos PDF.",
    "keywords": [
      "invertir páginas pdf",
      "orden inverso",
      "voltear pdf"
    ],
    "description": "<p>Invertir Páginas cambia el orden de las páginas de tu PDF, poniendo la última primero.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Confirma",
        "description": "Revisa la vista previa del orden invertido."
      },
      {
        "step": 3,
        "title": "Invierte y Descarga",
        "description": "Aplica la inversión y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Corregir Escaneos",
        "description": "Corrige documentos escaneados en orden inverso.",
        "icon": "refresh-cw"
      },
      {
        "title": "Presentaciones",
        "description": "Invierte el orden para presentaciones inversas.",
        "icon": "presentation"
      },
      {
        "title": "Impresión",
        "description": "Prepara documentos para ciertos tipos de impresión.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo invertir páginas específicas?",
        "answer": "Esta herramienta invierte todas las páginas. Usa Organizar PDF para reordenar específicas."
      },
      {
        "question": "¿Afecta el contenido de las páginas?",
        "answer": "No, solo cambia el orden, no el contenido."
      },
      {
        "question": "¿Es reversible?",
        "answer": "Sí, invierte de nuevo para restaurar el orden original."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Rotar PDF",
    "metaDescription": "Rota páginas PDF 90, 180 o 270 grados.",
    "keywords": [
      "rotar pdf",
      "girar páginas",
      "orientación pdf"
    ],
    "description": "<p>Rotar PDF te permite girar páginas de tu documento 90, 180 o 270 grados.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Rotación",
        "description": "Elige el ángulo y las páginas a rotar."
      },
      {
        "step": 3,
        "title": "Rota y Descarga",
        "description": "Aplica la rotación y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Corregir Orientación",
        "description": "Corrige páginas escaneadas con orientación incorrecta.",
        "icon": "rotate-cw"
      },
      {
        "title": "Documentos Mixtos",
        "description": "Unifica orientación en documentos con páginas mixtas.",
        "icon": "file-text"
      },
      {
        "title": "Presentaciones",
        "description": "Ajusta orientación para presentaciones.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo rotar páginas específicas?",
        "answer": "Sí, selecciona las páginas a rotar."
      },
      {
        "question": "¿Qué ángulos están disponibles?",
        "answer": "90° (derecha), 180° (invertir), 270° (izquierda)."
      },
      {
        "question": "¿Afecta la calidad?",
        "answer": "No, la rotación no afecta la calidad del contenido."
      }
    ]
  },
  "n-up-pdf": {
    "title": "N-Up PDF",
    "metaDescription": "Coloca múltiples páginas PDF en una sola página (2-up, 4-up, etc.).",
    "keywords": [
      "n-up pdf",
      "múltiples páginas",
      "2-up",
      "4-up",
      "imprimir múltiple"
    ],
    "description": "<p>N-Up PDF coloca múltiples páginas de tu documento en una sola página, útil para ahorrar papel al imprimir.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Diseño",
        "description": "Elige 2-up, 4-up, 6-up o 9-up."
      },
      {
        "step": 3,
        "title": "Procesa y Descarga",
        "description": "Crea el PDF N-up y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Ahorro de Papel",
        "description": "Imprime múltiples páginas por hoja.",
        "icon": "file-minus"
      },
      {
        "title": "Resúmenes",
        "description": "Crea resúmenes visuales de documentos.",
        "icon": "layout-grid"
      },
      {
        "title": "Revisión",
        "description": "Revisa documentos con vista general.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Qué significa N-up?",
        "answer": "N páginas por hoja: 2-up = 2 páginas, 4-up = 4 páginas, etc."
      },
      {
        "question": "¿Puedo personalizar el orden?",
        "answer": "Sí, elige el orden de lectura (izquierda-derecha, arriba-abajo)."
      },
      {
        "question": "¿Se reduce la calidad?",
        "answer": "Las páginas se escalan para ajustarse, pero mantienen legibilidad."
      }
    ]
  },
  "combine-single-page": {
    "title": "Combinar en Página Única",
    "metaDescription": "Combina todas las páginas PDF en una sola página larga.",
    "keywords": [
      "combinar página única",
      "página continua",
      "unir páginas"
    ],
    "description": "<p>Combinar en Página Única une todas las páginas de tu PDF en una sola página larga continua.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona orientación y espaciado."
      },
      {
        "step": 3,
        "title": "Combina y Descarga",
        "description": "Crea la página única y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Infografías",
        "description": "Crea documentos de desplazamiento continuo.",
        "icon": "scroll"
      },
      {
        "title": "Impresión de Banners",
        "description": "Prepara documentos para impresión de banners.",
        "icon": "printer"
      },
      {
        "title": "Visualización",
        "description": "Crea vistas panorámicas de documentos.",
        "icon": "maximize"
      }
    ],
    "faq": [
      {
        "question": "¿Hay límite de páginas?",
        "answer": "No hay límite, pero documentos muy largos pueden ser difíciles de manejar."
      },
      {
        "question": "¿Puedo añadir espacio entre páginas?",
        "answer": "Sí, configura el espaciado entre páginas originales."
      },
      {
        "question": "¿Funciona con páginas de diferentes tamaños?",
        "answer": "Sí, las páginas se ajustan al ancho máximo."
      }
    ]
  },
  "view-metadata": {
    "title": "Ver Metadatos",
    "metaDescription": "Visualiza los metadatos y propiedades de documentos PDF.",
    "keywords": [
      "ver metadatos pdf",
      "propiedades pdf",
      "información pdf"
    ],
    "description": "<p>Ver Metadatos muestra toda la información de propiedades de tu documento PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Revisa Metadatos",
        "description": "Ve título, autor, fechas, palabras clave, etc."
      },
      {
        "step": 3,
        "title": "Exporta si Necesitas",
        "description": "Exporta los metadatos a JSON."
      }
    ],
    "useCases": [
      {
        "title": "Auditoría",
        "description": "Revisa información de documentos recibidos.",
        "icon": "search"
      },
      {
        "title": "Verificación",
        "description": "Verifica autor y fechas de documentos.",
        "icon": "check-circle"
      },
      {
        "title": "Catalogación",
        "description": "Extrae información para catalogar documentos.",
        "icon": "database"
      }
    ],
    "faq": [
      {
        "question": "¿Qué metadatos se muestran?",
        "answer": "Título, autor, asunto, palabras clave, fechas de creación y modificación, productor, etc."
      },
      {
        "question": "¿Puedo editar los metadatos?",
        "answer": "Usa la herramienta Editar Metadatos para modificarlos."
      },
      {
        "question": "¿Se modifica el PDF?",
        "answer": "No, solo se visualiza la información."
      }
    ]
  },
  "edit-metadata": {
    "title": "Editar Metadatos",
    "metaDescription": "Edita los metadatos y propiedades de documentos PDF.",
    "keywords": [
      "editar metadatos pdf",
      "modificar propiedades",
      "cambiar autor pdf"
    ],
    "description": "<p>Editar Metadatos te permite modificar las propiedades de tu documento PDF como título, autor y palabras clave.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Edita Metadatos",
        "description": "Modifica título, autor, asunto, palabras clave."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Aplica los cambios y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Branding",
        "description": "Añade información de empresa a documentos.",
        "icon": "building"
      },
      {
        "title": "SEO",
        "description": "Optimiza metadatos para búsqueda.",
        "icon": "search"
      },
      {
        "title": "Organización",
        "description": "Añade palabras clave para catalogación.",
        "icon": "tag"
      }
    ],
    "faq": [
      {
        "question": "¿Qué metadatos puedo editar?",
        "answer": "Título, autor, asunto, palabras clave, productor y más."
      },
      {
        "question": "¿Puedo eliminar metadatos?",
        "answer": "Sí, deja campos vacíos o usa Eliminar Metadatos."
      },
      {
        "question": "¿Afecta el contenido?",
        "answer": "No, solo modifica las propiedades del documento."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDFs a ZIP",
    "metaDescription": "Empaqueta múltiples archivos PDF en un archivo ZIP.",
    "keywords": [
      "pdf a zip",
      "comprimir pdfs",
      "empaquetar pdf"
    ],
    "description": "<p>PDFs a ZIP empaqueta múltiples archivos PDF en un único archivo ZIP comprimido.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube PDFs",
        "description": "Arrastra y suelta múltiples archivos PDF."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona nivel de compresión."
      },
      {
        "step": 3,
        "title": "Crea y Descarga",
        "description": "Genera el archivo ZIP y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Envío por Correo",
        "description": "Empaqueta múltiples PDFs para enviar por email.",
        "icon": "mail"
      },
      {
        "title": "Archivos",
        "description": "Comprime documentos para almacenamiento.",
        "icon": "archive"
      },
      {
        "title": "Distribución",
        "description": "Prepara paquetes de documentos para distribución.",
        "icon": "package"
      }
    ],
    "faq": [
      {
        "question": "¿Cuántos PDFs puedo empaquetar?",
        "answer": "Hasta 100 archivos PDF."
      },
      {
        "question": "¿Se comprimen los PDFs?",
        "answer": "El ZIP comprime el paquete, no los PDFs individuales."
      },
      {
        "question": "¿Puedo añadir otros archivos?",
        "answer": "Esta herramienta es específica para PDFs."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Comparar PDFs",
    "metaDescription": "Compara dos documentos PDF lado a lado y resalta diferencias.",
    "keywords": [
      "comparar pdf",
      "diferencias pdf",
      "comparación documentos"
    ],
    "description": "<p>Comparar PDFs muestra dos documentos lado a lado y resalta las diferencias entre ellos.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Dos PDFs",
        "description": "Arrastra y suelta los dos documentos a comparar."
      },
      {
        "step": 2,
        "title": "Revisa Diferencias",
        "description": "Ve las diferencias resaltadas."
      },
      {
        "step": 3,
        "title": "Exporta Resultados",
        "description": "Descarga el informe de comparación."
      }
    ],
    "useCases": [
      {
        "title": "Control de Versiones",
        "description": "Compara diferentes versiones de documentos.",
        "icon": "git-compare"
      },
      {
        "title": "Revisión de Contratos",
        "description": "Identifica cambios en contratos.",
        "icon": "file-signature"
      },
      {
        "title": "Auditoría",
        "description": "Verifica cambios en documentos oficiales.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "¿Qué diferencias detecta?",
        "answer": "Cambios en texto, imágenes, formato y estructura."
      },
      {
        "question": "¿Funciona con PDFs escaneados?",
        "answer": "Mejor con PDFs de texto. Para escaneados, usa OCR primero."
      },
      {
        "question": "¿Puedo comparar más de dos PDFs?",
        "answer": "Esta herramienta compara dos PDFs a la vez."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Posterizar PDF",
    "metaDescription": "Divide páginas PDF grandes en múltiples páginas para impresión de posters.",
    "keywords": [
      "posterizar pdf",
      "imprimir poster",
      "dividir página grande"
    ],
    "description": "<p>Posterizar PDF divide páginas grandes en múltiples páginas más pequeñas para imprimir posters en impresoras estándar.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura Cuadrícula",
        "description": "Selecciona el número de filas y columnas."
      },
      {
        "step": 3,
        "title": "Posteriza y Descarga",
        "description": "Crea las páginas divididas y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Posters",
        "description": "Imprime posters grandes en hojas A4.",
        "icon": "maximize"
      },
      {
        "title": "Planos",
        "description": "Divide planos para impresión en partes.",
        "icon": "map"
      },
      {
        "title": "Banners",
        "description": "Crea banners imprimibles en secciones.",
        "icon": "layout-grid"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo funciona?",
        "answer": "Divide cada página en una cuadrícula de páginas más pequeñas."
      },
      {
        "question": "¿Puedo añadir marcas de corte?",
        "answer": "Sí, añade marcas de corte y superposición."
      },
      {
        "question": "¿Qué tamaño de cuadrícula puedo usar?",
        "answer": "Desde 2x2 hasta 10x10 o personalizado."
      }
    ]
  },
  "fix-page-size": {
    "title": "Corregir Tamaño de Página",
    "metaDescription": "Estandariza el tamaño de página de documentos PDF.",
    "keywords": [
      "corregir tamaño pdf",
      "estandarizar páginas",
      "tamaño página pdf"
    ],
    "description": "<p>Corregir Tamaño de Página estandariza todas las páginas de tu PDF a un tamaño uniforme.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Tamaño",
        "description": "Elige el tamaño de página deseado (A4, Letter, etc.)."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Estandariza las páginas y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Impresión",
        "description": "Prepara documentos para impresión uniforme.",
        "icon": "printer"
      },
      {
        "title": "Combinación",
        "description": "Estandariza antes de combinar documentos.",
        "icon": "combine"
      },
      {
        "title": "Presentación",
        "description": "Unifica tamaños para presentaciones profesionales.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tamaños están disponibles?",
        "answer": "A4, Letter, Legal, A3, A5 y tamaños personalizados."
      },
      {
        "question": "¿Se escala el contenido?",
        "answer": "Puedes elegir escalar, recortar o añadir márgenes."
      },
      {
        "question": "¿Afecta la calidad?",
        "answer": "El contenido mantiene su calidad original."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linearizar PDF",
    "metaDescription": "Optimiza PDFs para visualización web rápida (Fast Web View).",
    "keywords": [
      "linearizar pdf",
      "fast web view",
      "optimizar pdf web"
    ],
    "description": "<p>Linearizar PDF optimiza documentos para visualización web rápida, permitiendo ver la primera página mientras se descarga el resto.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Confirma",
        "description": "Revisa las opciones de linearización."
      },
      {
        "step": 3,
        "title": "Lineariza y Descarga",
        "description": "Optimiza el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Publicación Web",
        "description": "Optimiza PDFs para sitios web.",
        "icon": "globe"
      },
      {
        "title": "Documentos Grandes",
        "description": "Mejora la experiencia con PDFs grandes.",
        "icon": "file-text"
      },
      {
        "title": "Distribución",
        "description": "Prepara documentos para distribución en línea.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es linearización?",
        "answer": "Reorganiza el PDF para que la primera página se muestre inmediatamente."
      },
      {
        "question": "¿Reduce el tamaño?",
        "answer": "No significativamente, pero mejora la velocidad de visualización."
      },
      {
        "question": "¿Afecta la compatibilidad?",
        "answer": "No, los PDFs linearizados son compatibles con todos los lectores."
      }
    ]
  },
  "page-dimensions": {
    "title": "Dimensiones de Página",
    "metaDescription": "Analiza y muestra las dimensiones de cada página en documentos PDF.",
    "keywords": [
      "dimensiones pdf",
      "tamaño páginas",
      "medidas pdf"
    ],
    "description": "<p>Dimensiones de Página analiza y muestra el tamaño de cada página en tu documento PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Revisa Dimensiones",
        "description": "Ve el tamaño de cada página."
      },
      {
        "step": 3,
        "title": "Exporta si Necesitas",
        "description": "Exporta el informe de dimensiones."
      }
    ],
    "useCases": [
      {
        "title": "Verificación",
        "description": "Verifica tamaños antes de imprimir.",
        "icon": "ruler"
      },
      {
        "title": "Análisis",
        "description": "Analiza documentos con páginas mixtas.",
        "icon": "search"
      },
      {
        "title": "Preparación",
        "description": "Identifica páginas que necesitan ajuste.",
        "icon": "settings"
      }
    ],
    "faq": [
      {
        "question": "¿Qué unidades se muestran?",
        "answer": "Milímetros, pulgadas y puntos."
      },
      {
        "question": "¿Detecta orientación?",
        "answer": "Sí, muestra si cada página es vertical u horizontal."
      },
      {
        "question": "¿Puedo cambiar las dimensiones?",
        "answer": "Usa Corregir Tamaño de Página para modificar dimensiones."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Eliminar Restricciones",
    "metaDescription": "Elimina restricciones de seguridad de documentos PDF.",
    "keywords": [
      "eliminar restricciones pdf",
      "desbloquear pdf",
      "quitar seguridad"
    ],
    "description": "<p>Eliminar Restricciones quita las restricciones de seguridad de PDFs que impiden copiar, imprimir o editar.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento restringido."
      },
      {
        "step": 2,
        "title": "Ingresa Contraseña",
        "description": "Si es necesario, ingresa la contraseña del propietario."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Quita las restricciones y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir Documentos",
        "description": "Habilita impresión en PDFs restringidos.",
        "icon": "printer"
      },
      {
        "title": "Copiar Texto",
        "description": "Permite copiar texto de documentos bloqueados.",
        "icon": "copy"
      },
      {
        "title": "Editar PDFs",
        "description": "Habilita edición en documentos protegidos.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Necesito la contraseña?",
        "answer": "Depende del tipo de protección. Algunas restricciones requieren contraseña."
      },
      {
        "question": "¿Es legal?",
        "answer": "Solo usa esta herramienta con documentos que tienes derecho a modificar."
      },
      {
        "question": "¿Funciona con todos los PDFs?",
        "answer": "Funciona con la mayoría de PDFs con restricciones estándar."
      }
    ]
  },
  "repair-pdf": {
    "title": "Reparar PDF",
    "metaDescription": "Repara archivos PDF dañados o corruptos.",
    "keywords": [
      "reparar pdf",
      "arreglar pdf",
      "pdf corrupto",
      "recuperar pdf"
    ],
    "description": "<p>Reparar PDF intenta recuperar y reparar archivos PDF dañados o corruptos.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el archivo dañado."
      },
      {
        "step": 2,
        "title": "Inicia Reparación",
        "description": "La herramienta analiza y repara el archivo."
      },
      {
        "step": 3,
        "title": "Descarga Reparado",
        "description": "Descarga el PDF reparado."
      }
    ],
    "useCases": [
      {
        "title": "Archivos Corruptos",
        "description": "Recupera PDFs que no se abren correctamente.",
        "icon": "wrench"
      },
      {
        "title": "Descargas Incompletas",
        "description": "Repara PDFs de descargas interrumpidas.",
        "icon": "download"
      },
      {
        "title": "Archivos Antiguos",
        "description": "Recupera documentos de archivos dañados.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué problemas puede reparar?",
        "answer": "Estructura dañada, referencias rotas, objetos corruptos."
      },
      {
        "question": "¿Siempre funciona?",
        "answer": "Depende del nivel de daño. Archivos muy dañados pueden no ser recuperables."
      },
      {
        "question": "¿Se pierde contenido?",
        "answer": "La herramienta intenta preservar todo el contenido posible."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Cifrar PDF",
    "metaDescription": "Protege documentos PDF con contraseña y cifrado.",
    "keywords": [
      "cifrar pdf",
      "proteger pdf",
      "contraseña pdf",
      "seguridad pdf"
    ],
    "description": "<p>Cifrar PDF protege tus documentos con contraseña y cifrado AES para máxima seguridad.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura Seguridad",
        "description": "Establece contraseña y permisos."
      },
      {
        "step": 3,
        "title": "Cifra y Descarga",
        "description": "Aplica el cifrado y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Confidenciales",
        "description": "Protege información sensible.",
        "icon": "lock"
      },
      {
        "title": "Envío Seguro",
        "description": "Cifra documentos antes de enviar por email.",
        "icon": "mail"
      },
      {
        "title": "Cumplimiento",
        "description": "Cumple con requisitos de seguridad de datos.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "¿Qué cifrado se usa?",
        "answer": "AES de 128 o 256 bits, el estándar de la industria."
      },
      {
        "question": "¿Puedo establecer permisos?",
        "answer": "Sí, controla impresión, copia, edición y más."
      },
      {
        "question": "¿Qué pasa si olvido la contraseña?",
        "answer": "No hay forma de recuperar PDFs cifrados sin la contraseña."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Sanitizar PDF",
    "metaDescription": "Elimina información oculta y metadatos de documentos PDF.",
    "keywords": [
      "sanitizar pdf",
      "limpiar pdf",
      "eliminar información oculta"
    ],
    "description": "<p>Sanitizar PDF elimina toda la información oculta, metadatos, scripts y datos sensibles de tus documentos.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Opciones",
        "description": "Elige qué elementos eliminar."
      },
      {
        "step": 3,
        "title": "Sanitiza y Descarga",
        "description": "Limpia el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Privacidad",
        "description": "Elimina información personal antes de compartir.",
        "icon": "shield"
      },
      {
        "title": "Seguridad",
        "description": "Quita scripts y elementos potencialmente peligrosos.",
        "icon": "alert-triangle"
      },
      {
        "title": "Publicación",
        "description": "Prepara documentos para publicación pública.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Qué se elimina?",
        "answer": "Metadatos, comentarios, adjuntos, scripts, capas ocultas y más."
      },
      {
        "question": "¿Afecta el contenido visible?",
        "answer": "No, solo elimina información oculta."
      },
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia del original."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Descifrar PDF",
    "metaDescription": "Elimina la protección con contraseña de documentos PDF.",
    "keywords": [
      "descifrar pdf",
      "quitar contraseña",
      "desbloquear pdf"
    ],
    "description": "<p>Descifrar PDF elimina la protección con contraseña de documentos PDF cifrados.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento cifrado."
      },
      {
        "step": 2,
        "title": "Ingresa Contraseña",
        "description": "Ingresa la contraseña del documento."
      },
      {
        "step": 3,
        "title": "Descifra y Descarga",
        "description": "Elimina el cifrado y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Acceso a Documentos",
        "description": "Desbloquea PDFs para los que tienes la contraseña.",
        "icon": "unlock"
      },
      {
        "title": "Archivos",
        "description": "Elimina cifrado de documentos archivados.",
        "icon": "archive"
      },
      {
        "title": "Procesamiento",
        "description": "Prepara PDFs cifrados para otras operaciones.",
        "icon": "settings"
      }
    ],
    "faq": [
      {
        "question": "¿Necesito la contraseña?",
        "answer": "Sí, necesitas la contraseña correcta para descifrar."
      },
      {
        "question": "¿Puedo descifrar sin contraseña?",
        "answer": "No, esta herramienta requiere la contraseña legítima."
      },
      {
        "question": "¿Se elimina toda la protección?",
        "answer": "Sí, el PDF resultante no tiene cifrado ni restricciones."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Aplanar PDF",
    "metaDescription": "Aplana formularios y anotaciones en documentos PDF.",
    "keywords": [
      "aplanar pdf",
      "flatten pdf",
      "formularios pdf"
    ],
    "description": "<p>Aplanar PDF convierte formularios interactivos y anotaciones en contenido estático no editable.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Opciones",
        "description": "Elige qué elementos aplanar."
      },
      {
        "step": 3,
        "title": "Aplana y Descarga",
        "description": "Convierte a estático y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Formularios Completados",
        "description": "Convierte formularios rellenados en documentos finales.",
        "icon": "file-check"
      },
      {
        "title": "Archivos",
        "description": "Crea versiones permanentes de documentos anotados.",
        "icon": "archive"
      },
      {
        "title": "Distribución",
        "description": "Prepara documentos para distribución sin edición.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Qué se aplana?",
        "answer": "Campos de formulario, anotaciones, comentarios y capas."
      },
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia del original con elementos editables."
      },
      {
        "question": "¿Afecta la apariencia?",
        "answer": "No, el documento se ve igual pero los elementos son estáticos."
      }
    ]
  },
  "remove-metadata": {
    "title": "Eliminar Metadatos",
    "metaDescription": "Elimina todos los metadatos de documentos PDF.",
    "keywords": [
      "eliminar metadatos pdf",
      "quitar propiedades",
      "limpiar metadatos"
    ],
    "description": "<p>Eliminar Metadatos quita toda la información de propiedades de tus documentos PDF para proteger la privacidad.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Confirma",
        "description": "Revisa los metadatos a eliminar."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Quita los metadatos y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Privacidad",
        "description": "Elimina información de autor y fechas.",
        "icon": "shield"
      },
      {
        "title": "Anonimización",
        "description": "Prepara documentos para compartir anónimamente.",
        "icon": "user-x"
      },
      {
        "title": "Publicación",
        "description": "Limpia metadatos antes de publicar.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Qué metadatos se eliminan?",
        "answer": "Autor, título, asunto, palabras clave, fechas, productor, etc."
      },
      {
        "question": "¿Afecta el contenido?",
        "answer": "No, solo elimina las propiedades del documento."
      },
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia si necesitas los metadatos."
      }
    ]
  },
  "change-permissions": {
    "title": "Cambiar Permisos",
    "metaDescription": "Modifica los permisos de seguridad de documentos PDF.",
    "keywords": [
      "permisos pdf",
      "cambiar permisos",
      "seguridad pdf"
    ],
    "description": "<p>Cambiar Permisos te permite modificar qué acciones están permitidas en tu documento PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura Permisos",
        "description": "Selecciona qué acciones permitir o restringir."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Guarda los nuevos permisos y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Proteger Contenido",
        "description": "Restringe copia y edición de documentos.",
        "icon": "lock"
      },
      {
        "title": "Control de Impresión",
        "description": "Limita o permite impresión.",
        "icon": "printer"
      },
      {
        "title": "Distribución",
        "description": "Configura permisos para distribución controlada.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Qué permisos puedo cambiar?",
        "answer": "Impresión, copia, edición, anotaciones, extracción de páginas."
      },
      {
        "question": "¿Necesito contraseña?",
        "answer": "Puedes establecer una contraseña de propietario para proteger los permisos."
      },
      {
        "question": "¿Son los permisos seguros?",
        "answer": "Los permisos pueden ser eludidos con herramientas especializadas."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF a PowerPoint",
    "metaDescription": "Convierte PDF a presentación PowerPoint (PPTX). Cada página se convierte en una diapositiva.",
    "keywords": [
      "pdf a pptx",
      "pdf a powerpoint",
      "convertir pdf ppt",
      "pdf diapositiva"
    ],
    "description": "\n      <p>PDF a PowerPoint convierte tus documentos PDF en presentaciones de PowerPoint (PPTX) editables. Cada página del PDF se transforma en una diapositiva de alta calidad, preservando el diseño visual.</p>\n      <p>Ideal para convertir informes o documentos en formato de presentación.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Calidad",
        "description": "Selecciona la calidad de imagen (DPI) de las diapositivas."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea tu presentación PPTX y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Crear Presentaciones",
        "description": "Convierte informes PDF en diapositivas para reuniones.",
        "icon": "presentation"
      },
      {
        "title": "Material de Formación",
        "description": "Transforma manuales PDF en presentaciones interactivas.",
        "icon": "book-open"
      },
      {
        "title": "Reutilizar Contenido",
        "description": "Usa contenido PDF existente en nuevas presentaciones.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "¿Son editables las diapositivas?",
        "answer": "Cada diapositiva contiene una imagen de la página. Puedes añadir elementos encima."
      },
      {
        "question": "¿Qué DPI debo usar?",
        "answer": "150 DPI para pantalla, 300 DPI para impresión."
      },
      {
        "question": "¿Funciona con múltiples páginas?",
        "answer": "Sí, cada página se convierte en una diapositiva separada."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF a Excel",
    "metaDescription": "Convierte PDF a hoja de cálculo Excel. Extrae tablas a formato XLSX.",
    "keywords": [
      "pdf a excel",
      "pdf a xlsx",
      "extraer tablas",
      "datos pdf"
    ],
    "description": "\n      <p>PDF a Excel convierte tus documentos PDF en hojas de cálculo Microsoft Excel (XLSX) editables. La herramienta detecta automáticamente las tablas en tu PDF y las extrae en hojas separadas.</p>\n      <p>Ideal para analizar informes financieros, facturas o cualquier dato tabular.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Sube el archivo PDF con tablas."
      },
      {
        "step": 2,
        "title": "Procesar",
        "description": "La herramienta identifica y extrae tablas automáticamente."
      },
      {
        "step": 3,
        "title": "Descarga Excel",
        "description": "Descarga el archivo Excel con los datos extraídos."
      }
    ],
    "useCases": [
      {
        "title": "Análisis Financiero",
        "description": "Convierte estados de cuenta o facturas a Excel.",
        "icon": "trending-up"
      },
      {
        "title": "Extracción de Datos",
        "description": "Saca tablas de informes de investigación.",
        "icon": "database"
      },
      {
        "title": "Gestión de Inventario",
        "description": "Convierte listas de inventario de PDF a hoja de cálculo.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo maneja las tablas?",
        "answer": "Las tablas detectadas se extraen a hojas correspondientes en el Excel."
      },
      {
        "question": "¿Si no hay tablas?",
        "answer": "Se crea una hoja de información indicando que no se encontraron tablas."
      },
      {
        "question": "¿Se preserva el formato?",
        "answer": "Los datos se preservan, pero el formato visual complejo puede simplificarse."
      }
    ]
  },
  "email-to-pdf": {
    "title": "Email a PDF",
    "metaDescription": "Convierte archivos de correo electrónico (.eml, .msg) a documentos PDF. Preserva formato, imágenes en línea, enlaces clicables y adjuntos.",
    "keywords": [
      "email a pdf",
      "eml a pdf",
      "msg a pdf",
      "convertir email",
      "outlook a pdf"
    ],
    "description": "\n      <p>Email a PDF convierte tus archivos de correo electrónico (formatos .eml y .msg) en documentos PDF bien formateados. La herramienta preserva la información del encabezado del correo, el contenido del cuerpo, imágenes en línea con reemplazo CID, enlaces clicables e incrusta adjuntos directamente en el PDF.</p>\n      <p>Personaliza las opciones de salida incluyendo tamaño de página (A4, Letter, Legal), formato de fecha con soporte de zona horaria, y si incluir campos CC/BCC e información de adjuntos.</p>\n      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus correos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Archivo de Email",
        "description": "Sube tu archivo de correo .eml o .msg."
      },
      {
        "step": 2,
        "title": "Configurar Opciones",
        "description": "Establece el tamaño de página, formato de fecha, zona horaria y elige qué campos incluir."
      },
      {
        "step": 3,
        "title": "Convertir y Descargar",
        "description": "Convierte a PDF con adjuntos incrustados y descarga el resultado."
      }
    ],
    "useCases": [
      {
        "title": "Registros Legales",
        "description": "Archiva correos importantes como PDF con adjuntos incrustados para documentación legal.",
        "icon": "scale"
      },
      {
        "title": "Archivos Empresariales",
        "description": "Convierte correspondencia empresarial a PDF para conservación a largo plazo.",
        "icon": "briefcase"
      },
      {
        "title": "Preservación de Evidencia",
        "description": "Guarda evidencia de correos con imágenes en línea y adjuntos en formato PDF no editable.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formatos de email son compatibles?",
        "answer": "Tanto archivos .eml (RFC 822) como .msg (Microsoft Outlook) son totalmente compatibles."
      },
      {
        "question": "¿Se incluyen los adjuntos?",
        "answer": "¡Sí! Los adjuntos se incrustan directamente en el archivo PDF. Puedes extraerlos del PDF usando un lector PDF compatible."
      },
      {
        "question": "¿Se muestran las imágenes en línea?",
        "answer": "Sí, las imágenes en línea referenciadas vía CID (Content-ID) se convierten automáticamente a URIs de datos base64 y se muestran en el PDF."
      },
      {
        "question": "¿Los enlaces son clicables?",
        "answer": "Sí, todos los enlaces HTML (etiquetas <a>) y URLs en correos de texto plano se convierten en enlaces clicables en el PDF."
      },
      {
        "question": "¿Se preserva el formato del email?",
        "answer": "Sí, los correos HTML mantienen su formato lo más posible, incluyendo estilos, imágenes y enlaces."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU a PDF",
    "metaDescription": "Convierte archivos de documentos DJVU a PDF. Renderizado de alta calidad para documentos escaneados y libros.",
    "keywords": [
      "djvu a pdf",
      "convertir djvu",
      "convertidor djvu",
      "djvu pdf",
      "djv a pdf"
    ],
    "description": "\n      <p>DJVU a PDF convierte archivos de documentos DjVu en documentos PDF de alta calidad. DjVu es un formato de archivo informático diseñado principalmente para almacenar documentos escaneados, especialmente aquellos que contienen una combinación de texto, dibujos lineales y fotografías.</p>\n      <p>Esta herramienta renderiza cada página de tu archivo DJVU en el DPI elegido (puntos por pulgada) y los combina en un documento PDF buscable. Perfecto para convertir libros escaneados, manuales técnicos y documentos de archivo.</p>\n      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Archivo DJVU",
        "description": "Arrastra y suelta tu archivo .djvu o .djv, o haz clic para seleccionar desde tu dispositivo."
      },
      {
        "step": 2,
        "title": "Configurar Opciones",
        "description": "Elige el DPI de salida (72, 150 o 300) y la calidad de imagen para el PDF."
      },
      {
        "step": 3,
        "title": "Convertir y Descargar",
        "description": "Haz clic en Convertir a PDF y descarga tu documento convertido."
      }
    ],
    "useCases": [
      {
        "title": "Documentos de Archivo",
        "description": "Convierte archivos DJVU a formato PDF universal.",
        "icon": "archive"
      },
      {
        "title": "Compartir Libros Escaneados",
        "description": "Comparte libros escaneados en formato PDF para mayor compatibilidad.",
        "icon": "share-2"
      },
      {
        "title": "Imprimir Documentos",
        "description": "Convierte DJVU a PDF de alta calidad para impresión.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es el formato DJVU?",
        "answer": "DjVu es un formato de archivo diseñado para almacenar documentos escaneados, especialmente aquellos con texto, dibujos e imágenes. Ofrece mejor compresión que PDF para contenido escaneado."
      },
      {
        "question": "¿Qué DPI debo elegir?",
        "answer": "72 DPI es adecuado para visualización web, 150 DPI para documentos estándar y 300 DPI para impresión de alta calidad."
      },
      {
        "question": "¿El texto será buscable?",
        "answer": "El texto se renderizará como imágenes. Si necesitas texto buscable, considera usar nuestra herramienta OCR PDF después de la conversión."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 a PDF",
    "metaDescription": "Convierte libros electrónicos FictionBook (FB2) a PDF. Soporta múltiples archivos con renderizado de alta calidad.",
    "keywords": [
      "fb2 a pdf",
      "convertir fb2",
      "fictionbook a pdf",
      "convertidor fb2",
      "fb2.zip a pdf"
    ],
    "description": "\n      <p>FB2 a PDF convierte archivos de libros electrónicos FictionBook (FB2) en documentos PDF de alta calidad. FB2 es un formato de libro electrónico basado en XML muy popular ampliamente utilizado en Rusia y Europa del Este.</p>\n      <p>Esta herramienta soporta tanto archivos .fb2 como .fb2.zip, y puede procesar múltiples archivos a la vez. Preserva el formato de texto, imágenes y la estructura de capítulos de tus libros electrónicos.</p>\n      <p>Toda la conversión ocurre localmente en tu navegador usando tecnología de renderizado avanzada, asegurando que tus libros permanezcan privados y la conversión sea rápida.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Archivos FB2",
        "description": "Arrastra y suelta uno o más archivos .fb2 o .fb2.zip, o haz clic para seleccionar desde tu dispositivo."
      },
      {
        "step": 2,
        "title": "Seleccionar Calidad",
        "description": "Elige la calidad de salida: Baja (72 DPI), Media (150 DPI) o Alta (300 DPI)."
      },
      {
        "step": 3,
        "title": "Convertir y Descargar",
        "description": "Haz clic en Convertir a PDF y descarga tu(s) documento(s) convertido(s)."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir Libros Electrónicos",
        "description": "Convierte libros electrónicos FB2 a PDF para impresión física.",
        "icon": "printer"
      },
      {
        "title": "Conversión por Lotes",
        "description": "Convierte múltiples archivos FB2 a PDF a la vez.",
        "icon": "layers"
      },
      {
        "title": "Formato Universal",
        "description": "Comparte libros electrónicos en formato PDF que funciona en cualquier dispositivo.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo convertir múltiples archivos FB2 a la vez?",
        "answer": "¡Sí! Esta herramienta soporta conversión por lotes de hasta 20 archivos FB2 simultáneamente."
      },
      {
        "question": "¿Se soportan archivos .fb2.zip?",
        "answer": "Sí, la herramienta extrae y convierte automáticamente archivos FB2 desde archivos .fb2.zip."
      },
      {
        "question": "¿Se preserva el formato?",
        "answer": "¡Sí! La herramienta usa renderizado nativo FB2, preservando el formato de texto, imágenes y estructura de capítulos con alta fidelidad."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Enderezar PDF",
    "metaDescription": "Endereza automáticamente páginas PDF escaneadas o inclinadas. Corrige documentos sesgados con detección precisa de ángulos.",
    "keywords": [
      "enderezar pdf",
      "corregir pdf inclinado",
      "arreglar escaneo inclinado",
      "rotar pdf automático",
      "corregir ángulo pdf"
    ],
    "description": "\n      <p>Enderezar PDF detecta y corrige automáticamente páginas inclinadas o sesgadas en tus documentos PDF usando análisis avanzado de varianza de perfil de proyección. Esto es esencial para documentos escaneados que se alimentaron al escáner en un ángulo.</p>\n      <p>La herramienta analiza la alineación de texto y contenido en diferentes ángulos para encontrar la rotación óptima, luego aplica la corrección. Puedes ajustar el umbral de sensibilidad (1-30) y la configuración DPI (72-300) para obtener resultados óptimos.</p>\n      <p>Todo el procesamiento ocurre localmente en tu navegador usando tecnología WebAssembly, asegurando que tus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir tu PDF",
        "description": "Arrastra y suelta tu archivo PDF escaneado o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Configurar Ajustes",
        "description": "Ajusta la sensibilidad del umbral y DPI si es necesario para una mejor detección."
      },
      {
        "step": 3,
        "title": "Procesar y Descargar",
        "description": "Haz clic en Enderezar para enderezar las páginas y descargar el PDF corregido."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Escaneados",
        "description": "Corrige páginas que se escanearon en un ángulo desde alimentadores de documentos.",
        "icon": "scan"
      },
      {
        "title": "Escaneos Móviles",
        "description": "Corrige fotos inclinadas de documentos tomadas con smartphones.",
        "icon": "smartphone"
      },
      {
        "title": "Restauración de Archivos",
        "description": "Endereza archivos escaneados antiguos para mejor legibilidad.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tan precisa es la detección de ángulos?",
        "answer": "La herramienta usa análisis de varianza de perfil de proyección para detectar ángulos de sesgo de hasta ±10 grados con alta precisión. Omite automáticamente páginas con ángulos menores a 0.3 grados."
      },
      {
        "question": "¿Se verá afectada la calidad del texto?",
        "answer": "Para rotaciones en múltiplos de 90 grados, no ocurre pérdida de calidad. Para otros ángulos, la herramienta redondea al grado más cercano y mantiene buena calidad."
      },
      {
        "question": "¿Puedo enderezar solo páginas específicas?",
        "answer": "La herramienta analiza todas las páginas pero solo corrige aquellas con sesgo detectado por encima del umbral de sensibilidad. Las páginas con sesgo mínimo se dejan sin cambios."
      },
      {
        "question": "¿Qué es el umbral de sensibilidad?",
        "answer": "Los valores 1-10 corrigen solo inclinaciones obvias, 11-20 detectan sesgo moderado, y 21-30 capturan ángulos sutiles. El predeterminado es 10 para detección equilibrada."
      },
      {
        "question": "¿Cuánto tiempo toma el procesamiento?",
        "answer": "El tiempo de procesamiento depende del tamaño del archivo y DPI. 150 DPI (predeterminado) proporciona un buen equilibrio entre velocidad y precisión. DPI más alto es más preciso pero más lento."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF a PDF/A",
    "metaDescription": "Convierte PDF a formato de archivo PDF/A. Asegura la preservación de documentos a largo plazo con estándares ISO.",
    "keywords": [
      "pdf a pdfa",
      "convertidor pdfa",
      "archivar pdf",
      "archivo pdf",
      "preservación a largo plazo"
    ],
    "description": "\n      <p>PDF a PDF/A convierte tus documentos PDF al formato PDF/A, el estándar ISO para archivo de documentos a largo plazo. PDF/A asegura que los documentos serán visibles y reproducibles durante décadas.</p>\n      <p>Elige entre PDF/A-1b (conformidad básica), PDF/A-2b (recomendado, soporta transparencia) o PDF/A-3b (permite archivos incrustados). La herramienta incrusta fuentes y aplana la transparencia según sea necesario.</p>\n      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus documentos permanezcan privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir tu PDF",
        "description": "Sube el PDF que deseas convertir a PDF/A."
      },
      {
        "step": 2,
        "title": "Seleccionar Nivel PDF/A",
        "description": "Elige el nivel de conformidad PDF/A-1b, PDF/A-2b o PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Convertir y Descargar",
        "description": "Convierte a PDF/A y descarga el documento de archivo."
      }
    ],
    "useCases": [
      {
        "title": "Archivos Legales",
        "description": "Convierte documentos legales a PDF/A para almacenamiento a largo plazo admisible en tribunales.",
        "icon": "scale"
      },
      {
        "title": "Registros Gubernamentales",
        "description": "Cumple con los requisitos de archivo gubernamental usando PDF/A.",
        "icon": "building"
      },
      {
        "title": "Archivos Empresariales",
        "description": "Preserva documentos empresariales importantes para accesibilidad futura.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué nivel de PDF/A debo usar?",
        "answer": "PDF/A-2b es recomendado para la mayoría de usos. Usa 1b para máxima compatibilidad o 3b si necesitas archivos incrustados."
      },
      {
        "question": "¿Qué hace diferente a PDF/A?",
        "answer": "PDF/A incrusta fuentes, deshabilita el cifrado y asegura que todos los elementos sean autocontenidos para visualización futura."
      },
      {
        "question": "¿Puedo convertir de vuelta desde PDF/A?",
        "answer": "Los archivos PDF/A son PDFs estándar y se pueden abrir normalmente. Las características de archivo agregan restricciones, no limitaciones."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Firma Digital",
    "metaDescription": "Añade firmas digitales X.509 a documentos PDF. Firma PDFs con certificados PFX, P12 o PEM para validez legal.",
    "keywords": [
      "firma digital pdf",
      "certificado x509",
      "firma pfx",
      "firma p12",
      "firma pem",
      "firma electrónica"
    ],
    "description": "<p>La herramienta de Firma Digital te permite añadir firmas digitales X.509 criptográficas a documentos PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF",
        "description": "Sube el documento PDF que deseas firmar digitalmente."
      },
      {
        "step": 2,
        "title": "Cargar Certificado",
        "description": "Sube tu archivo de certificado X.509 (.pfx, .p12 o .pem) e ingresa la contraseña."
      },
      {
        "step": 3,
        "title": "Firmar y Descargar",
        "description": "Haz clic en Firmar PDF para aplicar la firma digital y descarga el documento firmado."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Legales",
        "description": "Firma contratos y documentos legales con firmas digitales legalmente vinculantes.",
        "icon": "scale"
      },
      {
        "title": "Aprobaciones Empresariales",
        "description": "Firma digitalmente facturas y documentos de aprobación para pistas de auditoría.",
        "icon": "briefcase"
      },
      {
        "title": "Integridad del Documento",
        "description": "Asegura que los documentos no han sido alterados después de firmar.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formatos de certificado son compatibles?",
        "answer": "Se admiten los formatos de certificado PFX (.pfx), PKCS#12 (.p12) y PEM (.pem)."
      },
      {
        "question": "¿La firma es legalmente válida?",
        "answer": "Sí, las firmas digitales X.509 con un certificado válido son legalmente reconocidas en la mayoría de jurisdicciones."
      },
      {
        "question": "¿Puedo añadir una firma visible?",
        "answer": "Sí, puedes añadir una firma visible con texto, imagen, posición y estilo personalizados."
      }
    ]
  },
  "validate-signature": {
    "title": "Validar Firma",
    "metaDescription": "Verifica firmas digitales en documentos PDF. Comprueba la validez del certificado, información del firmante e integridad del documento.",
    "keywords": [
      "validar firma pdf",
      "verificar firma digital",
      "comprobar certificado pdf",
      "verificación de firma"
    ],
    "description": "<p>La herramienta Validar Firma te permite verificar firmas digitales en documentos PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF Firmado",
        "description": "Sube un documento PDF que contenga firmas digitales."
      },
      {
        "step": 2,
        "title": "Ver Resultados",
        "description": "Ve todas las firmas encontradas en el documento con su estado de validez."
      },
      {
        "step": 3,
        "title": "Exportar Informe",
        "description": "Opcionalmente descarga un informe JSON de los resultados de validación."
      }
    ],
    "useCases": [
      {
        "title": "Verificación de Documentos",
        "description": "Verifica que los documentos firmados son auténticos y no han sido alterados.",
        "icon": "shield-check"
      },
      {
        "title": "Auditoría de Cumplimiento",
        "description": "Comprueba la validez de las firmas para propósitos de cumplimiento y auditoría.",
        "icon": "clipboard-check"
      },
      {
        "title": "Revisión de Certificados",
        "description": "Ve los detalles del certificado y fechas de expiración de documentos firmados.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "¿Qué significa \"válido\"?",
        "answer": "Una firma válida significa que el documento no ha sido modificado desde la firma y la cadena de certificados está intacta."
      },
      {
        "question": "¿Puedo validar múltiples PDFs?",
        "answer": "Sí, puedes subir múltiples PDFs y validar todas las firmas en lote."
      },
      {
        "question": "¿Por qué una firma podría ser inválida?",
        "answer": "Las firmas pueden ser inválidas si el documento fue modificado, el certificado expiró o el certificado no es de confianza."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Lógica de Formularios",
    "metaDescription": "Diseñe comportamientos dinámicos mediante un lienzo de nodos de glassmorphism e inyecte lógica interactiva AcroJS en formularios PDF.",
    "keywords": [
      "lógica de formulario PDF",
      "inyección AcroJS",
      "flujo de nodos",
      "PDF interactivo",
      "dependencias de campos"
    ],
    "description": "\n        <p>El Diseñador de Lógica de Formularios Interactivos es una herramienta pionera que llena un gran vacío en las capacidades de PDF: la creación de campos activos y adaptables en lugar de formularios planos y estáticos.</p>\n        <p>A través de nuestro lienzo visual con \"nodos de glassmorphism brillantes\" (basado en React Flow), los campos del formulario se representan como módulos conectados. Puede arrastrar enlaces para definir relaciones: por ejemplo, cuando se marca una casilla de verificación ➜ habilitar una entrada de texto ➜ autocalcular valores y actualizar un campo total.</p>\n        <p>Una vez diseñado, el motor AcroJS compila la lógica en Acrobat JavaScript oficial y la inyecta en los diccionarios '/AA' (Acciones Adicionales) del AcroForm. Los comportamientos interactivos se ejecutan de forma nativa en cualquier lector de PDF estándar.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF Interactivo",
        "description": "Proporcione un archivo PDF que ya contenga campos de formulario activos (AcroForm)."
      },
      {
        "step": 2,
        "title": "Diseñar la Lógica en el Lienzo",
        "description": "Conecte los campos como nodos. Vincule eventos de salida (cambio, pérdida de foco) con acciones de destino (mostrar, ocultar, calcular, deshabilitar)."
      },
      {
        "step": 3,
        "title": "Compilar e Inyectar",
        "description": "Inyecte la lógica JavaScript compilada en el diccionario PDF y guarde el documento inteligente final."
      }
    ],
    "useCases": [
      {
        "title": "Contratos Comerciales Inteligentes",
        "description": "Muestre u oculte campos de entrada complementarios dinámicamente según los términos seleccionados por el cliente.",
        "icon": "file-signature"
      },
      {
        "title": "Formularios de Gastos Automatizados",
        "description": "Sume múltiples líneas de gastos y calcule impuestos dinámicamente sin cálculos manuales.",
        "icon": "calculator"
      },
      {
        "title": "Cuestionarios Interactivos",
        "description": "Omita preguntas irrelevantes según las respuestas anteriores, proporcionando una experiencia de llenado móvil más limpia.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "¿Necesito un PDF con campos preexistentes?",
        "answer": "Sí. Esta herramienta está diseñada para vincular reglas lógicas a campos existentes. Si su PDF no tiene campos interactivos, use primero nuestra herramienta Creador de Formularios para agregar entradas y casillas de verificación."
      },
      {
        "question": "¿Funcionará esta lógica en cualquier lector de PDF?",
        "answer": "Funciona en todos los lectores de PDF que cumplan con los estándares de Adobe PDF y admitan Acrobat JavaScript (como Adobe Acrobat Reader, Foxit Reader y los principales navegadores web). Los lectores móviles minimalistas pueden admitir solo acciones básicas."
      },
      {
        "question": "¿Afecta esto a la impresión física?",
        "answer": "En absoluto. Los scripts inyectados solo se ejecutan en pantalla durante el llenado del formulario. Al imprimir, el estado actual de los campos se imprime de forma estática sin visualización de nodos."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Traductor y Conversor de Facturas",
    "metaDescription": "Extraiga totales de divisas de facturas multinacionales, realice cálculos e imprima registros de cambio interactivos con efecto de vidrio esmerilado.",
    "keywords": [
      "traducir factura",
      "conversor de divisas de factura",
      "calculadora de tipo de cambio pdf",
      "sellar moneda local",
      "herramienta de factura global"
    ],
    "description": "\n        <p>El Traductor de Facturas Globales brinda máxima claridad a los equipos financieros internacionales y compradores globales.</p>\n        <p>El manejo de facturas en múltiples divisas ($, €, ¥) a menudo implica tediosa aritmética manual. Esta herramienta permite la <strong>traducción de etiquetas en el lugar y la conversión de tipos de cambio en tiempo real</strong>.</p>\n        <p>Escanea el documento en busca de totales de precios, realiza cálculos basados en referencias de divisas e imprime físicamente un elegante registro de tipo de cambio de vidrio esmerilado semitransparente en el margen de la página. Se representa con un magnífico efecto visual numérico de máquina tragamonedas, aportando un control absoluto a la facturación global.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Factura en PDF",
        "description": "Importe cualquier factura facturada en moneda extranjera (por ejemplo, USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Seleccionar Moneda Local",
        "description": "Elija su moneda local (por ejemplo, CNY) y especifique un tipo de cambio personalizado o en tiempo real."
      },
      {
        "step": 3,
        "title": "Aplicar Sello de Registro",
        "description": "Haga clic en ejecutar para superponer el registro de tipo de cambio listo para la contabilidad."
      }
    ],
    "useCases": [
      {
        "title": "Reembolso de Viajes de Negocios",
        "description": "Convierta facturas de viajes a la moneda local y selle los detalles de conversión, facilitando los flujos de trabajo contables.",
        "icon": "plane"
      },
      {
        "title": "Auditoría de Compras Transfronterizas",
        "description": "Traduzca columnas de facturas e identifique el costo real de los bienes de comercio electrónico.",
        "icon": "credit-card"
      },
      {
        "title": "Contabilidad Comercial Internacional",
        "description": "Selle registros de conversión consistentes en facturas corporativas para optimizar las auditorías de fin de año.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo detecta los importes de las facturas?",
        "answer": "Busca flujos de caracteres en busca de símbolos de divisas y analiza encabezados semánticos como \"Total\" o \"Vencimiento\" para ubicar la suma final de la factura."
      },
      {
        "question": "¿Los tipos de cambio se obtienen en tiempo real?",
        "answer": "Sí. Por defecto, recupera tipos de cambio base de APIs financieras estándar. También puede especificar tipos de cambio personalizados para auditorías internas."
      },
      {
        "question": "¿El sello cubrirá detalles importantes de la factura?",
        "answer": "El motor escanea el margen de la página para encontrar el posicionamiento óptimo. El sello es semitransparente, alineándose de manera elegante con sus diseños."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF a CBZ",
    "metaDescription": "Convierta archivos PDF a formato de cómic CBZ. Conserva el orden y la calidad de las imágenes.",
    "keywords": [
      "pdf a cbz",
      "conversor comic",
      "cbz pdf"
    ],
    "description": "\n      <p>PDF to CBZ is custom-engineered for comic enthusiasts and digital ebook archivists. It renders every page of your PDF volumes into high-fidelity rasterized graphics and compiles them into a standard Comic Book ZIP (.cbz) bundle.</p>\n      <p>To eliminate frustrating manual scraping in systems like Calibre, Komga, Kavita, or CDisplayEx, the processor automatically generates and injects both <strong>ComicInfo.xml</strong> and <strong>metadata.opf</strong> files internally, while simultaneously writing a standardized <strong>ComicBookInfo JSON</strong> payload directly into the ZIP file comment metadata.</p>\n      <p>Includes complete configuration sliders for image compression quality, page dimension scale, right-to-left layout reading toggles (Manga mode), and black-and-white grayscale color filtering.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Comic PDF",
        "description": "Drag and drop your primary comic, artbook, or manga PDF file."
      },
      {
        "step": 2,
        "title": "Input Comic Metadata",
        "description": "Fill out Series, Volume, Title, Writer, and Publisher fields, and toggle layout or grayscale optimization."
      },
      {
        "step": 3,
        "title": "Compile and Download",
        "description": "Click Convert to compile and retrieve your metadata-rich .cbz file instantly ready for Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Retrograde Comic Packaging",
        "description": "Transform raw scanned PDF books into compact, standard-compliant CBZ comic files easily scrapable by comic library managers.",
        "icon": "book"
      },
      {
        "title": "Zero-Effort Calibre Integration",
        "description": "The built-in metadata.opf schema allows Calibre to fetch and classify creators and volume issues without manual lookup.",
        "icon": "database"
      },
      {
        "title": "E-Ink Screen Enhancement",
        "description": "Pre-filter graphic color channels into high-contrast grayscale on compile, boosting visual refresh and clarity on E-ink screens while saving storage.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "What is a .cbz file?",
        "answer": "A CBZ file is a specialized archive container format for comic book series. It is internally formatted as a ZIP package containing sequentially numbered page images alongside structural metadata XML files."
      },
      {
        "question": "How is metadata compatible?",
        "answer": "We compile and embed ComicInfo.xml, metadata.opf, and ZIP File Comments in one pass. This guarantees absolute compliance across multiple comic and e-book ecosystems."
      },
      {
        "question": "Why use Grayscale mode?",
        "answer": "If you read on a grayscale E-ink reader (like Kindle or Kobo), compiling directly in Grayscale reduces artifact ghosting, delivers superior contrast levels, and shrinks the final CBZ file size."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Superponer PDF",
    "metaDescription": "Superponga dos páginas PDF en una sola. Ideal para agregar sellos, fondos y marcas de agua.",
    "keywords": [
      "superponer pdf",
      "pdf overlay",
      "sellar pdf"
    ],
    "description": "\n      <p>Overlay PDF allows you to layer pages of one PDF document on top or underneath another PDF document. It is perfect for applying letterheads, adding background grids, stamping watermarks, or fusing layout drafts together.</p>\n      <p>Supports both Overlay mode (layer goes on top) and Underlay mode (layer goes underneath). Specify custom target page ranges or loop shorter overlay documents to cover the entire base file automatically.</p>\n      <p>All processing is executed entirely inside your web browser locally, guaranteeing total security and data privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Main PDF",
        "description": "Drag and drop your primary base PDF document."
      },
      {
        "step": 2,
        "title": "Upload Layer PDF",
        "description": "Provide the overlay/underlay document that acts as the layer."
      },
      {
        "step": 3,
        "title": "Configure Layering",
        "description": "Choose overlay or underlay mode, specify page ranges, and enable page looping."
      },
      {
        "step": 4,
        "title": "Compile and Download",
        "description": "Click Compile to process and download the layered result PDF."
      }
    ],
    "useCases": [
      {
        "title": "Corporate Letterheads",
        "description": "Layer invoice contents on top of standard company letterhead templates.",
        "icon": "file-text"
      },
      {
        "title": "Watermarks & Seals",
        "description": "Overlay security stamps, signature seals, or backgrounds across documents.",
        "icon": "shield"
      },
      {
        "title": "Drawing Blueprints",
        "description": "Combine draft architectures or layout grids underneath text blocks.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "What is the difference between Overlay and Underlay?",
        "answer": "Overlay places the secondary layer on top of your main content. Underlay places it at the very bottom, acting as a background template."
      },
      {
        "question": "Can I loop the overlay layer?",
        "answer": "Yes, if the layer PDF is shorter than the base document, enabling Loop will cycle it (e.g. page 1, 2, 1, 2) to cover all base pages."
      },
      {
        "question": "Is page range supported?",
        "answer": "Yes, you can target specific pages using range syntax such as \"1-5\", \"odd\", \"even\", or comma-separated lists."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Sello de Tiempo PDF",
    "metaDescription": "Inyecte un sello de tiempo seguro RFC 3161 en documentos PDF para validar la fecha de creación.",
    "keywords": [
      "sello de tiempo pdf",
      "rfc 3161",
      "fecha digital pdf"
    ],
    "description": "\n      <p>Timestamp PDF adds RFC 3161 compliant trusted timestamps to your PDF documents using external Time Stamping Authorities (TSA). It provides legally-binding mathematical proof that a document existed in a specific, unaltered state at a precise instant in time.</p>\n      <p>Select from global trusted TSA servers such as DigiCert, Sectigo, SSL.com, FreeTSA, or MeSign. No personal signing certificates are required to secure your documents against future tampering.</p>\n      <p>Supports fully secure local hashing before handshake, guaranteeing absolute document contents remain 100% confidential.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF Document",
        "description": "Select the target PDF file you want to timestamp."
      },
      {
        "step": 2,
        "title": "Select TSA Server",
        "description": "Choose a trusted global Time Stamping Authority from the list."
      },
      {
        "step": 3,
        "title": "Apply and Timestamp",
        "description": "Click Timestamp to fetch secure response from TSA and embed the token."
      }
    ],
    "useCases": [
      {
        "title": "Intellectual Property",
        "description": "Establish clear priority proof of patents, drafts, and ideas before public release.",
        "icon": "lightbulb"
      },
      {
        "title": "Financial Auditing",
        "description": "Provide certified tamper-proof logging of ledger archives and balance reports.",
        "icon": "activity"
      },
      {
        "title": "Legal Contracts",
        "description": "Lock legal agreements with a trusted time proof to avoid backdating arguments.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "What is a trusted timestamp (RFC 3161)?",
        "answer": "An RFC 3161 timestamp is a cryptographically signed token issued by a recognized third-party authority (TSA) that links a document hash to a specific, verified clock source."
      },
      {
        "question": "Do I need a digital certificate?",
        "answer": "No, the cryptographic signature is provided directly by the trusted TSA server, making the process effortless for document owners."
      },
      {
        "question": "Does the TSA see my document contents?",
        "answer": "Never. The tool only sends a secure SHA-256 hash of your document to the TSA server, keeping your actual document completely private."
      }
    ]
  },
  "add-page-labels": {
    "title": "Agregar Etiquetas de Página",
    "metaDescription": "Defina etiquetas de página personalizadas (p. ej., I, II para prefacios). Mejora la navegación.",
    "keywords": [
      "etiquetas de pagina",
      "numerar paginas pdf",
      "paginas logicas"
    ],
    "description": "\n      <p>Add Page Labels allows you to inject custom page labeling metadata (/PageLabels) into your PDF's root Catalog dictionary. This customizes the labels displayed in professional PDF reader navigation sidebars and top page number jump panels (e.g. using Roman numerals for front matter, decimal sequences for main body, or custom prefixes such as A-0, A-1 for technical subsections).</p>\n      <p>Supports combining multiple custom rules seamlessly. Crucially, we've built a highly optimized <strong>disjoint-range slicing algorithm</strong>: even if you declare complex alternating patterns (e.g., odd pages style A, even pages style B), the tool will elegantly dissect and compose boundaries to ensure proper standard-compliant display without leaking formats into unmapped pages.</p>\n      <p>All operations are processed entirely inside your local browser sandbox, securing absolute data privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF Document",
        "description": "Provide the target PDF document you wish to label."
      },
      {
        "step": 2,
        "title": "Configure Labeling Rules",
        "description": "Add one or more rules specifying page ranges (e.g., \"1-5\", \"odd\", or comma-separated lists), prefix, style, and starting sequence."
      },
      {
        "step": 3,
        "title": "Preview and Download",
        "description": "Review the live page label list preview below, then compile and download your updated PDF document."
      }
    ],
    "useCases": [
      {
        "title": "Academic Thesis Formatting",
        "description": "Set lowercase Roman numerals (i, ii, iii) for introductory front matter and transition to decimal for main chapters.",
        "icon": "book"
      },
      {
        "title": "Engineering Blueprint Prefixes",
        "description": "Attach subsystem abbreviations (e.g., \"A-1\", \"M-5\") as page label prefixes, letting teams search and locate pages in seconds.",
        "icon": "layout"
      },
      {
        "title": "Custom Alternating Layouts",
        "description": "Apply highly specific page range indexing to odd/even sequences or non-contiguous sections with maximum freedom.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "What are page labels vs page numbers?",
        "answer": "Ordinary page numbers are visual text blocks rendered directly on the paper canvas (visible when printed). Page labels, however, are structural metadata injected into the PDF catalog. They control what is displayed underneath thumbnails and in the page lookup box inside software like Adobe Acrobat or Apple Preview."
      },
      {
        "question": "What happens if I leave the Page Range empty?",
        "answer": "Leaving the page range empty causes the rule to apply globally to all pages of the document."
      },
      {
        "question": "How are overlapping rules handled?",
        "answer": "Rules are evaluated sequentially in the order they are listed. If a page range of a later rule overlaps with an earlier one, the later rule takes priority and overrides the label for that page."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "Adaptación de Flujo PDF con IA",
    "metaDescription": "Rediseñe documentos PDF para pantallas móviles. Exportación a Markdown y EPUB.",
    "keywords": [
      "flujo pdf",
      "pdf adaptativo",
      "pdf a markdown",
      "exportar epub"
    ],
    "description": "\n      <p>AI PDF Layout Reflower is your ultimate companion for reading PDF documents on mobile devices. Traditional PDFs use a fixed layout, which often requires endless zooming and horizontal scrolling on smartphones or tablets, resulting in a tedious reading experience.</p>\n      <p>This tool intelligently parses the text flow, line spacing, and physical coordinates of the PDF pages, reconstructing the semantic paragraphs and heading hierarchies. For multi-column or dual-column documents, it intelligently merges column flows into a single responsive flow, ensuring smooth reading.</p>\n      <p>Additionally, it supports rendering mathematical formulas into LaTeX/MathJax and offers multiple reading themes (Sepia, Dark, Eye-protecting Green). You can export the reflowed layout as Markdown or a standard EPUB ebook with a single click.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF File",
        "description": "Drag and drop your PDF file or click to browse and select it."
      },
      {
        "step": 2,
        "title": "Select Reading Theme",
        "description": "Choose your preferred font size and theme colors in the 3D mobile simulator on the right."
      },
      {
        "step": 3,
        "title": "Export Document",
        "description": "Once satisfied, use the physical pull-rope to export the document as Markdown or EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Mobile Literature Reading",
        "description": "Read academic papers and research reports on your phone seamlessly without constant zooming.",
        "icon": "smartphone"
      },
      {
        "title": "Ebook Conversion",
        "description": "Convert text-heavy PDFs into EPUB files and import them into Kindle or other ebook readers.",
        "icon": "book"
      },
      {
        "title": "Note Archive",
        "description": "Directly convert structured PDF content into clean Markdown files for your personal knowledge base.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Does it handle dual-column PDFs correctly?",
        "answer": "Yes, the layout reflower detects the horizontal coordinates of text blocks and structures left and right columns sequentially, preventing line interleaving."
      },
      {
        "question": "Will images and math formulas be lost?",
        "answer": "Mathematical formulas are converted to LaTeX/MathJax syntax for clean web rendering, and images are preserved in their corresponding semantic positions."
      },
      {
        "question": "Is the conversion done in the cloud?",
        "answer": "No, all layout analysis and format packaging are performed locally in your browser to guarantee the absolute privacy of your documents."
      }
    ]
  },
  "citation-linker": {
    "title": "Activador de Enlaces de Citas",
    "metaDescription": "Escanee y active las marcas de cita en PDFs, convirtiéndolas en enlaces DOI interactivos o saltos de página.",
    "keywords": [
      "enlaces de citas",
      "hipervinculo pdf",
      "coincidencia doi",
      "citas academicas"
    ],
    "description": "\n      <p>Citation Linker is designed specifically for academic researchers. In many PDF papers, citation markers (e.g., [1], [2]) are plain text, forcing readers to scroll back and forth to the reference list at the end of the document, interrupting their focus.</p>\n      <p>This tool reads PDF text locally, uses pattern recognition to match citation markers to their corresponding reference entries, and overlays clickable PDF link annotations using DOI lookups or page-jump coordinates.</p>\n      <p>It also generates an interactive citation relationship map to visually navigate the document's reference network.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Academic PDF",
        "description": "Upload a PDF paper or thesis containing a bibliography/reference section."
      },
      {
        "step": 2,
        "title": "Review Citations",
        "description": "Inspect the citation pairs in the interactive map and manually edit or add DOI links if necessary."
      },
      {
        "step": 3,
        "title": "Inject Links",
        "description": "Click the activate button to overlay hyperlinks onto the PDF and download the updated document."
      }
    ],
    "useCases": [
      {
        "title": "Deep Literature Reading",
        "description": "Click citation markers to immediately view reference details or navigate to external DOI pages.",
        "icon": "link"
      },
      {
        "title": "Pre-publication Preparation",
        "description": "Ensure your written academic papers have fully active hyperlink navigations before final submission.",
        "icon": "award"
      },
      {
        "title": "Reference Map Analysis",
        "description": "Understand literature hierarchies and connections via the interactive network topology map.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "What if a reference has no DOI?",
        "answer": "If a DOI cannot be found, the tool falls back to an internal \"GoTo Page\" action, allowing you to click the marker and jump directly to the reference page."
      },
      {
        "question": "Which citation formats are supported?",
        "answer": "It supports common numeric brackets (e.g., [1], [1-3]) and author-year citations (e.g., Author et al., 202X)."
      },
      {
        "question": "Will it modify the appearance of my PDF?",
        "answer": "No, it injects invisible Link annotations on top of the text, preserving the original layout, fonts, and styling of your document."
      }
    ]
  },
  "vector-extractor": {
    "title": "Extractor de Vectores PDF",
    "metaDescription": "Convierta PDF a SVG de alta fidelidad. Permite seleccionar y extraer gráficos vectoriales y logotipos sin pérdidas.",
    "keywords": [
      "extraer vectores pdf",
      "exportar svg",
      "extraer logotipos",
      "graficos vectoriales"
    ],
    "description": "\n      <p>PDF Vector Extractor unlocks vector paths and artwork embedded inside PDF files. Easily extract vector charts, diagrams, or logos from documents for design work or printing.</p>\n      <p>Under the hood, it utilizes high-fidelity SVG rendering to deconstruct PDF vector paths into clean, standard SVG element trees without loss of precision.</p>\n      <p>The interface highlights hover elements with a Z-axis 3D layer explosion effect, complete with a color picker panel for designers to adjust and extract vector nodes.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF Document",
        "description": "Upload a PDF containing vector assets, diagrams, charts, or logos."
      },
      {
        "step": 2,
        "title": "Select Elements",
        "description": "Hover over the vector canvas to highlight elements, then click to select a node."
      },
      {
        "step": 3,
        "title": "Customize and Export",
        "description": "Adjust path attributes in the panel, then download as SVG or copy SVG source code."
      }
    ],
    "useCases": [
      {
        "title": "Design Asset Extraction",
        "description": "Quickly extract company logos, icons, and illustrations from brand guidelines or brochures.",
        "icon": "bezier"
      },
      {
        "title": "Scientific Chart Export",
        "description": "Extract vector charts from research papers to use in high-resolution printing or presentations.",
        "icon": "presentation"
      },
      {
        "title": "Vector Asset Recoloring",
        "description": "Modify the stroke and fill colors of extracted assets before saving them for web projects.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "Why can't I select certain images?",
        "answer": "PDFs contain both raster images (like photos or scanned pages) and vector artwork (like shapes and curves). Only vector paths can be deconstructed into SVG paths."
      },
      {
        "question": "Does the output SVG contain styles?",
        "answer": "Yes, the exported SVG retains all original properties including fills, strokes, opacity, gradients, and coordinate transforms."
      },
      {
        "question": "Will large files lag?",
        "answer": "We use WebAssembly acceleration, but PDFs with extremely complex CAD drawings or thousands of vector paths may take a few seconds to render."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Desinfección Profunda de Metadatos",
    "metaDescription": "Elimine por completo metadatos, historial de edición, capas ocultas y datos huérfanos de sus documentos PDF.",
    "keywords": [
      "desinfectar pdf",
      "limpiar metadatos",
      "privacidad pdf",
      "seguridad pdf"
    ],
    "description": "\n      <p>Deep Metadata Sanitizer is your ultimate defense against metadata leaks and hidden tracking. Simply drawing black boxes over visible text in PDF files is not enough to protect commercial secrets.</p>\n      <p>This tool scans the PDF binary structure to completely erase author info, creator software, editing logs (XMP Metadata), proprietary PieceInfo caches, and OCG optional content groups (often used for invisible watermarks).</p>\n      <p>It also rewrites the cross-reference tables (xref) completely, discarding all incremental update blocks to ensure that deleted or modified historical data cannot be restored.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF",
        "description": "Select the PDF file containing sensitive data or modification history."
      },
      {
        "step": 2,
        "title": "Run Scanner",
        "description": "Trigger the 3D containment scanner to check the file for hidden metadata and layers."
      },
      {
        "step": 3,
        "title": "Deep Sanitize",
        "description": "Click sanitize to wipe out tracking elements and download the fully clean PDF."
      }
    ],
    "useCases": [
      {
        "title": "Contract Sharing",
        "description": "Remove drafting records, paths, and previous revisions before sharing business contracts with third parties.",
        "icon": "file-signature"
      },
      {
        "title": "Anonymized Publishing",
        "description": "Wipe invisible annotations and watermarks to publish documents anonymously and securely.",
        "icon": "eye-off"
      },
      {
        "title": "PDF Optimization",
        "description": "Remove orphaned objects and garbage data streams to make files load faster on the web.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "How is this different from standard metadata removal?",
        "answer": "Standard tools only clear basic fields like title or author. Deep Sanitizer reconstructs the entire PDF xref table, wiping PieceInfo, hidden watermarks, and historical incremental revisions."
      },
      {
        "question": "Will this affect document layout or text?",
        "answer": "No, it only strips hidden description streams and structure data. The visible layout, texts, and graphics remain unchanged."
      },
      {
        "question": "Does this remove PDF passwords?",
        "answer": "No, if a PDF is encrypted, you must unlock it first before performing a deep sanitization."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "Simulador 3D de Plegado e Imposición",
    "metaDescription": "Realice la imposición de páginas PDF en pliegos y visualice el plegado físico y la encuadernación en un simulador 3D.",
    "keywords": [
      "imposicion 3d",
      "simulador de plegado",
      "encuadernacion grapada",
      "diseño editorial"
    ],
    "description": "\n      <p>3D Booklet & Folding Simulator is an advanced tool designed for print designers and publishing professionals. Traditional book layout requires calculating complex page overlays and imposition pagination sequences. This tool visualizes and automates that entire process.</p>\n      <p>Under the hood, our custom imposition algorithm maps a sequential PDF page list into standard print sheet layouts (such as 4-page half-folds, 8-page saddle stitches, or accordion folds), merging pages onto the front and back of large physical sheets.</p>\n      <p>On the front-end, we utilize pure CSS 3D Matrix transforms and spring-mass physics curves to animate sheet folding horizontally and vertically, delivering a physical-like binding preview with a high WOW factor.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF File",
        "description": "Drag and drop the PDF document you wish to layout for printing."
      },
      {
        "step": 2,
        "title": "Select Folding Layout",
        "description": "Choose your preferred imposition scheme (e.g., 4-page fold, 8-page saddle stitch, 4-page accordion)."
      },
      {
        "step": 3,
        "title": "Interactive 3D Preview",
        "description": "Drag the slider to watch the sheet fold in 3D and inspect the final page numbering layout."
      },
      {
        "step": 4,
        "title": "Generate Imposed PDF",
        "description": "Click generate to download the rearranged and merged physical sheet PDF, ready for double-sided printing."
      }
    ],
    "useCases": [
      {
        "title": "Brochure Prototyping",
        "description": "Pre-visualize the folding sequence of tri-folds and pamphlets to prevent upsidedown pages after printing.",
        "icon": "book-open"
      },
      {
        "title": "Book Saddle-Stitching",
        "description": "Generate imposed print sheets for multi-page magazines or booklets automatically.",
        "icon": "layers"
      },
      {
        "title": "Print Shop Visual Aids",
        "description": "Help clients visualize how pages are physically distributed and folded on print sheets.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "What is \"Imposition\"?",
        "answer": "Imposition is a fundamental step in prepress printing. Since commercial presses print on large sheets, pages are arranged out of order so that once printed, folded, and bound, the pages appear in the correct sequential order. This tool automatically calculates that layout."
      },
      {
        "question": "Does the 3D preview alter my PDF content?",
        "answer": "No, the original PDF content is merely rendered as texture mappings onto the 3D sheet. The generated PDF only adjusts page order and placement; text and graphic qualities are kept intact."
      },
      {
        "question": "What if my PDF page count is not a multiple of 4 or 8?",
        "answer": "The optimizer automatically appends blank pages at the end to satisfy the mathematical page-count requirements of the selected folding layout."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF a Presentación",
    "metaDescription": "Analice el esquema de un PDF y extraiga gráficos vectoriales para reconstruirlos en una presentación PPTX editable.",
    "keywords": [
      "pdf a ppt",
      "crear diapositivas",
      "convertidor pptx",
      "extraer diagramas"
    ],
    "description": "\n      <p>AI PDF-to-Slide Reconstructor breathes new life into static PDF documents, transforming them into modern, highly-customizable PowerPoint slides (PPTX).</p>\n      <p>The tool uses an advanced layout outline extractor that automatically parses document heading levels, paragraph lines, and font weights to establish a logical slide framework. It also isolates vector charts and high-resolution tables, stripping background artifacts to embed them cleanly as independent editable assets.</p>\n      <p>All PPTX outputs are built using standard Office Open XML elements, meaning all text remains fully editable and vectors do not lose resolution. The front-end showcases a fluid \"starfield\" card transition animation that visualizes the reconstruction in an engaging manner.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Academic/Business PDF",
        "description": "Upload a PDF document that contains structured sections and diagrams."
      },
      {
        "step": 2,
        "title": "Analyze Slide Outlines",
        "description": "Inspect the extracted slide structure, adjust titles, or delete unneeded card blocks."
      },
      {
        "step": 3,
        "title": "Reconstruct to PPTX",
        "description": "Start the compilation engine to receive a standard, editable presentation file."
      }
    ],
    "useCases": [
      {
        "title": "Research Paper Presentation",
        "description": "Convert academic journal PDFs, text structures, and vector diagrams into slide decks ready for talks.",
        "icon": "graduation-cap"
      },
      {
        "title": "Business Report Summary",
        "description": "Distill massive annual corporate reports into clean, bulleted presentation drafts instantly.",
        "icon": "presentation"
      },
      {
        "title": "Multi-Device Demos",
        "description": "Avoid copying screenshots manually. Get a clean, fully-editable layout framework in seconds.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Are the slides editable in Microsoft Office?",
        "answer": "Yes. The files are generated natively in memory according to the official Office Open XML (OOXML) specification. Texts, tables, and placeholders are fully interactive in PowerPoint, Keynote, and WPS."
      },
      {
        "question": "How are charts extracted?",
        "answer": "The engine scans vector paths and raster layers in the PDF, detects bounded areas representing graphs, and clips them out as standalone SVG nodes or high-DPI images."
      },
      {
        "question": "Does this work on scanned documents?",
        "answer": "For scanned PDFs lacking actual text layers, we recommend running our OCR tool first before passing the file to the Slide Reconstructor."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Optimizador para Lectores e-Ink",
    "metaDescription": "Optimice PDFs para pantallas de tinta electrónica: eliminación de ruido, binarización Otsu y engrosamiento de trazos.",
    "keywords": [
      "optimizar eink",
      "binarizacion otsu",
      "engrosar letra",
      "lectores de tinta"
    ],
    "description": "\n      <p>e-Ink Reader Optimizer is a must-have tool custom-made for e-Reader enthusiasts using Kindle, Onyx Boox, Kobo, or other e-paper devices.</p>\n      <p>Many scanned PDF e-books suffer from faint lettering, muddy gray backgrounds, noise, or scan shadows when viewed on e-Ink screens. This tool analyzes gray-value histograms and applies Otsu's Binarization Thresholding to separate text from background, converting gray backdrops to clean white.</p>\n      <p>Additionally, it integrates morphological dilation to bold and thicken thin, faded characters, providing crisp, high-contrast typography. The inertia-damped contrast slider allows you to fine-tune the paper-like contrast in real-time.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Scanned PDF",
        "description": "Upload e-books or scanned documents with faint text or gray backgrounds."
      },
      {
        "step": 2,
        "title": "Adjust Contrast Slider",
        "description": "Drag the damped slider to balance background removal and character bolding in real-time."
      },
      {
        "step": 3,
        "title": "Optimize and Download",
        "description": "Process the entire PDF to generate a high-contrast, eye-friendly document tailored for e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Ancient Manuscript Restoration",
        "description": "Thicken faded text in scans of historical books or handwritten manuscripts to make them readable.",
        "icon": "scroll"
      },
      {
        "title": "Exam Sheet Clean-up",
        "description": "Bleach background shadows from photocopied or photographed exams, returning clean black text on white paper.",
        "icon": "file-text"
      },
      {
        "title": "E-paper Device Tailoring",
        "description": "Convert colored PDFs to optimized grayscale, preventing messy, dithering artifacts on monochrome screens.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "How does the \"character bolding\" work?",
        "answer": "In image processing, this is called dilation. It uses a structuring matrix to expand character margins by a pixel, physically thickening faint strokes to make them legible."
      },
      {
        "question": "Will this process bloat the file size?",
        "answer": "Quite the opposite. By binarizing complex color/grayscale images to simple black-and-white layouts, standard compression (like CCITT Group 4) can shrink the PDF file size significantly."
      },
      {
        "question": "Does this support native text PDFs?",
        "answer": "Yes. Native vector PDFs are rasterized at high resolutions in the background, optimized, and compiled back, ensuring unified high-contrast reading."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Cifrar Certificado",
    "metaDescription": "Cifre PDFs con certificados de clave pública y aplique una firma digital PKCS#7 junto a un sello de lacre físico en 3D.",
    "keywords": [
      "cifrado de certificados",
      "sello de lacre 3d",
      "firma digital",
      "pkcs7"
    ],
    "description": "\n      <p>3D Wax-Seal & Certificate Cryptor provides military-grade security and premium physical-grade aesthetics for sensitive corporate files, degrees, or agreements.</p>\n      <p>Technically, it offers asymmetric public-key encryption: import a recipient's public key certificate (.cer/.crt) to lock the PDF stream; only the holder of the matching private key (.pfx) can decrypt it. It also generates standard PKCS#7 digital signatures to ensure document tamper-proof integrity.</p>\n      <p>Visually, we feature a 3D physical gold or red wax-seal stamp. When you sign, a beautifully rendered stamp descends with a satisfying mechanical sound, leaving a 3D wax seal with realistic normal-mapped height variations and wax run-offs on the page, surrounded by glowing cryptographic tracks.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF and Cert",
        "description": "Add your PDF and import your signing certificate (.pfx) or the recipient's public certificate (.cer)."
      },
      {
        "step": 2,
        "title": "Place the 3D Stamp",
        "description": "Drag and locate the seal on the document preview, and pick a wax style (e.g., gold, crimson)."
      },
      {
        "step": 3,
        "title": "Press and Sign",
        "description": "Click execute to watch the 3D wax-seal imprint ceremony, generating a physical-grade digital signature."
      },
      {
        "step": 4,
        "title": "Download Secured PDF",
        "description": "Save the output document, now cryptographically locked and stamped."
      }
    ],
    "useCases": [
      {
        "title": "Diplomas and Certificates",
        "description": "Affix highly-valued 3D wax seal badges to digital diplomas and awards, backed by genuine digital signatures.",
        "icon": "award"
      },
      {
        "title": "Confidential Agreements",
        "description": "Lock sensitive contracts using the client's public certificate so that only their secure physical keycard can unlock it.",
        "icon": "shield-alert"
      },
      {
        "title": "Official Press Releases",
        "description": "Digitally sign public announcements to prevent malicious text edits or spoofing.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "Is the wax seal just an image or a real signature?",
        "answer": "Both. The system renders an incredibly realistic 3D wax imprint with normal-mapped depth (visual layer) and encodes an authentic, tamper-proof PKCS#7 cryptographic signature inside the PDF (data layer)."
      },
      {
        "question": "What is \"Certificate-based Encryption\"?",
        "answer": "It is a passwordless encryption technique. You encrypt the file using the recipient's public key. The reader automatically searches for their local private certificate to decrypt the file seamlessly, ensuring robust security."
      },
      {
        "question": "Can I customize the stamp design?",
        "answer": "Yes. We provide multiple designs like the PDFCraft watermark or a Royal crest, and you can adjust the wax melting radius and normal-map indentation depth in the panel."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Copiar Identificación Doble Cara",
    "metaDescription": "Combine el anverso y reverso de identificaciones o pasaportes en una página A4 con marcas de agua de seguridad.",
    "keywords": [
      "copia de identificacion",
      "anverso reverso a4",
      "copia de pasaporte",
      "marca de agua"
    ],
    "description": "\n      <p>The Passport & ID Double-sided Composer is an incredibly useful productivity utility for standard business and personal operations.</p>\n      <p>When applying for bank accounts, onboarding, or signing agreements, we frequently need copies of both sides of ID cards. This tool accepts front/back images or PDF pages and precisely arranges them onto a single A4 page complying with national standard layout resolutions.</p>\n      <p>Furthermore, you can customize overlapping translucent anti-counterfeit watermarks (e.g. \"FOR ONBOARDING ONLY\") to prevent unauthorized document reuse. It even features a 3D glow laser sweep copier scanner door visual effect to deliver premium feedback.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload ID files",
        "description": "Upload front and back photos/scans of your ID or passport (up to 2 files)."
      },
      {
        "step": 2,
        "title": "Configure secure watermark",
        "description": "Input custom text overlay to restrict unauthorized document replication."
      },
      {
        "step": 3,
        "title": "Compose & download",
        "description": "Click execute to generate a single-page print-ready A4 PDF."
      }
    ],
    "useCases": [
      {
        "title": "HR onboarding submission",
        "description": "Quickly align employee ID copies and apply protective watermarks.",
        "icon": "user"
      },
      {
        "title": "Government & banking service",
        "description": "Prepare standardized ID prints that meet physical archive requirements.",
        "icon": "landmark"
      },
      {
        "title": "Travel backups",
        "description": "Arrange passport pages and visa details onto a unified A4 paper.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "Will watermarks block identity text details?",
        "answer": "No. The watermark is rendered at a carefully tuned 15% opacity to block forgery without sacrificing the legibility of text or photo fields."
      },
      {
        "question": "Is the composite card size accurate?",
        "answer": "Yes. It renders the ID card at the standard physical dimension of 85.6mm × 54mm scaled perfectly on the A4 page."
      },
      {
        "question": "Does it support driver licenses?",
        "answer": "Yes, it works beautifully for any card-based identity scans."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Exportar Anotaciones",
    "metaDescription": "Extraiga resaltados, notas y comentarios de PDFs en un documento Markdown organizado para su estudio.",
    "keywords": [
      "exportar anotaciones pdf",
      "extraer resaltados",
      "notas de estudio",
      "markdown"
    ],
    "description": "\n      <p>The Smart Annotation Exporter is a powerful workspace that unlocks full value from your PDF annotations.</p>\n      <p>While conducting literature reviews or reading extensive ebooks, we make heavy use of highlights and sticky notes. This tool deserializes the low-level PDF <code>/Annots</code> dictionary and extracts all highlights, notes, underlines, and hand-drawn ink markers.</p>\n      <p>It automatically aligns the comments with their respective outline headers, generating a structured Markdown or JSON notebook with page reference anchors. Watch your highlights float beautifully into the frosted-glass notebook panel.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import annotated PDF",
        "description": "Upload any PDF essay or book containing your underlines, highlights, or comments."
      },
      {
        "step": 2,
        "title": "Configure filters & format",
        "description": "Select the annotation types you want to extract and choose Markdown or JSON."
      },
      {
        "step": 3,
        "title": "Extract notebook",
        "description": "Click execute to parse the comments stream and assemble your outline summary."
      }
    ],
    "useCases": [
      {
        "title": "Scientific literature synthesis",
        "description": "Extract reading notes across multiple papers into Markdown templates to compose lit reviews instantly.",
        "icon": "graduation-cap"
      },
      {
        "title": "Study journal compiling",
        "description": "Collect beautiful insights and personal remarks from textbooks into Obsidian databases.",
        "icon": "book"
      },
      {
        "title": "Document collaborative audit",
        "description": "Gather review corrections from different team members and establish actionable task lists.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Can it extract tablet hand-drawn ink strokes?",
        "answer": "Yes. As long as the hand-drawn marks are stored as standard PDF Ink annotations, the tool can perfectly isolate and structure their page positions."
      },
      {
        "question": "Why are some highlighted extracts empty?",
        "answer": "If the PDF is a non-searchable image scan lacking underlying text, highlights only store coordinates. Run OCR on the PDF first, then extract annotations."
      },
      {
        "question": "Do the Markdown links jump back to the PDF?",
        "answer": "The exported file lists precise page numbers and original outline headings to make cross-referencing seamless."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Quitar Marcas de Agua",
    "metaDescription": "Analice el flujo de contenido de sus PDFs y elimine marcas de agua de texto e imagen (XObjects) sin alterar el formato.",
    "keywords": [
      "eliminar marca de agua pdf",
      "quitar logos pdf",
      "limpieza de pdf"
    ],
    "description": "\n      <p>The Batch Watermark Remover is a state-of-the-art PDF sanitizer that physically cleanses documents.</p>\n      <p>Generic watermark removers usually just overlay white blocks or distort document spacing. This tool utilizes a robust <strong>Content Stream Purge</strong> technique.</p>\n      <p>It parses the low-level rendering operators of each page, identifies specific watermark string commands (e.g. \"Confidential\", \"DRAFT\") or background image objects, and physically deletes or overwrites them. The watermarks disappear completely, preserving the original formatting and vector quality.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload watermarked file",
        "description": "Provide the PDF document showing commercial logos or security labels."
      },
      {
        "step": 2,
        "title": "Define target watermark",
        "description": "Input the exact string to delete, or toggle translucent XObject image cleanup."
      },
      {
        "step": 3,
        "title": "Run physical purge",
        "description": "Click execute to scrub the content operators with high fidelity."
      }
    ],
    "useCases": [
      {
        "title": "Archiving corporate assets",
        "description": "Remove expired \"Confidential\" or \"Draft\" watermarks for general public distribution.",
        "icon": "archive"
      },
      {
        "title": "Clearing background clutter",
        "description": "Scrub heavy background pictures that distract readers from scanning text.",
        "icon": "eye"
      },
      {
        "title": "Document reusing",
        "description": "Cleanse old page footer branding elements to apply new corporate templates easily.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Can the purged watermarks be recovered?",
        "answer": "No. Unlike visual masks, we rewrite the page binary stream to erase the operators, leaving no traces."
      },
      {
        "question": "Does it support complex gradients?",
        "answer": "If the watermark is stored as a separate text node or image XObject, the tool can isolate and physically wipe it."
      },
      {
        "question": "Will it modify normal page text?",
        "answer": "No. The scrubbing engine only target operators matching the specified watermark signature; regular text remains untouched."
      }
    ]
  },
  "smart-data-redactor": {
    "title": "Redactar Datos Sensibles",
    "metaDescription": "Detecte y censure de forma física e irreversible correos electrónicos, números de teléfono e identificaciones en PDFs.",
    "keywords": [
      "censurar pdf",
      "ocultar datos sensibles",
      "redaccion de documentos"
    ],
    "description": "\n      <p>The Smart Privacy Data Redactor is an automated tool designed to ensure robust document privacy compliance.</p>\n      <p>Simply overlaying black boxes in normal editors is unsafe because the underlying text can still be copied. This tool implements true <strong>NLP pattern matching and physical content stream sanitization</strong>.</p>\n      <p>It scans the document for emails, phone numbers, SSNs, or custom keywords, places a premium matte black mask over the coordinates, and permanently overwrites the character stream with <code>[REDACTED]</code>, blocking copy-paste leaks.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload target PDF",
        "description": "Provide the contract or statement showing sensitive customer details."
      },
      {
        "step": 2,
        "title": "Select redaction rules",
        "description": "Check target patterns (email, phone, ID) or define custom sensitive words."
      },
      {
        "step": 3,
        "title": "Auto redact & download",
        "description": "Click execute to overlay secure masks and wipe the text streams."
      }
    ],
    "useCases": [
      {
        "title": "Commercial agreements sharing",
        "description": "Safely publish business documents by hiding personal salaries, phone numbers, or emails.",
        "icon": "file-signature"
      },
      {
        "title": "Resume database anonymization",
        "description": "Strip applicant names, contact info, or addresses to comply with strict privacy regulations.",
        "icon": "user-check"
      },
      {
        "title": "Financial statement distribution",
        "description": "Conceal specific ledger numbers or shareholder names before publishing reports.",
        "icon": "pie-chart"
      }
    ],
    "faq": [
      {
        "question": "Are redacted details truly un-copyable?",
        "answer": "Yes. We rewrite the page content stream to erase the characters. Copy-pasting from the redacted box will only extract the string \"[REDACTED]\"."
      },
      {
        "question": "Does it work for scanned image PDFs?",
        "answer": "This tool targets vector text streams. For scanned image files, use our OCR tool first or crop manually."
      },
      {
        "question": "Is the red HUD target scope saved in the file?",
        "answer": "No, that is a gorgeous frontend interactive loading effect. The output PDF displays standard clean black rectangles."
      }
    ]
  },
  "bookmarks-auto-generator": {
    "title": "Generar Marcadores",
    "metaDescription": "Analice los tamaños de fuente y jerarquías para inyectar automáticamente un esquema de marcadores anidados en el PDF.",
    "keywords": [
      "marcadores pdf",
      "esquema de navegacion",
      "crear marcadores automaticos"
    ],
    "description": "\n      <p>The Auto Bookmarks Generator brings absolute clarity to lengthy, unstructured PDF documents.</p>\n      <p>Scanning through books or booklets with no outline navigation is painful. This tool parses typographic hierarchies (such as font sizes and weights) along with regex rules (like \"Chapter 1\", \"Section 1.1\") to automatically deduce headings.</p>\n      <p>It then compiles and injects these headings directly into the PDF <code>/Outline</code> dictionary. Any standard viewer will then show a beautifully structured, multi-level navigation sidebar, backed by an interactive 3D outline tree preview.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide unstructured PDF",
        "description": "Upload large brochures, academic papers, or ebooks lacking a catalog sidebar."
      },
      {
        "step": 2,
        "title": "Tune heading rules",
        "description": "Configure strategies specifying minimum font size thresholds and match rules."
      },
      {
        "step": 3,
        "title": "Build and inject",
        "description": "Click execute to render the outline nodes and physically write the outline bookmarks."
      }
    ],
    "useCases": [
      {
        "title": "Technical manuals organizing",
        "description": "Auto compile multi-level chapters for standard guidelines, saving hours of manual indexing.",
        "icon": "tool"
      },
      {
        "title": "Thesis preparation",
        "description": "Inject clean nested bookmarks matching exact academic submission standards.",
        "icon": "graduation-cap"
      },
      {
        "title": "Ebook navigation optimization",
        "description": "Structure scanned text publications into readable chapters for tablets or mobile readers.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Can it match custom chapter formats?",
        "answer": "Yes. You can add custom regex patterns in the sidebar panel (e.g., `^Part\\s+\\w+`) to target unique layouts."
      },
      {
        "question": "Will this affect the visual page presentation?",
        "answer": "No. The tool only adds an internal structural bookmark catalog. The text and visual assets of the pages remain untouched."
      },
      {
        "question": "How many bookmark levels are supported?",
        "answer": "The tool supports deeply nested bookmark structures, allowing chapter, section, and subsection layouts."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Insertar Códigos en Lote",
    "metaDescription": "Inyecte códigos de barras (Code128) y códigos QR en coordenadas específicas de múltiples páginas PDF en lote.",
    "keywords": [
      "insertar qr pdf",
      "códigos de barras en lote",
      "etiquetado pdf"
    ],
    "description": "\n      <p>The Batch Barcode precision injector bridges digital asset tracking with physical document indexing.</p>\n      <p>In warehousing, contract review, or logistics, we often need to Stamp unique barcodes onto invoices or device cards. This tool makes it incredibly easy.</p>\n      <p>Generate highly readable QR codes or Code128 barcodes, and use our gorgeous aligning workspace with green laser guides to position them. A clean scan audio beep triggers on placement, providing highly premium feedback.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload document",
        "description": "Drag and drop single or multi-page PDFs representing agreements or shipping lists."
      },
      {
        "step": 2,
        "title": "Position barcode coordinates",
        "description": "Set code type, value, and drag the placement box to specify coordinates."
      },
      {
        "step": 3,
        "title": "Stamps and download",
        "description": "Click execute to render the code layer onto the targeted page indices."
      }
    ],
    "useCases": [
      {
        "title": "Contract validation tracing",
        "description": "Apply a unique QR code showing anti-counterfeit details onto the header of contracts.",
        "icon": "file-check"
      },
      {
        "title": "Shipping lists coding",
        "description": "Place Code128 barcodes at target spots for quick warehouse scanning gun validation.",
        "icon": "truck"
      },
      {
        "title": "Asset registration carding",
        "description": "Add inventory QR codes displaying maintenance specs onto physical equipment sheets.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Are the generated barcodes highly scannable?",
        "answer": "Yes. We embed lossless high-resolution PNG representations that remain sharp even when printed at very small dimensions."
      },
      {
        "question": "Can I inject unique values on each page?",
        "answer": "Currently, the batch run applies the same configured code onto all selected pages. Multi-valued excel import is planned in a future update."
      },
      {
        "question": "What does the `pt` coordinate represent?",
        "answer": "`pt` (Point) is the standard PDF physical unit (72 pt = 1 inch). A4 pages are represented as 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Extraer Firmas y Sellos",
    "metaDescription": "Extraiga firmas y sellos de documentos escaneados, eliminando el fondo para generar PNGs transparentes de alta calidad.",
    "keywords": [
      "extraer firma pdf",
      "digitalizar sellos",
      "fondo transparente png"
    ],
    "description": "\n      <p>The Signature & Stamp Chroma Ink Optimizer functions as a professional high-fidelity ink purifier.</p>\n      <p>Signatures or corporate seals captured on phones often suffer from yellow paper tint, uneven shadows, and page wrinkles. Pasting them directly onto contract PDFs looks amateur.</p>\n      <p>This tool separates the Alpha channel based on luminance and color space. It completely bleaches paper backgrounds while sharpening stamp red (Chroma Ink) and handwriting black. The result is a premium, transparent PNG stamp carrying genuine ink textures.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload seal photo",
        "description": "Provide a phone-captured photo of your signature or stamp seal."
      },
      {
        "step": 2,
        "title": "Adjust cleaning sliders",
        "description": "Move contrast and luminance sliders to isolate the background noise in real-time."
      },
      {
        "step": 3,
        "title": "Download clean signature",
        "description": "Export as transparent PNG ready to be stamped onto formal document agreements."
      }
    ],
    "useCases": [
      {
        "title": "Professional e-signature prep",
        "description": "Convert gray signature photos into beautiful, transparent layers to sign agreements.",
        "icon": "file-signature"
      },
      {
        "title": "Corporate seal sanitizing",
        "description": "Clean physical stamp scans by discarding paper fiber noise, preparing crisp transparent stamp seals.",
        "icon": "stamp"
      },
      {
        "title": "Drawn line art extraction",
        "description": "Isolate black strokes from drawing sketchbooks for easy Photoshop coloring workflows.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "How does self-adaptive Alpha extraction differ from normal keying?",
        "answer": "Standard chroma-keying often makes signature stroke details look blocky and pixelated. Our algorithm isolates only white/yellow background noise and smooths the ink borders."
      },
      {
        "question": "Which image formats are supported?",
        "answer": "We support JPG, JPEG, and PNG. For best results, capture your signature photo under bright, even lighting."
      },
      {
        "question": "Will the handwriting detail be modified?",
        "answer": "No. The pixel filtering acts on original coordinates, sharpening contrast while maintaining genuine stroke textures."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Reparar Enlaces Rotos",
    "metaDescription": "Escanee y diagnostique enlaces externos (/URI) en PDFs, permitiendo corregirlos o redirigirlos fácilmente.",
    "keywords": [
      "enlaces rotos pdf",
      "corregir url pdf",
      "depurar hipervinculos"
    ],
    "description": "\n      <p>The Dead Link Debugger is a deep structural editor that guarantees link interaction quality in published files.</p>\n      <p>Broken urls (404/500) inside manuals, whitepapers, or guides reduce branding authority. This tool lets you manage the hyperlinks database seamlessly.</p>\n      <p>It parses the low-level <code>/Link</code> dictionaries on each page, Probes them, and displays link status in an interactive grid (red for dead links, orange for redirects). Simply type the updated redirect URL, and the tool writes the new target directly back into the PDF binary stream.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide target document",
        "description": "Upload the PDF manual or catalog containing links to debug."
      },
      {
        "step": 2,
        "title": "Scan and update",
        "description": "Let the debugger extract all URL entities. Input new redirect URLs for broken items."
      },
      {
        "step": 3,
        "title": "Save redirect updates",
        "description": "Click execute to rewrite /URI actions and download the corrected PDF."
      }
    ],
    "useCases": [
      {
        "title": "Flyer broken links hotfix",
        "description": "Instantly correct wrong urls on published flyers without reopening original design editors.",
        "icon": "refresh-cw"
      },
      {
        "title": "Bibliography links verification",
        "description": "Verify academic bibliography links in reports, updating references to maintain authority.",
        "icon": "book"
      },
      {
        "title": "Corporate rebranding updates",
        "description": "Batch update old URLs across corporate PDFs when company domain names are changed.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Why isn't link reachability fully checked online?",
        "answer": "Web browsers enforce strict CORS policies that block direct multi-origin link checking. Our tool lists the links clearly and lets you hot-fix them manually."
      },
      {
        "question": "Will this modify the visual text representation on the page?",
        "answer": "No. It only alters the underlying `/URI` navigation action. The visual link text remains unchanged."
      },
      {
        "question": "Does it support modifying internal page bookmarks?",
        "answer": "This tool handles external `/URI` hyperlinks. For internal layout navigation, use our interactive TOC tool."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Generar Índice Interactivo",
    "metaDescription": "Inserte una página de índice interactivo con enlaces a cada sección y agregue botones de retorno (↩) en las páginas.",
    "keywords": [
      "indice interactivo pdf",
      "tabla de contenido pdf",
      "enlaces de navegacion"
    ],
    "description": "\n      <p>The Interactive TOC Builder introduces a revolutionary navigation experience to extensive PDFs.</p>\n      <p>Flipping through hundreds of pages in unstructured documents to locate target chapters is frustrating. This tool introduces <strong>Bidirectional TOC compilation</strong>.</p>\n      <p>It scans headers and generates an origami-inspired, premium Table of Contents page inserted right after the cover. In addition to creating clickable /GoTo links for each index row, it injects a tiny, elegant \"TOC ↩\" hovering anchor at the corner of each target chapter page. Readers can jump back and forth instantly, enjoying web-like navigation.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide PDF document",
        "description": "Upload a report, eBook, or proposal that needs an interactive catalog."
      },
      {
        "step": 2,
        "title": "Set TOC title & index",
        "description": "Customize the main title and choose the page index to insert the TOC page."
      },
      {
        "step": 3,
        "title": "Weave anchors & save",
        "description": "Click execute to compile the pages and write the dual-link navigation."
      }
    ],
    "useCases": [
      {
        "title": "Annual corporate report polishing",
        "description": "Inject a beautiful index page after the cover sheet to allow shareholders to jump between financial charts.",
        "icon": "file-bar"
      },
      {
        "title": "Thesis indexing",
        "description": "Fast compile standard indexes aligned with university formatting rules.",
        "icon": "bookmark"
      },
      {
        "title": "Operation manual navigation",
        "description": "Help handbook readers quickly jump from troubleshooting sheets back to the main TOC.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "How do the bidirectional anchors work?",
        "answer": "We create standard Link annotations on the TOC page targeting the respective pages; then we embed a link back to the TOC page on all target chapter sheets."
      },
      {
        "question": "Will inserting the TOC page break existing page numbers?",
        "answer": "No. The compiler accounts for the offset of the newly inserted TOC page, ensuring all target destinations align."
      },
      {
        "question": "Is the TOC page valid when printed physically?",
        "answer": "Yes. The generated TOC lists clean physical page numbers to guide paper readers while enabling clickable links on screen."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Corrección de Escaneos Torcidos",
    "metaDescription": "Detecte automáticamente ángulos de inclinación en PDFs escaneados y corríjalos físicamente para un diseño plano.",
    "keywords": [
      "corregir inclinacion pdf",
      "alinear escaneo pdf",
      "deskew automatico"
    ],
    "description": "\n      <p>The PDF Scan Aligner is a mandatory utility for sanitizing tilted digital assets and mobile snapshots.</p>\n      <p>Documents scanned via physical flatbeds or captured quickly with smartphones often carry subtle rotations. Tilted pages look highly unprofessional, hinder text readability, and cause margins to clip during printing.</p>\n      <p>This tool utilizes robust <strong>Radon Transform and Hough Line detection algorithms</strong> to scan gradients and text lines under 20ms. It precisely measures skew down to 0.01 degrees and performs pixel-level Canvas rotation, snapping your receipts, contracts, and booklets back into crisp geometric alignment.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide skew PDF",
        "description": "Upload any PDF sheet carrying rotated or poorly aligned scanned documents."
      },
      {
        "step": 2,
        "title": "Analyze and tweak",
        "description": "The engine auto-detects skew angle and draws aligning grids. Tweak angle manually if needed."
      },
      {
        "step": 3,
        "title": "Straighten & download",
        "description": "Click execute to swing pages through a smooth gyroscope transition and download aligned PDF."
      }
    ],
    "useCases": [
      {
        "title": "Receipt & Contract Archiving",
        "description": "Straighten quick hand-held mobile contract scans before saving them as formal digital PDF archives.",
        "icon": "file-text"
      },
      {
        "title": "Academic Book Digitizing",
        "description": "Sanitize microfilm book scans where text lines drift out of horizontal margins.",
        "icon": "book"
      },
      {
        "title": "Student Homework Grading",
        "description": "Correct homework snapshots taken by student phones, relaxing the eyes of grading teachers.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "How is document skew detected?",
        "answer": "We run high-speed Hough Line projections on text lines. Since formal prints have clear horizontal spacing patterns, finding the angle with the maximum variance isolates the rotation."
      },
      {
        "question": "Will this process crop away page edges?",
        "answer": "No. The engine calculates the rotated boundary and extends the Canvas using auto-padding, ensuring all margin text remains intact without cropping."
      },
      {
        "question": "Does it support documents filled with diagrams?",
        "answer": "Yes, as long as there is an underlying structure of lines or general paragraphs, our algorithms can accurately lock onto the principal reading angle."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Reorganizar PDFs de Dos Columnas",
    "metaDescription": "Divida documentos de doble columna copiando páginas y redefiniendo el CropBox para una lectura fluida en una sola columna.",
    "keywords": [
      "redistribuir columnas",
      "pdf doble columna a una",
      "ajustar cropbox"
    ],
    "description": "\n      <p>The Academic Two-Column Reflower solves the most significant pain point of digital research: reading papers on standard mobile screens.</p>\n      <p>Double-column layouts (used by IEEE, ACM, Nature, and major reports) are designed for A4 paper. Navigating them on phone screens or Kindle devices requires constant zooming, dragging right, scrolling down, and panning back up. It breaks reading comprehension completely.</p>\n      <p>Our processor implements a <strong>smart paragraph reflow and vertical partition barrier scan</strong>. It analyzes character coordinates to map double-column gutters, divides the layout, and weaves segments vertically (left column first, then right). Graphs, formulas, and headings are seamlessly rearranged into a single-column, flowable vertical scroll PDF.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload double-column PDF",
        "description": "Provide the IEEE/ACM journal report or multi-column PDF sheet."
      },
      {
        "step": 2,
        "title": "Inspect partition gutter",
        "description": "Verify the red vertical partition slice guides. Adjust margins to prevent overlapping elements."
      },
      {
        "step": 3,
        "title": "Reflow and save",
        "description": "Click execute to compile the pages into flowable layouts and download instantly."
      }
    ],
    "useCases": [
      {
        "title": "e-Reader Book Import",
        "description": "Convert dense double-column essays into comfortable single-column documents matching Kindle and Onyx screens.",
        "icon": "tablet"
      },
      {
        "title": "Subway Phone Reading",
        "description": "Read research literature comfortably with single-hand vertical swipe gestures during transit.",
        "icon": "smartphone"
      },
      {
        "title": "Archival Journal Formatting",
        "description": "Modernize old narrow-column newspapers into readable, single-column web formats.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "How are broad charts and equations handled?",
        "answer": "Our engine applies \"span element detection.\" When an equation or diagram exceeds normal column widths, it is isolated as a full-width item, maintaining original proportions without clipping."
      },
      {
        "question": "Will this modify the vector text resolution?",
        "answer": "Not at all. We rewrite PDF text object transform matrices at the object tree level instead of rasterizing, meaning text remains 100% vector and fully selectable."
      },
      {
        "question": "Does this work on scanned image documents?",
        "answer": "For flat image-based PDFs, we highly recommend running our OCR tool first before executing the Reflow process."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Uniformar Tamaño de Páginas PDF",
    "metaDescription": "Escale páginas PDF de diversos tamaños centrándolas y ajustándolas proporcionalmente a un tamaño uniforme de destino.",
    "keywords": [
      "dimensionar paginas pdf",
      "uniformar pdf a a4",
      "centrar contenido paginas"
    ],
    "description": "\n      <p>The Multi-Format PDF Resizer is the ultimate standardizer for cluttered, mismatched corporate documents.</p>\n      <p>Combining invoices, contracts, and supplementary charts often results in a PDF containing massive A3 ledger pages, standard A4 agreements, and Letter-sized envelopes. Flipping through them is highly distracting, and sending them to physical office printers often causes jam errors due to size mismatch.</p>\n      <p>This tool rewrites the low-level <code>/MediaBox</code> and <code>/CropBox</code> grids on each page. It maps existing widths and heights, scales original pages proportionally to match target presets (e.g. standard A4), and introduces elegant, consistent surrounding margins, making the entire file look incredibly polished.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide mixed-size PDF",
        "description": "Upload a merged PDF document containing mismatched, messy page sizes."
      },
      {
        "step": 2,
        "title": "Choose target preset",
        "description": "Select the target uniform size (e.g. A4, Letter, A3) and toggle scale modes."
      },
      {
        "step": 3,
        "title": "Align and download",
        "description": "Click execute to trigger 3D sheet alignment, downloading a beautifully standardized PDF."
      }
    ],
    "useCases": [
      {
        "title": "Corporate RFP Proposals",
        "description": "Standardize scanned qualification certificates and A4 bidding sheets before physical printing.",
        "icon": "file-text"
      },
      {
        "title": "Financial Chart Integration",
        "description": "Scale broad A3 financial cash flows into neat A4 pages, preserving printing standards.",
        "icon": "layout"
      },
      {
        "title": "Book Margin Standardization",
        "description": "Force slightly varied scanned book pages into an absolutely uniform dimension for comfortable reading.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Will this warp my content?",
        "answer": "Never. We support both \"Contain\" (proportional scaling with white bars) and \"Cover\" (centered crop). The default Contain mode preserves aspect ratios, preventing distortion."
      },
      {
        "question": "Will existing forms and annotations remain clickable?",
        "answer": "Yes. The algorithm maps the scaling factors to the Annotation coordinate arrays, scaling link boxes, sign boundaries, and inputs to align perfectly after resizing."
      },
      {
        "question": "Is there a limit on how many pages I can resize?",
        "answer": "No. Since all operations run locally in your client sandbox using native JavaScript, you can process extensive PDFs containing hundreds of pages in seconds."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Mejorar Contraste de Manuscritos",
    "metaDescription": "Blanquee fondos manchados u oscuros y aumente el contraste de firmas a mano (azul/negro) y sellos rojos.",
    "keywords": [
      "resaltar escritura a mano",
      "blanquear papel escaneado",
      "contraste de firmas"
    ],
    "description": "\n      <p>The Handwriting Ink Contrast Booster is a savior for digitizing signed agreements and historical manuscript archives.</p>\n      <p>Scans of hand-signed documents often look dull due to grey scanner glass reflection, yellow paper tint, or faded ink. Re-printing or photocopying these files results in blurry, illegible signatures. Traditional contrast tools darken the entire background, worsening the layout.</p>\n      <p>This tool utilizes **Contrast Limited Adaptive Histogram Equalization (CLAHE) and hue-based color separation**. In a secure local Canvas process, it isolates handwriting strokes (both black and blue) from background parchment, bleaches shadow wrinkles completely, and infuses faded inks with deep, saturated contrast, leaving your documents looking incredibly crisp and clean.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import hand-signed document",
        "description": "Provide a PDF containing faded signatures, handwritten diaries, or sketches."
      },
      {
        "step": 2,
        "title": "Configure ink filter",
        "description": "Select the color profile to isolate (e.g. blue ink, black ink, or both) and adjust sharpening."
      },
      {
        "step": 3,
        "title": "Sharpen and download",
        "description": "Click execute to trace colors with a radar scanner effect and download purified PDF."
      }
    ],
    "useCases": [
      {
        "title": "Executed Contracts Repair",
        "description": "Repair poorly scanned agreements, sharpening signatures and bleaching paper background to A4-pure white.",
        "icon": "file-check"
      },
      {
        "title": "Handwritten Manuscripts Archive",
        "description": "Digitize written journals or diaries, extracting clear black strokes while erasing age-related stains.",
        "icon": "book"
      },
      {
        "title": "Historical Ledger Restoration",
        "description": "Restore faint ink details on aged archival ledgers, rescuing valuable handwritten coordinates.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "How does this differ from normal grayscale conversion?",
        "answer": "Grayscale converts paper shadows into gray values. Our adaptive algorithm separates background luminance and isolates signature \"ink spectrums,\" purifying the backdrop to absolute white while leaving stroke edges sharp."
      },
      {
        "question": "Will I lose handwriting stroke texture?",
        "answer": "No. The CLAHE algorithm works on a sub-pixel level, preserving natural pen-stroke pressure, ink fading, and dynamic line weights."
      },
      {
        "question": "Can I keep red corporate stamp marks?",
        "answer": "Yes. By enabling \"Chroma Ink Preservation,\" the booster whitens paper background and darkens writing, while maintaining the bright colors of red seals and blue ink signatures."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Calcular Ancho de Lomo",
    "metaDescription": "Calcule el grosor del lomo en milímetros según las páginas y gramaje del papel, y genere una plantilla de portada con líneas de hendido.",
    "keywords": [
      "calcular lomo libro",
      "grosor de lomo",
      "plantilla de portada pdf"
    ],
    "description": "\n      <p>The PDF Spine Bookbinder is a pre-press savior for designers, self-publishing authors, and commercial bidding teams.</p>\n      <p>When compiling thick book catalogs, bidding proposals, or annual directories, perfect binding (glue binding) requires a cover with precise spine coordinates. If the spine width is off by even 1mm, the bound cover will warp, shift, or crease. Calculating page counts against paper weight is complex and error-prone.</p>\n      <p>This tool utilizes a <strong>physically modeled GSM paper-to-thickness library</strong>. Simply input your PDF page count and select paper stock (e.g. 80 GSM offset, 100 GSM glossy). The engine calculates spine width down to micrometers and compiles a print-ready, extra-wide cover PDF complete with standard front/back flaps and precise fold mark creases.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Set pages & stock type",
        "description": "Input document page count and select the target paper stock specifications."
      },
      {
        "step": 2,
        "title": "Input spine text",
        "description": "Enter book titles, author details, and customize spine/cover backgrounds."
      },
      {
        "step": 3,
        "title": "3D Preview & Export",
        "description": "Spin and inspect your book cover in an interactive 3D binder. Export high-resolution vector PDF."
      }
    ],
    "useCases": [
      {
        "title": "Thick Bidding Proposals",
        "description": "Design professional cover sheets with precise spine crease alignments for thick tender bids.",
        "icon": "layers"
      },
      {
        "title": "Thesis Hardcover Binding",
        "description": "Map out perfect spine layout widths for university master/doctorate degree theses.",
        "icon": "award"
      },
      {
        "title": "Self-Publishing Novel Covers",
        "description": "Calculate book spine width easily before submitting files to Print-on-Demand publishing services.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "How accurate is the GSM paper-thickness calculation?",
        "answer": "Highly accurate. Our physics library matches industry averages (e.g. 70 GSM = 0.09mm, 80 GSM = 0.10mm, 150 GSM glossy = 0.125mm). We also include a \"Double-sided printing\" toggle to halve calculations automatically."
      },
      {
        "question": "Are the exported covers ready for direct printing?",
        "answer": "Yes. The files are vector-perfect PDFs carrying standard registration marks, color bars, and spine guides, fully compliant with offset and digital commercial presses."
      },
      {
        "question": "Can I upload a background image spanning the spine?",
        "answer": "Yes. You can upload custom layouts, and our compositor will wrap and align the graphics across the spine folds automatically."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Guía de Posición de Firma",
    "metaDescription": "Inserte indicadores visuales de firma y enlaces de navegación rápida en las ubicaciones donde se requiere firmar.",
    "keywords": [
      "anclaje de firma",
      "marcador de firma pdf",
      "guiar firmante"
    ],
    "description": "\n      <p>The PDF Signature Guide Injector guarantees clean, error-free signing workflows for multi-page agreements.</p>\n      <p>When sending multi-page NDA agreements, financial statements, or commercial leases, clients often miss critical signing boxes, requiring endless back-and-forth email loops and delayed business transactions.</p>\n      <p>Our tool uses <strong>natural regex semantic mapping</strong>. It scans the PDF character map to locate terms like <code>Signature:</code>, <code>签字：</code>, <code>Witness:</code>, or <code>签署日期：</code>. It then leverages <code>pdf-lib</code> to inject standard PDF interactive Link annotations. When opened in any standard reader, clients see blinking, neon-bordered arrows that instantly guide them to the correct boxes, making signing foolproof.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import business contract",
        "description": "Upload the PDF contract or NDA that needs signature coordinates."
      },
      {
        "step": 2,
        "title": "Auto-scan signature slots",
        "description": "Inspect the automatically located signing boxes, and manually add custom sign points if needed."
      },
      {
        "step": 3,
        "title": "Inject anchors & save",
        "description": "Click execute to write the interactive pointer layers into the PDF structure."
      }
    ],
    "useCases": [
      {
        "title": "Corporate NDA Agreements",
        "description": "Inject clear, flashing guides next to sign blocks to prevent onboarding employees from missing clauses.",
        "icon": "file-text"
      },
      {
        "title": "Commercial Lease Contracts",
        "description": "Guide multiple co-signers through multi-page real estate documents with custom-colored tabs.",
        "icon": "users"
      },
      {
        "title": "Procurement PO Signatures",
        "description": "Overlay interactive pointers on invoices and purchase orders to accelerate accounting approval loops.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Will these guides appear when I print the contract?",
        "answer": "No. The anchors are injected with the standard PDF `Printable` flag set to false. They display beautifully on computer/tablet screens but remain completely invisible when printed."
      },
      {
        "question": "Can clients jump between signature fields easily?",
        "answer": "Yes. We weave bidirectional internal anchors. Clients can click the \"Sign Guide\" bookmark to automatically jump to the next empty signature slot instantly."
      },
      {
        "question": "Does this work on scanned image documents?",
        "answer": "Yes. Besides looking up text streams, our spatial layout parser estimates signature lines based on horizontal rules and bounding boxes on scanned sheets."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Recorte de Planos sin Pérdidas",
    "metaDescription": "Recorte secciones de planos de gran tamaño modificando el CropBox a nivel vectorial, sin pérdida de resolución.",
    "keywords": [
      "recortar planos pdf",
      "recorte vectorial pdf",
      "modificar mediabox"
    ],
    "description": "\n      <p>The PDF Lossless Drawing Slicer is a high-precision, surgical tool built for architects, engineers, and map detailers.</p>\n      <p>When extracting a specific pump room or chip core from a massive CAD engineering blueprint or geographic map PDF, traditional screenshots result in pixelated, blurry text. Normal cropping tools simply place a mask over the sheet, meaning the massive 100MB file remains huge, and hidden content can still be extracted.</p>\n      <p>This tool edits the page <code>/MediaBox</code>, <code>/CropBox</code>, and <code>/BleedBox</code> matrices at the object tree level. It physically isolates vector nodes outside the selected region, keeping the target area 100% vector-perfect (allowing infinite zoom magnification) while purging redundant off-screen paths and images to shrink the file size by 95%!</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import large blueprint",
        "description": "Upload the vector-rich CAD, GIS map, or high-resolution catalog PDF."
      },
      {
        "step": 2,
        "title": "Draw cutting box",
        "description": "Drag and scale the green laser-line crop box to target the local region you want to slice."
      },
      {
        "step": 3,
        "title": "Trigger laser crop",
        "description": "Click execute to trigger our low-level object slicer and download the tiny, lossless PDF."
      }
    ],
    "useCases": [
      {
        "title": "CAD Blueprint Isolation",
        "description": "Slice out a \"cooling system\" detail from a massive 100MB floor plan blueprint to share with sub-contractors.",
        "icon": "crop"
      },
      {
        "title": "GIS Map Snipping",
        "description": "Extract a lossless, vector-clear block of a city street map for a presentation slide without resolution loss.",
        "icon": "map"
      },
      {
        "title": "Manual Illustration Tracing",
        "description": "Lossless isolate scientific book figures to embed into high-quality academic papers.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "How is this different from standard cropping?",
        "answer": "Standard cropping merely adjusts visual bounds; the hidden vectors remain in the file. Our slicer trims overlapping vector paths and purges out-of-bounds XObject images, ensuring complete data isolation and maximum file compression."
      },
      {
        "question": "Will text layers remain searchable?",
        "answer": "Yes. Any text characters that fall inside the sliced boundary remain fully vector-clear, searchable, and selectable."
      },
      {
        "question": "Can I export sliced regions to SVG?",
        "answer": "The output is a standardized vector PDF. You can pass the resulting file to our PDF-to-SVG tool to convert it to a web-scalable vector graphics format."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Lienzo de Notas Cuadriculado",
    "metaDescription": "Amplíe el lienzo de las páginas PDF agregando un margen de notas con patrón de cuadrícula o líneas para escribir.",
    "keywords": [
      "margen para notas pdf",
      "papel cuadriculado pdf",
      "lienzo de escritura"
    ],
    "description": "\n      <p>The PDF Scratchpad Margin Extender is an essential study companion tailored for students, researchers, and professional exam candidates.</p>\n      <p>When solving practice test papers, reviewing slides, or reading academic textbooks on digital tablets, page margins are incredibly tight. Opening a separate notes app forces you to toggle screens constantly, breaking focus. Adding flat blank sheets prevents you from viewing the problem and your calculation side-by-side.</p>\n      <p>This tool rewrites page width or height dimensions in the low-level PDF structure, expanding <code>/MediaBox</code> margins by 200~250 pt on the right or bottom. It then overlays clean grid lines, college-ruled notebook lines, or Cornell layouts in the new margins, giving you dedicated, adjacent draft boards next to every single slide or question!</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload lecture slides",
        "description": "Provide the PDF textbook, slides, or study papers."
      },
      {
        "step": 2,
        "title": "Choose margin & grid style",
        "description": "Pick margin expansion direction (e.g. right side for tablets) and select the grid template."
      },
      {
        "step": 3,
        "title": "Stitch canvas & download",
        "description": "Click execute to generate expanded pages complete with beautiful draft grids."
      }
    ],
    "useCases": [
      {
        "title": "STEM Exam Preparation",
        "description": "Stitch grid margins next to math and physics exam questions, solving derivations right next to the question.",
        "icon": "edit-3"
      },
      {
        "title": "Language Reading Analysis",
        "description": "Add ruled notebook margins next to foreign language essays for vocabulary analysis and paragraph translation.",
        "icon": "book"
      },
      {
        "title": "Architectural Blueprint Audit",
        "description": "Add empty margin spaces on the side of blueprints for engineering calculations and client review comments.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Will this squish my original PDF text?",
        "answer": "Not at all. The algorithm expands the paper dimension outwards. The original content retains its layout, fonts, and resolution; we simply stretch the white space on the borders and draw grids on them."
      },
      {
        "question": "Can standard hand-writing pens write in the scratchpad?",
        "answer": "Yes. The new PDF pages are compiled natively. Popular tablet note-taking applications like Goodnotes, Notability, Xodo, and Acrobat can write, highlight, and doodle directly in the new grid space."
      },
      {
        "question": "Are grid lines dark and distracting?",
        "answer": "We curated three subtle, eye-friendly colors (soft blue-gray, warm brown, and glowing green). The lines are thin and gentle, serving as guides without distracting you from the original page content."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Imprimir Fotos de Identificación",
    "metaDescription": "Organice una foto de identificación en un plano de impresión de 5\" o 6\" en formato de matriz, con guías de corte.",
    "keywords": [
      "imprimir fotos carnet",
      "papel fotográfico matriz",
      "guias de corte"
    ],
    "description": "\n      <p>The Prepress Photo Tiling tool is a cost-effective, high-precision layout compiler built for personal registration cards and photography studios.</p>\n      <p>Printing passport photos, ID photos, or driver licenses at home often results in incorrect physical dimensions (often printed too large or too small), wasted photo paper, and uneven alignments. Going to professional print shops to get layouts made is time-consuming.</p>\n      <p>Our tool integrates a <strong>precision prepress matrix engine</strong>. It accepts portrait photographs or ID card scans, crops them to standard dimensions (e.g. 1\" or 2\" passport specs), calculates optimal tile counts for standard photo papers (e.g. 5\" or 6\" sheets), and injects crisp, micro-pixel crop lines for easy physical cutting, generating a perfect printable PDF.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import passport photo",
        "description": "Upload the camera portrait snapshot or double-sided ID card images."
      },
      {
        "step": 2,
        "title": "Configure paper & layout",
        "description": "Select the target print paper size (e.g. 6\") and choose the grid layouts (e.g. 8 copies of 1\" photos)."
      },
      {
        "step": 3,
        "title": "Tile and export",
        "description": "Inspect photo tiles on our grid, and export the high-DPI printable PDF."
      }
    ],
    "useCases": [
      {
        "title": "Self-Service Passport Photos",
        "description": "Arrange your mobile-shot passport portraits onto a single 6\" photo paper grid, and print 8 copies for a fraction of standard studio costs.",
        "icon": "user"
      },
      {
        "title": "ID Card Double-sided Copy",
        "description": "Format front and back scans of national ID cards neatly on standard Letter/A4 sheets for official submissions.",
        "icon": "file-text"
      },
      {
        "title": "Batch Photo Thumbnail Sheets",
        "description": "Tile multiple family memories or design snapshots onto a grid paper to print thumbnail contact sheets efficiently.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Will the printed dimensions match official 1\" or 2\" specs?",
        "answer": "Yes. The grid engine measures using standard PDF points (72 pt = 1 inch), rendering 1\" photos exactly at 25x35mm, and 2\" photos at 35x49mm. Ensure you print at \"Actual Size / 100% Scale\" in your printer settings."
      },
      {
        "question": "Can I combine 1\" and 2\" photos on a single sheet?",
        "answer": "Yes. We provide curated hybrid layout presets (e.g. \"4 copies of 1\" + 4 copies of 2\"\"), allowing you to maximize photo paper space."
      },
      {
        "question": "Does the template include border bleeds?",
        "answer": "Yes. The prepress layouts reserve a standard 4mm print-safe margin on the paper borders, preventing physical printer rollers from cropping the photos."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD a PDF",
    "metaDescription": "Convierte archivos de Adobe Photoshop (PSD) al formato PDF. Admite múltiples archivos y conserva la calidad de la imagen.",
    "keywords": [
      "psd a pdf",
      "convertir psd",
      "photoshop a pdf",
      "conversor psd",
      "adobe psd a pdf"
    ],
    "description": "\n      <p>PSD a PDF convierte archivos de Adobe Photoshop (PSD) en documentos PDF. Esta herramienta le permite visualizar y compartir diseños PSD sin necesidad de tener instalado Photoshop.</p>\n      <p>Puede convertir múltiples archivos PSD a la vez y combinarlos en un único documento PDF. La herramienta procesa cada archivo PSD renderizando las capas visibles en páginas PDF de alta calidad.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que sus diseños permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivos PSD",
        "description": "Arrastre y suelte sus archivos PSD o PSB, o haga clic para seleccionarlos desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Organizar el orden",
        "description": "Arrastre y suelte las miniaturas de los archivos para ordenarlos como desee."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Haga clic en Convertir para renderizar los PSD y descargar su documento PDF."
      }
    ],
    "useCases": [
      {
        "title": "Compartir diseños",
        "description": "Comparta diseños de Photoshop con clientes o colegas que no tengan instalado Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Creación de portafolios",
        "description": "Compile sus trabajos de diseño en un portafolio profesional en PDF.",
        "icon": "layout"
      },
      {
        "title": "Preparación para impresión",
        "description": "Convierta diseños a PDF listos para fines de impresión.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Necesito tener instalado Photoshop?",
        "answer": "No, esta herramienta funciona completamente en su navegador sin requerir Adobe Photoshop."
      },
      {
        "question": "¿Se conservan las capas?",
        "answer": "La herramienta renderiza el estado visible del PSD (imagen compuesta). Las capas individuales se acoplan en el PDF."
      },
      {
        "question": "¿Cuál es el tamaño máximo de archivo?",
        "answer": "Puede subir archivos de hasta 100 MB cada uno. Los archivos PSD grandes pueden tardar un momento en procesarse."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word a PDF",
    "metaDescription": "Convierte documentos de Word (DOCX) a PDF. Preserva el formato y la distribución en los documentos convertidos.",
    "keywords": [
      "word a pdf",
      "docx a pdf",
      "convertir word",
      "conversor de word",
      "microsoft word a pdf"
    ],
    "description": "\n      <p>Word a PDF convierte documentos de Microsoft Word al formato PDF mientras preserva el formato original, la distribución de la página y la estructura del contenido.</p>\n      <p>Suba sus archivos DOCX y obtenga un PDF de alta calidad ideal para compartir, imprimir o archivar. La conversión mantiene el formato del texto, los estilos de párrafo y la estructura básica del documento.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador, garantizando la privacidad y seguridad de sus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir documento de Word",
        "description": "Arrastre y suelte su archivo .docx o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta cargará el documento y lo preparará para la conversión."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartir documentos",
        "description": "Convierta documentos de Word a PDF para compartirlos y visualizarlos de forma universal.",
        "icon": "share-2"
      },
      {
        "title": "Preparación para impresión",
        "description": "Cree archivos PDF listos para imprimir a partir de documentos de Word.",
        "icon": "printer"
      },
      {
        "title": "Archivo de documentos",
        "description": "Archive documentos de Word en un formato PDF estable para su almacenamiento a largo plazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Se admite el formato .doc?",
        "answer": "Actualmente solo se admite el formato .docx. Convierta primero sus archivos .doc a .docx usando Microsoft Word o LibreOffice."
      },
      {
        "question": "¿Se conservan las imágenes?",
        "answer": "Se conservan el contenido de texto y el formato básico. Los diseños complejos con muchas imágenes pueden presentar una renderización simplificada."
      },
      {
        "question": "¿Es segura la conversión?",
        "answer": "Sí, todo el procesamiento se realiza en su navegador. Sus documentos nunca salen de su dispositivo."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel a PDF",
    "metaDescription": "Convierte hojas de cálculo de Excel (XLSX) a PDF. Preserva las tablas y los datos en los documentos convertidos.",
    "keywords": [
      "excel a pdf",
      "xlsx a pdf",
      "convertir excel",
      "hoja de calculo a pdf",
      "microsoft excel a pdf"
    ],
    "description": "\n      <p>Excel a PDF convierte hojas de cálculo de Microsoft Excel al formato PDF preservando la estructura de las tablas y la organización de los datos.</p>\n      <p>Suba sus archivos XLSX y obtenga un documento PDF limpio con tablas correctamente formateadas. Cada hoja de su libro de trabajo se convierte en una sección separada del PDF.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador, garantizando que sus datos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo de Excel",
        "description": "Arrastre y suelte su archivo .xlsx o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta cargará la hoja de cálculo y convertirá todas las hojas."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartir informes",
        "description": "Convierta informes de Excel a PDF para distribuirlos a las partes interesadas.",
        "icon": "file-text"
      },
      {
        "title": "Archivo de datos",
        "description": "Archive datos de hojas de cálculo en un formato PDF estable.",
        "icon": "archive"
      },
      {
        "title": "Preparación para impresión",
        "description": "Cree archivos PDF listos para imprimir a partir de hojas de cálculo de Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Se admiten múltiples hojas?",
        "answer": "Sí, todas las hojas de trabajo del libro de Excel se convierten e incluyen en el PDF."
      },
      {
        "question": "¿Se admite el formato .xls?",
        "answer": "Actualmente solo se admite el formato .xlsx. Guarde primero los archivos .xls como .xlsx."
      },
      {
        "question": "¿Se conservan las fórmulas?",
        "answer": "El PDF muestra los valores calculados. Las fórmulas no son ejecutables dentro del formato PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint a PDF",
    "metaDescription": "Convierte presentaciones de PowerPoint (PPTX) a PDF. Preserva las diapositivas y el contenido para compartirlos fácilmente.",
    "keywords": [
      "powerpoint a pdf",
      "pptx a pdf",
      "convertir pptx",
      "presentacion a pdf",
      "diapositivas a pdf"
    ],
    "description": "\n      <p>PowerPoint a PDF convierte presentaciones de Microsoft PowerPoint al formato PDF, preservando el contenido de las diapositivas y el texto para compartirlos y visualizarlos fácilmente.</p>\n      <p>Cada diapositiva se convierte en una página del PDF, manteniendo el flujo de la presentación. Es ideal para compartir presentaciones con personas que no tienen instalado PowerPoint.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador, asegurando la privacidad y seguridad de sus presentaciones.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo de PowerPoint",
        "description": "Arrastre y suelte su archivo .pptx o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta extraerá el contenido de las diapositivas y creará el PDF."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartir presentaciones",
        "description": "Comparta presentaciones con cualquier persona sin necesidad de PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Creación de folletos",
        "description": "Cree folletos en PDF a partir de las diapositivas de su presentación.",
        "icon": "file-text"
      },
      {
        "title": "Archivar presentaciones",
        "description": "Archive presentaciones en un formato PDF estable.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Se conservan las animaciones?",
        "answer": "El PDF es un formato estático, por lo que las animaciones y transiciones no se conservan. Cada diapositiva se convierte en una página estática."
      },
      {
        "question": "¿Se admite el formato .ppt?",
        "answer": "Actualmente solo se admite el formato .pptx. Convierta primero sus archivos .ppt a .pptx."
      },
      {
        "question": "¿Se incluyen las notas del orador?",
        "answer": "Actualmente, las notas del orador no se incluyen en el documento PDF de salida."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS a PDF",
    "metaDescription": "Convierte documentos XPS al formato PDF. Conversión de alta fidelidad que preserva el diseño y los gráficos.",
    "keywords": [
      "xps a pdf",
      "convertir xps",
      "conversor xps",
      "microsoft xps a pdf",
      "oxps a pdf"
    ],
    "description": "\n      <p>XPS a PDF convierte documentos XPS (XML Paper Specification) de Microsoft al formato PDF, preservando el diseño, texto y gráficos vectoriales originales.</p>\n      <p>XPS es un formato de documento fijo similar al PDF. Esta herramienta proporciona una conversión de alta fidelidad mediante un procesamiento nativo de XPS, asegurando una reproducción exacta de sus documentos.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo XPS",
        "description": "Arrastre y suelte su archivo .xps o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta analizará y convertirá el documento XPS."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Conversión de formato",
        "description": "Convierta documentos XPS al formato PDF, que cuenta con una compatibilidad mucho más amplia.",
        "icon": "file"
      },
      {
        "title": "Compartir documentos",
        "description": "Comparta documentos XPS con usuarios que no disponen de visores de XPS.",
        "icon": "share-2"
      },
      {
        "title": "Migración de archivos",
        "description": "Migre archivos históricos XPS al formato PDF para una mejor compatibilidad a futuro.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es el formato XPS?",
        "answer": "XPS (XML Paper Specification) es el formato de documento fijo de Microsoft, similar al PDF. Se utiliza comúnmente en el sistema de impresión de Windows."
      },
      {
        "question": "¿La conversión es sin pérdidas?",
        "answer": "Sí, la conversión preserva el texto, los gráficos y el diseño con alta fidelidad."
      },
      {
        "question": "¿Se admiten archivos XPS de varias páginas?",
        "answer": "Sí, todas las páginas del documento XPS original se convierten e integran en el archivo PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF a PDF",
    "metaDescription": "Convierte archivos RTF (formato de texto enriquecido) a PDF. Preserva el formato del texto en sus documentos.",
    "keywords": [
      "rtf a pdf",
      "convertir rtf",
      "texto enriquecido a pdf",
      "conversor rtf"
    ],
    "description": "\n      <p>RTF a PDF convierte archivos de Formato de Texto Enriquecido (RTF) en documentos PDF. RTF es un formato de texto ampliamente compatible que incluye formato básico como fuentes, colores y estilos.</p>\n      <p>Suba sus archivos RTF y obtenga un documento PDF limpio mientras conserva el contenido del texto y su formato esencial. Perfecto para actualizar documentos antiguos a un formato PDF moderno.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando la privacidad y seguridad de sus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo RTF",
        "description": "Arrastre y suelte su archivo .rtf o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta analizará y convertirá el contenido RTF."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Conversión de documentos heredados",
        "description": "Convierta documentos RTF antiguos al formato PDF moderno.",
        "icon": "history"
      },
      {
        "title": "Compartir documentos",
        "description": "Comparta documentos RTF en un formato PDF visible universalmente.",
        "icon": "share-2"
      },
      {
        "title": "Archivar documentos",
        "description": "Archive archivos RTF en un formato PDF estable para almacenamiento a largo plazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formato se conserva?",
        "answer": "Se convierte el formato de texto básico, incluyendo fuentes, párrafos y estilos. Las características complejas de RTF podrían verse simplificadas."
      },
      {
        "question": "¿Puedo convertir múltiples archivos RTF?",
        "answer": "Actualmente se convierte un archivo a la vez. Utilice la herramienta Fusionar PDF para combinar múltiples archivos convertidos."
      },
      {
        "question": "¿Se admiten imágenes incrustadas?",
        "answer": "El foco principal es el contenido de texto. Los objetos incrustados podrían no renderizarse."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB a PDF",
    "metaDescription": "Convierte libros electrónicos EPUB a PDF. Preserva el formato, las imágenes y la estructura de capítulos.",
    "keywords": [
      "epub a pdf",
      "convertir epub",
      "libro electronico a pdf",
      "conversor epub"
    ],
    "description": "\n      <p>EPUB a PDF convierte archivos de libros electrónicos en documentos PDF de alta calidad. EPUB es el formato de libro electrónico más popular, utilizado por la mayoría de los lectores digitales y bibliotecas virtuales.</p>\n      <p>Esta herramienta conserva el formato del texto, las imágenes y la estructura de capítulos de sus libros electrónicos. Es ideal para imprimir, archivar o compartir e-books en un formato universalmente legible.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador utilizando tecnología de renderizado avanzada, garantizando la privacidad de sus libros y un procesamiento rápido.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo EPUB",
        "description": "Arrastre y suelte su archivo .epub o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar la conversión",
        "description": "La herramienta renderizará y convertirá todas las páginas de su libro electrónico."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir libros electrónicos",
        "description": "Convierta libros electrónicos a PDF para realizar una impresión física.",
        "icon": "printer"
      },
      {
        "title": "Archivar libros",
        "description": "Almacene e-books en un formato PDF estable a largo plazo.",
        "icon": "archive"
      },
      {
        "title": "Compartir documentos",
        "description": "Comparta libros electrónicos con cualquier persona, incluso si no dispone de un lector de e-books.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Se conserva el formato?",
        "answer": "¡Sí! Esta herramienta utiliza renderizado nativo de EPUB, preservando el formato de texto, imágenes y diseño con alta fidelidad."
      },
      {
        "question": "¿Se admiten archivos EPUB protegidos por DRM?",
        "answer": "No, los libros electrónicos protegidos por DRM no se pueden convertir. Solo se admiten archivos EPUB libres de DRM."
      },
      {
        "question": "¿Cómo se determina el tamaño de la página?",
        "answer": "El contenido de EPUB se renderiza al tamaño de página estándar A4 para una lectura óptima."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI a PDF",
    "metaDescription": "Convierte libros electrónicos MOBI a PDF. Soporte para el formato Kindle con renderizado de alta calidad.",
    "keywords": [
      "mobi a pdf",
      "convertir mobi",
      "kindle a pdf",
      "azw a pdf",
      "conversor mobi"
    ],
    "description": "\n      <p>MOBI a PDF convierte archivos de libros electrónicos Kindle de Amazon en documentos PDF de alta calidad. El formato MOBI (incluyendo AZW y AZW3) es el formato patentado de Amazon utilizado en dispositivos Kindle.</p>\n      <p>Esta herramienta conserva el formato del texto, las imágenes y la estructura de sus libros Kindle. Es ideal para imprimir, archivar o leer en dispositivos que no son compatibles con el formato MOBI.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador utilizando tecnología de renderizado avanzada, garantizando la privacidad de sus libros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo MOBI",
        "description": "Arrastre y suelte su archivo .mobi, .azw o .azw3, o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar la conversión",
        "description": "La herramienta renderizará y convertirá todas las páginas de su libro electrónico."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir libros Kindle",
        "description": "Convierta libros electrónicos Kindle a PDF para impresión física.",
        "icon": "printer"
      },
      {
        "title": "Archivar libros",
        "description": "Guarde libros Kindle en el formato universal PDF.",
        "icon": "archive"
      },
      {
        "title": "Lectura multiplataforma",
        "description": "Lea libros de Kindle en dispositivos que solo admiten el formato PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formatos MOBI son compatibles?",
        "answer": "Esta herramienta admite archivos .mobi, .azw y .azw3 (versiones sin DRM)."
      },
      {
        "question": "¿Se admiten libros Kindle protegidos por DRM?",
        "answer": "No, los libros electrónicos protegidos por DRM no se pueden convertir. Solo se admiten archivos libres de DRM."
      },
      {
        "question": "¿Se conservará el formato de mi documento?",
        "answer": "¡Sí! La herramienta utiliza un renderizado nativo de MOBI para conservar el texto, las imágenes y el diseño original."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF a SVG",
    "metaDescription": "Convierte páginas de PDF a gráficos vectoriales SVG. Escalabilidad perfecta a cualquier tamaño con exportación de páginas individuales.",
    "keywords": [
      "pdf a svg",
      "convertir pdf a svg",
      "graficos vectoriales",
      "pdf escalable",
      "conversor svg"
    ],
    "description": "\n      <p>PDF a SVG convierte cada página de su documento PDF en un gráfico vectorial escalable (SVG). El formato SVG es un formato vectorial que mantiene una calidad perfecta en cualquier nivel de zoom o tamaño de impresión.</p>\n      <p>A diferencia de los formatos rasterizados (JPG, PNG), los gráficos SVG nunca se pixelan al escalarse. Esto los hace ideales para logotipos, diagramas, dibujos técnicos y cualquier contenido que necesite mostrarse a diferentes tamaños.</p>\n      <p>Previsualice cada página convertida y descárguelas de manera individual o todas juntas en un archivo ZIP. Todo el procesamiento se realiza localmente en su navegador, garantizando una privacidad absoluta para sus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para buscar y seleccionar."
      },
      {
        "step": 2,
        "title": "Configurar opciones",
        "description": "Establezca la resolución de calidad y, opcionalmente, especifique los rangos de páginas."
      },
      {
        "step": 3,
        "title": "Previsualizar y convertir",
        "description": "Haga clic en Convertir para procesar. Previsualice cada página haciendo clic en las miniaturas."
      },
      {
        "step": 4,
        "title": "Descargar",
        "description": "Descargue archivos SVG individuales o todas las páginas en un archivo comprimido ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Logotipos y gráficos",
        "description": "Extraiga logotipos y gráficos vectoriales de archivos PDF para su uso en software de diseño.",
        "icon": "pen-tool"
      },
      {
        "title": "Diagramas técnicos",
        "description": "Convierta planos y diagramas técnicos al formato vectorial escalable SVG.",
        "icon": "ruler"
      },
      {
        "title": "Desarrollo web",
        "description": "Cree archivos SVG optimizados para la web a partir del contenido de un PDF para sitios web adaptables.",
        "icon": "globe"
      },
      {
        "title": "Impresión a cualquier tamaño",
        "description": "Genere gráficos vectoriales que se imprimen perfectamente a cualquier escala sin perder definición.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es el formato SVG?",
        "answer": "SVG (Scalable Vector Graphics) es un formato de imagen vectorial que puede escalarse a cualquier tamaño sin perder calidad. Se utiliza ampliamente para logotipos, iconos y gráficos web."
      },
      {
        "question": "¿El archivo SVG será realmente vectorial?",
        "answer": "El SVG contendrá una renderización de alta resolución de la página del PDF. Para los PDF con contenido vectorial original, obtendrá una salida vectorizada nítida en cualquier escala."
      },
      {
        "question": "¿Puedo previsualizar antes de descargar?",
        "answer": "¡Sí! Haga clic en cualquier miniatura para ver una vista previa a tamaño completo del SVG. Puede descargar páginas individuales o todas a la vez."
      },
      {
        "question": "¿Qué resolución debo elegir?",
        "answer": "Una resolución más alta (216 o 288 DPI) produce archivos SVG más detallados pero de mayor tamaño. Use configuraciones más bajas para un procesamiento más rápido y archivos más ligeros."
      }
    ]
  },
  "extract-images": {
    "title": "Extraer imágenes de PDF",
    "metaDescription": "Extrae todas las imágenes incrustadas de archivos PDF. Descárgalas individualmente o en un archivo ZIP. Filtra imágenes pequeñas automáticamente.",
    "keywords": [
      "extraer imagenes de pdf",
      "extraccion de imagenes pdf",
      "obtener imagenes de pdf",
      "descargar imagenes pdf",
      "pdf a imagenes"
    ],
    "description": "\n      <p>Extraer imágenes de PDF recupera todas las imágenes integradas en sus documentos PDF. Descargue imágenes de alta calidad de forma individual o en un cómodo archivo ZIP.</p>\n      <p>La herramienta filtra automáticamente imágenes pequeñas como iconos y elementos decorativos basándose en umbrales de tamaño personalizables. Procese múltiples PDF a la vez para una extracción por lotes eficiente.</p>\n      <p>Toda la extracción ocurre en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir sus archivos PDF",
        "description": "Arrastre y suelte uno o más archivos PDF, o haga clic para seleccionarlos desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Configurar opciones de filtrado",
        "description": "Ajuste el ancho, alto y tamaño mínimo de archivo para filtrar las imágenes pequeñas no deseadas."
      },
      {
        "step": 3,
        "title": "Extraer imágenes",
        "description": "Haga clic en Extraer para encontrar todas las imágenes incrustadas en sus PDF."
      },
      {
        "step": 4,
        "title": "Descargar",
        "description": "Descargue imágenes individuales o todas ellas en un archivo comprimido ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Recuperación de fotos",
        "description": "Extraiga fotos e imágenes incrustadas en documentos PDF para su reutilización o archivado.",
        "icon": "image"
      },
      {
        "title": "Recopilación de recursos gráficos",
        "description": "Reúna todos los gráficos e imágenes de informes, presentaciones o folletos en PDF.",
        "icon": "folder"
      },
      {
        "title": "Reutilización de contenido",
        "description": "Extraiga imágenes de PDF para utilizarlas en otros documentos, sitios web o presentaciones.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "¿En qué formatos se extraen las imágenes?",
        "answer": "Las imágenes se extraen en su formato nativo (JPEG, PNG, etc.) cuando es posible, o se convierten a PNG si se trata de datos de imagen sin procesar."
      },
      {
        "question": "¿Por qué faltan algunas imágenes?",
        "answer": "Las imágenes pequeñas por debajo del umbral de tamaño se filtran automáticamente. Ajuste la configuración del filtro para extraer imágenes más pequeñas."
      },
      {
        "question": "¿Puedo extraer imágenes de PDF escaneados?",
        "answer": "Los PDF escaneados suelen contener el escaneo como una sola imagen grande por página. Utilice la herramienta PDF a Imagen en su lugar para la conversión página por página."
      }
    ]
  },
  "find-and-redact": {
    "title": "Buscar y censurar",
    "metaDescription": "Busca y censura texto en todas las páginas de un PDF. Realice censura por lotes de información confidencial como números de cuenta, nombres y más.",
    "keywords": [
      "censurar pdf",
      "buscar y censurar",
      "censurar por lotes",
      "eliminar texto de pdf",
      "ofuscar pdf",
      "ocultar datos confidenciales"
    ],
    "description": "\n      <p>Buscar y censurar le permite buscar texto, números o patrones específicos en todas las páginas de su PDF y ofuscar todas las coincidencias a la vez. Es perfecto para eliminar información confidencial como números de cuenta, nombres, direcciones o cualquier dato confidencial.</p>\n      <p>Previsualice todas las coincidencias antes de aplicar la censura y elija selectivamente qué elementos desea ocultar. Admite búsqueda con distinción de mayúsculas y minúsculas, coincidencia de palabras completas y expresiones regulares para patrones de búsqueda avanzados.</p>\n      <p>Todo el procesamiento se realiza en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para seleccionarlo."
      },
      {
        "step": 2,
        "title": "Buscar texto",
        "description": "Introduzca el texto, número o patrón de expresión regular que desea buscar y censurar."
      },
      {
        "step": 3,
        "title": "Revisar y seleccionar",
        "description": "Previsualice todas las coincidencias encontradas y seleccione cuáles desea censurar."
      },
      {
        "step": 4,
        "title": "Aplicar censura",
        "description": "Personalice la apariencia del bloque de censura y aplíquelo a las coincidencias seleccionadas."
      }
    ],
    "useCases": [
      {
        "title": "Cumplimiento de privacidad",
        "description": "Censure información personal para cumplir con normativas como RGPD, HIPAA u otras regulaciones.",
        "icon": "shield"
      },
      {
        "title": "Documentos legales",
        "description": "Elimine datos confidenciales de documentos legales antes de compartirlos públicamente.",
        "icon": "scale"
      },
      {
        "title": "Registros financieros",
        "description": "Oculte números de cuenta, números de seguridad social o datos financieros en extractos bancarios.",
        "icon": "credit-card"
      }
    ],
    "faq": [
      {
        "question": "¿La censura es permanente?",
        "answer": "Sí, la censura elimina de forma permanente el texto subyacente. El contenido original no se puede recuperar. Mantenga siempre una copia de seguridad del archivo original."
      },
      {
        "question": "¿Puedo censurar imágenes o texto escaneado?",
        "answer": "Esta herramienta funciona con archivos PDF basados en texto digital. Para documentos escaneados, necesitará utilizar la censura manual basada en áreas."
      },
      {
        "question": "¿Puedo personalizar la apariencia de la censura?",
        "answer": "Sí, puede establecer el color de la censura (usualmente negro), añadir bordes y, opcionalmente, incluir un texto de reemplazo como \"[CENSURADO]\"."
      },
      {
        "question": "¿Cómo funciona la búsqueda por expresiones regulares (regex)?",
        "answer": "Active la opción \"Usar expresión regular\" para buscar utilizando patrones de regex. Por ejemplo, \\d{4}-\\d{4}-\\d{4}-\\d{4} para encontrar números de tarjetas de crédito."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF a Word",
    "metaDescription": "Convierte PDF a documentos de Word (DOCX) editables. Preserva el formato y el diseño original.",
    "keywords": [
      "pdf a word",
      "convertir pdf a docx",
      "pdf a doc",
      "pdf editable",
      "conversor de pdf a word"
    ],
    "description": "\n      <p>PDF a Word convierte sus documentos PDF en archivos editables de Microsoft Word (DOCX). La herramienta preserva al máximo la distribución, el formato, las imágenes y el flujo de texto originales.</p>\n      <p>Edite fácilmente el contenido de sus PDF en Word sin tener que volver a escribir nada. Perfecto para contratos, informes y currículums.</p>\n      <p>Toda la conversión se realiza localmente en su navegador mediante tecnología WebAssembly, garantizando que sus documentos nunca salgan de su dispositivo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para seleccionarlo."
      },
      {
        "step": 2,
        "title": "Convertir",
        "description": "Espere a que se complete el proceso de conversión de su documento."
      },
      {
        "step": 3,
        "title": "Descargar documento de Word",
        "description": "Descargue su archivo DOCX completamente editable."
      }
    ],
    "useCases": [
      {
        "title": "Editar contratos",
        "description": "Convierta contratos PDF a Word para realizar modificaciones y revisiones de texto.",
        "icon": "file-text"
      },
      {
        "title": "Actualización de currículum",
        "description": "Actualice currículums antiguos en PDF convirtiéndolos a Word para cambiar datos rápidamente.",
        "icon": "user"
      },
      {
        "title": "Reutilización de contenido",
        "description": "Extraiga contenido e información de informes en PDF para utilizarlos en otros documentos.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "¿Se preserva el formato?",
        "answer": "Sí, la herramienta tiene como objetivo conservar el diseño, las fuentes y las imágenes de la forma más fiel posible al documento original."
      },
      {
        "question": "¿Puedo convertir PDF escaneados?",
        "answer": "Los PDF escaneados se convertirán como imágenes dentro de Word a menos que aplique un proceso de OCR (reconocimiento óptico de caracteres) primero."
      },
      {
        "question": "¿Es compatible con programas de oficina?",
        "answer": "Sí, el archivo de salida es un documento estándar .docx compatible con Microsoft Word, WPS Office, Google Docs y LibreOffice."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF a Markdown",
    "metaDescription": "Convierte PDF al formato Markdown. Extrae texto y preserva la estructura como encabezados y listas.",
    "keywords": [
      "pdf a markdown",
      "convertir pdf a md",
      "extraccion de texto pdf",
      "conversor markdown",
      "pdf a texto"
    ],
    "description": "\n      <p>PDF a Markdown convierte sus documentos PDF en archivos Markdown limpios y bien estructurados. La herramienta extrae el contenido de texto de manera inteligente e intenta conservar elementos de formato como encabezados, listas y párrafos.</p>\n      <p>Es perfecto para convertir documentos PDF a formatos editables destinados a documentación, toma de notas o sistemas de gestión de contenido (CMS) que admiten Markdown.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para seleccionarlo."
      },
      {
        "step": 2,
        "title": "Configurar opciones",
        "description": "Establezca el rango de páginas, elija si desea incluir números de página y ajuste la configuración de saltos de línea."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Haga clic en Convertir para generar su archivo Markdown y descargarlo."
      }
    ],
    "useCases": [
      {
        "title": "Documentación",
        "description": "Convierta manuales y guías en PDF a Markdown para integrarlos en documentación con control de versiones.",
        "icon": "file-text"
      },
      {
        "title": "Toma de notas",
        "description": "Extraiga contenido de libros y artículos en PDF para incorporarlo a su sistema personal de toma de notas.",
        "icon": "edit-3"
      },
      {
        "title": "Migración de contenido",
        "description": "Migre contenidos de documentos PDF a plataformas de CMS que admitan Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "¿Se conserva el formato?",
        "answer": "La herramienta intenta detectar los encabezados basándose en el tamaño de fuente, así como las listas numeradas o con viñetas. Las distribuciones complejas pueden requerir ajustes manuales."
      },
      {
        "question": "¿Puedo convertir páginas específicas?",
        "answer": "Sí, puede especificar un rango de páginas como \"1-3, 5, 7\" para convertir únicamente dichas páginas."
      },
      {
        "question": "¿Funciona con PDF escaneados?",
        "answer": "Los PDF escaneados contienen imágenes de páginas en lugar de texto digital. Utilice primero nuestra herramienta OCR para extraer el texto antes de convertir a Markdown."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Creador de folletos PDF",
    "metaDescription": "Crea diseños de folletos en PDF para imprimir. Organiza las páginas para encuadernación de tipo revistilla (saddle-stitch) con múltiples opciones de cuadrícula.",
    "keywords": [
      "folleto pdf",
      "creador de folletos",
      "imprimir folleto",
      "encuadernacion grapada",
      "imposicion de paginas"
    ],
    "description": "\n      <p>Creador de folletos PDF organiza las páginas de su documento PDF en diseños de folletos listos para impresión y plegado. Es ideal para crear folletos publicitarios, fanzines y publicaciones con encuadernación grapada o plegada.</p>\n      <p>Elija entre varios modos de cuadrícula (1x2, 2x2, 2x4, 4x4), tamaños de papel y opciones de orientación. La herramienta gestiona automáticamente la imposición de páginas para una secuencia de plegado correcta.</p>\n      <p>Todo el procesamiento se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Suba el documento PDF que desea convertir en un folleto."
      },
      {
        "step": 2,
        "title": "Elegir diseño",
        "description": "Seleccione el modo de cuadrícula, el tamaño del papel, la orientación y las opciones de rotación."
      },
      {
        "step": 3,
        "title": "Crear y descargar",
        "description": "Genere la plantilla de folleto resultante y descárguela para proceder a su impresión."
      }
    ],
    "useCases": [
      {
        "title": "Folletos",
        "description": "Cree folletos listos para plegar a partir de documentos PDF estándar.",
        "icon": "book-open"
      },
      {
        "title": "Fanzines",
        "description": "Produzca fanzines autoeditados con una imposición de páginas correcta para su grapado.",
        "icon": "book"
      },
      {
        "title": "Programas de eventos",
        "description": "Cree folletos profesionales de programas e información para sus eventos.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es la encuadernación a caballete o grapada (saddle-stitch)?",
        "answer": "Es un método de encuadernación donde los pliegos doblados se anidan unos dentro de otros y se grapan a lo largo del pliegue central."
      },
      {
        "question": "¿Qué modo de cuadrícula debo utilizar?",
        "answer": "El formato 1x2 es el estándar para folletos comunes. Utilice 2x2 o superior para imprimir varios pliegos en una sola hoja y ahorrar papel."
      },
      {
        "question": "¿Puedo previsualizar el diseño?",
        "answer": "Sí, la herramienta proporciona una vista previa visual interactiva antes de generar el folleto final."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rasterizar PDF",
    "metaDescription": "Convierte páginas de PDF en imágenes de alta calidad. Exporta a PNG, JPEG o WebP con ajustes personalizados de DPI.",
    "keywords": [
      "rasterizar pdf",
      "pdf a imagen",
      "pdf a png",
      "pdf a jpeg",
      "convertir paginas pdf"
    ],
    "description": "\n      <p>Rasterizar PDF convierte las páginas de su documento PDF en imágenes rasterizadas de alta resolución. Elija entre los formatos de salida PNG, JPEG o WebP con control total sobre la configuración de calidad y DPI (puntos por pulgada).</p>\n      <p>Es perfecto para crear miniaturas de previsualización, gráficos para redes sociales o para archivar contenidos de PDF en formato de imagen protegida. Admite la selección de rangos de páginas y el procesamiento por lotes.</p>\n      <p>Todo el procesamiento se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para seleccionarlo."
      },
      {
        "step": 2,
        "title": "Configurar salida",
        "description": "Seleccione los DPI, el formato de salida (PNG/JPEG/WebP), la calidad y el rango de páginas."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Procese las páginas y descargue las imágenes de forma individual o en un archivo ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Redes sociales",
        "description": "Convierta diapositivas o páginas de PDF en imágenes optimizadas para publicarlas en redes sociales.",
        "icon": "share-2"
      },
      {
        "title": "Miniaturas",
        "description": "Genere imágenes de vista previa en miniatura para catalogar documentos PDF.",
        "icon": "image"
      },
      {
        "title": "Publicación web",
        "description": "Convierta contenidos de archivos PDF a formatos de imagen optimizados para la web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Qué resolución de DPI debo usar?",
        "answer": "Se recomienda 72 DPI para pantallas, 150 DPI para uso general y 300 DPI o superior para calidad de impresión física."
      },
      {
        "question": "¿Qué formato de imagen es mejor?",
        "answer": "PNG es ideal para conservar calidad y transparencia; JPEG es óptimo para archivos de tamaño reducido; WebP es idóneo para el uso moderno en la web."
      },
      {
        "question": "¿Puedo convertir páginas específicas?",
        "answer": "Sí, puede especificar rangos de páginas como \"1-5, 8, 10-15\" para rasterizar únicamente dichas páginas."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown a PDF",
    "metaDescription": "Convierte archivos Markdown en documentos PDF con un formato elegante. Soporte para GitHub Flavored Markdown y resaltado de sintaxis.",
    "keywords": [
      "markdown a pdf",
      "md a pdf",
      "convertir markdown",
      "gfm a pdf",
      "conversor markdown"
    ],
    "description": "\n      <p>Markdown a PDF convierte sus archivos Markdown en documentos PDF con estilos profesionales. Es compatible con las especificaciones CommonMark y GitHub Flavored Markdown (GFM), incluyendo tablas, listas de tareas y bloques de código.</p>\n      <p>Elija entre múltiples temas visuales (claro, oscuro, GitHub) y configure el tamaño de página y los márgenes de impresión. Los bloques de código se colorean mediante resaltado de sintaxis para una mejor legibilidad.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que su contenido permanezcan privado.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo Markdown",
        "description": "Suba su archivo con extensión .md o .markdown."
      },
      {
        "step": 2,
        "title": "Elegir tema",
        "description": "Seleccione un tema visual y configure los parámetros de página."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Genere el documento PDF con estilo y descárguelo."
      }
    ],
    "useCases": [
      {
        "title": "Documentación técnica",
        "description": "Convierta archivos README y documentación en PDF fáciles de compartir.",
        "icon": "file-text"
      },
      {
        "title": "Exportar notas",
        "description": "Exporte sus notas de Markdown a PDF para imprimirlas o compartirlas con terceros.",
        "icon": "edit-3"
      },
      {
        "title": "Informes profesionales",
        "description": "Cree informes estructurados a partir de Markdown con un diseño visual impecable.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "¿Se admite la variante GitHub Flavored Markdown?",
        "answer": "Sí, las tablas, listas de tareas, textos tachados y otras características específicas de GFM son totalmente compatibles."
      },
      {
        "question": "¿Puedo personalizar el diseño visual?",
        "answer": "Puede elegir entre varios temas preestablecidos o añadir su propio código CSS personalizado para un control total."
      },
      {
        "question": "¿Se resaltan los bloques de código?",
        "answer": "Sí, los bloques de código incluyen resaltado de sintaxis automático para los lenguajes de programación más comunes."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ a PDF",
    "metaDescription": "Convierte archivos de cómic archivados (CBZ) a PDF. Preserva el orden de las imágenes y la calidad para cómics digitales.",
    "keywords": [
      "cbz a pdf",
      "comic a pdf",
      "convertir cbz",
      "conversor de comics",
      "conversor cbz"
    ],
    "description": "\n      <p>CBZ a PDF convierte archivos de archivo de cómic (Comic Book Archive) en documentos PDF. La herramienta extrae todas las imágenes del archivo CBZ y las compila en un PDF manteniendo el orden de lectura correcto.</p>\n      <p>Elija entre varias opciones de tamaño de página, incluyendo las dimensiones originales de las imágenes o tamaños estandarizados de cómics. Es ideal para leer cómics en dispositivos que admiten PDF pero no el formato CBZ.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que sus cómics permanezcan privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo CBZ",
        "description": "Suba su archivo de cómic digital con extensión .cbz."
      },
      {
        "step": 2,
        "title": "Seleccionar opciones",
        "description": "Configure las preferencias de tamaño de página y calidad de la imagen."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Realice la conversión a PDF y descargue su cómic digital."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilidad con lectores electrónicos",
        "description": "Convierta archivos CBZ a PDF para poder leerlos en dispositivos de e-reading que solo admiten PDF.",
        "icon": "book"
      },
      {
        "title": "Archivo de cómics",
        "description": "Cree archivos PDF estables de su colección digital de cómics.",
        "icon": "archive"
      },
      {
        "title": "Preparación para impresión",
        "description": "Convierta cómics digitales a PDF listos para imprimir físicamente.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es el formato CBZ?",
        "answer": "CBZ es un archivo comprimido en formato ZIP que contiene las páginas del cómic como archivos de imagen individuales, renombrado con la extensión .cbz."
      },
      {
        "question": "¿Se conserva la calidad de las imágenes?",
        "answer": "Sí, las imágenes se integran en el documento PDF conservando su resolución y calidad originales."
      },
      {
        "question": "¿Se admiten carpetas anidadas?",
        "answer": "Sí, la herramienta extrae y ordena de forma secuencial las imágenes contenidas en cualquier subcarpeta dentro del archivo."
      }
    ]
  },
  "font-to-outline": {
    "title": "Trazar fuentes de PDF",
    "metaDescription": "Elimina las dependencias de fuentes de los documentos PDF convirtiendo las páginas a imágenes de alta calidad. Garantiza la compatibilidad en todos los sistemas.",
    "keywords": [
      "trazar fuentes pdf",
      "convertir fuentes a contorno",
      "vectorizar fuentes pdf",
      "eliminar fuentes pdf",
      "acoplar fuentes pdf",
      "compatibilidad de fuentes pdf"
    ],
    "description": "\n      <p>Trazar fuentes de PDF elimina todas las dependencias de fuentes de su archivo PDF mediante la conversión de cada página en un contenido rasterizado de alta calidad. Esto garantiza que su documento se visualice exactamente igual en cualquier sistema, incluso si las fuentes originales no están instaladas.</p>\n      <p>La herramienta procesa cada página a los DPI seleccionados (de 150 a 600), eliminando las fuentes incrustadas mientras conserva el aspecto visual exacto. Opcionalmente, puede añadir una capa de texto invisible para mantener la capacidad de búsqueda.</p>\n      <p>Este proceso es indispensable para la preparación de archivos para imprenta, garantizar la compatibilidad multiplataforma y evitar problemas de licencias de fuentes al compartir documentos. Todo el procesamiento se realiza en su navegador de forma local.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Suba el archivo PDF que contiene las fuentes que desea eliminar o trazar."
      },
      {
        "step": 2,
        "title": "Configurar calidad",
        "description": "Elija los DPI (se recomiendan 300 para impresión, 150 para pantalla). Active la opción de texto buscable si la requiere."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Procese el archivo y descargue el PDF resultante libre de dependencias de fuentes."
      }
    ],
    "useCases": [
      {
        "title": "Preparación para imprenta",
        "description": "Evite errores de visualización o sustitución de tipografías en imprentas comerciales al eliminar la dependencia de fuentes.",
        "icon": "printer"
      },
      {
        "title": "Compartido multiplataforma",
        "description": "Comparta documentos con la total seguridad de que se verán idénticos en cualquier dispositivo, sin importar las fuentes instaladas.",
        "icon": "share-2"
      },
      {
        "title": "Licencias de fuentes",
        "description": "Elimine las fuentes incrustadas para evitar infracciones de derechos de autor y licencias al distribuir documentos.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo funciona este proceso?",
        "answer": "La herramienta renderiza cada página a alta resolución (según los DPI que elija) y vuelve a ensamblar el PDF a partir de estas imágenes, descartando los archivos de fuentes originales pero preservando la apariencia visual exacta."
      },
      {
        "question": "¿Podré seguir seleccionando texto después de la conversión?",
        "answer": "Por defecto, no, ya que el texto pasa a formar parte de una imagen. Sin embargo, puede activar la opción \"Preservar texto buscable\" para añadir una capa invisible que mantenga las funciones de búsqueda y copia de texto."
      },
      {
        "question": "¿Qué cantidad de DPI debo elegir?",
        "answer": "Se recomiendan 300 DPI para obtener una calidad apta para impresión física. 150 DPI es suficiente para visualización en pantalla y reduce el tamaño del archivo. 600 DPI ofrece la máxima calidad pero genera archivos muy grandes."
      },
      {
        "question": "¿Aumentará el tamaño del archivo?",
        "answer": "Depende de los DPI y el contenido. 150 DPI suele reducir el tamaño del archivo; 300 DPI puede incrementarlo y 600 DPI aumentará el peso de manera muy notable. Se aplica compresión automáticamente para optimizar el resultado."
      },
      {
        "question": "¿Este proceso es reversible?",
        "answer": "No, los datos tipográficos originales se eliminan permanentemente. Mantenga siempre una copia de seguridad del documento original si necesita volver a editar el texto con las fuentes originales."
      },
      {
        "question": "¿Qué ocurre con los gráficos vectoriales?",
        "answer": "Los gráficos vectoriales (formas, líneas) presentes en el PDF original se rasterizarán junto con el texto. La calidad visual se preserva de acuerdo con la resolución de DPI seleccionada."
      }
    ]
  },
  "extract-tables": {
    "title": "Extraer tablas de PDF",
    "metaDescription": "Detecta y extrae tablas de documentos PDF. Exporta los datos resultantes a formatos JSON, Markdown o CSV.",
    "keywords": [
      "extraer tablas pdf",
      "extraccion de tablas de pdf",
      "pdf a csv",
      "pdf a excel",
      "deteccion de tablas"
    ],
    "description": "\n      <p>Extraer tablas de PDF detecta datos organizados en tablas dentro de sus documentos PDF y los exporta en formatos estructurados. Elija JSON para integraciones de desarrollo, Markdown para documentación de texto o CSV para editar en hojas de cálculo.</p>\n      <p>La herramienta utiliza algoritmos de detección inteligentes para identificar estructuras tabulares incluso en documentos con diseños complejos. Defina rangos de páginas y ajuste los parámetros de detección para obtener resultados óptimos.</p>\n      <p>Todo el procesamiento se realiza localmente en su navegador, garantizando la privacidad absoluta de sus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Suba el documento PDF que contiene las tablas que desea extraer."
      },
      {
        "step": 2,
        "title": "Configurar la detección",
        "description": "Establezca el rango de páginas y configure los umbrales mínimos de filas y columnas."
      },
      {
        "step": 3,
        "title": "Exportar y descargar",
        "description": "Seleccione el formato de salida deseado (JSON/Markdown/CSV) y realice la descarga."
      }
    ],
    "useCases": [
      {
        "title": "Análisis de datos",
        "description": "Extraiga datos tabulares para su análisis en herramientas de hojas de cálculo o bases de datos.",
        "icon": "bar-chart"
      },
      {
        "title": "Procesamiento de informes",
        "description": "Extraiga tablas de informes y balances en PDF para utilizarlas en flujos de trabajo adicionales.",
        "icon": "file-text"
      },
      {
        "title": "Documentación",
        "description": "Convierta las tablas de sus PDF a formato Markdown para incluirlas en documentación técnica.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "¿Es capaz de detectar tablas complejas?",
        "answer": "La herramienta funciona de forma óptima con tablas de cuadrícula simple. Aquellas celdas complejas que estén combinadas pueden requerir ciertos ajustes manuales posteriores."
      },
      {
        "question": "¿Qué ocurre si no se encuentra ninguna tabla?",
        "answer": "Intente reducir el umbral de columnas o filas mínimas, o compruebe si el documento PDF contiene estructuras de tablas reales y no solo texto suelto."
      },
      {
        "question": "¿Puedo realizar la extracción en páginas específicas?",
        "answer": "Sí, puede especificar un rango de páginas para delimitar el análisis únicamente a las zonas que contienen las tablas."
      }
    ]
  },
  "ocg-manager": {
    "title": "Gestor de capas PDF (OCG)",
    "metaDescription": "Administra las capas de un PDF (Grupos de Contenido Opcional). Visualice, active, añada, elimine y renombre capas en sus documentos.",
    "keywords": [
      "capas pdf",
      "gestor ocg pdf",
      "grupos de contenido opcional",
      "visibilidad de capas pdf",
      "administrar capas pdf"
    ],
    "description": "\n      <p>El Gestor de capas PDF le permite visualizar y administrar los Grupos de Contenido Opcional (OCG) presentes en sus documentos PDF. Las capas OCG se utilizan habitualmente en planos técnicos, mapas y documentos complejos para organizar el contenido en niveles activables y desactivables.</p>\n      <p>Visualice todas las capas de su PDF, alterne su visibilidad de pantalla o impresión, añada nuevas capas, elimine las innecesarias o renombre las existentes. Esta herramienta es esencial para profesionales que trabajan con PDF estructurados por capas, como planos arquitectónicos, exportaciones de CAD y documentos listos para imprenta.</p>\n      <p>Todo el procesamiento se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Suba un archivo PDF que contenga capas (OCG) o uno al cual desee añadir nuevas capas."
      },
      {
        "step": 2,
        "title": "Visualizar capas",
        "description": "La herramienta listará automáticamente todas las capas encontradas en el documento junto con su estado de visibilidad."
      },
      {
        "step": 3,
        "title": "Administrar capas",
        "description": "Active o desactive la visibilidad de las capas, renombre capas existentes, añada niveles nuevos o elimine las capas innecesarias."
      },
      {
        "step": 4,
        "title": "Guardar y descargar",
        "description": "Descargue su archivo PDF modificado con todos los cambios de capas aplicados."
      }
    ],
    "useCases": [
      {
        "title": "Planos técnicos",
        "description": "Gestione las capas de exportaciones de CAD para mostrar u ocultar cotas, anotaciones o vistas específicas.",
        "icon": "ruler"
      },
      {
        "title": "Edición de mapas",
        "description": "Alterne diferentes capas de mapas como topografía, carreteras y etiquetas para impresiones personalizadas.",
        "icon": "map"
      },
      {
        "title": "Preparación para impresión",
        "description": "Prepare PDF por capas para impresión desactivando los elementos que correspondan a diferentes versiones del trabajo.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué son las capas PDF (OCG)?",
        "answer": "Los Grupos de Contenido Opcional (OCG, por sus siglas en inglés) son capas dentro de un PDF que pueden mostrarse u ocultarse. Se utilizan comúnmente en planos de ingeniería, mapas y diseños complejos."
      },
      {
        "question": "¿Por qué mi PDF no muestra ninguna capa?",
        "answer": "No todos los archivos PDF contienen capas. Las capas se añaden habitualmente al generar el PDF desde aplicaciones de diseño profesional o herramientas CAD."
      },
      {
        "question": "¿Los cambios en las capas alteran el contenido original?",
        "answer": "Modificar la visibilidad de las capas solo altera lo que se muestra en pantalla o se imprime. El contenido real permanece intacto dentro del documento."
      }
    ]
  },
  "pdf-reader": {
    "title": "Lector de PDF",
    "metaDescription": "Lector de PDF en línea gratuito. Visualice, navegue, amplíe, rote e imprima documentos PDF directamente en su navegador.",
    "keywords": [
      "lector pdf",
      "visor pdf",
      "ver pdf online",
      "leer pdf",
      "visor pdf navegador"
    ],
    "description": "\n      <p>Lector de PDF es un visor de PDF completo que le permite leer y navegar por sus documentos directamente en su navegador. No requiere instalación de software: simplemente suba su archivo PDF y comience a leer.</p>\n      <p>Navegue de forma cómoda entre páginas, aplique zoom de ampliación o reducción, rote la orientación de la vista y utilice el modo de pantalla completa para una lectura sin distracciones. También puede imprimir los documentos o descargarlos para su acceso sin conexión.</p>\n      <p>Toda la visualización se ejecuta de manera local en su navegador. Sus documentos nunca se suben a ningún servidor, garantizando una privacidad absoluta.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Abrir su PDF",
        "description": "Haga clic para subir o arrastre y suelte un archivo PDF para abrirlo inmediatamente en el lector."
      },
      {
        "step": 2,
        "title": "Navegar por las páginas",
        "description": "Utilice los controles de página para avanzar a la siguiente, retroceder a la anterior o ir directamente a un número de página específico."
      },
      {
        "step": 3,
        "title": "Ajustar la vista",
        "description": "Ajuste el zoom de ampliación o reducción, rote la visualización o entre en el modo de pantalla completa para una lectura confortable."
      },
      {
        "step": 4,
        "title": "Imprimir o descargar",
        "description": "Imprima el documento directamente o descárguelo para guardarlo en su almacenamiento local y consultarlo sin conexión."
      }
    ],
    "useCases": [
      {
        "title": "Revisión de documentos",
        "description": "Revise de forma rápida y sencilla documentos PDF sin necesidad de instalar visores externos.",
        "icon": "book-open"
      },
      {
        "title": "Lectura en dispositivos móviles",
        "description": "Lea libros y documentos PDF de forma cómoda desde cualquier teléfono o tableta con navegador web.",
        "icon": "smartphone"
      },
      {
        "title": "Vista previa rápida",
        "description": "Previsualice el contenido de sus PDF antes de decidir descargarlos o imprimirlos.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Es seguro mi documento?",
        "answer": "Sí, el documento se procesa en la memoria local de su navegador y nunca se envía a ningún servidor externo."
      },
      {
        "question": "¿Puedo realizar anotaciones o editar el PDF?",
        "answer": "Esta herramienta está destinada exclusivamente a la visualización. Utilice nuestras herramientas Firmar PDF o Anotar PDF para realizar ediciones."
      },
      {
        "question": "¿Funciona en dispositivos móviles?",
        "answer": "Sí, el Lector de PDF es compatible y funciona en cualquier smartphone o tableta con un navegador web moderno."
      }
    ]
  }
};
