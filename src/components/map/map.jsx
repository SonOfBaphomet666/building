import { YMaps, Map } from "@pbe/react-yandex-maps";

const Maps = () => {
  return (
    <>
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </YMaps>
    </>
  );
};

export default Maps;
