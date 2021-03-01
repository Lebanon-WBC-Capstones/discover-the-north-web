import 'antd/dist/antd.css';
import Map from './Components/Map/Map';
function App() {
  const CITIES = [
    {
      id: 0,
      name: 'Tripoli',
      description:
        'Tripoli is the largest city in northern Lebanon and the second-largest city in the country',
      lat: 34.4333,
      lng: 35.8333,
      address_coordinates: [34.4333, 35.8333],
    },
  ];
  return (
    <div className="App">
      <Map
        long={36.01043}
        lat={34.24815}
        zoomNb={12}
        infoType={0}
        width="50"
        height="50ch"
        data={CITIES}
      />
    </div>
  );
}

export default App;
