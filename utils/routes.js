const routes = (apiRoute) => {
  const allApiRoutes = {
    dealership: process.env.DEALERSHIP_API,
  };

  return allApiRoutes[apiRoute];
};

export default routes;
