'use client'
import styles from './AnimatedQRCode.module.css';
import Image from 'next/image';

const images = ['/924514.png', '/1486433.png'];

const QRCodePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.floatingElements}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.floatingElement} style={{
            '--size': `${Math.random() * 30 + 10}px`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 5}s`
          } as React.CSSProperties}>
            <Image
              src={images[i % images.length]}
              alt={`Floating Element ${i % images.length}`}
              width={30}
              height={30}
            />
          </div>
        ))}
      </div>
      <div className={styles.qrcodeLeftWrapper}>
        <div className={styles.qrcode}>
          <Image src='/qrCode (1).png' alt="QR Code 1" width={200} height={200} />
        </div>
      </div>
      <div className={styles.qrcodeRightWrapper}>
        <div className={styles.qrcode}>
          <Image src='/B1F342A5-EE4A-4518-836B-D84E6D042218_1_201_a.jpeg' alt="QR Code 2" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;
