import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/features/Home/HomePage';
import NotFoundPage from '@/features/NotFound/NotFoundPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
