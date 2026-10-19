export interface BrewMethod {
  id: string;
  index: string;
  name: string;
  grind: string;
  ratio: string;
  brewTime: string;
  waterTemp: string;
  tip: string;
  icon: 'filter' | 'pourover' | 'frenchpress' | 'aeropress' | 'mokapot' | 'coldbrew';
}

export const BREW_METHODS: BrewMethod[] = [
  {
    id: 'south-indian-filter',
    index: '01',
    name: 'South Indian Filter',
    grind: 'Fine · Chicory-optional',
    ratio: '1:5 decoction',
    brewTime: '12 – 15 min',
    waterTemp: '94°C',
    tip: 'Tamp gently with the umbrella disc. Let gravity draw the first dense extract into the lower chamber.',
    icon: 'filter',
  },
  {
    id: 'pour-over-v60',
    index: '02',
    name: 'Pour Over (V60)',
    grind: 'Medium-Fine · Sea salt',
    ratio: '1:16 brew ratio',
    brewTime: '3 min 15 sec',
    waterTemp: '92°C',
    tip: 'Bloom with 50ml water for 45 seconds to release trapped gases before pouring in concentric circles.',
    icon: 'pourover',
  },
  {
    id: 'french-press',
    index: '03',
    name: 'French Press',
    grind: 'Coarse · Kosher salt',
    ratio: '1:15 brew ratio',
    brewTime: '4 min steep',
    waterTemp: '95°C',
    tip: 'Break the crust at minute 4 with a gentle stir, scoop the floating foam, then plunge with light thumb pressure.',
    icon: 'frenchpress',
  },
  {
    id: 'aeropress',
    index: '04',
    name: 'Aeropress',
    grind: 'Medium · Table salt',
    ratio: '1:13 inverted',
    brewTime: '2 min total',
    waterTemp: '88°C',
    tip: 'Inverted method yields a rounder body. Stop pressing the instant you hear the first hiss of air.',
    icon: 'aeropress',
  },
  {
    id: 'moka-pot',
    index: '05',
    name: 'Moka Pot',
    grind: 'Fine-Medium · Espresso-leaning',
    ratio: 'Fill basket flush',
    brewTime: '4 – 5 min low heat',
    waterTemp: 'Pre-heated water',
    tip: 'Fill bottom chamber with boiling water to prevent roasting dry grounds on the stovetop before extraction.',
    icon: 'mokapot',
  },
  {
    id: 'cold-brew',
    index: '06',
    name: 'Cold Brew Immersion',
    grind: 'Extra Coarse · Breadcrumbs',
    ratio: '1:8 concentrate',
    brewTime: '16 – 18 hrs chilled',
    waterTemp: 'Cold filtered water',
    tip: 'Submerge in a glass vessel and refrigerate. Strain through double unbleached paper for an amber clarity.',
    icon: 'coldbrew',
  },
];
