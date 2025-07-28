import instance from "../../../services/axiosinstance";
import { showToast } from "../../../services/toastmessage";
import { useQuery } from "@tanstack/react-query";

export function useGetBlogs(categoryId = null, type = null, page = 1, limit = 10, searchQuery = "") {
    return useQuery({
        queryKey: [ "blogs", categoryId, type, page, limit, searchQuery ],
        queryFn: async () => {
            // Always use the same base route
            let url = `/blogs/getAllBlogs?page=${page}&limit=${limit}`;

            // Add category ID and type if provided
            if (categoryId && type) {
                console.log(`Adding category filter: ${categoryId} with type ${type}`);
                url += `&categoryId=${categoryId}&type=${type}`;
            }

            // Add search query if provided
            if (searchQuery) {
                url += `&search=${encodeURIComponent(searchQuery)}`;
            }

            console.log("Request URL:", url);
            const response = await instance.get(url);
            return response.data;
        },
        onError: (error) => {
            showToast(
                error.response?.data?.message || "Failed to fetch blogs",
                "error"
            );
        },
    });
}


export function useGetTabsBlogs(page = 1, limit = 10, searchQuery = "") {
    return useQuery({
        queryKey: [ "careers", page, limit, searchQuery ],
        queryFn: async () => {
            let url = `/categories/get?page=${page}&limit=${limit}`;
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
        // Include the type in the query key for proper caching
        queryKey: [ "category", type ],
        queryFn: async () => {
            // Add the type as a query parameter if it exists
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

export function useGetBlogById(id, options = {}) {
    return useQuery({
        queryKey: [ "blogs", id ],
        queryFn: async () => {
            if (!id) return null;
            const response = await instance.get(`/blogs/getBlog/${id}`);
            return response.data;
        },
        enabled: !!id && options.enabled !== false,
        onError: (error) => {
            showToast(
                error.response?.data?.message || "Failed to fetch blog details",
                "error"
            );
        },
        ...options,
    });
}
