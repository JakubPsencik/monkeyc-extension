# monkeyc-extension README

Aktuální verze rozšření se nachází ve složce "Extension"

Instalace na zařízení se provádí spuštěním následujícího příkazu v terminálu (ve složce s rozšířením):
code --install-extension monkeyc-extension-(cislo-verze).vsix


# Poznámky k verzím

## **1.0.9 (31.01.2020)**
- opravena chyba, kdy rozšíření provádělo autocomplete pro třídy, které nebyly instancované
## **1.0.8 (25.01.2020)**
- rozšíření je schopno našeptávat moduly a třídy pod jmenným prostorem "Toybox"
## **1.0.7 (15.01.2020)**
- nahrána první verze toyboxu vygenerovaná z oficiální connectIQ SDK

## **1.0.6 (14.12.2020)**
- vyřešena viditelnost tříd pro veřejné metody a proměnné
    - **pozn.** testováno na 1 adresáři s dvěma soubory...
   
## **1.0.5 (30.11.2020)**
- Funkční parsování všech .mc souborů ve "workspace" adresáři

## **1.0.4 (23.11.2020)**
- Rozšíření "našeptává" lokální proměnné již podle toho, v jakém rozsahu se nacházejí
    - **pozn.** již by mělo fungovat všude
- Rošíření "našeptává" třídní proměnné po zadání 'self.' nebo 'me.'

## **1.0.3 (8.11.2020)**
- Rozšíření "našeptává" lokální proměnné již podle toho, v jakém rozsahu se nacházejí
    - **pozn.** funguje zatím pouze pro jednoduché "bloky" kódu...

## **1.0.2 (2.11.2020)**
- Rozšíření zobrazuje lokální funkce, zatím nejsou vyfiltrovány podle patřičného rozsahu...

## **1.0.1 (2.11.2020)**
- Rozšíření zobrazuje lokální proměnné, zatím nejsou vyfiltrovány podle patřičného rozsahu...
