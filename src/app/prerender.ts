// prerender.ts
export function getPrerenderParams(route: string) {
  if (route === 'tasks/:id/edit') {
    // Return all dynamic IDs you want to prerender
    return [
      { id: '1' },
      { id: '2' },
      { id: '3' }
    ];
  }

  // For other routes with no parameters, return empty array
  return [];
}
