import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  id: string;
  name: string;
  email: string;
  state: StateClient;
}
