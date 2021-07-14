const routes = (apiRoute) => {
  const allApiRoutes = {
    dealership: process.env.DEALERSHIPAPI,
  };

  return allApiRoutes[apiRoute];
};

export default routes;
