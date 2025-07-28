import instance from "@/services/axiosinstance";
import { showToast } from "@/services/toastmessage";
import { useQuery } from "@tanstack/react-query";

export function useGetCareerById(id, options = {}) {
    return useQuery({
        queryKey: [ "career", id ],
        queryFn: async () => {
            if (!id) return null;
            const response = await instance.get(`/careers/get/${id}`);
            return response.data;
        },
        enabled: !!id && options.enabled !== false,
        onError: (error) => {
            showToast(
                error.response?.data?.message || "Failed to fetch hero details",
                "error"
            );
        },
        ...options,
    });
}

export function useGetCareers(page = 1, limit = 10, searchQuery = "") {
    return useQuery({
        queryKey: [ "careers", page, limit, searchQuery ],
        queryFn: async () => {
            let url = `/careers/getAll?page=${page}&limit=${limit}`;
            if (searchQuery) {
                url += `&search=${encodeURIComponent(searchQuery)}`;
            }
            const response = await instance.get(url);
            return response.data;
        },
        onError: (error) => {
            showToast(
                error.response?.data?.message || "Failed to fetch careers",
                "error"
            );
        },
    });
}
export function useGetCategories(type = "", options = {}) {
    return useQuery({

        queryKey: [ "category", type ],
        queryFn: async () => {

            const url = type ? `/categories/getAll?type=${type}` : "/categories/getAll";
            const response = await instance.get(url);
            return response.data.data;
        },
        onError: (error) => {
            showToast(
                error.response?.data?.message || "Failed to fetch categories",
                "error"
            );
        },
        ...options,
    });
}
export function useGetBlogs(page = 1, limit = 10, categoryId = null, categoryType = null, options = {}) {
    return useQuery({
        queryKey: [ "blogs", page, limit, categoryId, categoryType ],
        queryFn: async () => {
            let url = `/blogs/getAll?page=${page}&limit=${limit}`;

            // Add category id and type if provided
            if (categoryId) {
                url += `&categoryId=${categoryId}`;
            }

            if (categoryType) {
                url += `&categoryType=${categoryType}`;
            }

            const response = await instance.get(url);
            return response.data;
        },
        onError: (error) => {
            showToast(
                error.response?.data?.message || "Failed to fetch blogs",
                "error"
            );
        },
        ...options,
    });
}
// Add this new hook for category-specific blogs
export const useGetBlogsByCategory = (categoryId, type, enabled = true) => {
    return useQuery({
        queryKey: [ 'blogs', 'category', categoryId, type ],
        queryFn: async () => {
            if (!categoryId || !type) return null;
            const response = await axios.get(`/categories/get/${categoryId}?type=${type}`);
            return response.data;
        },
        enabled: !!categoryId && !!type && enabled,
        refetchOnWindowFocus: false,
    });
};

