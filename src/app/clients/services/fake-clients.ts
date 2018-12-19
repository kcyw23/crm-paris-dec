import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

export const fakeClients: Client[] = [
  new Client({
    id: 'kcyw23',
    email: 'kcyw23@gmail.com',
    name: 'yung',
    state: StateClient.ACTIF
  })
];
