import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDepartment = async () => {
	const response = await axios.get(`${process.env.PUBLIC_URL}/DB/members.json`);
	return response.data.members;
};

export const useDepartmentQuery = (opt) => {
	return useQuery(['departmentData', opt], fetchDepartment, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		cacheTime: 1000 * 60 * 60 * 24,
		staleTime: 1000 * 60 * 60 * 24,
	});
};
