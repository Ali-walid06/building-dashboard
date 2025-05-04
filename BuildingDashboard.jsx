
import { useState } from "react";

const floors = [
  { floor: 6, units: 6 },
  { floor: 5, units: 3 },
  { floor: 4, units: 3 },
  { floor: 3, units: 3 },
  { floor: 2, units: 3 },
  { floor: 1, units: 3 },
];

export default function BuildingDashboard() {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleSelect = (floor, unit) => {
    const unitNumber = `F-${floor}${unit}`;
    setSelectedUnit({ unitNumber, floor });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r overflow-y-auto">
        {selectedUnit ? (
          <div>
            <h2 className="text-xl font-bold mb-2">الوحدة: {selectedUnit.unitNumber}</h2>
            <ul className="list-disc list-inside">
              <li>عقد الإيجار: <a href="#">عرض</a></li>
              <li>إيصالات الدفع: <a href="#">عرض</a></li>
              <li>تقارير الصيانة: <a href="#">عرض</a></li>
              <li>الحالة: مؤجرة</li>
            </ul>
          </div>
        ) : (
          <p className="text-gray-500">اختر شقة من المبنى لعرض التفاصيل.</p>
        )}
      </div>

      {/* Building layout */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">مخطط المبنى</h1>
        <div className="space-y-4">
          {floors.map(({ floor, units }) => (
            <div key={floor} className="flex gap-2">
              {[...Array(units)].map((_, idx) => {
                const unitLabel = `F-${floor}${idx + 1}`;
                return (
                  <button
                    key={unitLabel}
                    className="bg-blue-200 hover:bg-blue-400 p-4 rounded w-24 text-center font-bold"
                    onClick={() => handleSelect(floor, idx + 1)}
                  >
                    {unitLabel}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
