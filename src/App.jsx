import { useState } from "react";
import viteLogo from "/vite.svg";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  // กำหนด State
  const [expense, setExpense] = useState([
    { id: 1, title: "ค่าข้าว", price: 50 },
    { id: 2, title: "ค่าเช่า server", price: 150 },
    { id: 3, title: "ค่า computer", price: 3000 },
  ]);

  // function เพิ่ม list รายการจาก Form.jsx หลักการคือ App.jsx --> Form.jsx ให้กรอกข้อมมูลแล้ว App.jsx ดึงกลับขึ้นไป
  function addFormExpense(newItem) {
    console.log("แม่ได้รับของแล้ว: ", newItem.title, "ราคา" + newItem.price);
    const track = {
      id: Math.floor(Math.random() * 1000),
      title: newItem.title,
      price: Number(newItem.price),
    };
    setExpense([...expense, track]); // เพิ่ม list รายการลงไปใน state เพื่อเอาไปใช้งานใน component อื่นต่อ
  }

  function deleteExpense(id) {
    const result = expense.filter((item) => item.id !== id); // filter() จะสร้าง arr ใหม่อยู่แล้ว ดังนั้นไม่ต้องใช้ { }
    setExpense(result);
  }

  // initialValue = ยอดตั้งต้น (เริ่มที่ 0 บาท)
  // acc (Accumulator) = ยอดรวมสะสมในแต่ละรอบลูป
  // crr (Current) = Object รายการค่าใช้จ่ายชิ้นปัจจุบันที่กำลังวนลูปอยู่
  // หลักการจาก object ที่กำหนดไว้ 0 + 50 + 150 + 3000
  const initailValue = 0;
  const total = expense.reduce((acc, crr) => acc + crr.price, initailValue);

  return (
    // 📱 Container หลักของการ์ด: 
    // mx-auto (จัดกึ่งกลาง), max-w-md (ล็อกความกว้าง), mt-10 (ดันลงจากขอบบน)
    // bg-white (พื้นหลังขาว), rounded-2xl (ขอบโค้งมนใหญ่), shadow-lg (ใส่เงาให้ลอย)
    <div className="mx-auto max-w-md mt-10 bg-white rounded-2xl shadow-lg p-6">

      {/* 🎯 ส่วนหัวแสดงยอดรวม: ตัวใหญ่ (text-2xl) หนา (font-bold) และอยู่ตรงกลาง (text-center) */}
      <h1 className="text-2xl font-bold text-center">ยอดรวมทั้งหมด: {total} บาท</h1>
      
      <Form addFormExpense={addFormExpense} />
      <List expense={expense} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
