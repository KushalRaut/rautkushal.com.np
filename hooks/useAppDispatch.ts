import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/index';

// Use throughout your app instead of plain `useDispatch`
const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
