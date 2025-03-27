import { Outlet } from "react-router-dom";

export default function rootLayout() {
  return (
    <>
      <div>
        <Outlet /> {/* Sahifalar shu yerga yuklanadi */}
      </div>
    </>
  );
}


