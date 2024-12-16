"use client";

import Form from "./Form";
import CustomInput from "@/components/modules/CustomInput";

const AccountInfo = ({ userInfo, handleChange, handleSave, setEditSection, editSection }) => {
    return (
        <Form
            title="اطلاعات حساب کاربری"
            editMode={editSection === "account"}
            onEdit={() => setEditSection("account")}
            onSave={handleSave}
            onCancel={() => setEditSection(null)}
        >
            {editSection === "account" ? (
                <>
                    <p className="flex justify-between  md:col-span-2 lg:col-span-3">
                        <span>شماره موبایل </span>{userInfo.mobile}
                    </p>
                    <CustomInput
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        placeholder="آدرس ایمیل"
                        className="mt-4"
                    />
                </>
            ) : (
                <>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">شماره موبایل</span> {userInfo.mobile}
                    </p>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">ایمیل</span> {userInfo.email || "—"}
                    </p>
                </>
            )}
        </Form>
    );
};

export default AccountInfo;
