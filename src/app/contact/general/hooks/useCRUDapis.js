
import instance from "@/services/axiosinstance";
import { showToast } from "@/services/toastmessage";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCreateGeneralTalk() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            console.log("Sending data to API:", data);
            const response = await instance.post("/generalTalk/create", data);
            console.log("API response:", response.data);
            return response.data;
        },
        onSuccess: (data) => {
            console.log("Mutation succeeded, about to show toast");
            queryClient.invalidateQueries([ "careers" ]);
            showToast("Created successfully", "success");
            console.log("Toast should be visible now");
        },
        onError: (error) => {
            console.error("Mutation failed:", error);
            showToast(error.response?.data?.message || "Failed ", "error");
        },
    });
}
