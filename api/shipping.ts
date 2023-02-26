import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { server } from '../subgraphs/users/src';

export default startServerAndCreateNextHandler(server);
