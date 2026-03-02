function Delete({ deleteExpense, id }) {
  // 🗑️ ปุ่มลบ: สั่งทำงาน deleteExpense พร้อมแนบ id ทันทีที่กด (onClick)
  // ⚠️ จุดสังเกต (บั๊ก UI): สีปุ่มตั้งต้นเป็นสีแดง (bg-red-400) แต่พอ hover ดันกลายเป็นสีฟ้า (hover:bg-blue-600) ระวัง User ตกใจนะครับ! 
  // 💡 แนะนำให้แก้ hover เป็น hover:bg-red-600 
  return <button onClick={() => deleteExpense(id)} className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer">ลบ</button>;
}

export default Delete;