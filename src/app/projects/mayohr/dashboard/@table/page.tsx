'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const data = [
  { id: 1, name: '王家麵食館', location: 'No. 253號, Section 4, Bade Rd, Songshan District, Taipei City, 105', type: '麵食' },
  { id: 2, name: '川醉湘麻辣燙', location: '105, Taipei City, Songshan District, Section 4, Bade Rd, 251號1樓', type: '麻辣燙' },
  { id: 3, name: '小龍飲食', location: '105050, Taipei City, Songshan District, Lane 13, Guangfu S Rd, 31號一樓', type: '麵食' },
  { id: 4, name: 'BURGER OUT', location: 'No. 2號, Alley 22, Lane 553, Section 4, Zhongxiao E Rd, Xinyi District, Taipei City, 11072', type: '漢堡' },
  { id: 5, name: '韓TopTen 韓式定食', location: 'No. 27號, Jixiang Rd, Songshan District, Taipei City, 10561', type: '韓餐' },
  { id: 6, name: 'Burger King', location: 'No. 82號, Section 5, Nanjing E Rd, Songshan District, Taipei City, 105', type: '速食' },
];

const FancyTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-8">
      <motion.table
        className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <motion.tr
            className="bg-green-500 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <th className="py-3 px-4 text-left whitespace-nowrap">Name</th>
            <th className="py-3 px-4 text-left whitespace-nowrap">Location</th>
          </motion.tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <motion.tr
              key={row.id}
              className="border-b border-gray-200 hover:bg-green-50 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredRow(row.id)}
              onHoverEnd={() => setHoveredRow(null)}
            >
              <td className="py-3 px-4 whitespace-nowrap overflow-hidden">{row.name}</td>
              <td className="py-3 px-4 whitespace-nowrap overflow-hidden">{row.location}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default FancyTable;
