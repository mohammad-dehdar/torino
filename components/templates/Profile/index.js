"use client";
import { useGetProfile, useUpdateProfile } from "@/core/hook/hook";
import { useEffect, useState } from "react";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
import BankInfo from "./bankInfo";
import Loading from "@/app/loading";


export default function ProfilePage() {
    const { data, isLoading } = useGetProfile();
    const { mutate } = useUpdateProfile();

    const [editSection, setEditSection] = useState(null);
    const [userInfo, setUserInfo] = useState({
        mobile: "",
        email: "",
        nationalCode: "",
        name: "",
        birthDate: "",
        gender: "",
        cardNumber: "",
        shabaNumber: "",
        accountNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
        mutate(userInfo);
    };

    const handleSave = () => setEditSection(null);

    useEffect(() => {
        if (data) setUserInfo(data);
    }, [data]);

    if (isLoading) return <Loading/>
    return (
        <div className="mx-auto p-6 space-y-8">
            <AccountInfo {...{ userInfo, handleChange, handleSave, setEditSection, editSection }} />
            <PersonalInfo {...{ userInfo, handleChange, handleSave, setEditSection, editSection }} />
            <BankInfo {...{ userInfo, handleChange, handleSave, setEditSection, editSection }} />
        </div>
    );
}
