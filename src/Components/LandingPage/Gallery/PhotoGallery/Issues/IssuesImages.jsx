import React, { useState } from 'react';
import { Card, Button, Modal, Typography, Row, Col } from 'antd';

const { Paragraph } = Typography;

// Replace these with your actual 10 image URLs
const imageUrls = [
  'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%AA%E0%B0%B9%E0%B0%B2%E0%B1%8D%E0%B0%97%E0%B0%BE%E0%B0%82%20%E0%B0%85%E0%B0%AE%E0%B0%B0%E0%B1%81%E0%B0%B2%E0%B0%95%E0%B1%81%20%E0%B0%A8%E0%B0%BF%E0%B0%B5%E0%B0%BE%E0%B0%B3%E0%B0%BF23',
  'https://janasenanewssletter1.blob.core.windows.net/images/%20%E0%B0%AC%E0%B1%87%E0%B0%A4%E0%B0%AA%E0%B1%82%E0%B0%A1%E0%B0%BF%20%E0%B0%97%E0%B1%8D%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%82%E0%B0%B2%E0%B1%8B%20%E0%B0%B0%E0%B0%9A%E0%B1%8D%E0%B0%9A%E0%B0%AC%E0%B0%82%E0%B0%A1%20%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%AF%E0%B0%95%E0%B1%8D%E0%B0%B0%E0%B0%AE%E0%B0%82%E0%B0%B2%E0%B1%8B%20%E0%B0%AE%E0%B0%82%E0%B0%A4%E0%B1%8D%E0%B0%B0%E0%B0%BF%20%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%20%E0%B0%A8%E0%B0%BE%E0%B0%A6%E0%B1%86%E0%B0%82%E0%B0%A1%E0%B1%8D%E0%B0%B2%20%E0%B0%AE%E0%B0%A8%E0%B1%8B%E0%B0%B9%E0%B0%B0%E0%B1%8D%200',
  'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%95%E0%B1%81%E0%B0%9F%E0%B1%8D%E0%B0%9F%E0%B1%81%20%E0%B0%B6%E0%B0%BF%E0%B0%95%E0%B1%8D%E0%B0%B7%E0%B0%A3%20%E0%B0%95%E0%B1%87%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B0%82%20%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%BE%E0%B0%B0%E0%B0%82%E0%B0%AD%E0%B0%82....%E0%B0%B5%E0%B1%8D%E0%B0%AF%E0%B0%B5%E0%B0%B8%E0%B0%BE%E0%B0%AF%20%E0%B0%AF%E0%B0%82%E0%B0%A4%E0%B1%8D%E0%B0%B0%20%E0%B0%AA%E0%B0%B0%E0%B0%BF%E0%B0%95%E0%B0%B0%E0%B0%BE%E0%B0%B2%20%E0%B0%AA%E0%B0%82%E0%B0%AA%E0%B0%BF%E0%B0%A3%E0%B1%806',
  'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%AA%E0%B0%BF%E0%B0%A0%E0%B0%BE%E0%B0%AA%E0%B1%81%E0%B0%B0%E0%B0%82%20%E0%B0%A8%E0%B0%BF%E0%B0%AF%E0%B1%8B%E0%B0%9C%E0%B0%95%E0%B0%B5%E0%B0%B0%E0%B1%8D%E0%B0%97%E0%B0%82%E0%B0%B2%E0%B1%8B%20%E0%B0%85%E0%B0%AD%E0%B0%BF%E0%B0%B5%E0%B1%83%E0%B0%A6%E0%B1%8D%E0%B0%A7%E0%B0%BF%20%E0%B0%AA%E0%B0%82%E0%B0%A1%E0%B1%81%E0%B0%97%2011',
  'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%8E%E0%B0%AE%E0%B1%8D%E0%B0%AE%E0%B1%86%E0%B0%B2%E0%B1%8D%E0%B0%B8%E0%B1%80%E0%B0%97%E0%B0%BE%20%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AE%E0%B0%BE%E0%B0%A3%20%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82%20%E0%B0%9A%E0%B1%87%E0%B0%B8%E0%B0%BF%E0%B0%A8%20%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%20%E0%B0%95%E0%B1%86.%20%E0%B0%A8%E0%B0%BE%E0%B0%97%E0%B0%AC%E0%B0%BE%E0%B0%AC%E0%B1%816',
  'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%86%E0%B0%B5%E0%B0%BF%E0%B0%B0%E0%B1%8D%E0%B0%AD%E0%B0%BE%E0%B0%B5%20%E0%B0%B8%E0%B0%AD%E0%B0%95%E0%B1%81%20%E0%B0%B5%E0%B0%BF%E0%B0%9A%E0%B1%8D%E0%B0%9A%E0%B1%87%E0%B0%B8%E0%B0%BF%E0%B0%A8%20%E0%B0%9C%E0%B0%A8%E0%B0%B8%E0%B1%87%E0%B0%A8%E0%B0%BE%E0%B0%A8%E0%B0%BF%E0%B0%95%E0%B0%BF%20%E0%B0%86%E0%B0%A4%E0%B1%8D%E0%B0%AE%E0%B1%80%E0%B0%AF%20%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%97%E0%B0%A4%E0%B0%823',
  'https://janasenanewssletter1.blob.core.windows.net/images/%20%E0%B0%AA%E0%B0%BE%E0%B0%AF%E0%B0%95%E0%B0%B0%E0%B0%BE%E0%B0%B5%E0%B1%81%E0%B0%AA%E0%B1%87%E0%B0%9F%E0%B0%B2%E0%B1%8B%20%E0%B0%9C%E0%B0%B0%E0%B0%BF%E0%B0%97%E0%B0%BF%E0%B0%A8%20%E0%B0%9C%E0%B0%A8%E0%B0%B8%E0%B1%87%E0%B0%A8%20%E0%B0%AA%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%9F%E0%B1%80%20%E0%B0%86%E0%B0%B5%E0%B0%BF%E0%B0%B0%E0%B1%8D%E0%B0%AD%E0%B0%BE%E0%B0%B5%20%E0%B0%B8%E0%B0%AD%20%E0%B0%B8%E0%B0%A8%E0%B1%8D%E0%B0%A8%E0%B0%BE%E0%B0%B9%E0%B0%95%20%E0%B0%B8%E0%B0%AE%E0%B0%BE%E0%B0%B5%E0%B1%87%E0%B0%B6%E0%B0%82%E0%B0%B2%E0%B1%8B%20%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%20%E0%B0%A8%E0%B0%BE%E0%B0%A6%E0%B1%86%E0%B0%82%E0%B0%A1%E0%B1%8D%E0%B0%B2%20%E0%B0%AE%E0%B0%A8%E0%B1%8B%E0%B0%B9%E0%B0%B0%E0%B1%8D%201',
  'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%9C%E0%B0%AF%E0%B0%95%E0%B1%87%E0%B0%A4%E0%B0%A8%E0%B0%82%20%E0%B0%B8%E0%B0%AD%E0%B0%B2%E0%B1%8B%20%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%B8%E0%B0%82%E0%B0%97%E0%B0%BF%E0%B0%82%E0%B0%9A%E0%B0%BF%E0%B0%A8%20%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AE%E0%B1%81%E0%B0%96%E0%B1%81%E0%B0%B2%E0%B1%81%207',
  'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%9C%E0%B0%A8%E0%B0%B8%E0%B1%87%E0%B0%A8%E0%B0%B2%E0%B1%8B%20%E0%B0%9A%E0%B1%87%E0%B0%B0%E0%B1%87%E0%B0%82%E0%B0%A6%E0%B1%81%E0%B0%95%E0%B1%81%20%E0%B0%AA%E0%B0%BF%E0%B0%A0%E0%B0%BE%E0%B0%AA%E0%B1%81%E0%B0%B0%E0%B0%82%20%E0%B0%AE%E0%B0%BE%E0%B0%9C%E0%B1%80%20%E0%B0%8E%E0%B0%AE%E0%B1%8D%E0%B0%AE%E0%B1%86%E0%B0%B2%E0%B1%8D%E0%B0%AF%E0%B1%87%20%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%20%E0%B0%AA%E0%B1%86%E0%B0%82%E0%B0%A1%E0%B1%86%E0%B0%82%20%E0%B0%A6%E0%B1%8A%E0%B0%B0%E0%B0%AC%E0%B0%BE%E0%B0%AC%E0%B1%81%E0%B0%95%E0%B1%81%20%E0%B0%97%E0%B1%8D%E0%B0%B0%E0%B1%80%E0%B0%A8%E0%B1%8D%20%E0%B0%B8%E0%B0%BF%E0%B0%97%E0%B1%8D%E0%B0%A8%E0%B0%B2%E0%B1%8D0',
  'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%B5%E0%B1%88%E0%B0%B8%E0%B1%80%E0%B0%AA%E0%B1%80%20%E0%B0%A8%E0%B1%81%E0%B0%82%E0%B0%9A%E0%B0%BF%20%E0%B0%9C%E0%B0%A8%E0%B0%B8%E0%B1%87%E0%B0%A8%E0%B0%B2%E0%B1%8B%E0%B0%95%E0%B0%BF%20%E0%B0%AD%E0%B0%BE%E0%B0%B0%E0%B1%80%E0%B0%97%E0%B0%BE%20%E0%B0%9A%E0%B1%87%E0%B0%B0%E0%B0%BF%E0%B0%95%E0%B0%B2%E0%B1%81%200'
];

