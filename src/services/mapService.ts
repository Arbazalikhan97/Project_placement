// src/services/mapService.ts
export const optimizeVisitRoute = async (locations: Array<{ lat: number; lng: number }>) => {
    const response = await axios.post('https://api.mapbox.com/optimized-trips/v1/mapbox/driving', {
      coordinates: locations.map(loc => [loc.lng, loc.lat]),
      roundtrip: false,
      source: 'first',
      destination: 'last'
    }, {
      params: { access_token: process.env.MAPBOX_TOKEN }
    });
    
    return response.data.trips[0].geometry; // Returns optimized route coordinates
  };