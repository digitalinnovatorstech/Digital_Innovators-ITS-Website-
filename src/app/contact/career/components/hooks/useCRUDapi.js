import instance from "@/services/axiosinstance";
import { showToast } from "@/services/toastmessage";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCreateJobApplication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await instance.post("/jobApplications/create", data);

      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["careers"]);
      showToast("Created successfully", "success");
    },
    onError: (error) => {
      showToast(error.response?.data?.message || "Failed ", "error");
    },
  });
}
