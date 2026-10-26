# godkendelsesopgave 2

Anden version af appen, hvor man finder og booker en tid hos en tatovør.
Bygget i React Native med Expo, videre fra godkendelsesopgave 1.

**Demovideo:** INDSÆT LINK HER

**Godkendelsesopgave 1:** https://github.com/daniellsj300503/godkendelse-opgave-1-innovation



## Sådan kører man appen

```bash
npm install
npx expo start
```

Scan QR-koden med Expo Go på telefonen. Telefonen og computeren skal være på
samme wifi ellers brug `npx expo start --tunnel`.

Hvis Expo Go siger, at versionerne ikke passer: `npx expo install --fix`.

Kortet beder om lov til at bruge din lokation. Siger man nej, vises alle
tatovører stadig på kortet, men appen kan ikke finde den nærmeste.


## Hvad er nyt siden opgave 1

- **Kun tatovører.** Frisørerne er taget ud.
- **Kort (ny skærm).** Viser alle tatovører på et kort, og finder den der ligger
  tættest på dig ud fra din lokation (`react-native-maps` og `expo-location`, som i 08_Maps).
- **Bookinger bliver gemt.** Når man booker, gemmes tiden med AsyncStorage, så den
  stadig står på forsiden under "Dine bookinger", når appen har været lukket.
- **Rettet efter brugertesten:**
  - Bookingknappen er grå, indtil alt er udfyldt, og teksten under den siger præcis hvad der mangler.
  - Vurderingen er tydeligere: guldstjerne, større tal og antal anmeldelser.
  - Profilen viser et prisestimat for hver størrelse i stedet for kun "fra 1.000 kr".

Nye knapper: "Find nærmeste tatovør" på forsiden og "Se profil" på kortet.


## opbygning

App.js                      navigationen: alle fem skærme i én stack
styles.js                   al styling
components/Knap.js          genbrugt knap der tager props (nu også "inaktiv")
data/udbydere.js            tatovørerne, tider, størrelser og prisestimat
screens/HjemSkaerm.js       skærm 1 forsiden + dine gemte bookinger (AsyncStorage)
screens/ListeSkaerm.js      skærm 2 listen (FlatList)
screens/DetaljeSkaerm.js    skærm 3 profilen med vurdering og prisestimat
screens/BookingSkaerm.js    skærm 4 book en tid, gemmer bookingen (AsyncStorage)
screens/KortSkaerm.js       skærm 5 kortet og nærmeste tatovør (ny)


## Data

Tatovørerne ligger i `data/udbydere.js`. Bookingerne er brugerens egne data og
gemmes på telefonen under nøglen `bookinger` med AsyncStorage, som en liste:

```
[{ id, udbyderNavn, sted, tid, navn }]
```

Navne, priser, vurderinger og adresser i appen er opdigtede.
