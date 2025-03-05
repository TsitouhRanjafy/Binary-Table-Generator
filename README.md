
# Générateur de Table Binaire CLI

## Description

Ce programme est un générateur de table binaire en ligne de commande. Il permet d'évaluer des expressions logiques et de générer automatiquement la table de vérité correspondante.

## Syntax expression

$V_0 \theta V_1 \theta V_2 ... \theta V_i$

  - $V=$ variable = `a-z` ou/et `A-Z`

  - $\theta=$ opérateur  { `&` (ET), `|` (OU), `=>` (IMPLICATION), `<=>` (ÉQUIVALENCE) }

 
## Exemple

- expression:
  
  ```shell
  p => q <=> ~p => ~q
  ```
  $V=$ {p,q}

  $\theta=$ {=>,<=>}

- output

- expression:
  
  ```shell
  ((r & p) | r) <=> ((r <=> p) & p | (o & ~p))
  ```
  $V=$ {r,p,o}

  $\Theta=$ {&,|,<=>}

- output


## Installation

```shell
git clone 
cd
npm install
npm run start 
```

- aperçu




  
  