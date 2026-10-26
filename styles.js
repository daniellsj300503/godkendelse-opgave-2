import { StyleSheet } from 'react-native';

// Fælles farver i appen.
export const farver = {
  baggrund: '#FAF8F5',
  kort: '#FFFFFF',
  tekst: '#1A1918',
  daempet: '#7A756D',
  streg: '#E8E4DE',
  accent: '#2F5D50',
  accentLys: '#EAF1EE',
  inaktiv: '#E4E0D9',
  stjerne: '#C9A227',
};

const styles = StyleSheet.create({
  skaerm: {
    flex: 1,
    backgroundColor: farver.baggrund,
  },
  indhold: {
    padding: 20,
  },
  overskrift: {
    fontSize: 26,
    fontWeight: 'bold',
    color: farver.tekst,
    marginBottom: 8,
  },
  underoverskrift: {
    fontSize: 17,
    fontWeight: '600',
    color: farver.tekst,
    marginTop: 24,
    marginBottom: 10,
  },
  broedtekst: {
    fontSize: 15,
    lineHeight: 22,
    color: farver.daempet,
    marginBottom: 24,
  },
  etiket: {
    fontSize: 14,
    fontWeight: '600',
    color: farver.tekst,
    marginBottom: 8,
  },

  knap: {
    backgroundColor: farver.tekst,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 12,
  },
  knapTekst: {
    color: farver.baggrund,
    fontSize: 16,
    fontWeight: '600',
  },
  knapSekundaer: {
    backgroundColor: farver.kort,
    borderWidth: 1,
    borderColor: farver.streg,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 12,
  },
  knapSekundaerTekst: {
    color: farver.tekst,
    fontSize: 16,
    fontWeight: '600',
  },
  knapInaktiv: {
    backgroundColor: farver.inaktiv,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 12,
  },
  knapInaktivTekst: {
    color: farver.daempet,
    fontSize: 16,
    fontWeight: '600',
  },

  kort: {
    backgroundColor: farver.kort,
    borderWidth: 1,
    borderColor: farver.streg,
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  kortVenstre: {
    flex: 1,
  },
  kortTitel: {
    fontSize: 16,
    fontWeight: '600',
    color: farver.tekst,
  },
  kortUnder: {
    fontSize: 14,
    color: farver.daempet,
    marginTop: 3,
  },
  kortPris: {
    fontSize: 14,
    fontWeight: '600',
    color: farver.tekst,
    marginTop: 6,
  },
  vurderingBoks: {
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  vurdering: {
    fontSize: 18,
    fontWeight: 'bold',
    color: farver.tekst,
  },
  stjerne: {
    color: farver.stjerne,
  },
  antalAnmeldelser: {
    fontSize: 12,
    color: farver.daempet,
    marginTop: 2,
  },

  profilBoks: {
    backgroundColor: farver.kort,
    borderWidth: 1,
    borderColor: farver.streg,
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
  },
  profilNavn: {
    fontSize: 22,
    fontWeight: 'bold',
    color: farver.tekst,
  },
  profilSted: {
    fontSize: 15,
    color: farver.daempet,
    marginTop: 4,
  },
  profilRaekke: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: farver.streg,
  },
  profilNoegle: {
    fontSize: 15,
    color: farver.daempet,
  },
  profilVaerdi: {
    fontSize: 15,
    fontWeight: '600',
    color: farver.tekst,
  },
  punkt: {
    fontSize: 15,
    color: farver.tekst,
    paddingVertical: 6,
  },
  profilVurdering: {
    fontSize: 20,
    fontWeight: 'bold',
    color: farver.tekst,
    marginTop: 10,
  },

  estimatRaekke: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: farver.streg,
  },
  estimatRaekkeSidst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  smaatekst: {
    fontSize: 13,
    lineHeight: 19,
    color: farver.daempet,
    marginTop: -8,
    marginBottom: 24,
  },

  input: {
    backgroundColor: farver.kort,
    borderWidth: 1,
    borderColor: farver.streg,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 16,
    color: farver.tekst,
    marginBottom: 24,
  },
  tidRaekke: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  tid: {
    flex: 1,
    backgroundColor: farver.kort,
    borderWidth: 1,
    borderColor: farver.streg,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  tidValgt: {
    backgroundColor: farver.tekst,
    borderColor: farver.tekst,
  },
  tidTekst: {
    fontSize: 15,
    fontWeight: '600',
    color: farver.tekst,
  },
  tidTekstValgt: {
    color: farver.baggrund,
  },

  kvittering: {
    backgroundColor: farver.accentLys,
    borderRadius: 14,
    padding: 20,
    marginBottom: 24,
  },
  kvitteringTitel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: farver.accent,
    marginBottom: 8,
  },
  kvitteringTekst: {
    fontSize: 15,
    lineHeight: 22,
    color: farver.tekst,
  },
  hjaelpetekst: {
    fontSize: 14,
    fontWeight: '600',
    color: farver.accent,
    textAlign: 'center',
    marginTop: 4,
  },

  bookingKort: {
    backgroundColor: farver.accentLys,
    borderRadius: 14,
    padding: 15,
    marginBottom: 10,
  },
  bookingTitel: {
    fontSize: 16,
    fontWeight: '600',
    color: farver.accent,
  },
  bookingTekst: {
    fontSize: 14,
    color: farver.tekst,
    marginTop: 3,
  },

  kortSkaerm: {
    flex: 1,
  },
  landkort: {
    flex: 1,
  },
  naermesteBoks: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    backgroundColor: farver.kort,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: farver.streg,
  },
  naermesteEtiket: {
    fontSize: 13,
    color: farver.daempet,
  },
  naermesteNavn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: farver.tekst,
    marginTop: 2,
  },
  naermesteTekst: {
    fontSize: 14,
    color: farver.daempet,
    marginTop: 2,
    marginBottom: 12,
  },
  indlaeser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: farver.baggrund,
  },
});

export default styles;
