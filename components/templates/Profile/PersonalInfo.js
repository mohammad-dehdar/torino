"use client";

import Form from "./Form";
import CustomInput from "@/components/modules/CustomInput";

const PersonalInfo = ({ userInfo, handleChange, handleSave, setEditSection, editSection }) => {
    return (
        <Form
            title="اطلاعات شخصی"
            editMode={editSection === "personal"}
            onEdit={() => setEditSection("personal")}
            onSave={handleSave}
            onCancel={() => setEditSection(null)}
        >
            {editSection === "personal" ? (
                <>
                    <CustomInput
                        type="text"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                    />
                    <CustomInput
                        type="text"
                        name="nationalCode"
                        value={userInfo.nationalCode}
                        onChange={handleChange}
                        className="my-4"
                    />
                    <CustomInput
                        type="text"
                        name="birthDate"
                        value={userInfo.birthDate}
                        onChange={handleChange}
                    />
                    <div className="space-y-1 md:mt-4 md:w-[255px]">
                        <select
                            name="gender"
                            value={userInfo.gender}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        >
                            <option value="">انتخاب کنید</option>
                            <option value="male">مرد</option>
                            <option value="female">زن</option>
                            <option value="other">سایر</option>
                        </select>
                    </div>
                </>
            ) : (
                <>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">نام و نام خانوادگی</span> {userInfo.name}
                    </p>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">کدملی</span> {userInfo.nationalCode}
                    </p>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">جنسیت</span> {userInfo.gender}
                    </p>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">تاریخ تولد</span> {userInfo.birthDate}
                    </p>
                </>
            )}
        </Form>
    );
};

export default PersonalInfo;
