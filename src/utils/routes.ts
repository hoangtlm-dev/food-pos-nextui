export const isSubRoute = (currentPath: string, routes: string[]): boolean => {
  return routes.some((route) => currentPath.startsWith(route))
}
