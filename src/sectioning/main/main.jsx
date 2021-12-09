import { Route, Routes } from 'react-router-dom';
import Checking from '../../routes/checking/checking';
import Landing from '../../routes/landing/landing';
import Savings from '../../routes/savings/savings';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="checking" element={<Checking />} />
        <Route path="savings" element={<Savings />} />
        <Route path="*" element={<p>Page not found.</p>} />
      </Routes>
    </main>
  );
}

export default Main;