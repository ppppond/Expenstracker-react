import { useState } from 'react';
 
function Form({addFormExpense}) {
    // สร้าง state ไว้เก็บข้อความที่พิมพ์
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    function formTest(e) {
        e.preventDefault()
        console.log("บันทึกข้อมูลแล้ว")
        addFormExpense({title: text, price: amount})
        setText("")
        setAmount("")
    }
    
    return (
        // 🛠️ กล่องฟอร์ม: เรียงลูกๆ แนวตั้ง (flex-col) เว้นช่องว่างเท่าๆ กัน (gap-3) และดันขอบล่าง (mb-6)
        <form onSubmit={formTest} className="
            flex flex-col gap-3 mb-6
        ">
            {/* ⌨️ ช่องกรอกชื่อ: มีขอบสีม่วงตุ่น (arbitrary value) และมีวงแหวนสีฟ้าตอน Focus */}
            กรอกข้อมูล: <input type="text" placeholder="ชื่อค่าใช้จ่าย" value={text} onChange={(e) => setText(e.target.value)} className="border-1 border-[oklch(55.2%_0.016_285.938)] px-1 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400" ></input>

            {/* ⌨️ ช่องกรอกราคา */}
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="border-1 border-[oklch(55.2%_0.016_285.938)] px-1 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400" />
            
            {/* 🔘 ปุ่ม Submit: พื้นฟ้า ตัวอักษรขาว ขอบมน และเวลาเมาส์ชี้สีจะเข้มขึ้น */}
            <button className="bg-blue-500 text-white px-2 py-2 rounded-md cursor-pointer hover:bg-blue-600">submit</button>
        </form>
    )
}

export default Form;