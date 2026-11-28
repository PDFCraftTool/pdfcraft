/**
 * Contenu des outils en français pour le SEO
 * Contient des descriptions détaillées, des instructions, des cas d'utilisation et des FAQ pour les 67 outils
 * Exigences : 4.2-4.5 - Contenu de la page de l'outil (description, mode d'emploi, cas d'utilisation, FAQ)
 */

import { ToolContent } from '@/types/tool';
import { toolContentEn } from './en';

/**
 * Carte du contenu des outils en français
 * Chaque outil a : titre, méta-description, mots-clés, description, mode d'emploi (3+ étapes), cas d'utilisation (3+ scénarios), FAQ (3+ questions)
 */
export const toolContentFr: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Outil PDF Tout-en-un",
    "metaDescription": "Éditeur PDF tout-en-un : fusionner, diviser, organiser, supprimer, faire pivoter et extraire des pages en un seul outil puissant.",
    "keywords": [
      "outil pdf multi",
      "éditeur pdf",
      "fusionner pdf",
      "diviser pdf",
      "organiser pdf",
      "pdf tout en un"
    ],
    "description": "\n      <p>L'Outil PDF Tout-en-un est votre solution complète pour toutes les tâches de gestion de pages PDF. Cet outil puissant combine plusieurs opérations PDF en une seule interface intuitive, vous faisant gagner du temps et de l'énergie.</p>\n      <p>Que vous ayez besoin de fusionner plusieurs documents, de diviser un gros PDF en fichiers plus petits, de réorganiser des pages, de supprimer du contenu indésirable, de faire pivoter des pages ou d'extraire des sections spécifiques, cet outil gère tout cela sans changer d'application.</p>\n      <p>Tout le traitement s'effectue directement dans votre navigateur, garantissant que vos documents restent privés et sécurisés. Aucun fichier n'est téléchargé sur un serveur.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF dans la zone de téléchargement, ou cliquez pour parcourir et sélectionner des fichiers depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Choisissez votre opération",
        "description": "Sélectionnez parmi les opérations disponibles : fusionner, diviser, organiser, supprimer des pages, faire pivoter, ajouter des pages blanches ou extraire des pages."
      },
      {
        "step": 3,
        "title": "Configurez les options",
        "description": "Ajustez les paramètres spécifiques à l'opération choisie, tels que les plages de pages, les angles de rotation ou l'ordre de fusion."
      },
      {
        "step": 4,
        "title": "Traitez et téléchargez",
        "description": "Cliquez sur le bouton de traitement et téléchargez votre PDF modifié une fois l'opération terminée."
      }
    ],
    "useCases": [
      {
        "title": "Préparation de documents",
        "description": "Préparez des documents pour soumission en supprimant les pages inutiles, en réorganisant le contenu et en combinant plusieurs fichiers.",
        "icon": "file-check"
      },
      {
        "title": "Assemblage de rapports",
        "description": "Combinez plusieurs sections de rapport, ajoutez des pages de couverture et organisez les chapitres en un seul document professionnel.",
        "icon": "book-open"
      },
      {
        "title": "Gestion d'archives",
        "description": "Divisez de gros fichiers d'archive en sections gérables, extrayez les pages pertinentes et réorganisez les documents historiques.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Combien de PDF puis-je traiter à la fois ?",
        "answer": "Vous pouvez télécharger et traiter jusqu'à 10 fichiers PDF simultanément, avec une taille combinée maximale de 500 Mo."
      },
      {
        "question": "Mes signets seront-ils conservés ?",
        "answer": "Oui, lors de la fusion de PDF, l'outil conserve les signets existants et peut optionnellement les combiner en une structure de signets unifiée."
      },
      {
        "question": "Y a-t-il une limite de pages ?",
        "answer": "Il n'y a pas de limite stricte de pages. L'outil peut gérer des documents de centaines de pages, bien que les fichiers très volumineux puissent prendre plus de temps à traiter."
      }
    ]
  },
  "merge-pdf": {
    "title": "Fusionner PDF",
    "metaDescription": "Combinez plusieurs fichiers PDF en un seul document. Fusionneur PDF en ligne gratuit avec réorganisation par glisser-déposer.",
    "keywords": [
      "fusionner pdf",
      "combiner pdf",
      "joindre pdf",
      "assembleur pdf",
      "concaténer pdf"
    ],
    "description": "\n      <p>Fusionner PDF vous permet de combiner plusieurs documents PDF en un seul fichier rapidement et facilement. Que vous consolidiez des rapports, combiniez des documents numérisés ou assembliez une présentation, cet outil rend le processus fluide.</p>\n      <p>Il suffit de télécharger vos fichiers, de les organiser dans l'ordre souhaité par glisser-déposer, et de les fusionner en un document cohérent. L'outil préserve la qualité de vos fichiers originaux et peut optionnellement conserver les signets de chaque document source.</p>\n      <p>Toute la fusion se fait localement dans votre navigateur, assurant une confidentialité totale pour vos documents sensibles.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers PDF",
        "description": "Glissez-déposez plusieurs fichiers PDF dans la zone de téléchargement, ou cliquez pour sélectionner des fichiers depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Organisez l'ordre",
        "description": "Glissez-déposez les vignettes de fichiers pour les organiser dans l'ordre souhaité."
      },
      {
        "step": 3,
        "title": "Fusionnez et téléchargez",
        "description": "Cliquez sur le bouton Fusionner pour combiner tous les fichiers, puis téléchargez votre PDF fusionné."
      }
    ],
    "useCases": [
      {
        "title": "Combiner des rapports",
        "description": "Fusionnez des rapports mensuels ou trimestriels en un seul document annuel pour faciliter la distribution et l'archivage.",
        "icon": "file-text"
      },
      {
        "title": "Assembler des portfolios",
        "description": "Combinez plusieurs documents de projet, certificats ou exemples de travaux en un portfolio professionnel.",
        "icon": "briefcase"
      },
      {
        "title": "Consolider des factures",
        "description": "Fusionnez plusieurs factures ou reçus en un seul document pour la comptabilité et la tenue de registres.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "Combien de PDF puis-je fusionner ?",
        "answer": "Vous pouvez fusionner jusqu'à 100 fichiers PDF à la fois, avec une taille totale combinée allant jusqu'à 500 Mo."
      },
      {
        "question": "Le PDF fusionné conservera-t-il la qualité originale ?",
        "answer": "Oui, le processus de fusion préserve la qualité originale de tous les documents sans aucune compression ni perte de qualité."
      },
      {
        "question": "Puis-je fusionner des PDF protégés par mot de passe ?",
        "answer": "Les PDF protégés par mot de passe doivent d'abord être déchiffrés. Utilisez notre outil Déchiffrer PDF pour supprimer le mot de passe avant la fusion."
      }
    ]
  },
  "split-pdf": {
    "title": "Diviser PDF",
    "metaDescription": "Divisez des fichiers PDF en plusieurs documents. Extrayez des pages spécifiques ou divisez par plages de pages.",
    "keywords": [
      "diviser pdf",
      "séparer pdf",
      "scinder pdf",
      "extraire pages",
      "découpeur pdf"
    ],
    "description": "\n      <p>Diviser PDF vous permet de séparer un seul document PDF en plusieurs fichiers plus petits. C'est parfait pour extraire des chapitres spécifiques, séparer des documents combinés ou créer des fichiers individuels à partir d'un PDF multipages.</p>\n      <p>Vous pouvez diviser par plages de pages spécifiques, extraire des pages individuelles ou diviser le document à intervalles réguliers. L'outil fournit un aperçu visuel de vos pages, facilitant la sélection exacte de ce dont vous avez besoin.</p>\n      <p>Tout le traitement est effectué localement dans votre navigateur, garantissant que vos documents restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour parcourir et sélectionner le fichier que vous souhaitez diviser."
      },
      {
        "step": 2,
        "title": "Sélectionnez la méthode de division",
        "description": "Choisissez comment diviser : par plages de pages, extraire des pages spécifiques ou diviser à intervalles réguliers."
      },
      {
        "step": 3,
        "title": "Définissez les plages de pages",
        "description": "Entrez les numéros de page ou les plages que vous souhaitez extraire (ex: 1-5, 8, 10-15)."
      },
      {
        "step": 4,
        "title": "Divisez et téléchargez",
        "description": "Cliquez sur Diviser pour créer vos nouveaux fichiers PDF et téléchargez-les individuellement ou sous forme d'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Extraire des chapitres",
        "description": "Divisez un livre ou un manuel en chapitres individuels pour faciliter la lecture ou la distribution.",
        "icon": "book"
      },
      {
        "title": "Séparer des scans combinés",
        "description": "Divisez un document numérisé par lots en fichiers individuels pour chaque document original.",
        "icon": "copy"
      },
      {
        "title": "Créer des documents à distribuer",
        "description": "Extrayez des diapositives ou des pages spécifiques d'une présentation pour créer des supports ciblés.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Puis-je diviser un PDF en pages individuelles ?",
        "answer": "Oui, vous pouvez diviser un PDF en fichiers d'une seule page en sélectionnant l'option \"Diviser chaque page\"."
      },
      {
        "question": "Qu'advient-il des signets lors de la division ?",
        "answer": "Les signets qui tombent dans la plage de pages extraite sont conservés dans les fichiers PDF résultants."
      },
      {
        "question": "Puis-je diviser des PDF protégés par mot de passe ?",
        "answer": "Vous devez d'abord déchiffrer le PDF en utilisant notre outil Déchiffrer PDF avant de le diviser."
      }
    ]
  },
  "grid-combine": {
    "title": "Combiner PDF en Grille",
    "metaDescription": "Combinez plusieurs fichiers PDF sur des pages uniques avec une mise en page en grille flexible. Organisez 2, 4, 6, 9 ou plus de PDF par page avec bordures et espacement.",
    "keywords": [
      "combiner grille",
      "fusionner pdf grille",
      "collage pdf",
      "plusieurs pdf une page",
      "pdf n-up",
      "grille pdf"
    ],
    "description": "\n      <p>L'outil Combiner en Grille offre une façon unique de fusionner plusieurs fichiers PDF séparés sur des pages uniques. Contrairement à l'outil standard \"Fusionner PDF\" qui ajoute simplement les pages, ou l'outil \"N-Up\" qui réorganise les pages d'un seul document, Combiner en Grille prend plusieurs fichiers d'entrée et les dispose côte à côte dans une mise en page en grille personnalisable.</p>\n      <p>Vous pouvez choisir parmi diverses configurations de grille telles que 2x1, 2x2, 3x3, etc. C'est parfait pour comparer plusieurs documents, créer des documents à distribuer à partir de différentes sources ou imprimer des versions compactes de plusieurs fichiers.</p>\n      <p>Personnalisez la sortie en contrôlant la taille de la page, l'orientation, les marges, l'espacement et les bordures. Tout le traitement se fait localement dans votre navigateur pour une confidentialité maximale.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser des fichiers PDF",
        "description": "Téléversez deux ou plusieurs fichiers PDF que vous souhaitez combiner. Vous pouvez les réorganiser dans l'ordre souhaité."
      },
      {
        "step": 2,
        "title": "Choisir la disposition en grille",
        "description": "Sélectionnez votre disposition de grille souhaitée (ex: 2x2 pour 4 fichiers par page, 3x3 pour 9 fichiers par page)."
      },
      {
        "step": 3,
        "title": "Personnaliser l'apparence",
        "description": "Ajustez les paramètres tels que la taille de la page (A4, Lettre), l'orientation, l'espacement entre les éléments et les bordures."
      },
      {
        "step": 4,
        "title": "Combiner et Télécharger",
        "description": "Cliquez sur \"Combiner PDFs\" pour générer votre nouveau document en grille et téléchargez le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Comparaison Visuelle",
        "description": "Placez différentes versions d'un design ou d'un document côte à côte sur une seule page pour une comparaison facile.",
        "icon": "layout-grid"
      },
      {
        "title": "Imprimer des Documents",
        "description": "Combinez plusieurs documents courts ou diapositives sur une seule feuille pour économiser des coûts d'impression.",
        "icon": "printer"
      },
      {
        "title": "Création de Portfolio",
        "description": "Présentez plusieurs fichiers de projet dans un aperçu de grille propre et organisé.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Quelle est la différence avec N-Up ?",
        "answer": "N-Up prend les pages d'UN SEUL PDF et les met sur une feuille. Combiner en Grille prend PLUSIEURS FICHIERS PDF DIFFÉRENTS et les met sur une feuille."
      },
      {
        "question": "Combien de fichiers puis-je combiner ?",
        "answer": "Vous pouvez combiner jusqu'à 100 fichiers selon la mémoire de votre navigateur, mais les dispositions comme 4x4 accueillent jusqu'à 16 fichiers par page."
      },
      {
        "question": "Puis-je ajouter des bordures ?",
        "answer": "Oui, vous pouvez ajouter des bordures autour de chaque fichier PDF et personnaliser la couleur de la bordure."
      }
    ]
  },
  "compress-pdf": {
    "title": "Compresser PDF",
    "metaDescription": "Réduisez la taille des fichiers PDF tout en maintenant la qualité. Compresseur PDF en ligne gratuit pour des fichiers plus légers.",
    "keywords": [
      "compresser pdf",
      "réduire taille pdf",
      "compresseur pdf",
      "alléger pdf",
      "optimiser pdf"
    ],
    "description": "\n      <p>Compresser PDF réduit la taille de fichier de vos documents PDF tout en maintenant une qualité acceptable. C'est essentiel pour les pièces jointes d'e-mails, les téléchargements web ou pour économiser de l'espace de stockage.</p>\n      <p>L'outil offre plusieurs niveaux de compression pour équilibrer la réduction de la taille du fichier et la préservation de la qualité. Vous pouvez choisir une compression agressive pour une réduction maximale ou une compression légère pour maintenir une qualité supérieure.</p>\n      <p>Toute la compression se produit dans votre navigateur, garantissant que vos documents ne quittent jamais votre appareil.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez compresser."
      },
      {
        "step": 2,
        "title": "Choisissez le niveau de compression",
        "description": "Sélectionnez votre niveau préféré : Faible (meilleure qualité), Moyen (équilibré) ou Élevé (taille minimale)."
      },
      {
        "step": 3,
        "title": "Compressez et téléchargez",
        "description": "Cliquez sur Compresser pour réduire la taille du fichier, puis téléchargez votre PDF optimisé."
      }
    ],
    "useCases": [
      {
        "title": "Pièces jointes d'e-mail",
        "description": "Réduisez la taille du PDF pour respecter les limites des pièces jointes et assurer un envoi plus rapide.",
        "icon": "mail"
      },
      {
        "title": "Publication Web",
        "description": "Optimisez les PDF pour le téléchargement web afin d'améliorer les temps de chargement et l'expérience utilisateur.",
        "icon": "globe"
      },
      {
        "title": "Optimisation du stockage",
        "description": "Compressez les documents archivés pour économiser de l'espace disque tout en maintenant l'accessibilité.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "De combien puis-je réduire la taille du fichier ?",
        "answer": "Les résultats varient selon le contenu. Les PDF riches en images peuvent souvent être réduits de 50 à 80%, tandis que les PDF contenant uniquement du texte peuvent voir des réductions plus faibles."
      },
      {
        "question": "La compression affectera-t-elle la qualité du texte ?",
        "answer": "Le texte reste net et lisible à tous les niveaux de compression. Seules les images et les graphiques sont affectés."
      },
      {
        "question": "Puis-je compresser plusieurs PDF à la fois ?",
        "answer": "Oui, vous pouvez télécharger et compresser jusqu'à 10 fichiers PDF simultanément."
      }
    ]
  },
  "edit-pdf": {
    "title": "Éditer PDF",
    "metaDescription": "Éditez des fichiers PDF en ligne. Ajoutez du texte, des images, des annotations, des surlignages et des formes à vos documents.",
    "keywords": [
      "éditer pdf",
      "éditeur pdf",
      "annoter pdf",
      "ajouter texte pdf",
      "modifier pdf"
    ],
    "description": "\n      <p>Éditer PDF fournit un ensemble complet d'outils pour modifier et annoter vos documents PDF. Ajoutez du texte, des images, des formes, des surlignages, des commentaires et plus encore sans avoir besoin de logiciels de bureau coûteux.</p>\n      <p>L'interface intuitive de l'éditeur facilite l'annotation de documents pour révision, l'ajout de notes pour la collaboration, la rédaction d'informations sensibles ou l'amélioration de documents avec du contenu supplémentaire.</p>\n      <p>Toute l'édition se fait localement dans votre navigateur, assurant une confidentialité totale pour vos documents sensibles.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez éditer."
      },
      {
        "step": 2,
        "title": "Sélectionnez l'outil d'édition",
        "description": "Choisissez dans la barre d'outils : texte, surlignage, formes, images, commentaires ou outils de rédaction."
      },
      {
        "step": 3,
        "title": "Faites vos modifications",
        "description": "Cliquez sur le document pour ajouter des annotations, faites glisser pour positionner les éléments et utilisez le panneau de propriétés pour personnaliser."
      },
      {
        "step": 4,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer vos modifications et téléchargez le PDF édité."
      }
    ],
    "useCases": [
      {
        "title": "Révision de documents",
        "description": "Ajoutez des commentaires, des surlignages et des annotations aux documents pour les processus de révision collaborative.",
        "icon": "message-square"
      },
      {
        "title": "Remplissage de formulaires",
        "description": "Remplissez des champs de texte, ajoutez des signatures et complétez des formulaires PDF sans imprimer.",
        "icon": "edit-3"
      },
      {
        "title": "Rédaction de contenu",
        "description": "Supprimez définitivement les informations sensibles des documents avant de les partager.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "Puis-je modifier le texte original du PDF ?",
        "answer": "Cet outil se concentre sur l'ajout d'annotations et de nouveau contenu. Pour éditer le texte existant, vous pourriez avoir besoin du document source original."
      },
      {
        "question": "Mes modifications sont-elles permanentes ?",
        "answer": "Les annotations peuvent être aplaties pour les rendre permanentes, ou conservées comme calques modifiables selon votre préférence."
      },
      {
        "question": "Puis-je annuler mes modifications ?",
        "answer": "Oui, l'éditeur prend en charge la fonctionnalité annuler/rétablir. Vous pouvez également réinitialiser le document original à tout moment avant d'enregistrer."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG en PDF",
    "metaDescription": "Convertissez des images JPG en PDF. Combinez plusieurs fichiers JPG en un seul document PDF.",
    "keywords": [
      "jpg en pdf",
      "jpeg en pdf",
      "convertir jpg",
      "image en pdf",
      "photo en pdf"
    ],
    "description": "\n      <p>JPG en PDF convertit vos images JPEG en documents PDF rapidement et facilement. Que vous ayez une seule photo ou plusieurs images, cet outil crée des fichiers PDF d'aspect professionnel.</p>\n      <p>Vous pouvez combiner plusieurs fichiers JPG en un seul PDF, les organiser dans n'importe quel ordre et personnaliser la taille et l'orientation des pages. La conversion préserve la qualité de l'image tout en créant des fichiers PDF compacts et partageables.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos photos restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les images JPG",
        "description": "Glissez-déposez vos fichiers JPG ou cliquez pour sélectionner des images depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Organisez et configurez",
        "description": "Réorganisez les images en les faisant glisser, et sélectionnez les options de taille de page et d'orientation."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF et télécharger le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Albums photo",
        "description": "Créez des albums photo PDF à partir de photos de vacances ou d'événements pour un partage facile.",
        "icon": "image"
      },
      {
        "title": "Numérisation de documents",
        "description": "Convertissez des photos de documents prises avec un téléphone en fichiers PDF propres.",
        "icon": "camera"
      },
      {
        "title": "Création de portfolio",
        "description": "Compilez des travaux de photographie ou des exemples de conception en un portfolio PDF professionnel.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Combien d'images puis-je convertir ?",
        "answer": "Vous pouvez convertir jusqu'à 100 images JPG en un seul document PDF."
      },
      {
        "question": "La qualité de l'image sera-t-elle préservée ?",
        "answer": "Oui, les images sont intégrées à leur qualité originale. Vous pouvez optionnellement les compresser pour réduire la taille du fichier."
      },
      {
        "question": "Puis-je définir des tailles de page différentes pour différentes images ?",
        "answer": "L'outil applique une taille de page uniforme à toutes les pages. Chaque image est mise à l'échelle pour s'adapter à la taille de page sélectionnée tout en conservant son ratio d'aspect."
      }
    ]
  },
  "sign-pdf": {
    "title": "Signer PDF",
    "metaDescription": "Ajoutez des signatures électroniques aux documents PDF. Dessinez, tapez ou téléchargez votre signature.",
    "keywords": [
      "signer pdf",
      "signature électronique",
      "e-signature",
      "signature numérique",
      "signer document"
    ],
    "description": "\n      <p>Signer PDF vous permet d'ajouter des signatures électroniques à vos documents PDF rapidement et en toute sécurité. Créez votre signature en la dessinant, en la tapant ou en téléchargeant une image, puis placez-la n'importe où sur votre document.</p>\n      <p>Vous pouvez ajouter plusieurs signatures à un seul document, les redimensionner et les positionner précisément, et enregistrer votre signature pour une utilisation future. L'outil est parfait pour les contrats, accords, formulaires et tout document nécessitant votre signature.</p>\n      <p>Toute la signature se fait localement dans votre navigateur, garantissant que vos documents et votre signature restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous devez signer."
      },
      {
        "step": 2,
        "title": "Créez votre signature",
        "description": "Dessinez votre signature avec la souris ou le tactile, tapez votre nom pour générer une signature, ou téléchargez une image de signature. Vous pouvez aussi scanner la photo d’une signature écrite sur papier."
      },
      {
        "step": 3,
        "title": "Placez et ajustez",
        "description": "Cliquez sur le document pour placer votre signature, puis faites glisser pour positionner et redimensionner selon les besoins."
      },
      {
        "step": 4,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer votre signature et téléchargez le PDF signé."
      }
    ],
    "useCases": [
      {
        "title": "Signature de contrat",
        "description": "Signez des contrats et des accords électroniquement sans imprimer ni numériser.",
        "icon": "file-signature"
      },
      {
        "title": "Remplissage de formulaires",
        "description": "Ajoutez votre signature aux formulaires de candidature, formulaires de consentement et documents officiels.",
        "icon": "clipboard"
      },
      {
        "title": "Flux d'approbation",
        "description": "Signez des documents dans le cadre de processus de révision et d'approbation.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Une signature électronique est-elle juridiquement contraignante ?",
        "answer": "Les signatures électroniques sont reconnues légalement dans la plupart des pays. Cependant, certains documents peuvent nécessiter des types spécifiques de signatures numériques. Vérifiez vos réglementations locales."
      },
      {
        "question": "Puis-je enregistrer ma signature pour plus tard ?",
        "answer": "Oui, vous pouvez enregistrer votre signature dans le stockage local de votre navigateur pour un accès rapide lors de la signature de futurs documents."
      },
      {
        "question": "Puis-je ajouter plusieurs signatures à un document ?",
        "answer": "Oui, vous pouvez ajouter autant de signatures que nécessaire, en positionnant chacune indépendamment sur n'importe quelle page."
      }
    ]
  },
  "crop-pdf": {
    "title": "Recadrer PDF",
    "metaDescription": "Recadrez les pages PDF pour supprimer les marges et les zones indésirables. Rognez les documents PDF avec précision.",
    "keywords": [
      "recadrer pdf",
      "rogner pdf",
      "couper marges pdf",
      "redimensionner pages pdf",
      "outil recadrage pdf"
    ],
    "description": "\n      <p>Recadrer PDF vous permet de rogner les marges et de supprimer les zones indésirables de vos pages PDF. C'est utile pour supprimer les espaces blancs excessifs, se concentrer sur des zones de contenu spécifiques ou standardiser les dimensions des pages.</p>\n      <p>Vous pouvez recadrer toutes les pages uniformément ou ajuster chaque page individuellement. L'interface visuelle montre exactement ce qui sera conservé, facilitant l'obtention de résultats précis.</p>\n      <p>Tout le recadrage se fait localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez recadrer."
      },
      {
        "step": 2,
        "title": "Définissez la zone de recadrage",
        "description": "Faites glisser les poignées de recadrage pour définir la zone à conserver, ou entrez des mesures précises."
      },
      {
        "step": 3,
        "title": "Appliquez aux pages",
        "description": "Choisissez d'appliquer le recadrage à toutes les pages ou sélectionnez des pages spécifiques."
      },
      {
        "step": 4,
        "title": "Recadrez et téléchargez",
        "description": "Cliquez sur Recadrer pour appliquer les modifications et téléchargez votre PDF recadré."
      }
    ],
    "useCases": [
      {
        "title": "Supprimer les marges",
        "description": "Rognez les marges excessives des documents numérisés ou des PDF avec de grandes bordures.",
        "icon": "maximize-2"
      },
      {
        "title": "Cibler le contenu",
        "description": "Recadrez pour mettre en évidence des zones de contenu spécifiques, en supprimant les en-têtes, pieds de page ou barres latérales.",
        "icon": "target"
      },
      {
        "title": "Standardiser les pages",
        "description": "Rendez toutes les pages de la même taille en les recadrant à des dimensions uniformes.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Le recadrage supprime-t-il définitivement le contenu ?",
        "answer": "Oui, le recadrage supprime le contenu en dehors de la zone de recadrage. Assurez-vous de conserver une sauvegarde de votre fichier original."
      },
      {
        "question": "Puis-je recadrer différentes pages différemment ?",
        "answer": "Oui, vous pouvez appliquer différents paramètres de recadrage à des pages individuelles ou à des groupes de pages."
      },
      {
        "question": "Le recadrage affectera-t-il la qualité du texte ?",
        "answer": "Non, le recadrage ne supprime que les zones en dehors de la limite de recadrage. Le contenu restant conserve sa qualité originale."
      }
    ]
  },
  "extract-pages": {
    "title": "Extraire les pages",
    "metaDescription": "Extrayez des pages spécifiques de fichiers PDF. Sélectionnez et enregistrez des pages individuelles comme nouveaux documents.",
    "keywords": [
      "extraire pages pdf",
      "sauvegarder pages pdf",
      "copier pages pdf",
      "extracteur pages pdf"
    ],
    "description": "\n      <p>Extraire les pages vous permet de sélectionner et d'enregistrer des pages spécifiques d'un document PDF en tant que nouveaux fichiers. C'est parfait pour retirer des sections pertinentes, créer des extraits ou séparer des documents combinés.</p>\n      <p>Vous pouvez extraire des pages individuelles, des plages de pages ou plusieurs pages non consécutives. L'aperçu visuel des pages facilite l'identification et la sélection exacte des pages dont vous avez besoin.</p>\n      <p>Toute l'extraction se fait localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document dont vous souhaitez extraire des pages."
      },
      {
        "step": 2,
        "title": "Sélectionnez les pages",
        "description": "Cliquez sur les vignettes de page pour les sélectionner, ou entrez les numéros de page et les plages dans le champ de saisie."
      },
      {
        "step": 3,
        "title": "Extrayez et téléchargez",
        "description": "Cliquez sur Extraire pour créer un nouveau PDF avec vos pages sélectionnées et téléchargez-le."
      }
    ],
    "useCases": [
      {
        "title": "Créer des extraits",
        "description": "Extrayez des pages pertinentes de rapports ou de livres pour créer des documents de référence ciblés.",
        "icon": "file-minus"
      },
      {
        "title": "Partager du contenu spécifique",
        "description": "Retirez des pages spécifiques pour les partager sans envoyer l'intégralité du document.",
        "icon": "share-2"
      },
      {
        "title": "Archiver des pages importantes",
        "description": "Extrayez et enregistrez les pages clés de documents pour un archivage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Puis-je extraire des pages non consécutives ?",
        "answer": "Oui, vous pouvez sélectionner n'importe quelle combinaison de pages, qu'elles soient consécutives ou dispersées dans le document."
      },
      {
        "question": "Les signets seront-ils conservés ?",
        "answer": "Les signets qui pointent vers des pages extraites sont conservés dans le nouveau document."
      },
      {
        "question": "Puis-je extraire des pages de plusieurs PDF ?",
        "answer": "Cet outil fonctionne avec un PDF à la fois. Pour combiner des pages de plusieurs PDF, utilisez l'outil Fusionner PDF."
      }
    ]
  },
  "organize-pdf": {
    "title": "Organiser PDF",
    "metaDescription": "Réorganisez, dupliquez et supprimez des pages PDF. Glissez-déposez pour réorganiser vos documents.",
    "keywords": [
      "organiser pdf",
      "réorganiser pages pdf",
      "arranger pdf",
      "organisateur pages pdf"
    ],
    "description": "\n      <p>Organiser PDF fournit une interface intuitive de glisser-déposer pour réorganiser les pages de vos documents PDF. Changez l'ordre des pages, dupliquez des sections importantes ou supprimez des pages indésirables en toute simplicité.</p>\n      <p>Les vignettes visuelles des pages facilitent l'identification du contenu et l'arrangement des pages exactement comme vous le souhaitez. Parfait pour restructurer des documents, créer des ordres de pages personnalisés ou nettoyer des fichiers numérisés.</p>\n      <p>Toute l'organisation se fait localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez organiser."
      },
      {
        "step": 2,
        "title": "Réorganisez les pages",
        "description": "Faites glisser les vignettes de page pour les réorganiser. Cliquez sur les boutons dupliquer ou supprimer sur chaque page selon les besoins."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer vos modifications et téléchargez le PDF réorganisé."
      }
    ],
    "useCases": [
      {
        "title": "Corriger l'ordre des pages",
        "description": "Corrigez l'ordre des pages qui ont été mal numérisées ou combinées.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Créer un ordre personnalisé",
        "description": "Organisez les pages dans une séquence spécifique pour des présentations ou des rapports.",
        "icon": "list"
      },
      {
        "title": "Supprimer les pages indésirables",
        "description": "Supprimez les pages blanches, les doublons ou le contenu non pertinent des documents.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Puis-je dupliquer des pages ?",
        "answer": "Oui, vous pouvez dupliquer n'importe quelle page et placer la copie n'importe où dans le document."
      },
      {
        "question": "Y a-t-il une fonction annuler ?",
        "answer": "Oui, vous pouvez annuler et rétablir les modifications. Vous pouvez également réinitialiser à l'ordre original à tout moment."
      },
      {
        "question": "Puis-je organiser plusieurs PDF ensemble ?",
        "answer": "Cet outil fonctionne avec un PDF à la fois. Pour combiner et organiser plusieurs PDF, fusionnez-les d'abord avec l'outil Fusionner PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Supprimer les pages",
    "metaDescription": "Supprimez les pages indésirables des fichiers PDF. Sélectionnez et supprimez des pages spécifiques facilement.",
    "keywords": [
      "supprimer pages pdf",
      "enlever pages pdf",
      "suppression pages pdf",
      "retirer pages pdf"
    ],
    "description": "\n      <p>Supprimer les pages vous permet de retirer rapidement et facilement les pages indésirables de vos documents PDF. Que vous ayez besoin de supprimer des pages blanches, du contenu obsolète ou des informations sensibles, cet outil simplifie la tâche.</p>\n      <p>Les vignettes visuelles des pages vous aident à identifier exactement quelles pages supprimer. Vous pouvez supprimer des pages individuelles ou plusieurs pages à la fois.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document dont vous souhaitez supprimer des pages."
      },
      {
        "step": 2,
        "title": "Sélectionnez les pages à supprimer",
        "description": "Cliquez sur les vignettes de page pour les marquer pour la suppression, ou entrez les numéros de page dans le champ de saisie."
      },
      {
        "step": 3,
        "title": "Supprimez et téléchargez",
        "description": "Cliquez sur Supprimer pour retirer les pages sélectionnées et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Supprimer les pages blanches",
        "description": "Nettoyez les documents en supprimant les pages blanches incluses accidentellement.",
        "icon": "file-x"
      },
      {
        "title": "Supprimer le contenu sensible",
        "description": "Supprimez les pages contenant des informations confidentielles avant de partager les documents.",
        "icon": "shield"
      },
      {
        "title": "Rationaliser les documents",
        "description": "Supprimez les pages obsolètes ou non pertinentes pour créer des documents plus ciblés.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Puis-je récupérer les pages supprimées ?",
        "answer": "La suppression est permanente dans le fichier de sortie. Gardez une sauvegarde de votre document original si vous pourriez avoir besoin des pages plus tard."
      },
      {
        "question": "Puis-je supprimer plusieurs pages à la fois ?",
        "answer": "Oui, vous pouvez sélectionner et supprimer plusieurs pages simultanément."
      },
      {
        "question": "La suppression de pages affectera-t-elle les signets ?",
        "answer": "Les signets pointant vers des pages supprimées seront retirés. Les signets vers les pages restantes sont conservés."
      }
    ]
  },
  "bookmark": {
    "title": "Éditer les signets",
    "metaDescription": "Ajoutez, éditez et gérez les signets PDF. Créez une structure de navigation pour vos documents.",
    "keywords": [
      "signets pdf",
      "éditer signets",
      "ajouter signets",
      "navigation pdf",
      "table des matières pdf"
    ],
    "description": "\n      <p>Éditer les signets vous permet de créer, modifier et organiser des signets dans vos documents PDF. Les signets offrent une navigation rapide vers des sections spécifiques, rendant les longs documents plus faciles à utiliser.</p>\n      <p>Vous pouvez ajouter de nouveaux signets, modifier ceux existants, réorganiser la hiérarchie des signets ou importer des signets depuis des sources externes. Cet outil est essentiel pour créer des documents professionnels et navigables.</p>\n      <p>Toute l'édition se fait localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez éditer."
      },
      {
        "step": 2,
        "title": "Gérez les signets",
        "description": "Ajoutez de nouveaux signets, éditez ceux existants ou faites glisser pour réorganiser la hiérarchie."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer vos modifications et téléchargez le PDF avec les signets mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Créer une navigation",
        "description": "Ajoutez des signets aux longs documents pour aider les lecteurs à naviguer rapidement vers des sections spécifiques.",
        "icon": "navigation"
      },
      {
        "title": "Organiser les chapitres",
        "description": "Créez une structure hiérarchique de signets qui reflète l'organisation des chapitres de votre document.",
        "icon": "book-open"
      },
      {
        "title": "Améliorer l'accessibilité",
        "description": "Ajoutez des signets pour rendre les documents plus accessibles et conviviaux.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Puis-je créer des signets imbriqués ?",
        "answer": "Oui, vous pouvez créer une structure hiérarchique avec des signets parents et enfants."
      },
      {
        "question": "Puis-je importer des signets depuis un fichier ?",
        "answer": "Oui, vous pouvez importer des structures de signets à partir de fichiers JSON ou texte."
      },
      {
        "question": "Les signets fonctionneront-ils dans tous les lecteurs PDF ?",
        "answer": "Oui, les signets sont une fonctionnalité standard PDF prise en charge par tous les principaux lecteurs PDF."
      }
    ]
  },
  "table-of-contents": {
    "title": "Table des matières",
    "metaDescription": "Générez une table des matières pour votre PDF. Créez une navigation cliquable à partir des signets.",
    "keywords": [
      "table des matières pdf",
      "générateur sommaire",
      "index pdf",
      "navigation document"
    ],
    "description": "\n      <p>Table des matières génère une page de sommaire navigable pour vos documents PDF. La TDM peut être créée à partir de signets existants ou d'entrées personnalisées, offrant aux lecteurs une vue d'ensemble et une navigation rapide.</p>\n      <p>Personnalisez l'apparence avec différents styles, polices et mises en page. La table des matières générée inclut des liens cliquables qui sautent directement aux pages référencées.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Configurez la TDM",
        "description": "Choisissez de générer à partir des signets ou de créer des entrées personnalisées. Sélectionnez les options de style et de positionnement."
      },
      {
        "step": 3,
        "title": "Générez et téléchargez",
        "description": "Cliquez sur Générer pour créer la table des matières et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Travaux académiques",
        "description": "Ajoutez une table des matières professionnelle aux thèses, mémoires et articles de recherche.",
        "icon": "graduation-cap"
      },
      {
        "title": "Rapports d'entreprise",
        "description": "Créez des rapports navigables avec des listes de sections claires pour les parties prenantes.",
        "icon": "bar-chart"
      },
      {
        "title": "Manuels d'utilisation",
        "description": "Générez des TDM complètes pour la documentation technique et les guides d'utilisation.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Puis-je personnaliser l'apparence de la TDM ?",
        "answer": "Oui, vous pouvez choisir parmi différents styles, polices et mises en page pour votre table des matières."
      },
      {
        "question": "Où la TDM est-elle insérée ?",
        "answer": "Par défaut, la TDM est insérée au début du document, mais vous pouvez choisir un emplacement différent."
      },
      {
        "question": "Les entrées de la TDM sont-elles cliquables ?",
        "answer": "Oui, chaque entrée est un lien cliquable qui navigue vers la page correspondante."
      }
    ]
  },
  "page-numbers": {
    "title": "Numéros de page",
    "metaDescription": "Ajoutez des numéros de page aux documents PDF. Personnalisez la position, le format et le numéro de départ.",
    "keywords": [
      "ajouter numéros page",
      "numéros page pdf",
      "numéroter pages pdf",
      "pagination pdf"
    ],
    "description": "\n      <p>Numéros de page ajoute une pagination personnalisable à vos documents PDF. Choisissez parmi divers formats, positions et styles pour correspondre au design de votre document.</p>\n      <p>Vous pouvez définir le numéro de départ, sauter certaines pages et utiliser différents formats de numérotation (1, 2, 3 ou i, ii, iii). Parfait pour créer des documents professionnels avec une pagination correcte.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Configurez la numérotation",
        "description": "Choisissez la position, le format, le numéro de départ et les pages à numéroter."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour ajouter les numéros de page et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Documents professionnels",
        "description": "Ajoutez des numéros de page aux rapports, propositions et documents commerciaux.",
        "icon": "file-text"
      },
      {
        "title": "Travaux académiques",
        "description": "Numérotez les pages selon les exigences de formatage académique.",
        "icon": "graduation-cap"
      },
      {
        "title": "Documents juridiques",
        "description": "Ajoutez une pagination correcte aux contrats et dossiers juridiques.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Puis-je sauter la première page ?",
        "answer": "Oui, vous pouvez spécifier quelles pages numéroter et lesquelles sauter, comme les pages de titre ou de couverture."
      },
      {
        "question": "Quels formats de numéros sont disponibles ?",
        "answer": "Vous pouvez utiliser des chiffres arabes (1, 2, 3), des chiffres romains (i, ii, iii ou I, II, III) ou des lettres (a, b, c)."
      },
      {
        "question": "Puis-je ajouter le format \"Page X sur Y\" ?",
        "answer": "Oui, vous pouvez inclure le nombre total de pages dans votre format de numérotation."
      }
    ]
  },
  "add-watermark": {
    "title": "Ajouter un filigrane",
    "metaDescription": "Ajoutez des filigranes texte ou image aux fichiers PDF. Protégez et marquez vos documents.",
    "keywords": [
      "ajouter filigrane",
      "filigrane pdf",
      "tamponner pdf",
      "marque pdf",
      "protéger pdf"
    ],
    "description": "\n      <p>Ajouter un filigrane vous permet de placer des filigranes texte ou image sur vos documents PDF. Les filigranes peuvent indiquer le statut du document (Brouillon, Confidentiel), ajouter une marque ou dissuader la copie non autorisée.</p>\n      <p>Personnalisez la position, la taille, l'opacité, la rotation et la couleur du filigrane. Appliquez à toutes les pages ou sélectionnez des pages spécifiques. L'outil prend en charge à la fois les filigranes textuels et les filigranes images.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Créez le filigrane",
        "description": "Entrez le texte ou téléchargez une image pour votre filigrane. Ajustez la position, la taille, l'opacité et la rotation."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour ajouter le filigrane et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Protection de document",
        "description": "Ajoutez des filigranes \"Confidentiel\" ou \"Brouillon\" pour indiquer le statut du document.",
        "icon": "shield"
      },
      {
        "title": "Marquer les documents",
        "description": "Ajoutez des logos ou noms d'entreprise aux documents officiels.",
        "icon": "award"
      },
      {
        "title": "Avis de droit d'auteur",
        "description": "Ajoutez des informations de copyright pour protéger la propriété intellectuelle.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Puis-je utiliser une image comme filigrane ?",
        "answer": "Oui, vous pouvez télécharger des images PNG, JPG ou SVG pour les utiliser comme filigranes."
      },
      {
        "question": "Puis-je rendre le filigrane semi-transparent ?",
        "answer": "Oui, vous pouvez ajuster l'opacité de totalement transparent à totalement opaque."
      },
      {
        "question": "Puis-je appliquer différents filigranes à différentes pages ?",
        "answer": "L'outil applique le même filigrane aux pages sélectionnées. Pour des filigranes différents, traitez le document plusieurs fois."
      }
    ]
  },
  "header-footer": {
    "title": "En-tête et pied de page",
    "metaDescription": "Ajoutez des en-têtes et pieds de page aux documents PDF. Incluez des numéros de page, dates et texte personnalisé.",
    "keywords": [
      "en-tête pdf",
      "pied de page pdf",
      "ajouter en-tête",
      "lettre à en-tête pdf"
    ],
    "description": "\n      <p>En-tête et pied de page ajoute des en-têtes et pieds de page personnalisables à vos documents PDF. Incluez des numéros de page, des dates, des titres de document ou tout texte personnalisé dans les zones d'en-tête ou de pied de page.</p>\n      <p>Positionnez le contenu à gauche, au centre ou à droite. Utilisez un contenu différent pour les pages impaires et paires si nécessaire. Parfait pour créer des documents professionnels avec une mise en forme cohérente.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Configurez l'en-tête/pied de page",
        "description": "Entrez le texte pour les zones d'en-tête et de pied de page. Ajoutez des numéros de page, dates ou texte personnalisé."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour ajouter les en-têtes/pieds de page et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Documents d'affaires",
        "description": "Ajoutez le nom de l'entreprise et les numéros de page aux documents professionnels.",
        "icon": "briefcase"
      },
      {
        "title": "Documents juridiques",
        "description": "Incluez des numéros de dossier, des dates et des références de page dans les documents juridiques.",
        "icon": "scale"
      },
      {
        "title": "Travaux académiques",
        "description": "Ajoutez des en-têtes courants avec le titre du document et le nom de l'auteur.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Puis-je avoir des en-têtes différents sur les pages impaires et paires ?",
        "answer": "Oui, vous pouvez configurer un contenu différent pour les pages impaires et paires."
      },
      {
        "question": "Puis-je inclure la date actuelle ?",
        "answer": "Oui, vous pouvez insérer des champs de date dynamiques qui affichent la date actuelle."
      },
      {
        "question": "Puis-je sauter l'en-tête/pied de page sur certaines pages ?",
        "answer": "Oui, vous pouvez spécifier quelles pages doivent avoir des en-têtes/pieds de page et lesquelles doivent être sautées."
      }
    ]
  },
  "invert-colors": {
    "title": "Inverser les couleurs",
    "metaDescription": "Inversez les couleurs PDF pour la lecture en mode sombre. Convertissez les documents en couleurs négatives.",
    "keywords": [
      "inverser couleurs pdf",
      "mode sombre pdf",
      "pdf négatif",
      "inverser couleurs"
    ],
    "description": "\n      <p>Inverser les couleurs inverse les couleurs de vos documents PDF, créant un effet d'image négative. C'est particulièrement utile pour créer des versions en mode sombre des documents pour une lecture plus facile dans des conditions de faible luminosité.</p>\n      <p>L'outil peut inverser tout le contenu ou préserver sélectivement certains éléments comme les images. Parfait pour réduire la fatigue oculaire lors de la lecture de documents la nuit.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Choisissez d'inverser tout le contenu ou de préserver les images."
      },
      {
        "step": 3,
        "title": "Inversez et téléchargez",
        "description": "Cliquez sur Inverser pour traiter le document et télécharger le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Lecture nocturne",
        "description": "Créez des versions en mode sombre des documents pour une lecture confortable la nuit.",
        "icon": "moon"
      },
      {
        "title": "Réduire la fatigue oculaire",
        "description": "Inversez les documents lumineux pour réduire la fatigue oculaire lors d'une lecture prolongée.",
        "icon": "eye"
      },
      {
        "title": "Économies d'impression",
        "description": "Inversez les documents pour réduire l'utilisation d'encre lors de l'impression de brouillons.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Les images seront-elles inversées aussi ?",
        "answer": "Par défaut, oui. Vous pouvez choisir de préserver les images originales tout en inversant le texte et les arrière-plans."
      },
      {
        "question": "Puis-je inverser uniquement des pages spécifiques ?",
        "answer": "Oui, vous pouvez sélectionner quelles pages inverser."
      },
      {
        "question": "L'inversion est-elle réversible ?",
        "answer": "Vous pouvez inverser le document à nouveau pour revenir approximativement aux couleurs originales."
      }
    ]
  },
  "background-color": {
    "title": "Couleur d'arrière-plan",
    "metaDescription": "Changez la couleur d'arrière-plan du PDF. Ajoutez des arrière-plans colorés aux pages du document.",
    "keywords": [
      "couleur fond pdf",
      "changer fond pdf",
      "pdf coloré",
      "couleur page pdf"
    ],
    "description": "\n      <p>Couleur d'arrière-plan vous permet de changer ou d'ajouter des couleurs d'arrière-plan à vos pages PDF. Cela peut améliorer la lisibilité, ajouter un intérêt visuel ou correspondre à vos exigences de marque.</p>\n      <p>Choisissez n'importe quelle couleur pour l'arrière-plan et appliquez-la à toutes les pages ou aux pages sélectionnées. L'outil préserve tout le contenu existant tout en ajoutant la couche d'arrière-plan.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Choisissez la couleur",
        "description": "Sélectionnez une couleur d'arrière-plan à l'aide du sélecteur de couleurs ou entrez un code hexadécimal."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour ajouter l'arrière-plan et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Améliorer la lisibilité",
        "description": "Ajoutez un arrière-plan crème clair ou sépia pour réduire la fatigue oculaire.",
        "icon": "eye"
      },
      {
        "title": "Marquer les documents",
        "description": "Utilisez les couleurs de la marque comme arrière-plans pour les supports marketing.",
        "icon": "palette"
      },
      {
        "title": "Mettre en évidence des sections",
        "description": "Utilisez différentes couleurs d'arrière-plan pour distinguer les sections du document.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "L'arrière-plan couvrira-t-il le contenu existant ?",
        "answer": "Non, l'arrière-plan est ajouté derrière le contenu existant, préservant tout le texte et les images."
      },
      {
        "question": "Puis-je utiliser différentes couleurs pour différentes pages ?",
        "answer": "Vous devrez traiter le document plusieurs fois pour avoir différentes couleurs sur différentes pages."
      },
      {
        "question": "Puis-je supprimer un arrière-plan existant ?",
        "answer": "Cet outil ajoute des arrière-plans. Pour supprimer des arrière-plans, vous devrez peut-être utiliser l'outil Éditer PDF."
      }
    ]
  },
  "text-color": {
    "title": "Changer la couleur du texte",
    "metaDescription": "Changez la couleur du texte dans les documents PDF. Modifiez la couleur de tout le contenu textuel.",
    "keywords": [
      "changer couleur texte pdf",
      "couleur texte pdf",
      "modifier couleur texte",
      "recolorer texte pdf"
    ],
    "description": "\n      <p>Changer la couleur du texte vous permet de modifier la couleur du texte dans vos documents PDF. C'est utile pour améliorer le contraste, correspondre à la marque ou créer des variations visuelles de documents.</p>\n      <p>Sélectionnez une nouvelle couleur et appliquez-la à tout le texte du document. L'outil traite les éléments textuels tout en préservant les images et autres contenus.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Choisissez la couleur",
        "description": "Sélectionnez une nouvelle couleur de texte à l'aide du sélecteur de couleurs ou entrez un code hexadécimal."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour changer la couleur du texte et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Améliorer le contraste",
        "description": "Changez la couleur du texte pour améliorer la lisibilité par rapport à l'arrière-plan.",
        "icon": "contrast"
      },
      {
        "title": "Cohérence de marque",
        "description": "Mettez à jour les couleurs du texte pour correspondre aux directives de la marque.",
        "icon": "palette"
      },
      {
        "title": "Accessibilité",
        "description": "Ajustez les couleurs du texte pour répondre aux exigences de contraste d'accessibilité.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Tout le texte sera-t-il modifié ?",
        "answer": "Oui, l'outil change la couleur de tous les éléments textuels du document."
      },
      {
        "question": "Puis-je changer uniquement un texte spécifique ?",
        "answer": "Cet outil change tout le texte. Pour des changements sélectifs, utilisez l'outil Éditer PDF."
      },
      {
        "question": "Le texte formaté (gras, italique) sera-t-il préservé ?",
        "answer": "Oui, le formatage du texte est préservé ; seule la couleur est modifiée."
      }
    ]
  },
  "add-stamps": {
    "title": "Ajouter des tampons",
    "metaDescription": "Ajoutez des tampons aux documents PDF. Utilisez des tampons prédéfinis ou personnalisés pour l'approbation, la révision et plus encore.",
    "keywords": [
      "tampons pdf",
      "ajouter tampon",
      "tampon approbation",
      "cachet pdf"
    ],
    "description": "\n      <p>Ajouter des tampons vous permet de placer des images de tampon sur vos documents PDF. Utilisez des tampons prédéfinis comme \"Approuvé\", \"Rejeté\", \"Brouillon\", ou téléchargez des images de tampon personnalisées.</p>\n      <p>Positionnez les tampons n'importe où sur la page, redimensionnez-les et appliquez-les à une ou plusieurs pages. Parfait pour les flux de travail documentaires, les approbations et les indicateurs de statut.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Sélectionnez le tampon",
        "description": "Choisissez un tampon prédéfini ou téléchargez une image de tampon personnalisée."
      },
      {
        "step": 3,
        "title": "Positionnez et appliquez",
        "description": "Cliquez pour placer le tampon, ajustez la position et la taille, puis téléchargez."
      }
    ],
    "useCases": [
      {
        "title": "Approbation de documents",
        "description": "Ajoutez des tampons \"Approuvé\" ou \"Rejeté\" aux documents dans les flux de révision.",
        "icon": "check-circle"
      },
      {
        "title": "Indication de statut",
        "description": "Marquez les documents comme \"Brouillon\", \"Final\" ou \"Confidentiel\".",
        "icon": "tag"
      },
      {
        "title": "Contrôle qualité",
        "description": "Ajoutez des tampons QC pour indiquer l'inspection ou l'achèvement de la révision.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Quels tampons prédéfinis sont disponibles ?",
        "answer": "Les préréglages incluent Approuvé, Rejeté, Brouillon, Final, Confidentiel, Copie, et plus encore."
      },
      {
        "question": "Puis-je télécharger des tampons personnalisés ?",
        "answer": "Oui, vous pouvez télécharger des images PNG ou JPG pour les utiliser comme tampons personnalisés."
      },
      {
        "question": "Puis-je ajouter plusieurs tampons à un document ?",
        "answer": "Oui, vous pouvez ajouter plusieurs tampons et positionner chacun indépendamment."
      }
    ]
  },
  "remove-annotations": {
    "title": "Supprimer les annotations",
    "metaDescription": "Supprimez les annotations des fichiers PDF. Effacez les commentaires, surlignages et marquages.",
    "keywords": [
      "supprimer annotations pdf",
      "effacer commentaires",
      "enlever surlignage",
      "nettoyer pdf"
    ],
    "description": "\n      <p>Supprimer les annotations retire les commentaires, surlignages, notes autocollantes et autres annotations de vos documents PDF. Cela crée une version propre du document sans marquage.</p>\n      <p>Vous pouvez supprimer toutes les annotations ou supprimer sélectivement des types spécifiques. Parfait pour créer des versions finales de documents révisés ou supprimer des commentaires sensibles.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Sélectionnez les types d'annotations",
        "description": "Choisissez quels types d'annotations supprimer : commentaires, surlignages, liens, etc."
      },
      {
        "step": 3,
        "title": "Supprimez et téléchargez",
        "description": "Cliquez sur Supprimer pour retirer les annotations et téléchargez le PDF propre."
      }
    ],
    "useCases": [
      {
        "title": "Finaliser les documents",
        "description": "Supprimez les commentaires de révision et les marquages avant de publier les documents finaux.",
        "icon": "file-check"
      },
      {
        "title": "Protection de la vie privée",
        "description": "Supprimez les commentaires pouvant contenir des informations sensibles avant de partager.",
        "icon": "shield"
      },
      {
        "title": "Distribution propre",
        "description": "Créez des copies propres de documents annotés pour la distribution.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Quels types d'annotations peuvent être supprimés ?",
        "answer": "Les commentaires, surlignages, soulignements, barrés, notes autocollantes, tampons et liens peuvent tous être supprimés."
      },
      {
        "question": "Puis-je conserver certaines annotations ?",
        "answer": "Oui, vous pouvez sélectionner quels types d'annotations supprimer et lesquels conserver."
      },
      {
        "question": "Est-ce réversible ?",
        "answer": "Non, la suppression des annotations est permanente. Gardez une sauvegarde de l'original si nécessaire."
      }
    ]
  },
  "form-filler": {
    "title": "Remplir un formulaire",
    "metaDescription": "Remplissez des formulaires PDF en ligne. Complétez des formulaires PDF interactifs sans imprimer.",
    "keywords": [
      "remplir formulaire pdf",
      "remplisseur pdf",
      "compléter pdf",
      "pdf interactif"
    ],
    "description": "\n      <p>Remplir un formulaire vous permet de compléter des formulaires PDF interactifs directement dans votre navigateur. Remplissez des champs de texte, cochez des cases, sélectionnez des options et ajoutez des signatures sans imprimer le document.</p>\n      <p>L'outil prend en charge les formulaires PDF standard et les formulaires XFA. Vos données remplies peuvent être enregistrées et le formulaire peut être aplati pour empêcher toute modification ultérieure.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que les données de votre formulaire restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre formulaire PDF",
        "description": "Glissez-déposez votre formulaire PDF ou cliquez pour sélectionner le fichier."
      },
      {
        "step": 2,
        "title": "Remplissez le formulaire",
        "description": "Cliquez sur les champs du formulaire pour saisir du texte, cocher des cases ou sélectionner des options."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour préserver vos entrées et téléchargez le formulaire rempli."
      }
    ],
    "useCases": [
      {
        "title": "Formulaires de candidature",
        "description": "Complétez des candidatures d'emploi, des demandes de permis et des formulaires d'inscription.",
        "icon": "clipboard"
      },
      {
        "title": "Formulaires fiscaux",
        "description": "Remplissez des documents fiscaux et des formulaires financiers électroniquement.",
        "icon": "file-text"
      },
      {
        "title": "Contrats",
        "description": "Complétez des formulaires de contrat avec vos informations avant de signer.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Puis-je enregistrer ma progression ?",
        "answer": "Oui, vous pouvez enregistrer des formulaires partiellement remplis et continuer plus tard."
      },
      {
        "question": "Qu'est-ce que l'aplatissement de formulaire ?",
        "answer": "L'aplatissement convertit les champs de formulaire en contenu statique, empêchant toute modification ultérieure."
      },
      {
        "question": "Les formulaires XFA sont-ils pris en charge ?",
        "answer": "Oui, l'outil prend en charge à la fois les AcroForms standard et les formulaires XFA."
      }
    ]
  },
  "form-creator": {
    "title": "Créateur de formulaire",
    "metaDescription": "Créez des formulaires PDF remplissables. Ajoutez des champs de texte, des cases à cocher et des listes déroulantes.",
    "keywords": [
      "créer formulaire pdf",
      "créateur pdf",
      "pdf remplissable",
      "ajouter champs formulaire"
    ],
    "description": "\n      <p>Créateur de formulaire transforme des documents PDF statiques en formulaires remplissables interactifs. Ajoutez des champs de texte, des cases à cocher, des boutons radio, des listes déroulantes et plus encore pour créer des formulaires professionnels.</p>\n      <p>Glissez-déposez des éléments de formulaire sur votre document, configurez les propriétés des champs et créez des formulaires qui peuvent être remplis électroniquement. Parfait pour créer des candidatures, des sondages et des formulaires de collecte de données.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document à convertir en formulaire."
      },
      {
        "step": 2,
        "title": "Ajoutez des champs de formulaire",
        "description": "Sélectionnez des types de champs dans la barre d'outils et cliquez pour les placer sur le document."
      },
      {
        "step": 3,
        "title": "Configurez et sauvegardez",
        "description": "Définissez les propriétés des champs, puis sauvegardez et téléchargez votre formulaire PDF remplissable."
      }
    ],
    "useCases": [
      {
        "title": "Formulaires de candidature",
        "description": "Créez des candidatures d'emploi, des formulaires d'adhésion et des inscriptions remplissables.",
        "icon": "user-plus"
      },
      {
        "title": "Sondages",
        "description": "Construisez des sondages interactifs et des questionnaires pour la collecte de données.",
        "icon": "clipboard-list"
      },
      {
        "title": "Bons de commande",
        "description": "Créez des bons de commande produits avec des champs de quantité et des cases à cocher.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Quels types de champs puis-je ajouter ?",
        "answer": "Champs de texte, cases à cocher, boutons radio, listes déroulantes, sélecteurs de date et champs de signature."
      },
      {
        "question": "Puis-je rendre des champs obligatoires ?",
        "answer": "Oui, vous pouvez marquer des champs comme obligatoires et ajouter des règles de validation."
      },
      {
        "question": "Puis-je ajouter des calculs ?",
        "answer": "Des calculs de base comme la somme et la moyenne peuvent être ajoutés aux champs numériques."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Supprimer les pages blanches",
    "metaDescription": "Détectez et supprimez automatiquement les pages blanches des documents PDF.",
    "keywords": [
      "supprimer pages blanches",
      "supprimer pages vides",
      "nettoyer pdf",
      "effacer pages blanches pdf"
    ],
    "description": "\n      <p>Supprimer les pages blanches détecte et supprime automatiquement les pages vides de vos documents PDF. C'est utile pour nettoyer des documents numérisés, supprimer des pages de séparation ou éliminer des pages blanches incluses accidentellement.</p>\n      <p>L'outil utilise une détection intelligente pour identifier les pages vraiment blanches tout en préservant les pages avec un contenu minimal. Vous pouvez ajuster le seuil de sensibilité pour contrôler ce qui compte comme \"blanc\".</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Ajustez le seuil",
        "description": "Définissez le seuil de détection de blanc si nécessaire (la valeur par défaut fonctionne pour la plupart des documents)."
      },
      {
        "step": 3,
        "title": "Supprimez et téléchargez",
        "description": "Cliquez sur Supprimer pour effacer les pages blanches et téléchargez le PDF nettoyé."
      }
    ],
    "useCases": [
      {
        "title": "Nettoyer les documents numérisés",
        "description": "Supprimez les pages blanches des documents numérisés par lots.",
        "icon": "scan"
      },
      {
        "title": "Supprimer les séparateurs",
        "description": "Supprimez les pages de séparation blanches des documents fusionnés.",
        "icon": "minus"
      },
      {
        "title": "Réduire la taille du fichier",
        "description": "Supprimez les pages blanches inutiles pour réduire la taille du document.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Comment fonctionne la détection de blanc ?",
        "answer": "L'outil analyse le contenu de la page et considère les pages avec un contenu visible minimal ou nul comme blanches."
      },
      {
        "question": "Puis-je prévisualiser les pages qui seront supprimées ?",
        "answer": "Oui, les pages blanches détectées sont mises en évidence pour révision avant suppression."
      },
      {
        "question": "Et si une page a seulement un en-tête/pied de page ?",
        "answer": "Vous pouvez ajuster le seuil pour déterminer si les pages avec un contenu minimal doivent être considérées comme blanches."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Image en PDF",
    "metaDescription": "Convertissez n'importe quelle image en PDF. Prise en charge des formats JPG, PNG, WebP, BMP, TIFF, SVG et HEIC.",
    "keywords": [
      "image en pdf",
      "convertir image",
      "photo en pdf",
      "image vers pdf"
    ],
    "description": "\n      <p>Image en PDF convertit des images de n'importe quel format en documents PDF. La prise en charge des formats JPG, PNG, WebP, BMP, TIFF, SVG et HEIC en fait le convertisseur d'images universel.</p>\n      <p>Combinez plusieurs images en un seul PDF, organisez-les dans n'importe quel ordre et personnalisez la taille et l'orientation des pages. Parfait pour créer des albums photo, des archives de documents ou des portfolios.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos images restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les images",
        "description": "Glissez-déposez des images de tout format pris en charge ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Organisez et configurez",
        "description": "Réorganisez les images et sélectionnez les options de taille de page et d'orientation."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF et télécharger le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Collections de photos",
        "description": "Combinez des photos de diverses sources en un seul album PDF.",
        "icon": "images"
      },
      {
        "title": "Documents multi-formats",
        "description": "Convertissez des images de différents formats en un PDF unifié.",
        "icon": "file-stack"
      },
      {
        "title": "Création d'archives",
        "description": "Créez des archives PDF à partir de collections d'images pour un stockage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quels formats d'image sont pris en charge ?",
        "answer": "Les formats JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC et HEIF sont tous pris en charge."
      },
      {
        "question": "Puis-je mélanger différents formats d'images ?",
        "answer": "Oui, vous pouvez combiner des images de différents formats en un seul PDF."
      },
      {
        "question": "La qualité de l'image sera-t-elle préservée ?",
        "answer": "Oui, les images sont intégrées à leur qualité originale à moins que vous ne choisissiez de les compresser."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG en PDF",
    "metaDescription": "Convertissez des images PNG en PDF. Préservez la transparence et combinez plusieurs fichiers PNG.",
    "keywords": [
      "png en pdf",
      "convertir png",
      "convertisseur png",
      "image transparente en pdf"
    ],
    "description": "\n      <p>PNG en PDF convertit vos images PNG en documents PDF tout en préservant la transparence. Parfait pour les graphiques, logos, captures d'écran et images avec arrière-plans transparents.</p>\n      <p>Combinez plusieurs fichiers PNG en un seul PDF, organisez-les dans n'importe quel ordre et personnalisez les paramètres de page. La conversion maintient la haute qualité de vos images originales.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos images restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers PNG",
        "description": "Glissez-déposez vos images PNG ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Organisez et configurez",
        "description": "Réorganisez les images et sélectionnez les options de taille de page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Portfolio graphique",
        "description": "Compilez des graphiques PNG et des conceptions en un portfolio professionnel.",
        "icon": "palette"
      },
      {
        "title": "Documentation de capture d'écran",
        "description": "Convertissez des captures d'écran en documentation PDF.",
        "icon": "monitor"
      },
      {
        "title": "Collections de logos",
        "description": "Créez des catalogues PDF de logos et d'actifs de marque.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "La transparence est-elle préservée ?",
        "answer": "La transparence PNG est préservée dans la sortie PDF."
      },
      {
        "question": "Qu'en est-il des animations PNG ?",
        "answer": "Les PNG animés sont convertis en images statiques utilisant la première image."
      },
      {
        "question": "Puis-je définir une couleur d'arrière-plan ?",
        "answer": "Oui, vous pouvez choisir une couleur d'arrière-plan pour les zones transparentes."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP en PDF",
    "metaDescription": "Convertissez des images WebP en PDF. Conversion de format d'image moderne avec préservation de la qualité.",
    "keywords": [
      "webp en pdf",
      "convertir webp",
      "convertisseur webp",
      "image web en pdf"
    ],
    "description": "\n      <p>WebP en PDF convertit les images WebP modernes en documents PDF. WebP est un format d'image web populaire, et cet outil facilite la conversion de ces images pour l'impression ou l'archivage.</p>\n      <p>Combinez plusieurs fichiers WebP en un seul PDF avec des paramètres de page personnalisables. La conversion préserve la qualité de l'image tout en créant des fichiers PDF compacts.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos images restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers WebP",
        "description": "Glissez-déposez vos images WebP ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Organisez les images et sélectionnez la taille et l'orientation de la page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF."
      }
    ],
    "useCases": [
      {
        "title": "Archivage de contenu Web",
        "description": "Convertissez des images web en PDF pour un archivage hors ligne.",
        "icon": "globe"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Convertissez des images WebP en PDF à des fins d'impression.",
        "icon": "printer"
      },
      {
        "title": "Standardisation de format",
        "description": "Convertissez le WebP moderne en PDF universellement compatible.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format WebP ?",
        "answer": "WebP est un format d'image moderne développé par Google qui offre une compression supérieure pour les images web."
      },
      {
        "question": "La qualité est-elle préservée ?",
        "answer": "Oui, la conversion préserve la qualité originale de l'image."
      },
      {
        "question": "Puis-je convertir des WebP animés ?",
        "answer": "Les fichiers WebP animés sont convertis en images statiques."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG en PDF",
    "metaDescription": "Convertissez des graphiques vectoriels SVG en PDF. Préservez l'évolutivité et la qualité.",
    "keywords": [
      "svg en pdf",
      "convertir svg",
      "vecteur en pdf",
      "graphique évolutif en pdf"
    ],
    "description": "\n      <p>SVG en PDF convertit les graphiques vectoriels évolutifs en documents PDF tout en préservant leur qualité vectorielle. Les fichiers SVG restent nets à n'importe quelle taille, et cette qualité est maintenue dans la sortie PDF.</p>\n      <p>Parfait pour convertir des logos, icônes, illustrations et dessins techniques. Le PDF résultant maintient l'évolutivité des graphiques vectoriels originaux.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers SVG",
        "description": "Glissez-déposez vos fichiers SVG ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez les paramètres",
        "description": "Sélectionnez les options de taille de page et d'arrangement."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF vectoriel."
      }
    ],
    "useCases": [
      {
        "title": "Conversion de logo",
        "description": "Convertissez des logos SVG en PDF pour les supports d'impression.",
        "icon": "award"
      },
      {
        "title": "Dessins techniques",
        "description": "Convertissez des exports CAO et des illustrations techniques en PDF.",
        "icon": "ruler"
      },
      {
        "title": "Collections d'icônes",
        "description": "Créez des catalogues PDF d'ensembles d'icônes et de graphiques.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "La qualité vectorielle est-elle préservée ?",
        "answer": "Oui, la qualité vectorielle SVG est entièrement préservée dans la sortie PDF."
      },
      {
        "question": "Puis-je convertir des SVG complexes ?",
        "answer": "Oui, les SVG complexes avec dégradés, filtres et effets sont pris en charge."
      },
      {
        "question": "Qu'en est-il des polices intégrées ?",
        "answer": "Les polices intégrées dans les fichiers SVG sont préservées dans le PDF."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP en PDF",
    "metaDescription": "Convertissez des images bitmap BMP en PDF. Prise en charge des formats hérités avec préservation de la qualité.",
    "keywords": [
      "bmp en pdf",
      "convertir bmp",
      "bitmap en pdf",
      "convertisseur bmp"
    ],
    "description": "\n      <p>BMP en PDF convertit les images bitmap en documents PDF. BMP est un format d'image hérité couramment utilisé dans les environnements Windows, et cet outil facilite la conversion de ces fichiers au format PDF moderne.</p>\n      <p>Combinez plusieurs fichiers BMP en un seul PDF avec des paramètres personnalisables. La conversion compresse les fichiers BMP généralement volumineux tout en maintenant la qualité de l'image.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos images restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers BMP",
        "description": "Glissez-déposez vos images BMP ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Organisez les images et sélectionnez les paramètres de page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF."
      }
    ],
    "useCases": [
      {
        "title": "Conversion de fichiers hérités",
        "description": "Convertissez d'anciens fichiers BMP au format PDF moderne.",
        "icon": "history"
      },
      {
        "title": "Captures d'écran Windows",
        "description": "Convertissez des captures d'écran bitmap Windows en PDF.",
        "icon": "monitor"
      },
      {
        "title": "Modernisation d'archives",
        "description": "Mettez à jour les archives d'images héritées au format PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "La taille du fichier sera-t-elle réduite ?",
        "answer": "Oui, les fichiers BMP sont généralement compressés de manière significative lorsqu'ils sont convertis en PDF."
      },
      {
        "question": "La qualité est-elle préservée ?",
        "answer": "Oui, la qualité de l'image est maintenue pendant la conversion."
      },
      {
        "question": "Quelles profondeurs de couleur BMP sont prises en charge ?",
        "answer": "Toutes les profondeurs de couleur BMP standard sont prises en charge, y compris 24 bits et 32 bits."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC en PDF",
    "metaDescription": "Convertissez des photos iPhone HEIC en PDF. Conversion de format d'image Apple facilitée.",
    "keywords": [
      "heic en pdf",
      "convertir heic",
      "photo iphone pdf",
      "image apple pdf"
    ],
    "description": "\n      <p>HEIC en PDF convertit les photos au format HEIC (High Efficiency Image Format) d'Apple en documents PDF. HEIC est le format photo par défaut sur iPhone et iPad, et cet outil facilite le partage de ces photos.</p>\n      <p>Combinez plusieurs photos HEIC en un seul PDF, parfait pour créer des albums photo ou des archives de documents à partir de vos photos iPhone.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos photos restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers HEIC",
        "description": "Glissez-déposez vos photos HEIC ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Organisez les photos",
        "description": "Réorganisez les photos et sélectionnez les paramètres de page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF."
      }
    ],
    "useCases": [
      {
        "title": "Albums photo iPhone",
        "description": "Créez des albums PDF à partir de photos iPhone pour le partage.",
        "icon": "smartphone"
      },
      {
        "title": "Numérisation de documents",
        "description": "Convertissez des scans de documents iPhone au format PDF.",
        "icon": "scan"
      },
      {
        "title": "Partage multi-plateforme",
        "description": "Convertissez HEIC en PDF pour une compatibilité universelle.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format HEIC ?",
        "answer": "HEIC (High Efficiency Image Container) est le format d'image d'Apple qui offre une meilleure compression que le JPEG."
      },
      {
        "question": "Les Live Photos sont-elles prises en charge ?",
        "answer": "Les Live Photos sont converties en images statiques utilisant l'image clé."
      },
      {
        "question": "Les données EXIF sont-elles préservées ?",
        "answer": "Les métadonnées photo peuvent être optionnellement préservées ou supprimées lors de la conversion."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF en PDF",
    "metaDescription": "Convertissez des images TIFF en PDF. Prise en charge des fichiers TIFF multipages et conversion haute qualité.",
    "keywords": [
      "tiff en pdf",
      "convertir tiff",
      "tif en pdf",
      "tiff multipages"
    ],
    "description": "\n      <p>TIFF en PDF convertit les images TIFF, y compris les fichiers TIFF multipages, en documents PDF. TIFF est couramment utilisé pour les scans de haute qualité et les graphiques professionnels.</p>\n      <p>Les fichiers TIFF multipages sont automatiquement convertis en PDF multipages. La conversion préserve la haute qualité de vos images originales.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers TIFF",
        "description": "Glissez-déposez vos fichiers TIFF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Sélectionnez les paramètres de page et les options de compression."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documents numérisés",
        "description": "Convertissez des scans de haute qualité de TIFF en PDF.",
        "icon": "scan"
      },
      {
        "title": "Graphiques professionnels",
        "description": "Convertissez des graphiques TIFF professionnels pour la distribution.",
        "icon": "image"
      },
      {
        "title": "Conversion d'archives",
        "description": "Convertissez des archives TIFF en format PDF plus accessible.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Les TIFF multipages sont-ils pris en charge ?",
        "answer": "Oui, les fichiers TIFF multipages sont convertis en PDF multipages automatiquement."
      },
      {
        "question": "La qualité est-elle préservée ?",
        "answer": "Oui, la qualité TIFF est entièrement préservée dans la sortie PDF."
      },
      {
        "question": "Quelle compression est utilisée ?",
        "answer": "Vous pouvez choisir entre des options de compression sans perte et avec perte."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Texte en PDF",
    "metaDescription": "Convertissez des fichiers texte brut en PDF. Personnalisez les polices, les marges et la mise en page.",
    "keywords": [
      "txt en pdf",
      "texte en pdf",
      "convertir fichier texte",
      "texte brut en pdf"
    ],
    "description": "\n      <p>Texte en PDF convertit des fichiers texte brut en documents PDF formatés. Personnalisez les polices, les tailles, les marges et la mise en page pour créer des documents d'aspect professionnel à partir de texte simple.</p>\n      <p>Parfait pour convertir des fichiers de code, des journaux, des notes ou tout contenu en texte brut en format PDF partageable.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le fichier texte",
        "description": "Glissez-déposez votre fichier .txt ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Personnalisez le formatage",
        "description": "Choisissez la police, la taille, les marges et les paramètres de page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF formaté."
      }
    ],
    "useCases": [
      {
        "title": "Documentation de code",
        "description": "Convertissez des fichiers de code source en PDF pour la documentation.",
        "icon": "code"
      },
      {
        "title": "Archives de journaux",
        "description": "Convertissez des fichiers journaux en PDF pour l'archivage.",
        "icon": "file-text"
      },
      {
        "title": "Conversion de notes",
        "description": "Convertissez des notes en texte brut en documents PDF formatés.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Quelles polices sont disponibles ?",
        "answer": "Plusieurs polices sont disponibles, y compris des polices à chasse fixe pour le code."
      },
      {
        "question": "Le retour à la ligne est-il automatique ?",
        "answer": "Oui, les longues lignes sont automatiquement renvoyées à la ligne pour s'adapter à la page."
      },
      {
        "question": "Puis-je préserver le formatage ?",
        "answer": "Les espaces et l'indentation du texte original sont préservés."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON en PDF",
    "metaDescription": "Convertissez des fichiers JSON en PDF formaté. Coloration syntaxique et sortie structurée.",
    "keywords": [
      "json en pdf",
      "convertir json",
      "visionneuse json",
      "formateur json"
    ],
    "description": "\n      <p>JSON en PDF convertit les fichiers de données JSON en documents PDF formatés et lisibles. La sortie inclut la coloration syntaxique et une indentation correcte pour une lecture facile.</p>\n      <p>Parfait pour documenter les réponses API, les fichiers de configuration ou toute donnée JSON devant être partagée ou archivée dans un format lisible.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos données restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le fichier JSON",
        "description": "Glissez-déposez votre fichier .json ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez l'affichage",
        "description": "Choisissez les options de formatage et la coloration syntaxique."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF formaté."
      }
    ],
    "useCases": [
      {
        "title": "Documentation API",
        "description": "Convertissez les réponses API en PDF pour la documentation.",
        "icon": "code"
      },
      {
        "title": "Archives de configuration",
        "description": "Archivez les fichiers de configuration en format PDF lisible.",
        "icon": "settings"
      },
      {
        "title": "Rapports de données",
        "description": "Créez des rapports PDF à partir d'exports de données JSON.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "La coloration syntaxique est-elle incluse ?",
        "answer": "Oui, la syntaxe JSON est mise en évidence avec des couleurs pour les clés, les valeurs et les types."
      },
      {
        "question": "Comment les données imbriquées sont-elles gérées ?",
        "answer": "Les objets et tableaux imbriqués sont correctement indentés pour la lisibilité."
      },
      {
        "question": "Qu'en est-il des gros fichiers JSON ?",
        "answer": "Les gros fichiers sont paginés automatiquement sur plusieurs pages."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF en JPG",
    "metaDescription": "Convertissez des pages PDF en images JPG. Extraction de haute qualité avec résolution personnalisable.",
    "keywords": [
      "pdf en jpg",
      "pdf en jpeg",
      "convertir pdf en image",
      "extraire images pdf"
    ],
    "description": "\n      <p>PDF en JPG convertit les pages de documents PDF en images JPG de haute qualité. Extrayez toutes les pages ou sélectionnez des pages spécifiques à convertir, avec des paramètres de résolution et de qualité personnalisables.</p>\n      <p>Parfait pour extraire des images de PDF, créer des vignettes ou convertir des documents pour une utilisation web.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez pages et qualité",
        "description": "Choisissez quelles pages convertir et définissez les options de qualité/DPI."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour extraire les images et télécharger sous forme de ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Publication Web",
        "description": "Convertissez des pages PDF en images pour une utilisation sur site web.",
        "icon": "globe"
      },
      {
        "title": "Réseaux sociaux",
        "description": "Extrayez des pages sous forme d'images pour le partage sur les réseaux sociaux.",
        "icon": "share-2"
      },
      {
        "title": "Présentations",
        "description": "Convertissez des diapositives PDF en images pour des présentations.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Quels paramètres de qualité sont disponibles ?",
        "answer": "Vous pouvez régler le DPI de 72 à 300 et la qualité JPEG de 1 à 100."
      },
      {
        "question": "Puis-je convertir uniquement des pages spécifiques ?",
        "answer": "Oui, vous pouvez sélectionner des pages individuelles ou des plages de pages à convertir."
      },
      {
        "question": "Comment sont gérées les pages multiples ?",
        "answer": "Chaque page devient un fichier JPG séparé, téléchargé sous forme d'archive ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF en PNG",
    "metaDescription": "Convertissez des pages PDF en images PNG. Qualité sans perte avec prise en charge de la transparence.",
    "keywords": [
      "pdf en png",
      "convertir pdf en png",
      "extraction image pdf",
      "conversion pdf sans perte"
    ],
    "description": "\n      <p>PDF en PNG convertit les pages de documents PDF en images PNG de haute qualité avec une compression sans perte. Le format PNG préserve parfaitement la qualité de l'image et prend en charge la transparence.</p>\n      <p>Idéal pour extraire des graphiques, des diagrammes ou tout contenu où la préservation de la qualité est critique.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Sélectionnez les pages et définissez les options de résolution (DPI)."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour extraire les images PNG."
      }
    ],
    "useCases": [
      {
        "title": "Extraction graphique",
        "description": "Extrayez des diagrammes et des graphiques avec une qualité parfaite.",
        "icon": "image"
      },
      {
        "title": "Actifs de conception",
        "description": "Convertissez des conceptions PDF en PNG pour les logiciels d'édition.",
        "icon": "palette"
      },
      {
        "title": "Documentation",
        "description": "Créez des images de haute qualité pour la documentation technique.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Pourquoi choisir PNG plutôt que JPG ?",
        "answer": "PNG offre une compression sans perte et une prise en charge de la transparence, idéal pour les graphiques et le texte."
      },
      {
        "question": "Les arrière-plans transparents sont-ils pris en charge ?",
        "answer": "Oui, les pages PDF avec transparence sont préservées dans la sortie PNG."
      },
      {
        "question": "Quel DPI dois-je utiliser ?",
        "answer": "Utilisez 150 DPI pour l'affichage écran, 300 DPI pour l'impression."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF en WebP",
    "metaDescription": "Convertissez des pages PDF en images WebP. Format moderne avec une excellente compression.",
    "keywords": [
      "pdf en webp",
      "convertir pdf en webp",
      "format image moderne",
      "images optimisées web"
    ],
    "description": "\n      <p>PDF en WebP convertit les pages de documents PDF en images WebP, le format d'image moderne de Google qui offre une excellente compression avec une haute qualité.</p>\n      <p>Les images WebP sont plus petites que JPG ou PNG tout en maintenant une qualité comparable, ce qui les rend idéales pour une utilisation web.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez les options de qualité",
        "description": "Choisissez les pages et définissez les paramètres de qualité/compression."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer les images WebP."
      }
    ],
    "useCases": [
      {
        "title": "Optimisation Web",
        "description": "Créez des images optimisées pour le web à partir du contenu PDF.",
        "icon": "globe"
      },
      {
        "title": "Économies de bande passante",
        "description": "Réduisez la taille des fichiers image pour un chargement plus rapide.",
        "icon": "zap"
      },
      {
        "title": "Sites web modernes",
        "description": "Utilisez des formats d'image modernes pour les projets web contemporains.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format WebP ?",
        "answer": "WebP est un format d'image moderne par Google offrant une compression supérieure."
      },
      {
        "question": "Le WebP est-il largement pris en charge ?",
        "answer": "Oui, tous les navigateurs modernes prennent en charge le format WebP."
      },
      {
        "question": "Combien plus petits sont les fichiers WebP ?",
        "answer": "Les fichiers WebP sont généralement 25 à 35% plus petits que les fichiers JPG équivalents."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF en BMP",
    "metaDescription": "Convertissez des pages PDF en images bitmap BMP. Format non compressé pour une compatibilité maximale.",
    "keywords": [
      "pdf en bmp",
      "convertir pdf en bitmap",
      "images non compressées",
      "format hérité"
    ],
    "description": "\n      <p>PDF en BMP convertit les pages de documents PDF en images bitmap BMP. BMP est un format non compressé qui assure une compatibilité maximale avec les systèmes et applications hérités.</p>\n      <p>Bien que les fichiers BMP soient plus volumineux que les formats compressés, ils offrent une qualité parfaite et une compatibilité universelle.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez les pages",
        "description": "Choisissez quelles pages convertir et définissez le DPI."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer les images BMP."
      }
    ],
    "useCases": [
      {
        "title": "Systèmes hérités",
        "description": "Créez des images compatibles avec d'anciens logiciels.",
        "icon": "history"
      },
      {
        "title": "Applications Windows",
        "description": "Générez des fichiers BMP pour des applications spécifiques à Windows.",
        "icon": "monitor"
      },
      {
        "title": "Archives non compressées",
        "description": "Créez des archives d'images non compressées à partir de PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Pourquoi utiliser le format BMP ?",
        "answer": "BMP offre une qualité non compressée et une compatibilité maximale avec les systèmes hérités."
      },
      {
        "question": "Les fichiers BMP sont-ils plus gros ?",
        "answer": "Oui, les fichiers BMP sont non compressés et significativement plus volumineux que JPG ou PNG."
      },
      {
        "question": "Quelles profondeurs de couleur sont prises en charge ?",
        "answer": "Les profondeurs de couleur 24 bits et 32 bits sont prises en charge."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF en TIFF",
    "metaDescription": "Convertissez PDF en images TIFF. Qualité professionnelle avec prise en charge multipages.",
    "keywords": [
      "pdf en tiff",
      "convertir pdf en tiff",
      "images professionnelles",
      "tiff multipages"
    ],
    "description": "\n      <p>PDF en TIFF convertit les documents PDF en images TIFF de haute qualité. TIFF est le format préféré pour l'impression professionnelle et l'archivage en raison de sa compression sans perte.</p>\n      <p>Créez des TIFF à page unique ou combinez toutes les pages en un fichier TIFF multipages. Parfait pour des fins professionnelles et archivistiques.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez la sortie",
        "description": "Choisissez TIFF page unique ou multipages et définissez le DPI."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer les images TIFF."
      }
    ],
    "useCases": [
      {
        "title": "Impression professionnelle",
        "description": "Créez des fichiers TIFF prêts à l'impression à partir de documents PDF.",
        "icon": "printer"
      },
      {
        "title": "Archivage de documents",
        "description": "Archivez des documents en format TIFF de haute qualité.",
        "icon": "archive"
      },
      {
        "title": "Édition",
        "description": "Convertissez des PDF en TIFF pour les flux de travail d'édition.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Puis-je créer des TIFF multipages ?",
        "answer": "Oui, vous pouvez combiner toutes les pages PDF en un seul TIFF multipages."
      },
      {
        "question": "Quelles options de compression sont disponibles ?",
        "answer": "Des options de compression LZW, ZIP et sans compression sont disponibles."
      },
      {
        "question": "Quel DPI dois-je utiliser pour l'impression ?",
        "answer": "Utilisez 300 DPI ou plus pour une impression professionnelle."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF en niveaux de gris",
    "metaDescription": "Convertissez un PDF couleur en niveaux de gris. Réduisez la taille du fichier et préparez pour l'impression noir et blanc.",
    "keywords": [
      "pdf en niveaux de gris",
      "pdf noir et blanc",
      "convertir pdf gris",
      "supprimer couleurs"
    ],
    "description": "\n      <p>PDF en niveaux de gris convertit les documents PDF couleur en niveaux de gris (noir et blanc). Cela réduit la taille du fichier et prépare les documents pour l'impression noir et blanc.</p>\n      <p>La conversion préserve la clarté du texte et le détail de l'image tout en supprimant les informations de couleur. Parfait pour l'impression de brouillons ou la création de versions économiques à imprimer.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF couleur ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Prévisualisez la conversion",
        "description": "Prévisualisez l'apparence de la version en niveaux de gris."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer le PDF en niveaux de gris."
      }
    ],
    "useCases": [
      {
        "title": "Économies d'impression",
        "description": "Convertissez en niveaux de gris pour économiser sur les coûts d'impression couleur.",
        "icon": "printer"
      },
      {
        "title": "Documents brouillons",
        "description": "Créez des brouillons noir et blanc pour révision.",
        "icon": "file-text"
      },
      {
        "title": "Réduction de la taille du fichier",
        "description": "Réduisez la taille du PDF en supprimant les informations de couleur.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Le texte restera-t-il lisible ?",
        "answer": "Oui, la clarté du texte est préservée lors de la conversion en niveaux de gris."
      },
      {
        "question": "De combien le fichier sera-t-il plus petit ?",
        "answer": "La réduction de taille varie mais peut être de 20 à 50% pour les documents riches en couleurs."
      },
      {
        "question": "Puis-je convertir uniquement des pages spécifiques ?",
        "answer": "Oui, vous pouvez sélectionner quelles pages convertir en niveaux de gris."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF en JSON",
    "metaDescription": "Extrayez le contenu PDF au format JSON. Obtenez des données structurées à partir de documents PDF.",
    "keywords": [
      "pdf en json",
      "extraire données pdf",
      "analyseur pdf",
      "données pdf structurées"
    ],
    "description": "\n      <p>PDF en JSON extrait le contenu des documents PDF dans un format JSON structuré. Extrayez le texte, les métadonnées, les informations de page et la structure du document pour une utilisation programmatique.</p>\n      <p>Parfait pour l'extraction de données, l'analyse de documents ou l'intégration de contenu PDF dans des applications et des flux de travail.</p>\n      <p>Toute l'extraction se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez les données à extraire",
        "description": "Choisissez quel contenu extraire : texte, métadonnées, structure."
      },
      {
        "step": 3,
        "title": "Extrayez et téléchargez",
        "description": "Cliquez sur Extraire pour générer le JSON et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Extraction de données",
        "description": "Extrayez des données structurées de documents PDF.",
        "icon": "database"
      },
      {
        "title": "Analyse de document",
        "description": "Analysez la structure et le contenu PDF par programmation.",
        "icon": "search"
      },
      {
        "title": "Intégration",
        "description": "Importez du contenu PDF dans des applications via JSON.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "Quelles données sont extraites ?",
        "answer": "Contenu textuel, métadonnées, dimensions de page, polices et structure du document."
      },
      {
        "question": "Le format JSON est-il documenté ?",
        "answer": "Oui, le schéma JSON est cohérent et bien documenté."
      },
      {
        "question": "Puis-je extraire de PDF numérisés ?",
        "answer": "Les PDF numérisés nécessitent un OCR d'abord. Utilisez notre outil OCR PDF avant l'extraction."
      }
    ]
  },
  "ocr-pdf": {
    "title": "OCR PDF",
    "metaDescription": "Rendez les PDF numérisés consultables avec l'OCR. Extrayez le texte d'images et de documents numérisés.",
    "keywords": [
      "ocr pdf",
      "pdf consultable",
      "reconnaissance texte",
      "scan en texte"
    ],
    "description": "\n      <p>OCR PDF utilise la reconnaissance optique de caractères pour extraire le texte de documents numérisés et d'images dans les PDF. Convertissez des PDF basés sur des images en documents texte consultables et sélectionnables.</p>\n      <p>La prise en charge de plusieurs langues assure une reconnaissance précise du texte quelle que soit la langue du document. La mise en page originale est préservée tout en ajoutant une couche de texte consultable.</p>\n      <p>Tout le traitement OCR se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le PDF numérisé",
        "description": "Glissez-déposez votre PDF numérisé ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez la langue",
        "description": "Choisissez la langue du document pour une reconnaissance précise."
      },
      {
        "step": 3,
        "title": "Traitez et téléchargez",
        "description": "Cliquez sur Traiter pour exécuter l'OCR et téléchargez le PDF consultable."
      }
    ],
    "useCases": [
      {
        "title": "Numériser les archives",
        "description": "Rendez les archives de documents numérisés consultables.",
        "icon": "archive"
      },
      {
        "title": "Recherche documentaire",
        "description": "Activez la recherche textuelle dans les documents numérisés.",
        "icon": "search"
      },
      {
        "title": "Extraction de texte",
        "description": "Extrayez le texte de documents numérisés pour l'édition.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Quelles langues sont prises en charge ?",
        "answer": "Plus de 100 langues sont prises en charge, y compris l'anglais, le chinois, le japonais, le coréen et plus encore."
      },
      {
        "question": "La mise en page originale sera-t-elle préservée ?",
        "answer": "Oui, la mise en page visuelle originale est préservée avec une couche de texte consultable ajoutée."
      },
      {
        "question": "Quelle est la précision de l'OCR ?",
        "answer": "La précision dépend de la qualité du scan mais dépasse généralement 95% pour des documents clairs."
      }
    ]
  },
  "alternate-merge": {
    "title": "Fusion alternée",
    "metaDescription": "Fusionnez des PDF en alternant les pages. Combinez des scans recto et verso en un seul document.",
    "keywords": [
      "fusion alternée",
      "entrelacer pdf",
      "combiner scans",
      "fusion recto verso"
    ],
    "description": "\n      <p>Fusion alternée combine deux PDF en entrelaçant leurs pages alternativement. C'est parfait pour combiner des pages recto et verso numérisées séparément en un seul document.</p>\n      <p>Téléchargez deux PDF et l'outil les fusionnera en prenant une page de chaque alternativement. Vous pouvez également inverser l'ordre d'un document pour un balayage verso-recto.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez deux PDF",
        "description": "Téléchargez le PDF des pages recto et le PDF des pages verso."
      },
      {
        "step": 2,
        "title": "Configurez l'ordre",
        "description": "Choisissez d'inverser le second document pour les scans verso-recto."
      },
      {
        "step": 3,
        "title": "Fusionnez et téléchargez",
        "description": "Cliquez sur Fusionner pour entrelacer les pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Numérisation duplex",
        "description": "Combinez des pages recto et verso numérisées séparément.",
        "icon": "copy"
      },
      {
        "title": "Assemblage de documents",
        "description": "Entrelacez des pages de deux documents liés.",
        "icon": "layers"
      },
      {
        "title": "Numérisation de livres",
        "description": "Combinez des scans de pages paires et impaires en livres complets.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Et si les documents ont un nombre de pages différent ?",
        "answer": "Les pages supplémentaires du document le plus long sont ajoutées à la fin."
      },
      {
        "question": "Puis-je inverser l'ordre des pages ?",
        "answer": "Oui, vous pouvez inverser l'un ou l'autre document avant la fusion."
      },
      {
        "question": "Est-ce différent de la fusion normale ?",
        "answer": "Oui, la fusion normale ajoute les documents ; la fusion alternée entrelace les pages."
      }
    ]
  },
  "add-attachments": {
    "title": "Ajouter des pièces jointes",
    "metaDescription": "Intégrez des fichiers dans des documents PDF. Joignez n'importe quel type de fichier à vos PDF.",
    "keywords": [
      "pièces jointes pdf",
      "intégrer fichiers",
      "attacher au pdf",
      "portfolio pdf"
    ],
    "description": "\n      <p>Ajouter des pièces jointes intègre des fichiers de n'importe quel type dans vos documents PDF. Joignez des feuilles de calcul, des images, des fichiers sources ou tout autre document pour créer des paquets PDF complets.</p>\n      <p>Les pièces jointes sont intégrées dans le PDF et peuvent être extraites par les destinataires utilisant n'importe quel lecteur PDF. Parfait pour distribuer des fichiers connexes ensemble.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Ajoutez des pièces jointes",
        "description": "Sélectionnez des fichiers à joindre au PDF."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour intégrer les pièces jointes et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Dossiers de projet",
        "description": "Regroupez des fichiers de projet avec des PDF de documentation.",
        "icon": "package"
      },
      {
        "title": "Distribution de rapports",
        "description": "Joignez des fichiers de données sources aux rapports PDF.",
        "icon": "paperclip"
      },
      {
        "title": "Liasses contractuelles",
        "description": "Incluez des documents justificatifs avec les contrats.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Quels types de fichiers peuvent être joints ?",
        "answer": "N'importe quel type de fichier peut être joint à un PDF."
      },
      {
        "question": "Y a-t-il une limite de taille ?",
        "answer": "La taille totale du PDF incluant les pièces jointes ne doit pas dépasser 500 Mo."
      },
      {
        "question": "Les destinataires peuvent-ils extraire les pièces jointes ?",
        "answer": "Oui, n'importe quel lecteur PDF peut extraire les pièces jointes intégrées."
      }
    ]
  },
  "extract-attachments": {
    "title": "Extraire les pièces jointes",
    "metaDescription": "Extrayez les fichiers intégrés des PDF. Téléchargez toutes les pièces jointes des documents PDF.",
    "keywords": [
      "extraire pièces jointes",
      "pièces jointes pdf",
      "télécharger fichiers intégrés",
      "extraction pdf"
    ],
    "description": "\n      <p>Extraire les pièces jointes récupère tous les fichiers intégrés des documents PDF. Téléchargez les pièces jointes individuellement ou sous forme d'archive ZIP contenant tous les fichiers.</p>\n      <p>Parfait pour accéder aux fichiers sources, aux données ou aux documents supplémentaires intégrés dans des paquets PDF.</p>\n      <p>Toute l'extraction se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Voir les pièces jointes",
        "description": "Voyez une liste de tous les fichiers intégrés dans le PDF."
      },
      {
        "step": 3,
        "title": "Extrayez et téléchargez",
        "description": "Téléchargez les fichiers individuels ou tous sous forme de ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Accéder aux fichiers sources",
        "description": "Extrayez les fichiers de données originaux des rapports PDF.",
        "icon": "download"
      },
      {
        "title": "Récupérer les pièces jointes",
        "description": "Récupérez les fichiers intégrés des paquets PDF.",
        "icon": "folder-open"
      },
      {
        "title": "Extraction par lots",
        "description": "Extrayez les pièces jointes de plusieurs PDF à la fois.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Et s'il n'y a pas de pièces jointes ?",
        "answer": "L'outil indiquera si aucun fichier intégré n'est trouvé."
      },
      {
        "question": "Tous les types de pièces jointes sont-ils pris en charge ?",
        "answer": "Oui, tous les types de fichiers intégrés peuvent être extraits."
      },
      {
        "question": "Puis-je extraire de plusieurs PDF ?",
        "answer": "Oui, vous pouvez traiter plusieurs PDF et télécharger toutes les pièces jointes."
      }
    ]
  },
  "edit-attachments": {
    "title": "Éditer les pièces jointes",
    "metaDescription": "Gérez les pièces jointes PDF. Visualisez, renommez et supprimez les fichiers intégrés.",
    "keywords": [
      "éditer pièces jointes",
      "gérer fichiers pdf",
      "supprimer pièces jointes",
      "renommer pièces jointes"
    ],
    "description": "\n      <p>Éditer les pièces jointes vous permet de gérer les fichiers intégrés dans les documents PDF. Visualisez toutes les pièces jointes, renommez-les ou supprimez les fichiers indésirables du PDF.</p>\n      <p>Parfait pour nettoyer les paquets PDF ou mettre à jour les informations des pièces jointes avant distribution.</p>\n      <p>Toute l'édition se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Gérez les pièces jointes",
        "description": "Visualisez, renommez ou supprimez les fichiers intégrés."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer les modifications et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Nettoyer les PDF",
        "description": "Supprimez les pièces jointes inutiles des paquets PDF.",
        "icon": "trash-2"
      },
      {
        "title": "Renommer les fichiers",
        "description": "Mettez à jour les noms des pièces jointes pour plus de clarté.",
        "icon": "edit"
      },
      {
        "title": "Réviser le contenu",
        "description": "Auditez les fichiers intégrés avant distribution.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Puis-je ajouter de nouvelles pièces jointes ici ?",
        "answer": "Utilisez l'outil Ajouter des pièces jointes pour intégrer de nouveaux fichiers."
      },
      {
        "question": "La suppression est-elle permanente ?",
        "answer": "Oui, les pièces jointes supprimées ne peuvent pas être récupérées du fichier de sortie."
      },
      {
        "question": "Puis-je prévisualiser les pièces jointes ?",
        "answer": "Vous pouvez voir les noms et tailles des fichiers ; utilisez Extraire les pièces jointes pour voir le contenu."
      }
    ]
  },
  "divide-pages": {
    "title": "Diviser les pages",
    "metaDescription": "Divisez les pages PDF en plusieurs sections. Divisez les pages horizontalement ou verticalement.",
    "keywords": [
      "diviser pages pdf",
      "couper page",
      "découper page pdf",
      "sections de page"
    ],
    "description": "\n      <p>Diviser les pages sépare les pages PDF individuelles en plusieurs sections. Coupez les pages horizontalement, verticalement ou en grille pour créer plusieurs pages à partir d'une seule.</p>\n      <p>Parfait pour diviser des documents numérisés avec plusieurs éléments par page, ou diviser des pages grand format en tailles standard.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez la division",
        "description": "Choisissez la division horizontale, verticale ou en grille et définissez le nombre de sections."
      },
      {
        "step": 3,
        "title": "Divisez et téléchargez",
        "description": "Cliquez sur Diviser pour couper les pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Diviser les scans",
        "description": "Divisez les pages numérisées contenant plusieurs documents.",
        "icon": "scissors"
      },
      {
        "title": "Redimensionner les pages",
        "description": "Divisez les grandes pages en tailles de papier standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Créer des cartes",
        "description": "Divisez les pages en sections de taille carte pour l'impression.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Puis-je diviser en sections inégales ?",
        "answer": "Actuellement, les divisions sont égales. Utilisez Recadrer PDF pour des sections personnalisées."
      },
      {
        "question": "Qu'advient-il du contenu aux lignes de division ?",
        "answer": "Le contenu est coupé à la ligne de division ; assurez-vous que le contenu important n'est pas aux limites."
      },
      {
        "question": "Puis-je diviser uniquement des pages spécifiques ?",
        "answer": "Oui, vous pouvez sélectionner quelles pages diviser."
      }
    ]
  },
  "add-blank-page": {
    "title": "Ajouter une page blanche",
    "metaDescription": "Insérez des pages blanches dans les documents PDF. Ajoutez des pages vides à n'importe quelle position.",
    "keywords": [
      "ajouter page blanche",
      "insérer page",
      "page vide",
      "insertion page pdf"
    ],
    "description": "\n      <p>Ajouter une page blanche insère des pages vides dans vos documents PDF à n'importe quelle position. Ajoutez des pages avant, après ou entre les pages existantes avec une taille de page personnalisable.</p>\n      <p>Parfait pour ajouter de l'espace pour des notes, créer des séparateurs de section ou préparer des documents pour l'impression.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Choisissez la position",
        "description": "Sélectionnez où insérer les pages blanches et combien."
      },
      {
        "step": 3,
        "title": "Ajoutez et téléchargez",
        "description": "Cliquez sur Ajouter pour insérer les pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Espace pour notes",
        "description": "Ajoutez des pages blanches pour des notes manuscrites.",
        "icon": "edit-3"
      },
      {
        "title": "Séparateurs de section",
        "description": "Insérez des pages blanches entre les sections du document.",
        "icon": "minus"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Ajoutez des pages pour l'alignement de l'impression recto-verso.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Puis-je choisir la taille de la page ?",
        "answer": "Oui, les pages blanches peuvent correspondre aux pages existantes ou utiliser des dimensions personnalisées."
      },
      {
        "question": "Puis-je ajouter plusieurs pages blanches ?",
        "answer": "Oui, vous pouvez ajouter n'importe quel nombre de pages blanches à la fois."
      },
      {
        "question": "Puis-je ajouter des pages colorées ?",
        "answer": "Utilisez l'outil Couleur d'arrière-plan après avoir ajouté des pages blanches pour ajouter de la couleur."
      }
    ]
  },
  "reverse-pages": {
    "title": "Inverser les pages",
    "metaDescription": "Inversez l'ordre des pages PDF. Retournez les pages du document de la dernière à la première.",
    "keywords": [
      "inverser pdf",
      "retourner ordre pages",
      "inverser pages",
      "document inversé"
    ],
    "description": "\n      <p>Inverser les pages retourne l'ordre des pages dans votre document PDF, mettant la dernière page en premier et la première page en dernier. Utile pour les documents numérisés dans l'ordre inverse ou pour des besoins d'impression spécifiques.</p>\n      <p>L'outil traite le document entier ou des plages de pages sélectionnées, maintenant tout le contenu et le formatage.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez les pages",
        "description": "Choisissez d'inverser toutes les pages ou une plage spécifique."
      },
      {
        "step": 3,
        "title": "Inversez et téléchargez",
        "description": "Cliquez sur Inverser pour retourner l'ordre des pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Corriger l'ordre de scan",
        "description": "Corrigez les documents numérisés dans l'ordre inverse.",
        "icon": "refresh-cw"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Inversez les pages pour des exigences d'impression spécifiques.",
        "icon": "printer"
      },
      {
        "title": "Réorganisation de document",
        "description": "Retournez rapidement l'ordre du document pour révision.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "Les signets sont-ils mis à jour ?",
        "answer": "Oui, les signets sont mis à jour pour pointer vers les pages inversées correctes."
      },
      {
        "question": "Puis-je inverser seulement certaines pages ?",
        "answer": "Oui, vous pouvez sélectionner une plage de pages à inverser."
      },
      {
        "question": "Est-ce la même chose que pivoter ?",
        "answer": "Non, inverser change l'ordre des pages ; pivoter change l'orientation de la page."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Faire pivoter PDF",
    "metaDescription": "Faites pivoter les pages PDF. Tournez les pages de 90, 180 ou 270 degrés.",
    "keywords": [
      "pivoter pdf",
      "tourner pages pdf",
      "rotation pdf",
      "corriger orientation"
    ],
    "description": "\n      <p>Faire pivoter PDF tourne les pages de votre document de 90, 180 ou 270 degrés. Corrigez les scans mal orientés, faites pivoter les pages paysage ou ajustez l'orientation de la page pour la lecture.</p>\n      <p>Faites pivoter toutes les pages uniformément ou sélectionnez des pages spécifiques pour les faire pivoter individuellement. L'outil préserve tout le contenu et le formatage.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez la rotation",
        "description": "Choisissez l'angle de rotation et quelles pages faire pivoter."
      },
      {
        "step": 3,
        "title": "Faites pivoter et téléchargez",
        "description": "Cliquez sur Faire pivoter pour appliquer les modifications et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Corriger les scans",
        "description": "Corrigez l'orientation des documents numérisés.",
        "icon": "rotate-cw"
      },
      {
        "title": "Pages paysage",
        "description": "Faites pivoter les pages paysage pour une visualisation correcte.",
        "icon": "monitor"
      },
      {
        "title": "Orientation mixte",
        "description": "Standardisez l'orientation des pages dans les documents mixtes.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Puis-je faire pivoter différentes pages différemment ?",
        "answer": "Oui, vous pouvez appliquer différentes rotations à différentes pages."
      },
      {
        "question": "La rotation affecte-t-elle la qualité d'impression ?",
        "answer": "Non, la rotation préserve toute la qualité du contenu."
      },
      {
        "question": "Puis-je faire pivoter selon des angles personnalisés ?",
        "answer": "La rotation est limitée aux incréments de 90 degrés (90, 180, 270)."
      }
    ]
  },
  "n-up-pdf": {
    "title": "PDF N-Up (Multi-pages)",
    "metaDescription": "Imprimez plusieurs pages PDF par feuille. Créez des mises en page 2-up, 4-up ou personnalisées.",
    "keywords": [
      "n-up pdf",
      "plusieurs pages par feuille",
      "impression 2 par page",
      "imposition page"
    ],
    "description": "\n      <p>PDF N-Up arrange plusieurs pages sur des feuilles uniques, créant des mises en page 2-up, 4-up, 6-up, 9-up ou personnalisées. Parfait pour économiser du papier lors de l'impression ou créer des documents à distribuer.</p>\n      <p>Choisissez parmi des mises en page prédéfinies ou créez des arrangements personnalisés. L'outil met automatiquement à l'échelle et positionne les pages pour des résultats optimaux.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Choisissez la mise en page",
        "description": "Sélectionnez 2-up, 4-up, 6-up, 9-up ou grille personnalisée."
      },
      {
        "step": 3,
        "title": "Créez et téléchargez",
        "description": "Cliquez sur Créer pour générer le PDF n-up et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Économiser du papier",
        "description": "Imprimez plusieurs pages par feuille pour réduire l'utilisation de papier.",
        "icon": "leaf"
      },
      {
        "title": "Créer des supports",
        "description": "Faites des supports compacts à partir de diapositives de présentation.",
        "icon": "file-text"
      },
      {
        "title": "Réviser les documents",
        "description": "Imprimez des documents en taille réduite pour révision.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Quelles mises en page sont disponibles ?",
        "answer": "Des mises en page 2-up, 4-up, 6-up, 9-up et grille personnalisée sont disponibles."
      },
      {
        "question": "Puis-je ajouter des bordures entre les pages ?",
        "answer": "Oui, vous pouvez ajouter des bordures et des gouttières entre les pages."
      },
      {
        "question": "L'ordre des pages est-il préservé ?",
        "answer": "Oui, les pages sont arrangées dans l'ordre de lecture (gauche à droite, haut en bas)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Combiner en une seule page",
    "metaDescription": "Assemblez les pages PDF en une seule page continue. Créez des documents à page unique défilants.",
    "keywords": [
      "combiner pages",
      "pdf page unique",
      "assembler pages",
      "défilement continu"
    ],
    "description": "\n      <p>Combiner en une seule page assemble toutes les pages PDF en une seule page continue. Créez des documents défilants parfaits pour la visualisation web ou la lecture continue.</p>\n      <p>Les pages sont jointes verticalement avec un espacement personnalisable. Le résultat est une seule longue page contenant tout le contenu.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez l'espacement",
        "description": "Choisissez l'espace entre les pages assemblées."
      },
      {
        "step": 3,
        "title": "Combinez et téléchargez",
        "description": "Cliquez sur Combiner pour créer le PDF à page unique."
      }
    ],
    "useCases": [
      {
        "title": "Documents Web",
        "description": "Créez des PDF défilants pour l'intégration web.",
        "icon": "globe"
      },
      {
        "title": "Lecture continue",
        "description": "Convertissez des documents paginés en défilement continu.",
        "icon": "scroll"
      },
      {
        "title": "Contenu long",
        "description": "Combinez des pages pour une lecture fluide de contenu long.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Y a-t-il une limite de page ?",
        "answer": "Les documents très longs peuvent être limités par la mémoire du navigateur."
      },
      {
        "question": "Puis-je ajouter des séparateurs entre les pages ?",
        "answer": "Oui, vous pouvez ajouter de l'espacement ou des lignes entre les pages originales."
      },
      {
        "question": "Cela fonctionnera-t-il pour l'impression ?",
        "answer": "Le résultat est meilleur pour la visualisation écran ; utilisez N-Up pour les mises en page d'impression."
      }
    ]
  },
  "view-metadata": {
    "title": "Voir les métadonnées",
    "metaDescription": "Visualisez les propriétés du document PDF. Voir l'auteur, le titre, les dates et d'autres métadonnées.",
    "keywords": [
      "métadonnées pdf",
      "propriétés document",
      "info pdf",
      "voir détails pdf"
    ],
    "description": "\n      <p>Voir les métadonnées affiche toutes les propriétés du document et les métadonnées de vos fichiers PDF. Voir l'auteur, le titre, le sujet, les mots-clés, la date de création, la date de modification, et plus encore.</p>\n      <p>Utile pour auditer les documents, vérifier les informations de fichier ou vérifier l'authenticité du document.</p>\n      <p>Toute la visualisation se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Visualisez les propriétés",
        "description": "Voyez toutes les métadonnées affichées dans un format organisé."
      },
      {
        "step": 3,
        "title": "Exportez si nécessaire",
        "description": "Optionnellement exportez les métadonnées en JSON."
      }
    ],
    "useCases": [
      {
        "title": "Audit de document",
        "description": "Révisez les propriétés du document pour la conformité.",
        "icon": "clipboard-check"
      },
      {
        "title": "Vérifier l'authenticité",
        "description": "Vérifiez les dates de création et les informations d'auteur.",
        "icon": "shield"
      },
      {
        "title": "Information fichier",
        "description": "Obtenez des informations détaillées sur les fichiers PDF.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Quelles métadonnées sont affichées ?",
        "answer": "Titre, auteur, sujet, mots-clés, créateur, producteur, dates et version PDF."
      },
      {
        "question": "Puis-je éditer les métadonnées ici ?",
        "answer": "Utilisez l'outil Modifier les métadonnées pour modifier les propriétés du document."
      },
      {
        "question": "Les métadonnées XMP sont-elles incluses ?",
        "answer": "Oui, les métadonnées standard et XMP sont affichées."
      }
    ]
  },
  "edit-metadata": {
    "title": "Modifier les métadonnées",
    "metaDescription": "Modifiez les propriétés du document PDF. Changez le titre, l'auteur, le sujet et les mots-clés.",
    "keywords": [
      "modifier métadonnées pdf",
      "changer propriétés pdf",
      "auteur pdf",
      "info document"
    ],
    "description": "\n      <p>Modifier les métadonnées vous permet de modifier les propriétés du document dans vos fichiers PDF. Changez le titre, l'auteur, le sujet, les mots-clés et d'autres champs de métadonnées.</p>\n      <p>Parfait pour corriger les informations du document, ajouter une attribution correcte ou préparer les fichiers pour la distribution.</p>\n      <p>Toute la modification se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Modifiez les propriétés",
        "description": "Modifiez le titre, l'auteur, le sujet, les mots-clés et d'autres champs."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer les modifications et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Ajouter une attribution",
        "description": "Définissez les informations correctes d'auteur et de créateur.",
        "icon": "user"
      },
      {
        "title": "Optimisation SEO",
        "description": "Ajoutez des mots-clés et des descriptions pour la recherche.",
        "icon": "search"
      },
      {
        "title": "Préparation de document",
        "description": "Préparez les documents avec des métadonnées correctes avant le partage.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Quels champs puis-je modifier ?",
        "answer": "Les champs titre, auteur, sujet, mots-clés, créateur et producteur."
      },
      {
        "question": "Puis-je effacer toutes les métadonnées ?",
        "answer": "Utilisez l'outil Supprimer les métadonnées pour effacer toutes les propriétés du document."
      },
      {
        "question": "Les dates sont-elles modifiables ?",
        "answer": "Les dates de création et de modification sont mises à jour automatiquement."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDFs en ZIP",
    "metaDescription": "Empaquetez plusieurs PDF dans une archive ZIP. Compressez et regroupez des fichiers PDF.",
    "keywords": [
      "pdf en zip",
      "compresser pdfs",
      "regrouper pdfs",
      "archiver pdfs"
    ],
    "description": "\n      <p>PDFs en ZIP empaquette plusieurs fichiers PDF dans une seule archive ZIP. Compressez et regroupez vos PDF pour un partage, un stockage ou une sauvegarde plus faciles.</p>\n      <p>L'outil crée une archive compressée contenant tous vos fichiers PDF, réduisant la taille totale et simplifiant la gestion des fichiers.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez des PDF",
        "description": "Glissez-déposez plusieurs fichiers PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez l'archive",
        "description": "Optionnellement définissez le nom de l'archive et le niveau de compression."
      },
      {
        "step": 3,
        "title": "Créez et téléchargez",
        "description": "Cliquez sur Créer pour générer l'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Partage de fichiers",
        "description": "Regroupez plusieurs PDF pour un partage plus facile.",
        "icon": "share-2"
      },
      {
        "title": "Création de sauvegarde",
        "description": "Créez des sauvegardes compressées de collections PDF.",
        "icon": "archive"
      },
      {
        "title": "Pièces jointes d'e-mail",
        "description": "Combinez des PDF en une seule pièce jointe pour e-mail.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Quelle compression est appliquée ?",
        "answer": "La compression ZIP réduit généralement la taille totale de 10 à 30%."
      },
      {
        "question": "Y a-t-il une limite de fichiers ?",
        "answer": "Vous pouvez inclure jusqu'à 100 PDF dans une seule archive."
      },
      {
        "question": "Puis-je définir un mot de passe ?",
        "answer": "La création de ZIP protégés par mot de passe n'est pas actuellement prise en charge."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Comparer des PDF",
    "metaDescription": "Comparez deux documents PDF. Mettez en évidence les différences entre les versions.",
    "keywords": [
      "comparer pdf",
      "différence pdf",
      "comparaison documents",
      "comparaison versions"
    ],
    "description": "\n      <p>Comparer des PDF analyse deux documents PDF et met en évidence les différences entre eux. Parfait pour réviser les versions de documents, vérifier les modifications de contrats ou vérifier les éditions.</p>\n      <p>Visualisez les documents côte à côte ou en mode superposition avec les différences mises en évidence. L'outil identifie les changements de texte, les ajouts et les suppressions.</p>\n      <p>Toute la comparaison se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez deux PDF",
        "description": "Téléchargez le document PDF original et le document modifié."
      },
      {
        "step": 2,
        "title": "Comparez les documents",
        "description": "Visualisez les différences mises en évidence en mode côte à côte ou superposition."
      },
      {
        "step": 3,
        "title": "Exportez les résultats",
        "description": "Téléchargez un rapport de comparaison ou un PDF annoté."
      }
    ],
    "useCases": [
      {
        "title": "Révision de contrat",
        "description": "Comparez les versions de contrat pour identifier les changements.",
        "icon": "file-text"
      },
      {
        "title": "Révision de document",
        "description": "Révisez les éditions entre les versions de document.",
        "icon": "git-compare"
      },
      {
        "title": "Assurance qualité",
        "description": "Vérifiez que seules les modifications prévues ont été apportées.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quels types de différences sont détectés ?",
        "answer": "Ajouts de texte, suppressions, modifications et changements de formatage."
      },
      {
        "question": "Puis-je comparer des documents numérisés ?",
        "answer": "Les documents numérisés doivent d'abord être traités par OCR pour la comparaison de texte."
      },
      {
        "question": "La comparaison visuelle est-elle disponible ?",
        "answer": "Oui, le mode superposition montre les différences visuelles entre les pages."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Postériser PDF",
    "metaDescription": "Divisez de grandes pages PDF en tuiles imprimables. Créez des posters à partir de pages PDF.",
    "keywords": [
      "postériser pdf",
      "tuiler pdf",
      "impression grand format",
      "poster pdf"
    ],
    "description": "\n      <p>Postériser PDF divise de grandes pages PDF en tuiles plus petites qui peuvent être imprimées sur du papier standard et assemblées en posters. Parfait pour imprimer de grands diagrammes, cartes ou œuvres d'art.</p>\n      <p>Configurez la taille de la grille et le chevauchement pour un assemblage facile. L'outil calcule automatiquement les dimensions des tuiles pour votre taille de sortie cible.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre PDF grand format ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez les tuiles",
        "description": "Définissez la taille de la grille, le chevauchement et la taille du papier de sortie."
      },
      {
        "step": 3,
        "title": "Créez et téléchargez",
        "description": "Cliquez sur Créer pour générer des tuiles imprimables."
      }
    ],
    "useCases": [
      {
        "title": "Impression d'affiches",
        "description": "Imprimez de grandes affiches sur du papier standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Impression de cartes",
        "description": "Imprimez de grandes cartes en sections pour l'assemblage.",
        "icon": "map"
      },
      {
        "title": "Reproduction d'art",
        "description": "Créez de grandes impressions à partir d'œuvres d'art PDF.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Quel chevauchement dois-je utiliser ?",
        "answer": "Un chevauchement de 10-20mm est recommandé pour un alignement facile lors de l'assemblage."
      },
      {
        "question": "Puis-je ajouter des marques de coupe ?",
        "answer": "Oui, des marques de coupe peuvent être ajoutées pour aider à la découpe et à l'alignement."
      },
      {
        "question": "Quelles tailles de papier sont prises en charge ?",
        "answer": "A4, Lettre, A3 et des tailles personnalisées sont prises en charge."
      }
    ]
  },
  "fix-page-size": {
    "title": "Corriger la taille des pages",
    "metaDescription": "Standardisez les tailles de pages PDF. Convertissez toutes les pages à des dimensions uniformes.",
    "keywords": [
      "corriger taille page",
      "standardiser pdf",
      "pages uniformes",
      "redimensionner pages pdf"
    ],
    "description": "\n      <p>Corriger la taille des pages standardise toutes les pages de votre PDF à des dimensions uniformes. Convertissez des documents de tailles mixtes en tailles de pages cohérentes pour une présentation professionnelle ou une impression.</p>\n      <p>Choisissez parmi des tailles standard (A4, Lettre, etc.) ou définissez des dimensions personnalisées. Le contenu est mis à l'échelle ou positionné pour s'adapter à la nouvelle taille de page.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez la taille cible",
        "description": "Choisissez une taille standard ou entrez des dimensions personnalisées."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour standardiser les pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Préparation à l'impression",
        "description": "Standardisez les pages pour une impression cohérente.",
        "icon": "printer"
      },
      {
        "title": "Nettoyage de document",
        "description": "Corrigez les documents avec des tailles de pages incohérentes.",
        "icon": "file-check"
      },
      {
        "title": "Documents professionnels",
        "description": "Créez des documents uniformes pour la distribution.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Comment le contenu est-il géré ?",
        "answer": "Le contenu est mis à l'échelle pour s'adapter ou centré sur la nouvelle taille de page."
      },
      {
        "question": "Puis-je préserver le ratio d'aspect ?",
        "answer": "Oui, le contenu peut être mis à l'échelle proportionnellement pour s'adapter."
      },
      {
        "question": "Quelles tailles standard sont disponibles ?",
        "answer": "A4, A3, Lettre, Légal et d'autres tailles courantes."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linéariser PDF",
    "metaDescription": "Optimisez le PDF pour une visualisation web rapide. Activez le chargement progressif.",
    "keywords": [
      "linéariser pdf",
      "vue web rapide",
      "optimiser pdf",
      "pdf progressif"
    ],
    "description": "\n      <p>Linéariser PDF optimise vos documents pour une visualisation web rapide. Les PDF linéarisés peuvent commencer à s'afficher avant que le fichier entier ne soit téléchargé, améliorant l'expérience utilisateur.</p>\n      <p>Aussi connu sous le nom de \"Fast Web View\", cette optimisation réorganise la structure du PDF pour un chargement progressif dans les navigateurs web.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Linéarisez",
        "description": "Cliquez sur Linéariser pour optimiser pour la visualisation web."
      },
      {
        "step": 3,
        "title": "Téléchargez",
        "description": "Téléchargez votre PDF optimisé."
      }
    ],
    "useCases": [
      {
        "title": "Publication Web",
        "description": "Optimisez les PDF pour les téléchargements de sites web.",
        "icon": "globe"
      },
      {
        "title": "Pièces jointes d'e-mail",
        "description": "Créez des PDF qui s'ouvrent plus rapidement pour les destinataires.",
        "icon": "mail"
      },
      {
        "title": "Documents en ligne",
        "description": "Améliorez l'expérience de visualisation pour les documents en ligne.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que la linéarisation ?",
        "answer": "La linéarisation réorganise les données PDF pour un chargement progressif."
      },
      {
        "question": "Cela réduit-il la taille du fichier ?",
        "answer": "La linéarisation peut légèrement augmenter la taille du fichier en raison de la structure ajoutée."
      },
      {
        "question": "Est-ce compatible avec tous les lecteurs ?",
        "answer": "Oui, les PDF linéarisés fonctionnent dans tous les lecteurs PDF."
      }
    ]
  },
  "page-dimensions": {
    "title": "Dimensions des pages",
    "metaDescription": "Analysez les tailles de pages PDF. Visualisez les dimensions de toutes les pages de votre document.",
    "keywords": [
      "taille page pdf",
      "dimensions page",
      "mesures pdf",
      "taille document"
    ],
    "description": "\n      <p>Dimensions des pages analyse et affiche la taille de chaque page de votre document PDF. Visualisez les dimensions dans diverses unités (pouces, mm, points) et identifiez les pages aux tailles non standard.</p>\n      <p>Utile pour la préparation à l'impression, l'analyse de documents ou l'identification de tailles de pages incohérentes.</p>\n      <p>Toute l'analyse se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Voir les dimensions",
        "description": "Voyez les tailles de page affichées pour toutes les pages."
      },
      {
        "step": 3,
        "title": "Exporter le rapport",
        "description": "Optionnellement exportez les dimensions en JSON."
      }
    ],
    "useCases": [
      {
        "title": "Planification d'impression",
        "description": "Vérifiez les tailles de page avant l'impression.",
        "icon": "printer"
      },
      {
        "title": "Analyse de document",
        "description": "Identifiez les pages avec des dimensions inhabituelles.",
        "icon": "search"
      },
      {
        "title": "Contrôle qualité",
        "description": "Vérifiez que les tailles de page répondent aux spécifications.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quelles unités sont disponibles ?",
        "answer": "Pouces, millimètres, centimètres et points."
      },
      {
        "question": "Cela montre-t-il l'orientation ?",
        "answer": "Oui, l'orientation portrait ou paysage est indiquée."
      },
      {
        "question": "Puis-je corriger les tailles incohérentes ?",
        "answer": "Utilisez l'outil Corriger la taille des pages pour standardiser les dimensions."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Supprimer les restrictions",
    "metaDescription": "Supprimez les restrictions PDF. Déverrouillez les permissions d'impression, de copie et d'édition.",
    "keywords": [
      "supprimer restrictions pdf",
      "déverrouiller pdf",
      "permissions pdf",
      "libérer pdf"
    ],
    "description": "\n      <p>Supprimer les restrictions déverrouille les PDF qui ont des restrictions de permission empêchant l'impression, la copie ou l'édition. Cet outil supprime les restrictions de mot de passe propriétaire tout en préservant le contenu du document.</p>\n      <p>Note : Cet outil ne peut pas supprimer les mots de passe utilisateur qui empêchent l'ouverture du document. Utilisez Déchiffrer PDF pour les fichiers protégés par mot de passe.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le PDF restreint",
        "description": "Glissez-déposez votre PDF restreint ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Supprimez les restrictions",
        "description": "Cliquez sur Supprimer pour déverrouiller le document."
      },
      {
        "step": 3,
        "title": "Téléchargez",
        "description": "Téléchargez le PDF sans restrictions."
      }
    ],
    "useCases": [
      {
        "title": "Activer l'impression",
        "description": "Déverrouillez les PDF qui empêchent l'impression.",
        "icon": "printer"
      },
      {
        "title": "Activer la copie",
        "description": "Autorisez la sélection et la copie de texte.",
        "icon": "copy"
      },
      {
        "title": "Activer l'édition",
        "description": "Supprimez les restrictions sur l'édition du document.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Est-ce légal ?",
        "answer": "Supprimer les restrictions des documents que vous possédez ou pour lesquels vous avez des droits est généralement légal."
      },
      {
        "question": "Peut-il supprimer les mots de passe d'ouverture ?",
        "answer": "Non, utilisez Déchiffrer PDF pour les documents protégés par mot de passe."
      },
      {
        "question": "Le contenu sera-t-il affecté ?",
        "answer": "Non, seules les restrictions sont supprimées ; le contenu reste inchangé."
      }
    ]
  },
  "repair-pdf": {
    "title": "Réparer PDF",
    "metaDescription": "Reparez les fichiers PDF corrompus. Récupérez et réparez les documents endommagés.",
    "keywords": [
      "réparer pdf",
      "fixer pdf",
      "récupérer pdf",
      "pdf corrompu"
    ],
    "description": "\n      <p>Réparer PDF tente de réparer les fichiers PDF corrompus ou endommagés. L'outil analyse la structure du document et la reconstruit pour récupérer autant de contenu que possible.</p>\n      <p>Utile pour récupérer des fichiers qui ne s'ouvrent pas, affichent des erreurs ou ont du contenu manquant en raison de la corruption.</p>\n      <p>Toute la réparation se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le PDF endommagé",
        "description": "Glissez-déposez votre PDF corrompu ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Réparez le document",
        "description": "Cliquez sur Réparer pour tenter la récupération."
      },
      {
        "step": 3,
        "title": "Téléchargez",
        "description": "Téléchargez le PDF réparé si réussi."
      }
    ],
    "useCases": [
      {
        "title": "Récupérer des fichiers",
        "description": "Récupérez des PDF qui ne s'ouvrent pas correctement.",
        "icon": "refresh-cw"
      },
      {
        "title": "Corriger les erreurs",
        "description": "Réparez les fichiers affichant des messages d'erreur.",
        "icon": "wrench"
      },
      {
        "title": "Restaurer le contenu",
        "description": "Récupérez le contenu de fichiers partiellement corrompus.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Tous les PDF peuvent-ils être réparés ?",
        "answer": "Le succès dépend du type et de l'étendue de la corruption."
      },
      {
        "question": "Tout le contenu sera-t-il récupéré ?",
        "answer": "L'outil récupère autant que possible ; les fichiers gravement endommagés peuvent avoir des pertes."
      },
      {
        "question": "Dois-je garder l'original ?",
        "answer": "Oui, gardez toujours le fichier original comme sauvegarde."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Chiffrer PDF",
    "metaDescription": "Protégez les fichiers PDF par mot de passe. Ajoutez un chiffrement et définissez des permissions.",
    "keywords": [
      "chiffrer pdf",
      "mot de passe pdf",
      "sécuriser pdf",
      "cryptage pdf"
    ],
    "description": "\n      <p>Chiffrer PDF ajoute une protection par mot de passe et un chiffrement à vos documents PDF. Définissez des mots de passe utilisateur pour empêcher l'ouverture, et des mots de passe propriétaire pour contrôler les permissions comme l'impression et la copie.</p>\n      <p>Choisissez parmi différents niveaux de chiffrement (AES 128 bits ou 256 bits) pour des besoins de sécurité variables.</p>\n      <p>Tout le chiffrement se produit dans votre navigateur, garantissant que vos mots de passe et documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez les mots de passe",
        "description": "Entrez le mot de passe utilisateur et/ou le mot de passe propriétaire. Configurez les permissions."
      },
      {
        "step": 3,
        "title": "Chiffrez et téléchargez",
        "description": "Cliquez sur Chiffrer pour sécuriser votre PDF et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Documents confidentiels",
        "description": "Protégez les documents commerciaux sensibles.",
        "icon": "lock"
      },
      {
        "title": "Fichiers personnels",
        "description": "Sécurisez les documents personnels comme les déclarations fiscales.",
        "icon": "shield"
      },
      {
        "title": "Distribution contrôlée",
        "description": "Limitez ce que les destinataires peuvent faire avec les documents.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Quelle est la différence entre les mots de passe utilisateur et propriétaire ?",
        "answer": "Le mot de passe utilisateur empêche l'ouverture ; le mot de passe propriétaire contrôle les permissions."
      },
      {
        "question": "Quel chiffrement est utilisé ?",
        "answer": "Des options de chiffrement AES 128 bits ou 256 bits sont disponibles."
      },
      {
        "question": "Puis-je définir des permissions sans mot de passe utilisateur ?",
        "answer": "Oui, vous pouvez définir un mot de passe propriétaire uniquement pour contrôler les permissions."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Assainir PDF",
    "metaDescription": "Supprimez les données cachées des PDF. Nettoyez les métadonnées, les scripts et les informations sensibles.",
    "keywords": [
      "assainir pdf",
      "nettoyer pdf",
      "supprimer données cachées",
      "confidentialité pdf"
    ],
    "description": "\n      <p>Assainir PDF supprime les données cachées et les informations potentiellement sensibles de vos documents. Supprimez les métadonnées, les scripts intégrés, les pièces jointes, les commentaires et autres contenus cachés.</p>\n      <p>Essentiel pour préparer les documents à la distribution publique ou lorsque la confidentialité est une préoccupation.</p>\n      <p>Tout l'assainissement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez ce qu'il faut supprimer",
        "description": "Choisissez quels types de données cachées supprimer."
      },
      {
        "step": 3,
        "title": "Assainissez et téléchargez",
        "description": "Cliquez sur Assainir pour nettoyer le PDF et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Diffusion publique",
        "description": "Préparez les documents pour la distribution publique.",
        "icon": "globe"
      },
      {
        "title": "Protection de la vie privée",
        "description": "Supprimez les informations personnelles avant de partager.",
        "icon": "shield"
      },
      {
        "title": "Conformité de sécurité",
        "description": "Respectez les exigences de sécurité pour la manipulation de documents.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quelles données cachées sont supprimées ?",
        "answer": "Métadonnées, scripts, pièces jointes, commentaires, données de formulaire et calques cachés."
      },
      {
        "question": "Le contenu visible sera-t-il affecté ?",
        "answer": "Non, seules les données cachées sont supprimées ; le contenu visible reste."
      },
      {
        "question": "Est-ce réversible ?",
        "answer": "Non, les données supprimées ne peuvent pas être récupérées. Gardez une sauvegarde de l'original."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Déchiffrer PDF",
    "metaDescription": "Supprimez le mot de passe des fichiers PDF. Déverrouillez les documents protégés par mot de passe.",
    "keywords": [
      "déchiffrer pdf",
      "supprimer mot de passe pdf",
      "déverrouiller pdf",
      "enlever protection pdf"
    ],
    "description": "\n      <p>Déchiffrer PDF supprime la protection par mot de passe des documents PDF. Entrez le mot de passe actuel pour déverrouiller le fichier et créer une copie non protégée.</p>\n      <p>Cet outil nécessite que vous connaissiez le mot de passe actuel. Il ne peut pas craquer ou contourner les mots de passe inconnus.</p>\n      <p>Tout le déchiffrement se produit dans votre navigateur, garantissant que vos mots de passe et documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le PDF protégé",
        "description": "Glissez-déposez votre PDF protégé par mot de passe."
      },
      {
        "step": 2,
        "title": "Entrez le mot de passe",
        "description": "Entrez le mot de passe actuel du document."
      },
      {
        "step": 3,
        "title": "Déchiffrez et téléchargez",
        "description": "Cliquez sur Déchiffrer pour supprimer la protection et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Supprimer les anciens mots de passe",
        "description": "Déverrouillez les documents lorsque le mot de passe n'est plus nécessaire.",
        "icon": "unlock"
      },
      {
        "title": "Simplifier l'accès",
        "description": "Créez des copies non protégées pour un partage plus facile.",
        "icon": "share-2"
      },
      {
        "title": "Archiver des documents",
        "description": "Supprimez les mots de passe avant l'archivage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Peut-il craquer des mots de passe inconnus ?",
        "answer": "Non, vous devez connaître le mot de passe actuel pour déchiffrer."
      },
      {
        "question": "Le fichier original est-il modifié ?",
        "answer": "Non, une nouvelle copie non protégée est créée."
      },
      {
        "question": "Et si j'ai oublié le mot de passe ?",
        "answer": "Malheureusement, nous ne pouvons pas récupérer les mots de passe oubliés."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Aplatir PDF",
    "metaDescription": "Aplatissez les formulaires PDF et les annotations. Rendez le contenu non modifiable.",
    "keywords": [
      "aplatir pdf",
      "aplatir formulaires",
      "aplatir annotations",
      "pdf non modifiable"
    ],
    "description": "\n      <p>Aplatir PDF convertit les éléments interactifs comme les champs de formulaire et les annotations en contenu statique. Le PDF aplati a la même apparence mais ne peut plus être édité.</p>\n      <p>Parfait pour finaliser les formulaires remplis, préserver les annotations ou créer des versions non modifiables de documents.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre PDF avec formulaires ou annotations."
      },
      {
        "step": 2,
        "title": "Sélectionnez quoi aplatir",
        "description": "Choisissez d'aplatir les formulaires, les annotations ou les deux."
      },
      {
        "step": 3,
        "title": "Aplatissez et téléchargez",
        "description": "Cliquez sur Aplatir pour créer le PDF statique."
      }
    ],
    "useCases": [
      {
        "title": "Finaliser les formulaires",
        "description": "Verrouillez les données de formulaire remplies pour empêcher les modifications.",
        "icon": "lock"
      },
      {
        "title": "Préserver les annotations",
        "description": "Rendez les annotations permanentes dans le document.",
        "icon": "check-circle"
      },
      {
        "title": "Archiver des documents",
        "description": "Créez des versions non modifiables pour l'archivage.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "L'aplatissement est-il réversible ?",
        "answer": "Non, l'aplatissement est permanent. Gardez une sauvegarde de l'original."
      },
      {
        "question": "L'apparence changera-t-elle ?",
        "answer": "Non, le document a la même apparence mais n'est plus interactif."
      },
      {
        "question": "Cela réduit-il la taille du fichier ?",
        "answer": "Parfois, car les éléments interactifs sont convertis en contenu plus simple."
      }
    ]
  },
  "remove-metadata": {
    "title": "Supprimer les métadonnées",
    "metaDescription": "Supprimez les métadonnées des fichiers PDF. Enlevez l'auteur, les dates et les propriétés du document.",
    "keywords": [
      "supprimer métadonnées pdf",
      "effacer métadonnées",
      "confidentialité pdf",
      "pdf anonyme"
    ],
    "description": "\n      <p>Supprimer les métadonnées retire toutes les propriétés du document et les métadonnées de vos fichiers PDF. Supprimez les noms d'auteur, les dates de création, les informations logicielles et autres données d'identification.</p>\n      <p>Essentiel pour la confidentialité lors du partage de documents ou lorsque les métadonnées pourraient révéler des informations sensibles.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Supprimez les métadonnées",
        "description": "Cliquez sur Supprimer pour effacer toutes les métadonnées."
      },
      {
        "step": 3,
        "title": "Téléchargez",
        "description": "Téléchargez le PDF sans métadonnées."
      }
    ],
    "useCases": [
      {
        "title": "Protection de la vie privée",
        "description": "Supprimez les informations personnelles avant de partager.",
        "icon": "shield"
      },
      {
        "title": "Documents anonymes",
        "description": "Créez des documents sans attribution d'auteur.",
        "icon": "user-x"
      },
      {
        "title": "Distribution propre",
        "description": "Distribuez des documents sans métadonnées internes.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Quelles métadonnées sont supprimées ?",
        "answer": "Auteur, titre, sujet, mots-clés, dates, créateur et informations de producteur."
      },
      {
        "question": "Les métadonnées XMP sont-elles supprimées ?",
        "answer": "Oui, les métadonnées standard et XMP sont supprimées."
      },
      {
        "question": "Le contenu sera-t-il affecté ?",
        "answer": "Non, seules les métadonnées sont supprimées ; le contenu du document reste inchangé."
      }
    ]
  },
  "change-permissions": {
    "title": "Changer les permissions",
    "metaDescription": "Modifiez les permissions PDF. Contrôlez l'accès à l'impression, la copie et l'édition.",
    "keywords": [
      "permissions pdf",
      "changer accès pdf",
      "restreindre pdf",
      "sécurité pdf"
    ],
    "description": "\n      <p>Changer les permissions modifie les contrôles d'accès sur vos documents PDF. Activez ou désactivez l'impression, la copie, l'édition et les permissions d'annotation.</p>\n      <p>Définissez un mot de passe propriétaire pour appliquer ces restrictions. Les destinataires peuvent voir le document mais sont limités dans les actions qu'ils peuvent effectuer.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez les permissions",
        "description": "Activez ou désactivez l'impression, la copie, l'édition et les annotations."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Définissez le mot de passe propriétaire et téléchargez le PDF restreint."
      }
    ],
    "useCases": [
      {
        "title": "Empêcher la copie",
        "description": "Désactivez la copie de texte pour protéger le contenu.",
        "icon": "copy"
      },
      {
        "title": "Contrôler l'impression",
        "description": "Restreignez ou autorisez l'impression du document.",
        "icon": "printer"
      },
      {
        "title": "Limiter l'édition",
        "description": "Empêchez les modifications du document.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Ai-je besoin d'un mot de passe ?",
        "answer": "Un mot de passe propriétaire est requis pour appliquer les permissions."
      },
      {
        "question": "Les permissions peuvent-elles être supprimées ?",
        "answer": "Oui, avec le mot de passe propriétaire ou en utilisant l'outil Supprimer les restrictions."
      },
      {
        "question": "Tous les lecteurs PDF sont-ils compatibles ?",
        "answer": "La plupart des lecteurs PDF respectent les permissions, mais certains peuvent ne pas les appliquer."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF en Word",
    "metaDescription": "Convertissez des PDF en documents Word (DOCX) modifiables. Préservez la mise en page et le formatage original.",
    "keywords": [
      "pdf en word",
      "convertir pdf en docx",
      "pdf vers word",
      "pdf éditable word"
    ],
    "description": "\n      <p>Convertissez vos documents PDF en fichiers Microsoft Word (DOCX) entièrement modifiables. Notre technologie d'analyse avancée préserve la mise en page originale, les polices, les tableaux et les images.</p>\n      <p>Modifiez facilement le contenu de vos PDF dans Word sans avoir à tout retaper. Parfait pour les contrats, les rapports et les CV.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos documents ne quittent jamais votre ordinateur.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document à convertir."
      },
      {
        "step": 2,
        "title": "Conversion",
        "description": "Attendez que le processus de conversion automatique analyse la structure du document."
      },
      {
        "step": 3,
        "title": "Téléchargez le DOCX",
        "description": "Une fois prêt, téléchargez votre fichier Word éditable."
      }
    ],
    "useCases": [
      {
        "title": "Édition de contrats",
        "description": "Transformez un contrat PDF en Word pour modifier des clauses ou ajouter des commentaires.",
        "icon": "file-text"
      },
      {
        "title": "Mise à jour de CV",
        "description": "Récupérez le contenu d'un ancien CV au format PDF pour le mettre à jour facilement dans Word.",
        "icon": "user"
      },
      {
        "title": "Réutilisation de contenu",
        "description": "Extrayez des textes et des structures de rapports PDF pour de nouveaux documents.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "La mise en page sera-t-elle identique ?",
        "answer": "Nous nous efforçons de conserver une fidélité maximale. Les documents complexes peuvent nécessiter quelques ajustements mineurs."
      },
      {
        "question": "Puis-je convertir des scans ?",
        "answer": "Les PDF numérisés (images) seront convertis en images dans Word. Pour du texte éditable, utilisez d'abord notre outil OCR PDF."
      },
      {
        "question": "Est-ce compatible avec Google Docs ?",
        "answer": "Oui, le fichier .docx généré est standard et peut être ouvert dans Microsoft Word, Google Docs ou LibreOffice."
      }
    ]
  },
  "pdf-to-xlsx": {
    "title": "PDF en Excel",
    "metaDescription": "Extrayez des tableaux PDF vers des feuilles de calcul Excel (XLSX). Précision des données et structure conservée.",
    "keywords": [
      "pdf en excel",
      "extraire tableau pdf",
      "pdf vers xlsx",
      "conversion données pdf"
    ],
    "description": "\n      <p>Transformez vos données PDF en feuilles de calcul Excel organisées. Cet outil identifie automatiquement les tableaux dans vos documents et les convertit en cellules XLSX éditables.</p>\n      <p>Idéal pour l'analyse financière, la gestion d'inventaire ou le traitement de données statistiques sans saisie manuelle.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Sélectionnez le fichier contenant les tableaux de données."
      },
      {
        "step": 2,
        "title": "Analyse des données",
        "description": "L'outil scanne le document pour détecter les lignes et colonnes."
      },
      {
        "step": 3,
        "title": "Téléchargez l'Excel",
        "description": "Récupérez votre fichier XLSX prêt pour vos calculs."
      }
    ],
    "useCases": [
      {
        "title": "Analyse financière",
        "description": "Convertissez des relevés bancaires ou des rapports annuels PDF en Excel.",
        "icon": "bar-chart"
      },
      {
        "title": "Saisie de données",
        "description": "Évitez les erreurs de saisie en extrayant directement des listes de prix ou d'inventaires.",
        "icon": "database"
      },
      {
        "title": "Études scientifiques",
        "description": "Récupérez des tableaux de données de publications pour vos propres recherches.",
        "icon": "table"
      }
    ],
    "faq": [
      {
        "question": "Les formules sont-elles conservées ?",
        "answer": "Non, les PDF ne contiennent que des valeurs. L'outil extrait les données textuelles et numériques dans des cellules distinctes."
      },
      {
        "question": "Comment sont gérées les pages multiples ?",
        "answer": "Tous les tableaux détectés sont généralement regroupés dans une seule feuille ou des feuilles consécutives selon la structure."
      },
      {
        "question": "La précision est-elle garantie ?",
        "answer": "L'outil est très précis pour les tableaux avec des bordures claires, mais fonctionne aussi pour les structures de colonnes simples."
      }
    ]
  },
  "rotate-custom": {
    "title": "Rotation personnalisée",
    "metaDescription": "Faites pivoter les pages PDF selon n'importe quel angle. Rotation précise pour redresser les documents.",
    "keywords": [
      "rotation personnalisée pdf",
      "redresser pdf",
      "pivoter pdf angle",
      "inclinaison pdf"
    ],
    "description": "\n      <p>Allez au-delà de la rotation standard à 90 degrés. Cet outil vous permet de faire pivoter vos pages PDF selon l'angle précis de votre choix pour corriger les défauts d'inclinaison.</p>\n      <p>C'est la solution idéale pour redresser des documents numérisés de travers ou ajuster l'orientation de plans techniques et de dessins.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Sélectionnez le document dont vous souhaitez ajuster l'angle."
      },
      {
        "step": 2,
        "title": "Réglez l'angle",
        "description": "Utilisez le curseur ou entrez manuellement le degré précis de rotation."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Visualisez le résultat et téléchargez votre PDF redressé."
      }
    ],
    "useCases": [
      {
        "title": "Correction de scans",
        "description": "Redressez les pages qui ont été numérisées avec un léger angle.",
        "icon": "scan"
      },
      {
        "title": "Dessins techniques",
        "description": "Ajustez l'orientation de schémas ou de plans pour une meilleure lecture.",
        "icon": "ruler"
      },
      {
        "title": "Mise en page créative",
        "description": "Appliquez des angles artistiques à vos documents pour des présentations uniques.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Puis-je redresser une seule page ?",
        "answer": "Oui, vous pouvez choisir d'appliquer la rotation à une seule page, à une plage ou à tout le document."
      },
      {
        "question": "Est-ce que cela coupe le contenu ?",
        "answer": "Non, les dimensions de la page sont automatiquement ajustées pour que tout le contenu pivoté reste visible."
      },
      {
        "question": "Peut-on entrer des décimales ?",
        "answer": "Oui, l'outil accepte des degrés de rotation précis pour un redressement parfait."
      }
    ]
  },
  "repair-pdf-advanced": {
    "title": "Réparation avancée PDF",
    "metaDescription": "Réparez les fichiers PDF gravement endommagés. Restaurez la structure et récupérez vos données.",
    "keywords": [
      "réparer pdf corrompu",
      "récupérer fichier pdf",
      "pdf illisible",
      "restauration pdf"
    ],
    "description": "\n      <p>Cet outil utilise des algorithmes de reconstruction profonde pour tenter de sauver les fichiers PDF qui refusent de s'ouvrir ou qui affichent des messages d'erreur de corruption.</p>\n      <p>Il analyse la table des objets du fichier et tente de reconstruire une structure valide pour permettre l'accès au contenu texte et image.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le fichier corrompu",
        "description": "Sélectionnez le document PDF endommagé."
      },
      {
        "step": 2,
        "title": "Analyse et reconstruction",
        "description": "L'outil tente de réparer les erreurs de syntaxe et les tables de références croisées."
      },
      {
        "step": 3,
        "title": "Récupérez vos données",
        "description": "Téléchargez la version réparée et vérifiez l'intégrité du contenu."
      }
    ],
    "useCases": [
      {
        "title": "Échecs de téléchargement",
        "description": "Réparez les fichiers qui ont été mal téléchargés ou interrompus.",
        "icon": "download-cloud"
      },
      {
        "title": "Corruption de stockage",
        "description": "Tentez de sauver des fichiers provenant de clés USB ou disques durs défectueux.",
        "icon": "database"
      },
      {
        "title": "Erreurs logicielles",
        "description": "Réparez les PDF générés par des outils tiers qui ont produit un formatage invalide.",
        "icon": "alert-triangle"
      }
    ],
    "faq": [
      {
        "question": "La réparation réussit-elle toujours ?",
        "answer": "Le succès dépend du niveau de dommage binaire. Si les données essentielles sont effacées, la récupération totale peut être impossible."
      },
      {
        "question": "Mes images seront-elles sauvées ?",
        "answer": "L'outil tente de récupérer chaque objet. Si l'image n'est pas corrompue au niveau binaire, elle sera restaurée."
      },
      {
        "question": "Est-ce sécurisé ?",
        "answer": "Comme pour tous nos outils, la réparation se fait localement. Vos fichiers confidentiels ne sont jamais envoyés sur nos serveurs."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF en PowerPoint",
    "metaDescription": "Convertissez des PDF en présentations PPTX éditables. Transformez vos pages en diapositives.",
    "keywords": [
      "pdf en ppt",
      "pdf en powerpoint",
      "convertir pdf en pptx",
      "slides pdf"
    ],
    "description": "\n      <p>Transformez vos documents PDF en présentations Microsoft PowerPoint (PPTX). Chaque page du PDF devient une diapositive individuelle avec des éléments de texte et d'image éditables.</p>\n      <p>Parfait pour mettre à jour des présentations dont vous n'avez que la version PDF.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Sélectionnez le document à transformer en présentation."
      },
      {
        "step": 2,
        "title": "Génération des diapositives",
        "description": "L'outil convertit les éléments graphiques et textuels en objets PowerPoint."
      },
      {
        "step": 3,
        "title": "Téléchargez le PPTX",
        "description": "Récupérez votre présentation et personnalisez vos diapositives."
      }
    ],
    "useCases": [
      {
        "title": "Réutiliser des slides",
        "description": "Transformez un catalogue ou une étude de cas PDF en présentation commerciale.",
        "icon": "presentation"
      },
      {
        "title": "Mise à jour de cours",
        "description": "Convertissez des supports de cours PDF en PowerPoint pour ajouter de nouvelles animations.",
        "icon": "graduation-cap"
      },
      {
        "title": "Réunion de dernière minute",
        "description": "Préparez une présentation à partir d'un document de recherche en quelques secondes.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "Le texte restera-t-il éditable ?",
        "answer": "Oui, dans la majorité des cas, le texte est extrait comme des boîtes de texte PowerPoint standard."
      },
      {
        "question": "Les images sont-elles de bonne qualité ?",
        "answer": "Oui, nous extrayons les images à leur résolution d'origine pour garantir une présentation nette."
      },
      {
        "question": "Puis-je modifier le design ?",
        "answer": "Une fois converti, vous pouvez utiliser tous les outils de PowerPoint pour changer les couleurs, les polices et la disposition."
      }
    ]
  },
  "email-to-pdf": {
    "title": "Email vers PDF",
    "metaDescription": "Convertissez des fichiers email (.eml, .msg) en documents PDF. Préserve le formatage, les images intégrées, les liens cliquables et les pièces jointes.",
    "keywords": [
      "email vers pdf",
      "eml vers pdf",
      "msg vers pdf",
      "convertir email",
      "outlook vers pdf"
    ],
    "description": "\n      <p>Email vers PDF convertit vos fichiers email (formats .eml et .msg) en documents PDF bien formatés. L'outil préserve les informations d'en-tête de l'email, le contenu du corps, les images intégrées avec remplacement CID, les liens cliquables et intègre les pièces jointes directement dans le PDF.</p>\n      <p>Personnalisez les options de sortie incluant la taille de page (A4, Letter, Legal), le format de date avec support de fuseau horaire, et si vous souhaitez inclure les champs CC/BCC et les informations de pièces jointes.</p>\n      <p>Toute la conversion se fait localement dans votre navigateur, garantissant que vos emails restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le Fichier Email",
        "description": "Téléchargez votre fichier email .eml ou .msg."
      },
      {
        "step": 2,
        "title": "Configurer les Options",
        "description": "Définissez la taille de page, le format de date, le fuseau horaire et choisissez les champs à inclure."
      },
      {
        "step": 3,
        "title": "Convertir et Télécharger",
        "description": "Convertissez en PDF avec pièces jointes intégrées et téléchargez le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Dossiers Juridiques",
        "description": "Archivez des emails importants en PDF avec pièces jointes intégrées pour documentation légale.",
        "icon": "scale"
      },
      {
        "title": "Archives Professionnelles",
        "description": "Convertissez la correspondance professionnelle en PDF pour conservation à long terme.",
        "icon": "briefcase"
      },
      {
        "title": "Préservation de Preuves",
        "description": "Sauvegardez des preuves email avec images intégrées et pièces jointes dans un format PDF non modifiable.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Quels formats d'email sont supportés ?",
        "answer": "Les fichiers .eml (RFC 822) et .msg (Microsoft Outlook) sont tous deux entièrement supportés."
      },
      {
        "question": "Les pièces jointes sont-elles incluses ?",
        "answer": "Oui ! Les pièces jointes sont intégrées directement dans le fichier PDF. Vous pouvez les extraire du PDF en utilisant un lecteur PDF compatible."
      },
      {
        "question": "Les images intégrées sont-elles affichées ?",
        "answer": "Oui, les images intégrées référencées via CID (Content-ID) sont automatiquement converties en URIs de données base64 et affichées dans le PDF."
      },
      {
        "question": "Les liens sont-ils cliquables ?",
        "answer": "Oui, tous les liens HTML (balises <a>) et URLs dans les emails en texte brut sont convertis en liens cliquables dans le PDF."
      },
      {
        "question": "Le formatage de l'email est-il préservé ?",
        "answer": "Oui, les emails HTML maintiennent leur formatage autant que possible, incluant les styles, images et liens."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU vers PDF",
    "metaDescription": "Convertissez les fichiers de documents DJVU en PDF. Rendu haute qualité pour documents scannés et livres.",
    "keywords": [
      "djvu vers pdf",
      "convertir djvu",
      "convertisseur djvu",
      "djvu pdf",
      "djv vers pdf"
    ],
    "description": "\n      <p>DJVU vers PDF convertit les fichiers de documents DjVu en documents PDF haute qualité. DjVu est un format de fichier informatique conçu principalement pour stocker des documents scannés, en particulier ceux contenant une combinaison de texte, dessins au trait et photographies.</p>\n      <p>Cet outil rend chaque page de votre fichier DJVU à votre DPI choisi (points par pouce) et les combine en un document PDF consultable. Parfait pour convertir des livres scannés, manuels techniques et documents d'archives.</p>\n      <p>Toute la conversion se produit localement dans votre navigateur, garantissant que vos documents restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le Fichier DJVU",
        "description": "Glissez-déposez votre fichier .djvu ou .djv, ou cliquez pour sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Configurer les Options",
        "description": "Choisissez le DPI de sortie (72, 150 ou 300) et la qualité d'image pour le PDF."
      },
      {
        "step": 3,
        "title": "Convertir et Télécharger",
        "description": "Cliquez sur Convertir en PDF et téléchargez votre document converti."
      }
    ],
    "useCases": [
      {
        "title": "Documents d'Archives",
        "description": "Convertissez les archives DJVU au format PDF universel.",
        "icon": "archive"
      },
      {
        "title": "Partager des Livres Scannés",
        "description": "Partagez des livres scannés au format PDF pour une compatibilité plus large.",
        "icon": "share-2"
      },
      {
        "title": "Imprimer des Documents",
        "description": "Convertissez DJVU en PDF haute qualité pour l'impression.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format DJVU ?",
        "answer": "DjVu est un format de fichier conçu pour stocker des documents scannés, en particulier ceux avec texte, dessins et images. Il offre une meilleure compression que PDF pour le contenu scanné."
      },
      {
        "question": "Quel DPI dois-je choisir ?",
        "answer": "72 DPI convient à la visualisation web, 150 DPI pour les documents standard et 300 DPI pour l'impression haute qualité."
      },
      {
        "question": "Le texte sera-t-il consultable ?",
        "answer": "Le texte sera rendu comme images. Si vous avez besoin de texte consultable, envisagez d'utiliser notre outil OCR PDF après la conversion."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 vers PDF",
    "metaDescription": "Convertissez les livres électroniques FictionBook (FB2) en PDF. Prend en charge plusieurs fichiers avec rendu haute qualité.",
    "keywords": [
      "fb2 vers pdf",
      "convertir fb2",
      "fictionbook vers pdf",
      "convertisseur fb2",
      "fb2.zip vers pdf"
    ],
    "description": "\n      <p>FB2 vers PDF convertit les fichiers de livres électroniques FictionBook (FB2) en documents PDF haute qualité. FB2 est un format de livre électronique basé sur XML très populaire largement utilisé en Russie et en Europe de l'Est.</p>\n      <p>Cet outil prend en charge à la fois les fichiers .fb2 et .fb2.zip, et peut traiter plusieurs fichiers à la fois. Il préserve le formatage du texte, les images et la structure des chapitres de vos livres électroniques.</p>\n      <p>Toute la conversion se produit localement dans votre navigateur en utilisant une technologie de rendu avancée, garantissant que vos livres restent privés et la conversion est rapide.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger les Fichiers FB2",
        "description": "Glissez-déposez un ou plusieurs fichiers .fb2 ou .fb2.zip, ou cliquez pour sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Sélectionner la Qualité",
        "description": "Choisissez la qualité de sortie : Faible (72 DPI), Moyenne (150 DPI) ou Haute (300 DPI)."
      },
      {
        "step": 3,
        "title": "Convertir et Télécharger",
        "description": "Cliquez sur Convertir en PDF et téléchargez votre/vos document(s) converti(s)."
      }
    ],
    "useCases": [
      {
        "title": "Imprimer des Livres Électroniques",
        "description": "Convertissez les livres électroniques FB2 en PDF pour impression physique.",
        "icon": "printer"
      },
      {
        "title": "Conversion par Lots",
        "description": "Convertissez plusieurs fichiers FB2 en PDF à la fois.",
        "icon": "layers"
      },
      {
        "title": "Format Universel",
        "description": "Partagez des livres électroniques au format PDF qui fonctionne sur n'importe quel appareil.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Puis-je convertir plusieurs fichiers FB2 à la fois ?",
        "answer": "Oui ! Cet outil prend en charge la conversion par lots de jusqu'à 20 fichiers FB2 simultanément."
      },
      {
        "question": "Les fichiers .fb2.zip sont-ils pris en charge ?",
        "answer": "Oui, l'outil extrait et convertit automatiquement les fichiers FB2 depuis les archives .fb2.zip."
      },
      {
        "question": "Le formatage est-il préservé ?",
        "answer": "Oui ! L'outil utilise le rendu FB2 natif, préservant le formatage du texte, les images et la structure des chapitres avec une haute fidélité."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Redresser PDF",
    "metaDescription": "Redressez automatiquement les pages PDF scannées ou inclinées. Corrigez les documents déformés avec détection précise d'angle.",
    "keywords": [
      "redresser pdf",
      "corriger pdf incliné",
      "corriger scan incliné",
      "rotation pdf automatique",
      "corriger angle pdf"
    ],
    "description": "\n      <p>Redresser PDF détecte et corrige automatiquement les pages inclinées ou déformées dans vos documents PDF en utilisant une analyse avancée de variance de profil de projection. Ceci est essentiel pour les documents scannés qui ont été introduits dans le scanner à un angle.</p>\n      <p>L'outil analyse l'alignement du texte et du contenu à différents angles pour trouver la rotation optimale, puis applique la correction. Vous pouvez ajuster le seuil de sensibilité (1-30) et les paramètres DPI (72-300) pour des résultats optimaux.</p>\n      <p>Tout le traitement se produit localement dans votre navigateur en utilisant la technologie WebAssembly, garantissant que vos documents restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger votre PDF",
        "description": "Glissez-déposez votre fichier PDF scanné ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurer les Paramètres",
        "description": "Ajustez la sensibilité du seuil et DPI si nécessaire pour une meilleure détection."
      },
      {
        "step": 3,
        "title": "Traiter et Télécharger",
        "description": "Cliquez sur Redresser pour redresser les pages et télécharger le PDF corrigé."
      }
    ],
    "useCases": [
      {
        "title": "Documents Scannés",
        "description": "Corrigez les pages qui ont été scannées à un angle depuis les chargeurs de documents.",
        "icon": "scan"
      },
      {
        "title": "Scans Mobiles",
        "description": "Corrigez les photos inclinées de documents prises avec des smartphones.",
        "icon": "smartphone"
      },
      {
        "title": "Restauration d'Archives",
        "description": "Redressez les anciennes archives scannées pour une meilleure lisibilité.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quelle est la précision de la détection d'angle ?",
        "answer": "L'outil utilise l'analyse de variance de profil de projection pour détecter les angles de déformation jusqu'à ±10 degrés avec une grande précision. Il ignore automatiquement les pages avec des angles inférieurs à 0,3 degré."
      },
      {
        "question": "La qualité du texte sera-t-elle affectée ?",
        "answer": "Pour les rotations à des multiples de 90 degrés, aucune perte de qualité ne se produit. Pour d'autres angles, l'outil arrondit au degré le plus proche et maintient une bonne qualité."
      },
      {
        "question": "Puis-je redresser uniquement des pages spécifiques ?",
        "answer": "L'outil analyse toutes les pages mais ne corrige que celles avec une déformation détectée au-dessus du seuil de sensibilité. Les pages avec une déformation minimale sont laissées inchangées."
      },
      {
        "question": "Qu'est-ce que le seuil de sensibilité ?",
        "answer": "Les valeurs 1-10 corrigent uniquement les inclinaisons évidentes, 11-20 détectent une déformation modérée, et 21-30 capturent des angles subtils. La valeur par défaut est 10 pour une détection équilibrée."
      },
      {
        "question": "Combien de temps prend le traitement ?",
        "answer": "Le temps de traitement dépend de la taille du fichier et du DPI. 150 DPI (par défaut) offre un bon équilibre entre vitesse et précision. Un DPI plus élevé est plus précis mais plus lent."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF vers PDF/A",
    "metaDescription": "Convertissez PDF au format d'archivage PDF/A. Assurez la préservation à long terme des documents avec les normes ISO.",
    "keywords": [
      "pdf vers pdfa",
      "convertisseur pdfa",
      "archiver pdf",
      "archivage pdf",
      "préservation à long terme"
    ],
    "description": "\n      <p>PDF vers PDF/A convertit vos documents PDF au format PDF/A, la norme ISO pour l'archivage de documents à long terme. PDF/A garantit que les documents seront visualisables et reproductibles pendant des décennies.</p>\n      <p>Choisissez parmi PDF/A-1b (conformité de base), PDF/A-2b (recommandé, prend en charge la transparence) ou PDF/A-3b (permet les fichiers intégrés). L'outil intègre les polices et aplatit la transparence selon les besoins.</p>\n      <p>Toute la conversion se produit localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger votre PDF",
        "description": "Téléchargez le PDF que vous souhaitez convertir en PDF/A."
      },
      {
        "step": 2,
        "title": "Sélectionner le Niveau PDF/A",
        "description": "Choisissez le niveau de conformité PDF/A-1b, PDF/A-2b ou PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Convertir et Télécharger",
        "description": "Convertissez en PDF/A et téléchargez le document d'archives."
      }
    ],
    "useCases": [
      {
        "title": "Archives Légales",
        "description": "Convertissez les documents légaux en PDF/A pour un stockage à long terme admissible en cour.",
        "icon": "scale"
      },
      {
        "title": "Registres Gouvernementaux",
        "description": "Conformez-vous aux exigences d'archivage gouvernemental en utilisant PDF/A.",
        "icon": "building"
      },
      {
        "title": "Archives d'Entreprise",
        "description": "Préservez les documents d'entreprise importants pour l'accessibilité future.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quel niveau PDF/A dois-je utiliser ?",
        "answer": "PDF/A-2b est recommandé pour la plupart des utilisations. Utilisez 1b pour une compatibilité maximale ou 3b si vous avez besoin de fichiers intégrés."
      },
      {
        "question": "Qu'est-ce qui rend PDF/A différent ?",
        "answer": "PDF/A intègre les polices, désactive le chiffrement et garantit que tous les éléments sont autonomes pour la visualisation future."
      },
      {
        "question": "Puis-je reconvertir depuis PDF/A ?",
        "answer": "Les fichiers PDF/A sont des PDF standard et peuvent être ouverts normalement. Les fonctionnalités d'archivage ajoutent des restrictions, pas des limitations."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Signature Numérique",
    "metaDescription": "Ajoutez des signatures numériques X.509 aux documents PDF. Signez des PDF avec des certificats PFX, P12 ou PEM pour une validité légale.",
    "keywords": [
      "signature numérique pdf",
      "certificat x509",
      "signature pfx",
      "signature p12",
      "signature pem",
      "signature électronique"
    ],
    "description": "<p>L'outil de Signature Numérique vous permet d'ajouter des signatures numériques X.509 cryptographiques aux documents PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le PDF",
        "description": "Téléchargez le document PDF que vous souhaitez signer numériquement."
      },
      {
        "step": 2,
        "title": "Charger le Certificat",
        "description": "Téléchargez votre fichier de certificat X.509 (.pfx, .p12 ou .pem) et entrez le mot de passe."
      },
      {
        "step": 3,
        "title": "Signer et Télécharger",
        "description": "Cliquez sur Signer le PDF pour appliquer la signature numérique et téléchargez le document signé."
      }
    ],
    "useCases": [
      {
        "title": "Documents Légaux",
        "description": "Signez des contrats et documents légaux avec des signatures numériques juridiquement contraignantes.",
        "icon": "scale"
      },
      {
        "title": "Approbations Commerciales",
        "description": "Signez numériquement des factures et documents d'approbation pour les pistes d'audit.",
        "icon": "briefcase"
      },
      {
        "title": "Intégrité du Document",
        "description": "Assurez-vous que les documents n'ont pas été altérés après la signature.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Quels formats de certificat sont pris en charge ?",
        "answer": "Les formats de certificat PFX (.pfx), PKCS#12 (.p12) et PEM (.pem) sont pris en charge."
      },
      {
        "question": "La signature est-elle légalement valide ?",
        "answer": "Oui, les signatures numériques X.509 avec un certificat valide sont légalement reconnues dans la plupart des juridictions."
      },
      {
        "question": "Puis-je ajouter une signature visible ?",
        "answer": "Oui, vous pouvez ajouter une signature visible avec du texte, une image, une position et un style personnalisés."
      }
    ]
  },
  "validate-signature": {
    "title": "Valider la Signature",
    "metaDescription": "Vérifiez les signatures numériques dans les documents PDF. Vérifiez la validité du certificat, les informations du signataire et l'intégrité du document.",
    "keywords": [
      "valider signature pdf",
      "vérifier signature numérique",
      "vérifier certificat pdf",
      "vérification de signature"
    ],
    "description": "<p>L'outil Valider la Signature vous permet de vérifier les signatures numériques dans les documents PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le PDF Signé",
        "description": "Téléchargez un document PDF contenant des signatures numériques."
      },
      {
        "step": 2,
        "title": "Voir les Résultats",
        "description": "Voyez toutes les signatures trouvées dans le document avec leur statut de validité."
      },
      {
        "step": 3,
        "title": "Exporter le Rapport",
        "description": "Téléchargez optionnellement un rapport JSON des résultats de validation."
      }
    ],
    "useCases": [
      {
        "title": "Vérification de Documents",
        "description": "Vérifiez que les documents signés sont authentiques et n'ont pas été altérés.",
        "icon": "shield-check"
      },
      {
        "title": "Audit de Conformité",
        "description": "Vérifiez la validité des signatures à des fins de conformité et d'audit.",
        "icon": "clipboard-check"
      },
      {
        "title": "Examen des Certificats",
        "description": "Consultez les détails du certificat et les dates d'expiration des documents signés.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Que signifie \"valide\" ?",
        "answer": "Une signature valide signifie que le document n'a pas été modifié depuis la signature et que la chaîne de certificats est intacte."
      },
      {
        "question": "Puis-je valider plusieurs PDF ?",
        "answer": "Oui, vous pouvez télécharger plusieurs PDF et valider toutes les signatures en lot."
      },
      {
        "question": "Pourquoi une signature pourrait-elle être invalide ?",
        "answer": "Les signatures peuvent être invalides si le document a été modifié, le certificat a expiré ou le certificat n'est pas de confiance."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Logique de formulaire",
    "metaDescription": "Concevez des comportements dynamiques à l'aide d'un canevas de nœuds effet verre dépoli et injectez de la logique interactive AcroJS dans les formulaires PDF.",
    "keywords": [
      "logique de formulaire PDF",
      "injection AcroJS",
      "flux de nœuds",
      "PDF interactif",
      "dépendances de champs"
    ],
    "description": "\n        <p>Le Concepteur Logique de Formulaire Interactif est un outil pionnier qui comble un manque majeur dans les fonctionnalités PDF : la création de champs actifs et réactifs au lieu de formulaires plats et statiques.</p>\n        <p>Grâce à notre canevas visuel doté de \"nœuds effet verre dépoli lumineux\" (basé sur React Flow), les champs de formulaire sont représentés comme des modules connectés. Vous pouvez faire glisser des liens pour définir des relations : ex., lorsqu'une case est cochée ➜ activer une saisie de texte ➜ calculer automatiquement les valeurs et mettre à jour un champ total.</p>\n        <p>Une fois conçu, le moteur AcroJS compile la logique en Acrobat JavaScript officiel et l'injecte dans les dictionnaires '/AA' (Actions Additionnelles) de l'AcroForm. Les comportements interactifs s'exécutent nativement dans tout lecteur PDF standard.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser un PDF Interactif",
        "description": "Fournissez un fichier PDF contenant déjà des champs de formulaire actifs (AcroForm)."
      },
      {
        "step": 2,
        "title": "Concevoir la Logique sur le Canevas",
        "description": "Connectez les champs sous forme de nœuds. Reliez les événements de sortie (changement, perte de focus) aux actions cibles (afficher, masquer, calculer, désactiver)."
      },
      {
        "step": 3,
        "title": "Compiler et Injecter",
        "description": "Injectez la logique JavaScript compilée dans le dictionnaire PDF et enregistrez le document intelligent final."
      }
    ],
    "useCases": [
      {
        "title": "Contrats Commerciaux Intelligents",
        "description": "Affichez ou masquez des champs de saisie supplémentaires de manière dynamique en fonction des conditions sélectionnées par le client.",
        "icon": "file-signature"
      },
      {
        "title": "Formulaires de Frais Automatisés",
        "description": "Additionnez plusieurs lignes de frais et calculez les taxes de manière dynamique sans calcul manuel.",
        "icon": "calculator"
      },
      {
        "title": "Questionnaires Interactifs",
        "description": "Passez les questions non pertinentes en fonction des réponses précédentes, offrant ainsi une expérience de saisie mobile plus propre.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Ai-je besoin d'un PDF avec des champs préexistants ?",
        "answer": "Oui. Cet outil est conçu pour lier des règles logiques à des champs existants. Si votre PDF n'a pas de champs interactifs, utilisez d'abord notre outil Créateur de Formulaires pour ajouter des saisies et des cases à cocher."
      },
      {
        "question": "Cette logique fonctionnera-t-elle sur n'importe quel lecteur PDF ?",
        "answer": "Elle fonctionne sur tous les lecteurs PDF conformes aux normes Adobe PDF et prenant en charge Acrobat JavaScript (tels qu'Adobe Acrobat Reader, Foxit Reader et les principaux navigateurs Web). Les lecteurs mobiles minimalistes peuvent ne prendre en charge que les actions de base."
      },
      {
        "question": "Cela affecte-t-il l'impression papier ?",
        "answer": "Pas du tout. Les scripts injectés s'exécutent uniquement à l'écran lors du remplissage du formulaire. Lors de l'impression, l'état actuel des champs est imprimé de manière statique sans aucune visualisation de nœuds."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Traducteur & Conversions Factures",
    "metaDescription": "Extrayez les totaux de devises des factures multinationales, effectuez des calculs et appliquez des tampons de taux de change interactifs effet verre dépoli.",
    "keywords": [
      "traduire facture",
      "convertisseur devise facture",
      "calculatrice taux de change pdf",
      "tamponner monnaie locale",
      "outil facture globale"
    ],
    "description": "\n        <p>Le Traducteur de Factures Globales apporte une clarté maximale aux équipes financières internationales et aux acheteurs mondiaux.</p>\n        <p>La gestion de factures dans plusieurs devises ($, €, ¥) implique souvent une arithmétique manuelle fastidieuse. Cet outil permet la <strong>traduction des étiquettes en place et la conversion des taux de change en temps réel</strong>.</p>\n        <p>Il analyse le document pour trouver les totaux de prix, effectue des calculs basés sur les devises de référence et applique physiquement un élégant registre de taux de change effet verre dépoli semi-transparent dans la marge de la page. Il s'affiche avec un magnifique effet visuel de chiffres déroulants style machine à sous, apportant un contrôle absolu à la facturation globale.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser la Facture PDF",
        "description": "Importez toute facture libellée en devises étrangères (par exemple, USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Sélectionner la Devise Locale",
        "description": "Choisissez votre devise locale (par exemple, EUR) et spécifiez un taux de change personnalisé ou en temps réel."
      },
      {
        "step": 3,
        "title": "Appliquer le Sello",
        "description": "Cliquez sur exécuter pour superposer le registre de taux de change prêt pour la comptabilité."
      }
    ],
    "useCases": [
      {
        "title": "Remboursement de Déplacements Professionnels",
        "description": "Convertissez les factures de voyage dans la devise locale et tamponnez les détails de la conversion, simplifiant ainsi les flux de travail comptables.",
        "icon": "plane"
      },
      {
        "title": "Audit d'Achats Transfrontaliers",
        "description": "Traduisez les colonnes des factures et isolez le coût réel des biens de commerce électronique.",
        "icon": "credit-card"
      },
      {
        "title": "Comptabilité Commerciale Internationale",
        "description": "Tamponnez des registres de conversion cohérents sur les factures d'entreprise pour rationaliser les audits de fin d'année.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Comment détecte-t-il les montants des factures ?",
        "answer": "Il scanne les flux de caractères à la recherche de symboles de devises et analyse les en-têtes sémantiques tels que \"Total\" ou \"Dû\" pour localiser la somme finale de la facture."
      },
      {
        "question": "Les taux de change sont-ils récupérés en temps réel ?",
        "answer": "Oui. Par défaut, il récupère les taux de base à partir d'API financières standard. Vous pouvez également spécifier des taux personnalisés pour les audits internes."
      },
      {
        "question": "Le tampon couvrira-t-il des détails importants de la facture ?",
        "answer": "Le moteur scanne la marge de la page pour trouver le positionnement optimal. Le tampon est semi-transparent, s'alignant élégamment avec vos mises en page."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF en CBZ",
    "metaDescription": "Convertissez des fichiers PDF en archives de bandes dessinées CBZ. Conserve l'ordre et la qualité des images.",
    "keywords": [
      "pdf en cbz",
      "convertir bd",
      "convertisseur cbz"
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
    "title": "Superposer PDF",
    "metaDescription": "Superposez deux pages PDF en une seule. Parfait pour ajouter des tampons, des fonds et des filigranes.",
    "keywords": [
      "superposer pdf",
      "pdf overlay",
      "tampon pdf"
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
    "title": "Horodatage PDF",
    "metaDescription": "Injectez un horodatage sécurisé RFC 3161 dans vos documents PDF pour prouver leur date de création.",
    "keywords": [
      "horodatage pdf",
      "rfc 3161",
      "signature temporelle"
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
    "title": "Ajouter des Étiquettes de Page",
    "metaDescription": "Définissez des étiquettes de page personnalisées (ex : I, II pour l'avant-propos). Améliore la navigation.",
    "keywords": [
      "etiquettes de page",
      "numerotation logique",
      "navigation pdf"
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
    "title": "Réadaptation de Flux PDF par IA",
    "metaDescription": "Restructurez les documents PDF pour un affichage mobile fluide. Exportation en Markdown et EPUB.",
    "keywords": [
      "reflow pdf",
      "pdf adaptatif",
      "pdf en markdown",
      "export epub"
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
    "title": "Activateur de Liens de Citation",
    "metaDescription": "Détectez et activez les citations dans les PDFs en les transformant en liens DOI cliquables ou renvois internes.",
    "keywords": [
      "liens de citation",
      "hyperlien pdf",
      "correspondance doi",
      "pdf academique"
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
    "title": "Extracteur de Vecteurs PDF",
    "metaDescription": "Convertissez les PDFs en SVGs haute fidélité. Permet de sélectionner et d'extraire les graphiques vectoriels sans perte.",
    "keywords": [
      "extraire vecteur pdf",
      "export svg",
      "extraction logo",
      "graphique vectoriel"
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
    "title": "Nettoyage en Profondeur des Métadonnées",
    "metaDescription": "Effacez définitivement les métadonnées, l'historique d'édition, les calques masqués et les objets orphelins des PDFs.",
    "keywords": [
      "nettoyer pdf",
      "supprimer metadonnees",
      "confidentialite pdf",
      "anonymiser pdf"
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
    "title": "Simulateur 3D d'Imposition et de Pliage",
    "metaDescription": "Imposez les pages PDF sur de grands formats et visualisez le pliage physique et la reliure dans un espace 3D interactif.",
    "keywords": [
      "imposition 3d",
      "pliage papier",
      "reliure piquee",
      "maquette imprimerie"
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
    "title": "PDF en Diaporama",
    "metaDescription": "Analysez la structure d'un PDF et extrayez les graphiques vectoriels pour recréer une présentation PPTX modifiable.",
    "keywords": [
      "pdf en ppt",
      "generer diaporama",
      "convertisseur pptx",
      "extraire graphique"
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
    "title": "Optimiseur pour Liseuses e-Ink",
    "metaDescription": "Optimisez les PDFs pour écrans à encre électronique : suppression du bruit, binarisation d'Otsu et épaississement du texte.",
    "keywords": [
      "optimisation eink",
      "binarisation otsu",
      "epaissement texte",
      "confort liseuse"
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
    "title": "Chiffrer le certificat",
    "metaDescription": "Chiffrez les PDFs par clé publique et appliquez un sceau de cire 3D réaliste ainsi qu'une signature numérique PKCS#7.",
    "keywords": [
      "chiffrement certificat",
      "sceau de cire 3d",
      "signature numerique",
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
    "title": "Copie d'Identité Double Face'Identité",
    "metaDescription": "Combinez le recto et le verso de vos cartes d'identité ou passeports sur une page A4 avec filigrane de sécurité.",
    "keywords": [
      "photocopie carte identite",
      "recto verso a4",
      "copie passeport",
      "filigrane"
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
    "title": "Exporter les annotations'Annotations et Surlignages",
    "metaDescription": "Extrayez les surlignages, commentaires et notes de vos PDFs vers un document Markdown structuré pour vos fiches.",
    "keywords": [
      "exporter annotations pdf",
      "extraire surlignage",
      "notes de lecture",
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
    "title": "Supprimer les filigranes",
    "metaDescription": "Analysez le flux de contenu de vos PDFs et supprimez les filigranes texte ou image (XObjects) sans altérer la mise en page.",
    "keywords": [
      "supprimer filigrane pdf",
      "retirer logo pdf",
      "nettoyer pdf"
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
    "title": "Masquer les données sensibles",
    "metaDescription": "Détectez et censurez de manière physique et irréversible les e-mails, numéros de téléphone et pièces d'identité.",
    "keywords": [
      "censure pdf",
      "masquer donnee sensible",
      "anonymisation pdf"
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
    "title": "Générer les signets",
    "metaDescription": "Analysez les tailles de police et hiérarchies pour injecter automatiquement une arborescence de signets dans vos PDFs.",
    "keywords": [
      "signets pdf",
      "arborescence navigation",
      "creer table des matieres"
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
    "title": "Injecter les codes en lot",
    "metaDescription": "Intégrez des codes-barres (Code128) et des codes QR à des coordonnées précises sur plusieurs pages PDF en lot.",
    "keywords": [
      "inserer qr code",
      "codes-barres en lot",
      "estampillage pdf"
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
    "title": "Extraire signatures et tampons",
    "metaDescription": "Extrayez des signatures et tampons de documents scannés en éliminant l'arrière-plan pour générer des PNGs transparents.",
    "keywords": [
      "detourer signature",
      "digitaliser tampon",
      "png transparent"
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
    "title": "Réparer les liens morts",
    "metaDescription": "Analysez et diagnostiquez les liens externes (/URI) dans vos PDFs, et corrigez ou redirigez-les facilement.",
    "keywords": [
      "liens morts pdf",
      "corriger url pdf",
      "deboguer hyperliens"
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
    "title": "Générer un sommaire interactif",
    "metaDescription": "Ajoutez une page de sommaire cliquable liée à vos sections, avec des boutons de retour rapide (↩) sur chaque page.",
    "keywords": [
      "sommaire interactif",
      "table des matieres cliquable",
      "navigation pdf"
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
    "title": "Redresser un scan penché",
    "metaDescription": "Détectez automatiquement l'angle d'inclinaison des pages scannées et redressez-les pour un alignement horizontal parfait.",
    "keywords": [
      "redresser pdf scan",
      "corriger inclinaison",
      "alignement horizontal"
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
    "title": "Réorganiser PDF double colonne",
    "metaDescription": "Divisez les PDFs en double colonne en dupliquant les pages et en ajustant le CropBox pour un flux de lecture à colonne unique.",
    "keywords": [
      "double colonne en simple",
      "reflow academique",
      "decoupe cropbox"
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
    "title": "Uniformiser la taille des pages",
    "metaDescription": "Redimensionnez les pages de différentes tailles de manière proportionnelle et centrez-les vers un format uniforme.",
    "keywords": [
      "uniformiser taille page",
      "pdf en a4",
      "centrer contenu page"
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
    "title": "Améliorer l'écriture manuelle'Écriture Manuelle",
    "metaDescription": "Blanchissez les arrière-plans tachés ou sombres et amplifiez le contraste des écritures manuelles (bleu/noir) et tampons rouges.",
    "keywords": [
      "renforcer ecriture manuscrite",
      "nettoyer fond scanne",
      "contraste signature"
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
    "title": "Calculer la largeur du dos",
    "metaDescription": "Calculez la largeur du dos de livre en millimètres selon le grammage et le nombre de pages, et concevez une couverture PDF.",
    "keywords": [
      "calculer dos de livre",
      "epaisseur reliure",
      "maquette couverture pdf"
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
    "title": "Guide de position de signature'Ancrage de Signature",
    "metaDescription": "Insérez des indicateurs visuels et des liens de raccourci aux endroits précis du PDF où les signatures sont requises.",
    "keywords": [
      "ancrage signature",
      "repere signature pdf",
      "guider signataire"
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
    "title": "Découpe de plans sans perte",
    "metaDescription": "Découpez des sections de plans grand format en réajustant le CropBox au niveau vectoriel, sans aucune dégradation.",
    "keywords": [
      "decouper plan pdf",
      "recadrage vectoriel",
      "cropbox mediabox"
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
    "title": "Canevas de notes quadrillé",
    "metaDescription": "Élargissez les pages PDF en cousant une marge latérale lignée ou quadrillée pour vos notes manuscrites.",
    "keywords": [
      "marge de notes pdf",
      "papier quadrille pdf",
      "extension canevas"
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
    "title": "Planches photos d'identité",
    "metaDescription": "Organisez une photo d'identité sous forme de planche sur du papier photo 5\" ou 6\", avec repères de coupe.",
    "keywords": [
      "planche photo identite",
      "tirage photo grille",
      "reperes de coupe"
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
    "title": "PSD en PDF",
    "metaDescription": "Convertissez des fichiers Adobe Photoshop (PSD) au format PDF. Prend en charge plusieurs fichiers et préserve la qualité des images.",
    "keywords": [
      "psd en pdf",
      "convertir psd",
      "photoshop en pdf",
      "convertisseur psd",
      "adobe psd en pdf"
    ],
    "description": "\n      <p>L'outil PSD en PDF convertit les fichiers Adobe Photoshop (PSD) en documents PDF. Cet outil vous permet de visualiser et de partager des conceptions PSD sans avoir besoin d'installer Photoshop.</p>\n      <p>Vous pouvez convertir plusieurs fichiers PSD à la fois et les combiner en un seul document PDF. L'outil traite chaque fichier PSD en rendant les calques visibles dans des pages PDF de haute qualité.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant ainsi que vos conceptions restent privées et sécurisées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser les fichiers PSD",
        "description": "Faites glisser et déposez vos fichiers PSD ou PSB, ou cliquez pour les sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Organiser l'ordre",
        "description": "Faites glisser et déposez les miniatures des fichiers pour les organiser dans l'ordre souhaité."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Cliquez sur Convertir pour générer les PSD et télécharger votre document PDF."
      }
    ],
    "useCases": [
      {
        "title": "Partager des conceptions",
        "description": "Partagez des conceptions Photoshop avec des clients ou des collègues qui ne possèdent pas Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Création de portfolio",
        "description": "Compilez vos travaux de conception dans un portfolio PDF professionnel.",
        "icon": "layout"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Convertissez des conceptions en PDF à des fins d'impression.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Dois-je installer Photoshop ?",
        "answer": "Non, cet outil fonctionne entièrement dans votre navigateur sans nécessiter Adobe Photoshop."
      },
      {
        "question": "Les calques sont-ils préservés ?",
        "answer": "L'outil restitue l'état visible du PSD (image composite). Les calques individuels sont aplatis dans le PDF."
      },
      {
        "question": "Quelle est la taille maximale des fichiers ?",
        "answer": "Vous pouvez téléverser des fichiers allant jusqu'à 100 Mo chacun. Le traitement des fichiers PSD volumineux peut prendre un moment."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word en PDF",
    "metaDescription": "Convertissez des documents Word (DOCX) en PDF. Préservez le formatage et la mise en page dans vos documents convertis.",
    "keywords": [
      "word en pdf",
      "docx en pdf",
      "convertir word",
      "convertisseur word",
      "microsoft word en pdf"
    ],
    "description": "\n      <p>L'outil Word en PDF convertit les documents Microsoft Word au format PDF tout en préservant la mise en forme originale, la mise en page et la structure du contenu.</p>\n      <p>Téléversez vos fichiers DOCX et obtenez un rendu PDF de haute qualité, idéal pour le partage, l'impression ou l'archivage. La conversion conserve la mise en forme du texte, les styles de paragraphe et la structure de base du document.</p>\n      <p>Toutes les conversions se font localement dans votre navigateur, ce qui garantit la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le document Word",
        "description": "Faites glisser et déposez votre fichier .docx ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil va charger le document et le préparer pour la conversion."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Partage de documents",
        "description": "Convertissez des documents Word en PDF pour un partage et une visualisation universels.",
        "icon": "share-2"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Créez des PDF prêts à l'impression à partir de documents Word.",
        "icon": "printer"
      },
      {
        "title": "Archivage de documents",
        "description": "Archivez des documents Word au format PDF stable pour un stockage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Le format .doc est-il pris en charge ?",
        "answer": "Actuellement, seul le format .docx est pris en charge. Veuillez d'abord convertir vos fichiers .doc en .docx à l'aide de Microsoft Word ou LibreOffice."
      },
      {
        "question": "Les images sont-elles conservées ?",
        "answer": "Le contenu textuel et le formatage de base sont préservés. Les mises en page complexes comportant de nombreuses images peuvent faire l'objet d'un rendu simplifié."
      },
      {
        "question": "La conversion est-elle sécurisée ?",
        "answer": "Oui, tout le traitement se déroule dans votre navigateur. Vos documents ne quittent jamais votre appareil."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel en PDF",
    "metaDescription": "Convertissez des feuilles de calcul Excel (XLSX) en PDF. Préservez les tableaux et les données dans vos documents convertis.",
    "keywords": [
      "excel en pdf",
      "xlsx en pdf",
      "convertir excel",
      "tableur en pdf",
      "microsoft excel en pdf"
    ],
    "description": "\n      <p>L'outil Excel en PDF convertit les feuilles de calcul Microsoft Excel au format PDF tout en préservant la structure des tableaux et l'organisation des données.</p>\n      <p>Téléversez vos fichiers XLSX et obtenez des documents PDF propres avec des tableaux correctement formatés. Chaque feuille de votre classeur devient une section distincte dans le PDF.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos données restent privées et sécurisées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier Excel",
        "description": "Faites glisser et déposez votre fichier .xlsx ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil chargera la feuille de calcul et convertira toutes les feuilles."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Partage de rapports",
        "description": "Convertissez des rapports Excel en PDF pour les distribuer aux parties prenantes.",
        "icon": "file-text"
      },
      {
        "title": "Archivage de données",
        "description": "Archivez les données de feuilles de calcul sous un format PDF stable.",
        "icon": "archive"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Créez des PDF prêts à l'impression à partir de feuilles de calcul Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Les classeurs contenant plusieurs feuilles sont-ils pris en charge ?",
        "answer": "Oui, toutes les feuilles du classeur sont converties et incluses dans le PDF."
      },
      {
        "question": "Le format .xls est-il pris en charge ?",
        "answer": "Actuellement, seul le format .xlsx est pris en charge. Veuillez d'abord enregistrer vos fichiers .xls sous le format .xlsx."
      },
      {
        "question": "Les formules sont-elles conservées ?",
        "answer": "Le PDF affiche les valeurs calculées. Les formules ne sont pas exécutables au format PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint en PDF",
    "metaDescription": "Convertissez des présentations PowerPoint (PPTX) en PDF. Préservez les diapositives et le contenu pour un partage facile.",
    "keywords": [
      "powerpoint en pdf",
      "pptx en pdf",
      "convertir pptx",
      "presentation en pdf",
      "diapositives en pdf"
    ],
    "description": "\n      <p>L'outil PowerPoint en PDF convertit les présentations Microsoft PowerPoint au format PDF, en préservant le contenu et le texte des diapositives pour faciliter le partage et la consultation.</p>\n      <p>Chaque diapositive devient une page dans le PDF, maintenant le flux de la présentation. Parfait pour partager vos présentations avec des personnes qui n'ont pas installé PowerPoint.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos présentations restent privées et sécurisées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier PowerPoint",
        "description": "Faites glisser et déposez votre fichier .pptx ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil va extraire le contenu des diapositives et créer le PDF."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Partage de présentations",
        "description": "Partagez des présentations avec n'importe qui sans avoir besoin de PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Création de prospectus",
        "description": "Créez des documents PDF à distribuer à partir de vos diapositives de présentation.",
        "icon": "file-text"
      },
      {
        "title": "Archivage de présentations",
        "description": "Archivez les présentations sous un format PDF stable.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Les animations sont-elles conservées ?",
        "answer": "Le PDF étant un format statique, les animations et les transitions ne sont pas conservées. Chaque diapositive devient une page statique."
      },
      {
        "question": "Le format .ppt est-il pris en charge ?",
        "answer": "Actuellement, seul le format .pptx est pris en charge. Veuillez d'abord convertir vos fichiers .ppt en .pptx."
      },
      {
        "question": "Les notes de l'orateur sont-elles incluses ?",
        "answer": "Actuellement, les notes de l'orateur ne sont pas incluses dans le document PDF généré."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS en PDF",
    "metaDescription": "Convertissez des documents XPS au format PDF. Conversion haute fidélité préservant la mise en page et les graphiques.",
    "keywords": [
      "xps en pdf",
      "convertir xps",
      "convertisseur xps",
      "microsoft xps en pdf",
      "oxps en pdf"
    ],
    "description": "\n      <p>L'outil XPS en PDF convertit les documents Microsoft XPS (XML Paper Specification) au format PDF tout en préservant la mise en page, le texte et les graphiques vectoriels originaux.</p>\n      <p>Le format XPS est un format de document fixe similaire au PDF. Cet outil offre une conversion haute fidélité en utilisant un moteur d'analyse natif de l'XPS, garantissant une reproduction fidèle de vos documents.</p>\n      <p>Toutes les conversions se font localement dans votre navigateur, ce qui garantit la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier XPS",
        "description": "Faites glisser et déposez votre fichier .xps ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil va analyser et convertir le document XPS."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Conversion de format",
        "description": "Convertissez les documents XPS vers le format PDF, plus largement pris en charge.",
        "icon": "file"
      },
      {
        "title": "Partage de documents",
        "description": "Partagez des documents XPS avec des utilisateurs ne disposant pas de visionneuse XPS.",
        "icon": "share-2"
      },
      {
        "title": "Migration d'archives",
        "description": "Migrez les archives XPS vers le format PDF pour une meilleure compatibilité.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format XPS ?",
        "answer": "Le format XPS (XML Paper Specification) est le format de document fixe de Microsoft, similaire au PDF. Il est couramment utilisé pour l'impression sous Windows."
      },
      {
        "question": "La conversion est-elle sans perte ?",
        "answer": "Oui, la conversion conserve le texte, les graphismes et la mise en page avec une grande fidélité."
      },
      {
        "question": "Les fichiers XPS de plusieurs pages sont-ils pris en charge ?",
        "answer": "Oui, toutes les pages du document XPS sont converties dans le PDF final."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF en PDF",
    "metaDescription": "Convertissez des fichiers RTF (Rich Text Format) en PDF. Préservez la mise en forme du texte dans vos documents.",
    "keywords": [
      "rtf en pdf",
      "convertir rtf",
      "texte enrichi en pdf",
      "convertisseur rtf"
    ],
    "description": "\n      <p>L'outil RTF en PDF convertit les fichiers au format Rich Text Format (RTF) en documents PDF. Le RTF est un format texte largement pris en charge qui comprend des éléments de mise en forme de base tels que les polices, les couleurs et les styles.</p>\n      <p>Téléversez vos fichiers RTF et obtenez un rendu PDF propre tout en préservant le contenu textuel et la mise en forme de base. Idéal pour convertir les documents existants dans un format PDF moderne.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos documents restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier RTF",
        "description": "Faites glisser et déposez votre fichier .rtf ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil va analyser et convertir le contenu RTF."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Conversion d'anciens documents",
        "description": "Convertissez vos anciens documents RTF dans un format PDF moderne.",
        "icon": "history"
      },
      {
        "title": "Partage de documents",
        "description": "Partagez des documents RTF dans un format PDF universellement consultable.",
        "icon": "share-2"
      },
      {
        "title": "Archivage de documents",
        "description": "Archivez vos fichiers RTF au format PDF stable pour un stockage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quels types de mise en forme sont conservés ?",
        "answer": "La mise en forme de base du texte, y compris les polices, les paragraphes et les styles, est convertie. Les fonctionnalités complexes du RTF peuvent être simplifiées."
      },
      {
        "question": "Puis-je convertir plusieurs fichiers RTF à la fois ?",
        "answer": "Actuellement, la conversion se fait un fichier à la fois. Vous pouvez utiliser l'outil Fusionner PDF pour combiner plusieurs fichiers convertis."
      },
      {
        "question": "Les images intégrées sont-elles prises en charge ?",
        "answer": "Le contenu textuel est le sujet principal du traitement. Il est possible que les objets intégrés ne soient pas rendus."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB en PDF",
    "metaDescription": "Convertissez des livres électroniques EPUB en PDF. Préservez le formatage, les images et la structure des chapitres.",
    "keywords": [
      "epub en pdf",
      "convertir epub",
      "livre electronique en pdf",
      "convertisseur epub"
    ],
    "description": "\n      <p>L'outil EPUB en PDF convertit les fichiers de livres électroniques en documents PDF de haute qualité. L'EPUB est le format de livre électronique le plus populaire, utilisé par la majorité des liseuses et bibliothèques numériques.</p>\n      <p>Cet outil préserve la mise en forme du texte, les images et la structure des chapitres de vos livres électroniques. Parfait pour l'impression, l'archivage ou le partage de livres électroniques dans un format universellement consultable.</p>\n      <p>Toutes les conversions ont lieu localement dans votre navigateur à l'aide d'une technologie de rendu avancée, garantissant la confidentialité de vos livres et la rapidité de traitement.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier EPUB",
        "description": "Faites glisser et déposez votre fichier .epub ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre la conversion",
        "description": "L'outil va restituer et convertir toutes les pages de votre livre électronique."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Imprimer des livres électroniques",
        "description": "Convertissez vos livres électroniques en PDF pour une impression physique.",
        "icon": "printer"
      },
      {
        "title": "Archiver des livres",
        "description": "Stockez vos livres électroniques sous un format PDF stable à long terme.",
        "icon": "archive"
      },
      {
        "title": "Partager des documents",
        "description": "Partagez des livres électroniques avec n'importe qui, même sans liseuse.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Le formatage est-il préservé ?",
        "answer": "Oui ! Cet outil utilise un moteur de rendu natif EPUB, préservant la mise en forme du texte, les images et la mise en page avec une haute fidélité."
      },
      {
        "question": "Les fichiers EPUB protégés par DRM sont-ils pris en charge ?",
        "answer": "Non, les livres électroniques protégés par DRM ne peuvent pas être convertis. Seuls les fichiers EPUB sans DRM sont pris en charge."
      },
      {
        "question": "Comment la taille des pages est-elle déterminée ?",
        "answer": "Le contenu EPUB est rendu au format A4 standard pour une lisibilité optimale."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI en PDF",
    "metaDescription": "Convertissez des livres électroniques MOBI en PDF. Prise en charge du format Kindle avec un rendu de haute qualité.",
    "keywords": [
      "mobi en pdf",
      "convertir mobi",
      "kindle en pdf",
      "azw en pdf",
      "convertisseur mobi"
    ],
    "description": "\n      <p>L'outil MOBI en PDF convertit les fichiers de livres électroniques Amazon Kindle en documents PDF de haute qualité. Le format MOBI (y compris AZW et AZW3) est le format de livre électronique propriétaire d'Amazon utilisé sur les appareils Kindle.</p>\n      <p>Cet outil préserve la mise en forme du texte, les images et la structure de vos livres Kindle. Parfait pour imprimer, archiver ou lire sur des appareils qui ne prennent pas en charge le format MOBI.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur à l'aide d'une technologie de rendu avancée, garantissant que vos livres restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier MOBI",
        "description": "Faites glisser et déposez votre fichier .mobi, .azw ou .azw3, ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre la conversion",
        "description": "L'outil va restituer et convertir toutes les pages de votre livre électronique."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Imprimer des livres Kindle",
        "description": "Convertissez vos livres électroniques Kindle en PDF pour une impression physique.",
        "icon": "printer"
      },
      {
        "title": "Archiver des livres",
        "description": "Stockez vos livres Kindle au format PDF universel.",
        "icon": "archive"
      },
      {
        "title": "Lecture multiplateforme",
        "description": "Lisez des livres Kindle sur des appareils qui ne prennent en charge que le PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Quels formats MOBI sont pris en charge ?",
        "answer": "Cet outil prend en charge les fichiers .mobi, .azw et .azw3 (versions sans DRM)."
      },
      {
        "question": "Les livres Kindle protégés par DRM sont-ils pris en charge ?",
        "answer": "Non, les livres électroniques protégés par DRM ne peuvent pas être convertis. Seuls les fichiers sans DRM sont pris en charge."
      },
      {
        "question": "Le formatage sera-t-il préservé ?",
        "answer": "Oui ! L'outil utilise le rendu natif MOBI pour préserver fidèlement le texte, les images et la mise en page."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF en SVG",
    "metaDescription": "Convertissez des pages PDF en graphiques vectoriels SVG. Parfaite mise à l'échelle à n'importe quelle taille avec exportation de pages individuelles.",
    "keywords": [
      "pdf en svg",
      "convertir pdf en svg",
      "graphiques vectoriels",
      "pdf évolutif",
      "convertisseur svg"
    ],
    "description": "\n      <p>L'outil PDF en SVG convertit chaque page de votre document PDF en un graphique vectoriel adaptable (SVG). Le SVG est un format vectoriel qui conserve une qualité parfaite quel que soit le niveau de zoom ou la taille d'impression.</p>\n      <p>Contrairement aux formats matriciels (JPG, PNG), les graphiques SVG ne sont jamais pixélisés lorsqu'ils sont mis à l'échelle. Cela les rend idéaux pour les logos, les schémas, les dessins techniques et tout contenu devant être affiché à différentes tailles.</p>\n      <p>Prévisualisez chaque page convertie et téléchargez-les individuellement ou sous la forme d'un fichier ZIP. Tout le traitement se fait localement dans votre navigateur, garantissant la confidentialité absolue de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour parcourir et sélectionner."
      },
      {
        "step": 2,
        "title": "Configurer les options",
        "description": "Définissez la qualité de résolution et spécifiez éventuellement des plages de pages."
      },
      {
        "step": 3,
        "title": "Prévisualiser et convertir",
        "description": "Cliquez sur Convertir pour traiter. Prévisualisez chaque page en cliquant sur les miniatures."
      },
      {
        "step": 4,
        "title": "Télécharger",
        "description": "Téléchargez des fichiers SVG individuels ou toutes les pages sous forme d'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Logos et graphiques",
        "description": "Extrayez des logos et des graphiques vectoriels de vos PDF pour les utiliser dans des logiciels de conception.",
        "icon": "pen-tool"
      },
      {
        "title": "Schémas techniques",
        "description": "Convertissez des dessins techniques et des schémas au format SVG évolutif.",
        "icon": "ruler"
      },
      {
        "title": "Développement Web",
        "description": "Créez des fichiers SVG prêts pour le Web à partir de contenus PDF pour des sites Web réactifs.",
        "icon": "globe"
      },
      {
        "title": "Imprimer à n'importe quelle taille",
        "description": "Générez des graphiques vectoriels qui s'impriment parfaitement à n'importe quelle échelle.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format SVG ?",
        "answer": "Le SVG (Scalable Vector Graphics) est un format d'image vectorielle qui peut être redimensionné à n'importe quelle taille sans perte de qualité. Il est largement utilisé pour les logos, les icônes et les graphiques Web."
      },
      {
        "question": "Le fichier SVG sera-t-il vraiment vectoriel ?",
        "answer": "Le fichier SVG contient un rendu haute résolution de la page PDF. Pour les PDF contenant du contenu vectoriel, vous obtenez un résultat net à n'importe quelle échelle."
      },
      {
        "question": "Puis-je prévisualiser avant de télécharger ?",
        "answer": "Oui ! Cliquez sur n'importe quelle miniature pour voir un aperçu en taille réelle du SVG. Vous pouvez télécharger des pages individuelles ou toutes en même temps."
      },
      {
        "question": "Quelle résolution dois-je choisir ?",
        "answer": "Une résolution plus élevée (216 ou 288 DPI) produit des SVG plus volumineux et plus détaillés. Utilisez des paramètres plus bas pour un traitement plus rapide et des fichiers plus petits."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF en Excel",
    "metaDescription": "Convertissez des PDF en feuilles de calcul Excel. Extrayez les tableaux au format XLSX.",
    "keywords": [
      "pdf en excel",
      "pdf en xlsx",
      "convertir tableaux pdf",
      "extraire tableaux"
    ],
    "description": "\n      <p>L'outil PDF en Excel convertit vos documents PDF en feuilles de calcul Microsoft Excel modifiables (XLSX). L'outil détecte automatiquement les tableaux de votre PDF et les extrait dans des feuilles séparées.</p>\n      <p>Cet outil est idéal pour analyser des rapports financiers, des factures ou toute donnée présentée sous forme de tableaux. Les tableaux de chaque page sont organisés en feuilles de calcul pour une manipulation facile des données.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos données restent privées et sécurisées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour le sélectionner."
      },
      {
        "step": 2,
        "title": "Traitement",
        "description": "L'outil va identifier et extraire automatiquement les tableaux."
      },
      {
        "step": 3,
        "title": "Télécharger le fichier Excel",
        "description": "Téléchargez votre fichier Excel contenant les tableaux extraits."
      }
    ],
    "useCases": [
      {
        "title": "Analyse financière",
        "description": "Convertissez des relevés bancaires ou des factures en Excel pour analyse.",
        "icon": "trending-up"
      },
      {
        "title": "Extraction de données",
        "description": "Récupérez des tableaux de données à partir d'articles de recherche ou de rapports.",
        "icon": "database"
      },
      {
        "title": "Gestion des stocks",
        "description": "Convertissez des listes d'inventaire au format PDF en feuilles de calcul.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Comment les tableaux sont-ils traités ?",
        "answer": "Les tableaux détectés sur chaque page sont extraits vers des feuilles correspondantes dans le fichier Excel."
      },
      {
        "question": "Que se passe-t-il s'il n'y a pas de tableau ?",
        "answer": "Une feuille d'information sera créée pour indiquer qu'aucun tableau n'a été trouvé."
      },
      {
        "question": "Le formatage est-il préservé ?",
        "answer": "Les données sont préservées, mais la mise en forme visuelle complexe peut être simplifiée pour l'utilisation dans la feuille de calcul."
      }
    ]
  },
  "extract-images": {
    "title": "Extraire les images d'un PDF",
    "metaDescription": "Extrayez toutes les images intégrées des fichiers PDF. Téléchargez-les individuellement ou sous forme d'archive ZIP. Filtrez automatiquement les petites images.",
    "keywords": [
      "extraire images pdf",
      "extraction image pdf",
      "recuperer images pdf",
      "telecharger images pdf",
      "pdf en images"
    ],
    "description": "\n      <p>L'outil Extraire les images d'un PDF récupère toutes les images intégrées de vos documents PDF. Téléchargez des images de haute qualité individuellement ou sous forme d'une archive ZIP pratique.</p>\n      <p>L'outil filtre automatiquement les petites images telles que les icônes et les décorations sur la base de seuils de taille personnalisables. Traitez plusieurs PDF à la fois pour une extraction par lots efficace.</p>\n      <p>Toute l'extraction s'effectue dans votre navigateur, ce qui garantit la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser vos PDF",
        "description": "Faites glisser et déposez un ou plusieurs fichiers PDF ou cliquez pour les sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Définir les options de filtrage",
        "description": "Ajustez la largeur, la hauteur et la taille minimale des fichiers pour filtrer les petites images indésirables."
      },
      {
        "step": 3,
        "title": "Extraire les images",
        "description": "Cliquez sur Extraire pour trouver toutes les images intégrées dans vos PDF."
      },
      {
        "step": 4,
        "title": "Télécharger",
        "description": "Téléchargez des images individuelles ou toutes les images sous forme d'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Récupération de photos",
        "description": "Extrayez des photos et des images intégrées dans des documents PDF pour les réutiliser ou les archiver.",
        "icon": "image"
      },
      {
        "title": "Collecte de ressources",
        "description": "Rassemblez tous les graphiques et images des rapports, présentations ou brochures PDF.",
        "icon": "folder"
      },
      {
        "title": "Réutilisation de contenu",
        "description": "Extrayez des images des PDF pour les utiliser dans d'autres documents, sites Web ou présentations.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Quels formats d'image sont extraits ?",
        "answer": "Les images sont extraites dans leur format d'origine (JPEG, PNG, etc.) lorsque cela est possible, ou converties en PNG pour les données d'image brutes."
      },
      {
        "question": "Pourquoi certaines images sont-elles manquantes ?",
        "answer": "Les petites images inférieures au seuil de taille sont filtrées. Ajustez les paramètres de filtrage pour extraire des images plus petites."
      },
      {
        "question": "Puis-je effectuer l'extraction à partir de PDF scannés ?",
        "answer": "Les PDF scannés contiennent généralement le scan sous forme d'une seule grande image par page. Utilisez plutôt l'outil PDF en Image pour une conversion page par page."
      }
    ]
  },
  "find-and-redact": {
    "title": "Rechercher et masquer",
    "metaDescription": "Recherchez et masquez du texte sur toutes les pages d'un PDF. Masquez par lots les informations sensibles telles que les numéros de compte, les noms, etc.",
    "keywords": [
      "masquer pdf",
      "rechercher et masquer",
      "masquage par lots",
      "supprimer du texte",
      "censure pdf",
      "masquer donnees sensibles"
    ],
    "description": "\n      <p>L'outil Rechercher et masquer vous permet de rechercher des textes, des numéros ou des motifs spécifiques sur toutes les pages de votre PDF et de masquer toutes les occurrences correspondantes en une seule fois. Parfait pour supprimer des informations sensibles comme des numéros de compte, des noms, des adresses ou toute donnée confidentielle.</p>\n      <p>Prévisualisez toutes les correspondances avant d'appliquer les masquages, et choisissez de manière sélective les occurrences à masquer. Prise en charge de la recherche sensible à la casse, de la correspondance de mots entiers et des expressions régulières pour une recherche avancée de motifs.</p>\n      <p>Tout le traitement s'effectue dans votre navigateur, garantissant la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour le sélectionner."
      },
      {
        "step": 2,
        "title": "Rechercher du texte",
        "description": "Saisissez le texte, le numéro ou le motif regex que vous souhaitez rechercher et masquer."
      },
      {
        "step": 3,
        "title": "Revoir et sélectionner",
        "description": "Prévisualisez toutes les correspondances et sélectionnez celles à masquer."
      },
      {
        "step": 4,
        "title": "Appliquer le masquage",
        "description": "Personnalisez l'apparence du masquage et appliquez-le aux correspondances sélectionnées."
      }
    ],
    "useCases": [
      {
        "title": "Conformité de la confidentialité",
        "description": "Masquez les informations personnelles pour vous conformer au RGPD, à la HIPAA ou à d'autres réglementations.",
        "icon": "shield"
      },
      {
        "title": "Documents juridiques",
        "description": "Supprimez les données confidentielles des documents juridiques avant de les partager.",
        "icon": "scale"
      },
      {
        "title": "Dossiers financiers",
        "description": "Masquez les numéros de compte, de sécurité sociale ou les données financières des relevés.",
        "icon": "credit-card"
      }
    ],
    "faq": [
      {
        "question": "Le masquage est-il permanent ?",
        "answer": "Oui, le masquage supprime définitivement le texte sous-jacent. Le contenu d'origine ne peut pas être récupéré. Conservez toujours une sauvegarde du fichier d'origine."
      },
      {
        "question": "Puis-je masquer des images ou du texte scanné ?",
        "answer": "Cet outil fonctionne avec des PDF basés sur du texte. Pour les documents scannés, vous devrez utiliser un masquage manuel basé sur une zone."
      },
      {
        "question": "Puis-je personnaliser l'apparence du masquage ?",
        "answer": "Oui, vous pouvez définir la couleur du masquage, ajouter des bordures et éventuellement inclure un texte de remplacement comme « [MASQUÉ] »."
      },
      {
        "question": "Comment fonctionne la recherche par expression régulière ?",
        "answer": "Activez « Utiliser une expression régulière » pour effectuer des recherches à l'aide de motifs regex. Par exemple, \\d{4}-\\d{4}-\\d{4}-\\d{4} pour trouver des numéros de carte de crédit."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF en Markdown",
    "metaDescription": "Convertissez des PDF au format Markdown. Extrayez le texte et préservez la mise en forme comme les titres et les listes.",
    "keywords": [
      "pdf en markdown",
      "convertir pdf en md",
      "extraction texte pdf",
      "convertisseur markdown",
      "pdf en texte"
    ],
    "description": "\n      <p>L'outil PDF en Markdown convertit vos documents PDF en fichiers Markdown propres et bien structurés. L'outil extrait intelligemment le contenu textuel et tente de préserver la mise en forme d'origine (titres, listes et paragraphes).</p>\n      <p>Parfait pour convertir des documents PDF en formats éditables pour de la documentation, de la prise de notes ou des systèmes de gestion de contenu (CMS) prenant en charge le Markdown.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, ce qui garantit la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour le sélectionner."
      },
      {
        "step": 2,
        "title": "Configurer les options",
        "description": "Définissez la plage de pages, choisissez d'inclure les numéros de page et ajustez les paramètres de saut de ligne."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Cliquez sur Convertir pour générer votre fichier Markdown et le télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Documentation",
        "description": "Convertissez des manuels et des guides PDF en Markdown pour une documentation gérée par contrôle de version.",
        "icon": "file-text"
      },
      {
        "title": "Prise de notes",
        "description": "Extrayez le contenu d'articles et de livres PDF pour votre système de prise de notes.",
        "icon": "edit-3"
      },
      {
        "title": "Migration de contenu",
        "description": "Migrez du contenu PDF vers des plateformes CMS qui prennent en charge le Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "La mise en forme est-elle préservée ?",
        "answer": "L'outil tente de détecter les titres en fonction de la taille de la police ainsi que les listes à puces et numérotées. Les mises en page complexes peuvent nécessiter des ajustements manuels."
      },
      {
        "question": "Puis-je convertir des pages spécifiques ?",
        "answer": "Oui, vous pouvez spécifier une plage de pages comme « 1-3, 5, 7 » pour ne convertir que ces pages."
      },
      {
        "question": "Cela fonctionne-t-il avec les PDF scannés ?",
        "answer": "Les PDF scannés contiennent des images et non du texte. Utilisez d'abord notre outil OCR pour extraire le texte avant de le convertir en Markdown."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Créateur de livrets PDF",
    "metaDescription": "Créez des mises en page de livrets à partir de fichiers PDF pour l'impression. Organisez les pages pour une reliure à cheval avec plusieurs options de grille.",
    "keywords": [
      "livret pdf",
      "createur de livret",
      "imprimer livret",
      "piqure a cheval",
      "imposition"
    ],
    "description": "\n      <p>Le Créateur de livrets PDF organise vos pages PDF en mises en page de livrets prêtes pour l'impression et le pliage. Parfait pour créer des brochures, des fanzines, des livrets et des publications reliées par piqûre à cheval.</p>\n      <p>Faites votre choix parmi différents modes de grille (1x2, 2x2, 2x4, 4x4), tailles de papier et options d'orientation. L'outil gère automatiquement l'imposition des pages pour respecter la séquence de pliage.</p>\n      <p>Toute l'opération se fait localement dans votre navigateur, ce qui garantit la confidentialité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Téléversez le document PDF que vous souhaitez convertir en livret."
      },
      {
        "step": 2,
        "title": "Choisir la mise en page",
        "description": "Sélectionnez le mode de grille, la taille de papier, l'orientation et les options de rotation."
      },
      {
        "step": 3,
        "title": "Créer et télécharger",
        "description": "Générez la mise en page du livret et téléchargez-la pour l'impression."
      }
    ],
    "useCases": [
      {
        "title": "Brochures",
        "description": "Créez des brochures prêtes à être pliées à partir de documents PDF standard.",
        "icon": "book-open"
      },
      {
        "title": "Fanzines",
        "description": "Produisez des fanzines auto-publiés avec une imposition de page correcte.",
        "icon": "book"
      },
      {
        "title": "Programmes d'événements",
        "description": "Créez des livrets de programmes professionnels pour vos événements.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que la reliure par piqûre à cheval ?",
        "answer": "La piqûre à cheval est une méthode de reliure dans laquelle les feuilles pliées sont imbriquées et agrafées le long de la ligne de pliure."
      },
      {
        "question": "Quel mode de grille dois-je utiliser ?",
        "answer": "Le mode 1x2 est le standard pour les livrets. Utilisez 2x2 ou supérieur pour une impression sur plusieurs poses afin d'économiser du papier."
      },
      {
        "question": "Puis-je prévisualiser la mise en page ?",
        "answer": "Oui, l'outil fournit un aperçu visuel de la disposition avant de générer le livret final."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Pixelliser un PDF",
    "metaDescription": "Convertissez des pages PDF en images de haute qualité. Exportez au format PNG, JPEG ou WebP avec des paramètres DPI personnalisés.",
    "keywords": [
      "pixelliser pdf",
      "pdf en image",
      "pdf en png",
      "pdf en jpeg",
      "convertir pages pdf"
    ],
    "description": "\n      <p>L'outil Pixelliser un PDF convertit vos pages PDF en images matricielles de haute qualité. Choisissez parmi les formats de sortie PNG, JPEG ou WebP en contrôlant totalement le DPI et les paramètres de qualité.</p>\n      <p>Idéal pour créer des miniatures, des graphiques pour les réseaux sociaux ou pour archiver du contenu PDF sous forme d'images. Prend en charge la sélection de plages de pages et le traitement par lots.</p>\n      <p>Toutes les étapes de traitement s'effectuent localement dans votre navigateur, ce qui garantit la confidentialité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour le sélectionner."
      },
      {
        "step": 2,
        "title": "Configurer la sortie",
        "description": "Sélectionnez la résolution (DPI), le format de sortie (PNG/JPEG/WebP), la qualité et la plage de pages."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Traitez les pages et téléchargez les images individuellement ou sous forme d'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Réseaux sociaux",
        "description": "Convertissez les diapositives de vos PDF en images pour les publier sur les réseaux sociaux.",
        "icon": "share-2"
      },
      {
        "title": "Miniatures",
        "description": "Générez des miniatures d'aperçu pour vos documents PDF.",
        "icon": "image"
      },
      {
        "title": "Publication Web",
        "description": "Convertissez du contenu PDF dans des formats d'image adaptés au Web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Quel DPI dois-je utiliser ?",
        "answer": "72 DPI pour l'affichage écran, 150 DPI pour un usage général, 300 DPI pour une qualité d'impression."
      },
      {
        "question": "Quel format est le plus adapté ?",
        "answer": "Le PNG pour la qualité et la transparence, le JPEG pour une taille de fichier réduite, le WebP pour une utilisation web moderne."
      },
      {
        "question": "Puis-je convertir uniquement certaines pages ?",
        "answer": "Oui, indiquez des plages de pages comme « 1-5, 8, 10-15 » pour convertir uniquement ces pages spécifiques."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown en PDF",
    "metaDescription": "Convertissez des fichiers Markdown en documents PDF magnifiquement formatés. Prise en charge du format GitHub Flavored Markdown et de la coloration syntaxique.",
    "keywords": [
      "markdown en pdf",
      "md en pdf",
      "convertir markdown",
      "gfm en pdf",
      "convertisseur markdown"
    ],
    "description": "\n      <p>L'outil Markdown en PDF convertit vos fichiers Markdown en documents PDF au style professionnel. Prise en charge des spécifications CommonMark et GitHub Flavored Markdown (GFM), y compris les tableaux, les listes de tâches et les blocs de code.</p>\n      <p>Faites votre choix parmi plusieurs thèmes (clair, sombre, GitHub) et personnalisez la taille de la page ainsi que les marges. Les blocs de code bénéficient d'une coloration syntaxique pour une meilleure lisibilité.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, ce qui garantit la confidentialité de votre contenu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier Markdown",
        "description": "Téléversez votre fichier .md ou .markdown."
      },
      {
        "step": 2,
        "title": "Choisir le thème",
        "description": "Sélectionnez un thème visuel et configurez les paramètres de page."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Générez le PDF mis en forme et téléchargez-le."
      }
    ],
    "useCases": [
      {
        "title": "Documentation",
        "description": "Convertissez les fichiers README et autres documentations en PDF faciles à partager.",
        "icon": "file-text"
      },
      {
        "title": "Exportation de notes",
        "description": "Exportez vos notes Markdown au format PDF pour les imprimer ou les partager.",
        "icon": "edit-3"
      },
      {
        "title": "Rapports",
        "description": "Créez des rapports à partir de documents Markdown avec une mise en page professionnelle.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Le format GitHub Flavored Markdown est-il pris en charge ?",
        "answer": "Oui, les tableaux, les listes de tâches, les textes barrés et les autres fonctionnalités spécifiques de la GFM sont pris en charge."
      },
      {
        "question": "Puis-je personnaliser le style ?",
        "answer": "Vous pouvez choisir parmi les thèmes prédéfinis ou ajouter votre propre CSS personnalisé pour un contrôle total."
      },
      {
        "question": "Les blocs de code sont-ils colorés ?",
        "answer": "Oui, les blocs de code bénéficient d'une coloration syntaxique automatique pour la plupart des langages de programmation."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ en PDF",
    "metaDescription": "Convertissez des archives de bandes dessinées (CBZ) en PDF. Préservez l'ordre et la qualité des images pour les bandes dessinées numériques.",
    "keywords": [
      "cbz en pdf",
      "bande dessinee en pdf",
      "convertir cbz",
      "convertisseur de bande dessinee",
      "convertisseur cbz"
    ],
    "description": "\n      <p>L'outil CBZ en PDF convertit les fichiers d'archives de bandes dessinées (CBZ) en documents PDF. L'outil extrait toutes les images de l'archive CBZ et les compile dans un PDF tout en conservant l'ordre de lecture d'origine.</p>\n      <p>Choisissez parmi différentes options de taille de page, y compris les dimensions d'image d'origine ou les tailles standard des bandes dessinées. Parfait pour lire des bandes dessinées sur des appareils qui prennent en charge le format PDF mais pas le format CBZ.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant la confidentialité de vos bandes dessinées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier CBZ",
        "description": "Téléversez votre fichier d'archive de bande dessinée .cbz."
      },
      {
        "step": 2,
        "title": "Sélectionner les options",
        "description": "Choisissez la taille de la page et les paramètres de qualité d'image."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Convertissez en PDF et téléchargez votre bande dessinée."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilité liseuse",
        "description": "Convertissez des fichiers CBZ en PDF pour les liseuses qui ne prennent en charge que le PDF.",
        "icon": "book"
      },
      {
        "title": "Archivage de bandes dessinées",
        "description": "Créez des archives PDF de votre collection de bandes dessinées numériques.",
        "icon": "archive"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Convertissez des bandes dessinées numériques en PDF pour l'impression.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format CBZ ?",
        "answer": "Le CBZ est une archive ZIP contenant les pages d'une bande dessinée sous forme de fichiers d'images, renommée avec l'extension .cbz."
      },
      {
        "question": "La qualité des images est-elle préservée ?",
        "answer": "Oui, les images sont intégrées avec leur qualité d'origine dans le PDF."
      },
      {
        "question": "Les dossiers imbriqués sont-ils pris en charge ?",
        "answer": "Oui, les images de tous les dossiers de l'archive sont extraites et triées automatiquement."
      }
    ]
  },
  "font-to-outline": {
    "title": "Vectoriser les polices",
    "metaDescription": "Supprimez les dépendances de polices des documents PDF en convertissant les pages en images de haute qualité. Assure la compatibilité sur tous les systèmes.",
    "keywords": [
      "vectoriser polices pdf",
      "polices en contours",
      "supprimer polices pdf",
      "compatibilite polices",
      "aplatir polices pdf",
      "suppression polices pdf"
    ],
    "description": "\n      <p>L'outil Vectoriser les polices supprime toutes les dépendances de polices de votre PDF en convertissant chaque page en un contenu pixellisé de haute qualité. Cela garantit que votre document s'affiche exactement de la même manière sur n'importe quel système, même si les polices d'origine ne sont pas installées.</p>\n      <p>L'outil restitue chaque page au DPI de votre choix (150-600), supprimant les polices intégrées tout en préservant le rendu visuel exact. En option, vous pouvez ajouter une couche de texte invisible pour conserver les fonctions de recherche.</p>\n      <p>C'est une étape essentielle pour la préparation à l'impression, la compatibilité multiplateforme et pour éviter les problèmes de licence de polices lors du partage de documents. Tout le traitement se fait localement dans votre navigateur.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Téléversez le PDF contenant les polices que vous souhaitez supprimer."
      },
      {
        "step": 2,
        "title": "Configurer la qualité",
        "description": "Choisissez la résolution (DPI) : 300 recommandé pour l'impression, 150 pour l'écran. Activez le texte recherchable si nécessaire."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Traisez le fichier et téléchargez le PDF indépendant des polices."
      }
    ],
    "useCases": [
      {
        "title": "Préparation à l'impression",
        "description": "Éliminez les problèmes de polices chez les imprimeurs commerciaux en supprimant toutes les dépendances de polices.",
        "icon": "printer"
      },
      {
        "title": "Partage multiplateforme",
        "description": "Partagez des documents qui s'affichent à l'identique sur n'importe quel appareil, quelles que soient les polices installées.",
        "icon": "share-2"
      },
      {
        "title": "Licences de polices",
        "description": "Supprimez les polices intégrées pour distribuer vos documents sans vous soucier des licences.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Comment cela fonctionne-t-il ?",
        "answer": "L'outil affiche chaque page en haute résolution (selon le DPI choisi) et recrée le PDF à partir de ces images, ce qui supprime toutes les dépendances de polices tout en préservant fidèlement l'apparence visuelle."
      },
      {
        "question": "Puis-je toujours sélectionner du texte après la conversion ?",
        "answer": "Par défaut, non. Le texte est converti en image. Cependant, vous pouvez activer l'option « Préserver le texte recherchable » pour ajouter une couche de texte invisible permettant les fonctions de recherche et de copie."
      },
      {
        "question": "Quel DPI dois-je utiliser ?",
        "answer": "300 DPI est recommandé pour une qualité d'impression optimale. 150 DPI suffit largement pour une lecture à l'écran tout en générant des fichiers plus petits. 600 DPI offre la meilleure qualité possible mais crée de très gros fichiers."
      },
      {
        "question": "La taille du fichier va-t-elle augmenter ?",
        "answer": "La taille finale dépend du DPI et du contenu. 150 DPI produit généralement des fichiers plus petits, 300 DPI peut augmenter la taille, 600 DPI l'augmente considérablement. Une compression automatique est appliquée."
      },
      {
        "question": "Cette action est-elle réversible ?",
        "answer": "Non, les données de police d'origine sont définitivement supprimées. Conservez toujours une copie de sauvegarde du fichier original si vous devez rééditer le texte avec les polices d'origine."
      },
      {
        "question": "Qu'en est-il des graphiques vectoriels ?",
        "answer": "Les graphiques vectoriels (formes, lignes) du PDF d'origine seront convertis en mode matriciel en même temps que le texte. La qualité visuelle est préservée au niveau de DPI que vous avez sélectionné."
      }
    ]
  },
  "extract-tables": {
    "title": "Extraire les tableaux d'un PDF",
    "metaDescription": "Détectez et extrayez les tableaux des documents PDF. Exportez aux formats JSON, Markdown ou CSV.",
    "keywords": [
      "extraire tableaux",
      "extraction tableau pdf",
      "pdf en csv",
      "pdf en excel",
      "detection de tableaux"
    ],
    "description": "\n      <p>L'outil Extraire les tableaux d'un PDF détecte les données tabulaires de vos documents PDF et les exporte sous des formats structurés. Choisissez le format JSON pour l'intégration de données, le Markdown pour la documentation ou le CSV pour les tableurs.</p>\n      <p>L'outil s'appuie sur des algorithmes de détection intelligents pour identifier les structures de tableaux, même dans les documents complexes. Spécifiez des plages de pages et ajustez les paramètres de détection pour obtenir de meilleurs résultats.</p>\n      <p>Tout le traitement s'effectue en local dans votre navigateur, assurant la confidentialité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Téléversez le PDF contenant les tableaux que vous souhaitez extraire."
      },
      {
        "step": 2,
        "title": "Configurer la détection",
        "description": "Définissez la plage de pages et les seuils minimaux de colonnes et de lignes."
      },
      {
        "step": 3,
        "title": "Exporter et télécharger",
        "description": "Choisissez le format de sortie (JSON/Markdown/CSV) et téléchargez le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Analyse de données",
        "description": "Extrayez les données des tableaux pour les analyser dans des tableurs ou des bases de données.",
        "icon": "bar-chart"
      },
      {
        "title": "Traitement de rapports",
        "description": "Récupérez les tableaux des rapports PDF pour un traitement ultérieur.",
        "icon": "file-text"
      },
      {
        "title": "Documentation",
        "description": "Convertissez les tableaux PDF en Markdown pour vos documentations techniques.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Peut-il détecter des tableaux complexes ?",
        "answer": "L'outil est particulièrement efficace avec les tableaux simples sous forme de grille. Les cellules fusionnées complexes peuvent nécessiter des ajustements manuels."
      },
      {
        "question": "Que faire si aucun tableau n'est trouvé ?",
        "answer": "Essayez d'ajuster le seuil minimal de colonnes/lignes ou vérifiez si le PDF comporte de véritables structures de tableaux."
      },
      {
        "question": "Puis-je extraire des données de pages spécifiques ?",
        "answer": "Oui, spécifiez une plage de pages pour limiter l'extraction à ces pages."
      }
    ]
  },
  "ocg-manager": {
    "title": "Gestionnaire de calques PDF (OCG)",
    "metaDescription": "Gérez les calques PDF (Optional Content Groups). Affichez, basculez, ajoutez, supprimez et renommez des calques dans vos documents PDF.",
    "keywords": [
      "calques pdf",
      "gestionnaire ocg",
      "optional content groups",
      "visibilite calques pdf",
      "gerer calques pdf"
    ],
    "description": "\n      <p>Le Gestionnaire de calques PDF vous permet de visualiser et de gérer les groupes de contenu facultatif (Optional Content Groups - OCG) de vos documents PDF. Les calques OCG sont couramment utilisés dans les dessins techniques, les cartes et les documents complexes pour organiser le contenu sous forme de calques activables.</p>\n      <p>Visualisez tous les calques de votre PDF, activez ou désactivez leur visibilité, ajoutez-en de nouveaux, supprimez ceux qui sont superflus ou renommez-les. Cet outil est indispensable pour travailler avec des PDF multicouches tels que les plans d'architecture, les exports de CAO et les documents prêts pour l'impression.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, assurant la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Téléversez un fichier PDF contenant des calques (OCG) ou un fichier auquel vous souhaitez ajouter des calques."
      },
      {
        "step": 2,
        "title": "Visualiser les calques",
        "description": "L'outil répertorie automatiquement tous les calques détectés dans le document avec leur état de visibilité."
      },
      {
        "step": 3,
        "title": "Gérer les calques",
        "description": "Activez ou désactivez la visibilité des calques, renommez-les, ajoutez de nouveaux calques ou supprimez les calques indésirables."
      },
      {
        "step": 4,
        "title": "Enregistrer et télécharger",
        "description": "Téléchargez votre PDF modifié après application des modifications de calques."
      }
    ],
    "useCases": [
      {
        "title": "Dessins techniques",
        "description": "Gérez les calques dans vos exports de CAO pour afficher ou masquer les dimensions, les annotations ou les différentes vues.",
        "icon": "ruler"
      },
      {
        "title": "Édition de cartes",
        "description": "Activez ou désactivez différentes couches de cartes (topographie, routes, étiquettes) pour des impressions cartographiques personnalisées.",
        "icon": "map"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Préparez des PDF multicouches pour l'impression en masquant ou affichant les calques adéquats selon les versions.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Que sont les calques PDF (OCG) ?",
        "answer": "Les groupes de contenu facultatif (OCG, pour Optional Content Groups) sont des calques au sein d'un PDF qui peuvent être affichés ou masqués à volonté. Ils sont fréquents dans les dessins CAO, les cartes et les documents complexes."
      },
      {
        "question": "Pourquoi mon PDF n'affiche-t-il aucun calque ?",
        "answer": "Tous les PDF ne comportent pas de calques. Les calques sont généralement ajoutés lors de la phase de création du document depuis un logiciel de CAO ou de dessin."
      },
      {
        "question": "Les modifications de calques affectent-elles le contenu d'origine ?",
        "answer": "La modification de la visibilité d'un calque n'affecte que son affichage ou son impression. Le contenu réel reste présent dans le fichier PDF."
      }
    ]
  },
  "pdf-reader": {
    "title": "Lecteur PDF",
    "metaDescription": "Lecteur PDF en ligne gratuit. Visualisez, parcourez, zoomez, pivotez et imprimez des documents PDF directement dans votre navigateur.",
    "keywords": [
      "lecteur pdf",
      "visionneuse pdf",
      "voir pdf en ligne",
      "lire pdf",
      "visionneuse pdf navigateur"
    ],
    "description": "\n      <p>Le Lecteur PDF est une visionneuse PDF complète qui vous permet de lire et de parcourir vos documents PDF directement dans votre navigateur. Aucune installation de logiciel n'est nécessaire : téléversez simplement votre fichier et commencez votre lecture.</p>\n      <p>Naviguez facilement entre les pages, zoomez sur les détails, pivotez l'affichage et basculez en mode plein écran pour une lecture confortable et sans distraction. Vous pouvez également imprimer vos documents ou les télécharger pour y accéder hors ligne.</p>\n      <p>Toute la consultation s'effectue localement dans votre navigateur. Vos documents ne sont jamais envoyés vers un serveur, garantissant une confidentialité totale.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Ouvrir votre PDF",
        "description": "Cliquez pour téléverser ou faites glisser et déposez un fichier PDF pour l'ouvrir dans le lecteur."
      },
      {
        "step": 2,
        "title": "Naviguer dans les pages",
        "description": "Utilisez les commandes de pagination pour aller à la page précédente ou suivante, ou pour atteindre directement un numéro de page spécifique."
      },
      {
        "step": 3,
        "title": "Ajuster la vue",
        "description": "Zoomez en avant ou en arrière, faites pivoter l'affichage ou passez en mode plein écran pour un confort de lecture optimal."
      },
      {
        "step": 4,
        "title": "Imprimer ou télécharger",
        "description": "Imprimez le document ou téléchargez-le pour pouvoir le consulter hors ligne."
      }
    ],
    "useCases": [
      {
        "title": "Révision de documents",
        "description": "Consultez rapidement des documents PDF sans installer le moindre logiciel.",
        "icon": "book-open"
      },
      {
        "title": "Lecture sur mobile",
        "description": "Lisez des documents PDF sur n'importe quel appareil équipé d'un navigateur Web.",
        "icon": "smartphone"
      },
      {
        "title": "Aperçu rapide",
        "description": "Affichez un aperçu de vos PDF avant de décider de les télécharger ou de les imprimer.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Mon document est-il en sécurité ?",
        "answer": "Oui, votre document est traité intégralement dans votre navigateur et n'est jamais téléversé sur le moindre serveur."
      },
      {
        "question": "Puis-je annoter ou modifier le PDF ?",
        "answer": "Cet outil est uniquement destiné à la visualisation. Utilisez nos outils « Signer PDF » ou « Annoter PDF » pour les modifications."
      },
      {
        "question": "Le lecteur fonctionne-t-il sur les appareils mobiles ?",
        "answer": "Oui, le Lecteur PDF fonctionne sur tous les appareils équipés d'un navigateur Web moderne."
      }
    ]
  }
};
