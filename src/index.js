import hapi from "@hapi/hapi";
import { routes } from "./route.js";
const init = async () => {
  const server = hapi.server({
    port: 8080,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
