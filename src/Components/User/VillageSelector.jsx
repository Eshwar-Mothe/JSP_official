import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import data from './data.json';
import { Button, Typography } from 'antd';
import './UserPage.css'


const { Title } = Typography;

const VillageSelector = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { district, mandal } = state;

    const villageInfo = useMemo(() => {
        const districtData = data.districts.find(d => Object.keys(d)[0] === district);
        const mandalData = districtData[district][0].Mandals[mandal][0];
        return { villages: mandalData.villages, zip: mandalData.zip };
    }, [district, mandal]);

    const handleSelect = (village) => {
        navigate('/signup', {
            state: {
                district,
                mandal,
                village,
                zip: villageInfo.zip,
            },
        });
    };

    return (
        <>
            <Title level={3}>Select Village in {mandal}</Title>
            <div style={{ padding: 24 }} className='buttons'>
                {villageInfo.villages.map((village) => (
                    <Button key={village} onClick={() => handleSelect(village)} style={{ margin: 8 }} className='button py-4 px-5'>
                        {village}
                    </Button>
                ))}
            </div>
        </>
    );
};

export default VillageSelector;
