import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api from "../config/api";

const useSendOtp = () => {
    const mutationFn = (data) => api.post("auth/send-otp", data);

    return useMutation({ mutationFn });
};

const useCheckOtp = () => {
    const mutationFn = (data) => api.post("auth/check-otp", data);

    return useMutation({ mutationFn });
};

const useGetProfile = () => {
    const queryClient = useQueryClient();

    const queryKey = ["profile"]
    const queryFn = async () => {
        const { data } = await api.get("user/profile");
        return data;
    };

    const invalidateProfile = () => {
        queryClient.invalidateQueries(["profile"]);
    };

    const query = useQuery({
        queryKey,
        queryFn,
        onSuccess: (data) => {
            console.log("پروفایل کاربر دریافت شد:", data);
        },
        onError: (error) => {
            console.error("خطا در دریافت پروفایل کاربر:", error);
        },
    });

    return {
        ...query,
        invalidateProfile,
    };
};


const useUpdateProfile = () => {

    const mutationFn = (data) => api.put("http://localhost:6500/user/profile", data);
    return useMutation({ mutationFn })
    // return useMutation({mutationFn}, {
    //     onSuccess: () => {
    //         // داده‌های کاربر را به‌روزرسانی می‌کند
    //         queryClient.invalidateQueries(["profile"]);
    //     },
    //     onError: (error) => {
    //         console.error("خطا در به‌روزرسانی پروفایل:", error);
    //     },
    // });
};


export { useCheckOtp, useSendOtp, useGetProfile, useUpdateProfile }