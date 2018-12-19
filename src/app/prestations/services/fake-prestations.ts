import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakePrestations: Prestation[] = [
  new Prestation({
    id: 'agf',
    typePresta: 'Formation',
    client: 'Modis',
    nbJours: 10,
    comment: 'Angular'
  }),
  new Prestation({
    id: 'firebase',
    typePresta: 'Coaching',
    client: 'Cap',
    nbJours: 12,
    comment: 'Abder'
  })
];
