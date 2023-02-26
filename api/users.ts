import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { server } from '../subgraphs/users';

export default startServerAndCreateNextHandler(server, {
  context: (req, res) => {
    //@ts-ignore
    return { headers: req.headers };
  }
});
