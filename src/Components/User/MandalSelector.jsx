import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import data from './data.json';
import { Button, Typography } from 'antd';
import './UserPage.css'


const { Title } = Typography;

const MandalSelector = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { district } = state;

    const mandals = useMemo(() => {
        const districtData = data.districts.find(d => Object.keys(d)[0] === district);
        if (!districtData || !districtData[district]) return {};
        return districtData[district][0].Mandals || {};
    }, [district]);

    const mandalNames = useMemo(() => Object.keys(mandals), [mandals]);

    const handleSelect = (mandal) => {
        navigate('/villages', { state: { district, mandal } });
    };
console.log("mand",mandalNames)
console.log(district)
    return (
        <>
            <Title level={3}>Select Mandal in {district}</Title>
            <div style={{ padding: 24 }} className='buttons'>
                {mandalNames.map((mandal) => (
                    <Button key={mandal} onClick={() => handleSelect(mandal)} style={{ margin: 8 }} className='button py-4 px-5'>
                        {mandal}
                    </Button>
                ))}
            </div>
        </>
    );
};

export default MandalSelector;
