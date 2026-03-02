import Delete from './Delete';

export default function List({expense, deleteExpense}) {
  return (
    <ul>
      {expense.map((item) => (
        // 📋 การ์ดย่อยแต่ละรายการ: 
        // flex justify-between (ดันข้อความไปซ้าย ปุ่มไปขวา), items-center (ให้อยู่กึ่งกลางแนวตั้ง)
        // bg-gray-50 (พื้นหลังเทาอ่อน), rounded-lg (ขอบมน)
        <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 mb-2 rounded-lg" >
          <span>{item.title} : ราคา {item.price} บาท</span>

          {/* 🗑️ เรียกใช้ Component ปุ่มลบ พร้อมส่ง id ไปให้ */}
          <Delete  deleteExpense={deleteExpense} id={item.id} />
        </li>
      )
    )}
      
    </ul>
  );
}