import { Button } from "./Button/Button";

export const TabSection = ({ active, onChange }) => {
  return (
    <section>
      <Button
        isActive={active === "userGeo"}
        onClick={() => onChange("userGeo")}
      >
        userGeo
      </Button>
      <Button
        isActive={active === "userGeoWeek"}
        onClick={() => onChange("userGeoWeek")}
      >
        userGeoWeek
      </Button>
      <Button
        isActive={active === "userCity"}
        onClick={() => onChange("userCity")}
      >
        userCity
      </Button>
      <Button
        isActive={active === "userCityWeek"}
        onClick={() => onChange("userCityWeek")}
      >
        userCityWeek
      </Button>
    </section>
  );
};