// Generate card data using the image URLs
const dummyData = imageUrls.map((url, i) => ({
  id: i,
  title: `Card Title ${i + 1}`,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget purus vel elit convallis luctus. Sed euismod, urna eu tincidunt consectetur, nisi nisl lacinia justo, in ultrices magna urna nec neque.',
  image: url
}));

const IssuesImages = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <div style={{ padding: 24, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
        {dummyData.map((card) => (
          <Card
            key={card.id}
            hoverable
            cover={
              <img
                alt={card.title}
                src={card.image}
                style={{ height: 180, objectFit: 'cover' }}
              />
            }
            style={{ width: 300 }}
            actions={[
              <Button type="primary" style={{ background: 'red' }} onClick={() => showModal(card)}>
                Read More
              </Button>
            ]}
          >
            <Card.Meta title={card.title} />
            <Paragraph ellipsis={{ rows: 3 }}>{card.text}</Paragraph>
          </Card>
        ))}
      </div>

      <Modal
        open={isModalOpen}
        title={selectedCard?.title}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        {selectedCard && (
          <Row gutter={24}>
            <Col span={12}>
              <Typography>
                <Paragraph>{selectedCard.text}</Paragraph>
                <Paragraph>{selectedCard.text}</Paragraph>
              </Typography>
            </Col>
            <Col span={12}>
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </Col>
          </Row>
        )}
      </Modal>
    </>
  );
};

export default IssuesImages;
