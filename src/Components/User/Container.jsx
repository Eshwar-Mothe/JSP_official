import React, { useState, useMemo, useCallback } from 'react';
import DistrictSelector from './DistrictSelector';
import MandalSelector from './MandalSelector';
import VillageSelector from './VillageSelector';
import AddUserForm from './AddUser';

const Container = () => {
  const [district, setDistrict] = useState(null);
  const [mandal, setMandal] = useState(null);
  const [village, setVillage] = useState(null);
  const [zip, setZip] = useState(null);

  const handleDistrictSelect = useCallback((selectedDistrict) => {
    setDistrict(selectedDistrict);
    setMandal(null);
    setVillage(null);
  }, []);

  const handleMandalSelect = useCallback((selectedMandal) => {
    setMandal(selectedMandal);
    setVillage(null);
  }, []);

  const handleVillageSelect = useCallback(({ selectedVillage, zipCode }) => {
    setVillage(selectedVillage);
    setZip(zipCode);
  }, []);

  const showDistrict = useMemo(() => !district, [district]);
  const showMandal = useMemo(() => district && !mandal, [district, mandal]);
  const showVillage = useMemo(() => district && mandal && !village, [district, mandal, village]);
  const showForm = useMemo(() => district && mandal && village, [district, mandal, village]);

  return (
    <div style={{ padding: 24 }}>
      <div className="heading" style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', }}>
        Telangana State JanaSena Party Membership Program
      </div>

      {showDistrict && <DistrictSelector onSelect={handleDistrictSelect} />}

      {showMandal && <MandalSelector district={district} onSelect={handleMandalSelect} />}

      {showVillage && (
        <VillageSelector district={district} mandal={mandal} onSelect={handleVillageSelect} />
      )}

      {showForm && (
        <AddUserForm
          location={{
            state: {
              district,
              mandal,
              village,
              zip
            }
          }}
        />
      )}
    </div>
  );
};

export default Container;
